# 🚀 JavaScript30 - Custom Implementation

This repository contains my progress and code for the [JavaScript30](https://javascript30.com/) challenge created by Wes Bos. 

While the core concepts follow the original tutorial, I am actively expanding on the base codebase by:
* Adding **custom UI/UX designs**
* Implementing **extended JavaScript logic**
* Experimenting with advanced DOM manipulation techniques

---

## ✨ Custom Modifications & Enhancements

While working on these 30 projects, I didn't just follow the tutorial step by step—I extended them by adding my own features, improving the logic, and enhancing the overall user experience. I treated each project like a real-world application, focusing on understanding, improving, and building upon the code instead of just replicating it.

Here are the key modifications I made:

### 🥁 Day 1 – JavaScript Drum Kit
- Added **click-to-play support** so drums trigger on mouse click, not just keyboard.

### 🕐 Day 2 – JS and CSS Clock
- Added **clock numbers** (12, 3, 6, 9), a **center pin**, and **colored hands** (orange = hour, blue = minute, red = second).
- Added a **transition-removal fix** that stops the second hand from snapping backward at minute 0.

### 🎨 Day 3 – CSS Variables
- Added a **Grayscale slider** as a 4th control that applies a grayscale filter via CSS variable.
- Added a **Reset button** that restores all variables and inputs to their defaults.

### 🖼️ Day 5 – Flex Panel Gallery
- Added **accordion behavior** — only one panel can be open at a time; clicking a new one closes the previous.

### 🎨 Day 8 – HTML5 Canvas
- Added an **Eraser toggle** that switches between draw and erase mode.
- Added a **Clear Canvas button** that wipes the canvas instantly.
- Added a **mouseenter fix** that resumes drawing when re-entering the canvas with the mouse button still held.

### 🎬 Day 11 – Custom Video Player
- Added a **live time display** that updates in real time with zero-padded seconds.
- Added a **fullscreen button** and **double-click to fullscreen** on the video.
- Added **keyboard shortcuts** — Space (play/pause), Arrow keys (skip), F (fullscreen).
- Added **live volume and speed labels** next to the sliders.

### ⌨️ Day 12 – Key Sequence Detection
- 10 emojis placed across the screen at fixed positions.
- On typing `"helloworld"`, each emoji **flies to a new random position every 500ms** continuously.
- Space key is filtered out during input so it doesn't interfere with typing.

### 💾 Day 15 – LocalStorage
- Added **Check All** and **Uncheck All** buttons synced to localStorage.
- Added a **per-item Delete button** that removes items from the list and localStorage.
- Added **inline contenteditable text editing** with auto-save to localStorage.

---

## 📈 Challenge Progress (16/30 Completed)

- [x] Day 1: JavaScript Drum Kit
- [x] Day 2: JS and CSS Clock
- [x] Day 3: CSS Variables
- [x] Day 4: Array Cardio Day 1
- [x] Day 5: Flex Panel Gallery
- [x] Day 6: Type Ahead
- [x] Day 7: Array Cardio Day 2
- [x] Day 8: Fun with HTML5 Canvas
- [x] Day 9: Dev Tools Domination
- [x] Day 10: Hold Shift and Check Checkboxes
- [x] Day 11: Custom Video Player
- [x] Day 12: Key Sequence Detection
- [x] Day 13: Slide in on Scroll
- [x] Day 14: JavaScript References VS Copying
- [x] Day 15: LocalStorage
- [x] Day 16: Mouse Move Shadow
- [ ] Day 17: Sort Without Articles
- [ ] Day 18: Adding Up Times with Reduce
- [ ] Day 19: Webcam Booth
- [ ] Day 20: Speech Detection
- [ ] Day 21: Geolocation
- [ ] Day 22: Follow Along Link Highlighter
- [ ] Day 23: Speech Synthesis
- [ ] Day 24: Sticky Nav
- [ ] Day 25: Event Capture, Propagation, Bubbling and Once
- [ ] Day 26: Stripe Follow Along Nav
- [ ] Day 27: Click and Drag
- [ ] Day 28: Video Speed Controller
- [ ] Day 29: Countdown Timer
- [ ] Day 30: Whack A Mole

---

## 👏 Acknowledgements
Huge thanks to [Wes Bos](https://github.com/wesbos) for providing the starter files and the incredible course structure.