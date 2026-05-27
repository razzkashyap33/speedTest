<<<<<<< HEAD
# ⌨️ TypeMaster - Typing Speed Tester

[![GitHub stars](https://img.shields.io/github/stars/Aakash-gith/TypeMaster?style=for-the-badge)](https://github.com/Aakash-gith/TypeMaster/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Aakash-gith/TypeMaster?style=for-the-badge)](https://github.com/Aakash-gith/TypeMaster/issues)
[![License](https://img.shields.io/github/license/Aakash-gith/TypeMaster?style=for-the-badge)](https://github.com/Aakash-gith/TypeMaster/blob/main/LICENSE)

TypeMaster is a premium, minimalist, and highly responsive typing speed test application. Designed with a focus on aesthetics and user experience, it allows users to track their typing speed, accuracy, and progress in a beautiful, distraction-free environment.

![TypeMaster Preview](https://raw.githubusercontent.com/Aakash-gith/TypeMaster/main/preview.png) *(Note: Replace with actual preview image link if available)*

## ✨ Features

- **🎯 Real-time Analytics:** Track your **WPM** (Words Per Minute), **CPM** (Characters Per Minute), **Accuracy Percentage**, and **Mistake Count** as you type.
- **⏲️ Flexible Timing:** Choose from multiple testing durations: 15s, 30s, 60s (default), or 120s.
- **🌓 Dynamic Themes:** Seamlessly switch between a sleek **Dark Mode** and a clean **Light Mode**. Your preference is automatically saved!
- **🎹 Interactive UI:** Features a modern glassmorphism design, smooth micro-animations, and floating background elements.
- **⌨️ Pro Shortcuts:** Use `Tab + Enter` to instantly restart a test without reaching for your mouse.
- **📱 Fully Responsive:** Optimized for all screen sizes, from large desktops to mobile devices.
- **🔄 Random Paragraphs:** A diverse library of paragraphs ensures every test is a fresh challenge.

## 🚀 Getting Started

### Prerequisites

No installation is required! This is a pure frontend project.

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aakash-gith/TypeMaster.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd TypeMaster
   ```
3. **Open `index.html`:**
   Simply double-click the `index.html` file or use a local server like "Live Server" in VS Code.

## 🛠️ Built With

- **HTML5:** Semantic structure for better accessibility and SEO.
- **CSS3 (Vanilla):** Custom properties (variables), Flexbox, Grid, and keyframe animations for a premium feel.
- **JavaScript (ES6+):** Core logic for timer synchronization, WPM calculation, and theme management.
- **Google Fonts:** Using *Inter* for UI and *Roboto Mono* for the typing experience.
- **Font Awesome:** High-quality vector icons for a polished look.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Tab + Enter` | Quickly Restart Test |
| `Any Key` | Start Typing (Auto-focus) |

## 📁 Project Structure

```text
TypeMaster/
├── index.html      # Main entry point
├── style.css       # All styles and themes
├── js/
│   ├── script.js   # Core application logic
│   └── para.js     # Paragraph data library
└── assets/         # Images and icons
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Aakash-gith">Aakash</a>
</p>
=======
# TypeMaster

A modern typing speed tester with multiple time modes, live accuracy, and a clean light/dark theme toggle. Runs entirely in the browser—no build step required.

## Features
- Multiple timed modes (15s, 30s, 60s, 120s) with quick switching
- Live stats: WPM, CPM, errors, accuracy, and remaining time
- Restart via button or keyboard hint (Tab then Enter)
- Theme toggle with preference saved to localStorage
- Randomized practice text pulled from `js/para.js`

## Quick Start
1. Open `index.html` directly in your browser; or
2. Serve the folder locally, e.g.:

```sh
cd TypeMaster
python3 -m http.server 8000
# visit http://localhost:8000
```

## Usage
- Pick a time mode, click anywhere (or start typing) to begin.
- Watch stats update in real time; restart anytime with the button or Tab → Enter.
- Toggle the moon/sun icon to switch themes; preference persists between visits.

## Project Structure
- `index.html` — layout and controls
- `style.css` — themes and UI styling
- `js/para.js` — pool of sample paragraphs
- `js/script.js` — typing logic, timers, stats, and theming

## Customization
- Add or edit practice text by updating the `para` array in `js/para.js`.
- Change default timer options by editing the `.time-btn` values in `index.html`.
- Tweak colors or typography via CSS variables in `style.css` (`:root` and `[data-theme]`).
>>>>>>> c601a2a82f63112cda856a6eb7308113cead9b2f
