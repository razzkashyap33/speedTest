const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrap .input-field");
const mistakeTag = document.querySelector(".mistake span");
const timeTag = document.querySelector(".time span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");
const accuracyTag = document.querySelector(".accuracy span");
const repeatBtn = document.querySelector(".restart-btn");
const themeToggle = document.getElementById("themeToggle");
const timeBtns = document.querySelectorAll(".time-btn");
const typingInstructions = document.querySelector(".typing-instructions");

let charIndex = 0,
  mistakes = 0,
  isTyping = false,
  timer,
  maxTime = 60,
  timeLeft = maxTime;

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  // Update icon
  const icon = themeToggle.querySelector("i");
  icon.className = newTheme === "dark" ? "fas fa-moon" : "fas fa-sun";

  // Save preference
  localStorage.setItem("theme", newTheme);
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const icon = themeToggle.querySelector("i");
  icon.className = savedTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
}

// Time selection
function setTime(time) {
  maxTime = time;
  timeLeft = maxTime;
  timeTag.innerHTML = `<b>${timeLeft}</b>s`;

  // Update active button
  timeBtns.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-time="${time}"]`).classList.add("active");

  // Reset the test
  resetTest();
}

function randomParagraph() {
  let randIndex = Math.floor(Math.random() * para.length);
  typingText.innerHTML = "";
  para[randIndex].split("").forEach((char) => {
    let spanTag = `<span>${char}</span>`;
    typingText.innerHTML += spanTag;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  const chars = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];

  // Hide instructions when typing starts
  if (typingInstructions && !typingInstructions.classList.contains("hidden")) {
    typingInstructions.classList.add("hidden");
  }

  if (charIndex < chars.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (chars[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        chars[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (chars[charIndex].innerText === typedChar) {
        chars[charIndex].classList.add("correct");
      } else {
        mistakes++;
        chars[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }

    chars.forEach((span) => span.classList.remove("active"));
    chars[charIndex].classList.add("active");

    // Calculate stats
    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    let accuracy = charIndex > 0 ? Math.round(((charIndex - mistakes) / charIndex) * 100) : 100;
    accuracy = accuracy < 0 ? 0 : accuracy;

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
    accuracyTag.innerText = accuracy + "%";
  } else {
    clearInterval(timer);
    inpField.value = "";
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerHTML = `<b>${timeLeft}</b>s`;
  } else {
    clearInterval(timer);
  }
}

function resetTest() {
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = 0;
  mistakes = 0;
  isTyping = false;
  inpField.value = "";
  timeTag.innerHTML = `<b>${timeLeft}</b>s`;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
  accuracyTag.innerText = "100%";

  // Show instructions again
  if (typingInstructions) {
    typingInstructions.classList.remove("hidden");
  }

  // Load new paragraph
  randomParagraph();
  inpField.focus();
}

// Keyboard shortcut: Tab + Enter to restart
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    document.addEventListener("keydown", function enterHandler(event) {
      if (event.key === "Enter") {
        resetTest();
        document.removeEventListener("keydown", enterHandler);
      }
    }, { once: true });
  }
});

// Initialize
loadTheme();
randomParagraph();
inpField.addEventListener("input", initTyping);
repeatBtn.addEventListener("click", resetTest);
themeToggle.addEventListener("click", toggleTheme);
timeBtns.forEach(btn => {
  btn.addEventListener("click", () => setTime(parseInt(btn.dataset.time)));
});
