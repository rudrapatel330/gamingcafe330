# 🎮 Ace Playz Gaming Store & Cafe

A highly-interactive, premium web storefront for a gaming cafe and game launcher platform. Designed with a sleek, dark-themed UI featuring fluid GSAP animations, glassmorphism aesthetics, and a robust mobile-first approach that feels like a native app.

## 🌟 Project Overview

Ace Playz is designed to immediately grab the user's attention. Whether they are looking to buy the latest AAA titles, book a VIP gaming station, or just browse the current popular games, this interface provides an immersive, buttery-smooth experience. 

It heavily utilizes **GSAP (GreenSock)** for complex scroll reveals, 3D card tilts, staggered grid loading, and dynamic intersection observers to ensure top-tier performance without layout jumping.

---

## ✨ Key Features

### 🎨 Premium Design System
- **Dark Theme / Neon Accents:** High-contrast design using deep blacks, muted grays, and vibrant neon green highlights (`#00E573`).
- **Glassmorphism UI:** Blurry, semi-transparent navigation bars and cards that float over background images.
- **Custom Cursor:** An interactive custom cursor and magnetic ring that expands when hovering over clickable elements.

### ⚡ Advanced Animations (GSAP)
- **Staggered Scroll Reveals:** Elements gracefully slide up and fade into view as you scroll down the page.
- **3D Card Tilt Effects:** Mouse-tracking 3D tilt effects on product and bento cards.
- **Magnetic Buttons:** Buttons subtly pull towards your mouse cursor before clicking.
- **Dynamic Slideshows:** Auto-advancing game carousels that intelligently pause when scrolled out of view to save CPU resources and prevent layout shifting.

### 📱 Mobile-Optimized Micro-Interactions
- **Swipe Gestures:** Native touch-swipe support for hero slideshows.
- **Material Ripples:** Satisfying ripple-effect animations specifically designed for touch screens when tapping buttons.
- **Floating Hero Assets:** Subtle floating animations on mobile to ensure the page always feels alive.

---

## 📂 Pages & Structure

1. **`index.html` (Home):** The main landing page featuring a stunning video/image hero, stats counters, a dynamic bento-grid feature showcase, and upcoming news.
2. **`games.html` (Store/Catalog):** A comprehensive game store featuring an auto-advancing hero slideshow, a categorized tab system (Action, RPG, etc.), and a fully responsive grid of game cards.
3. **`booking.html` (Cafe Booking):** A sleek booking page to reserve Standard, Pro, or VIP gaming stations at the physical cafe location.
4. **`contact.html` (Support):** A modern contact page with sliding info cards and an elegant glassmorphic messaging form.

### Directory Layout

```text
├── assets/          # High-resolution game covers, logos, and UI graphics
├── css/             # Modular CSS styling
│   ├── global.css   # Variables, typography, custom cursor, and base styles
│   ├── home.css     # Specific styles for the landing page
│   ├── games.css    # Specific styles for the store catalog
│   ├── booking.css  # Specific styles for the reservation system
│   └── contact.css  # Specific styles for the contact page
├── js/              # Custom vanilla JavaScript logic
│   ├── global.js    # Navbar scroll effects, custom cursor, mobile menu
│   ├── animations.js# Core GSAP scroll triggers and interactive engine
│   ├── home.js      # Landing page specific logic
│   └── games.js     # Slideshow logic, Intersection Observers, and tab filtering
└── ...HTML files
```

---

## 🚀 Setup & Installation

This project is built purely with standard web technologies (HTML/CSS/JS) and does not require a complex build step (like Webpack or Vite) to run.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rudrapatel330/gamingcafe330.git
   ```
2. **Open the directory:**
   ```bash
   cd gamingcafe330
   ```
3. **Run a Local Server:**
   To ensure all JavaScript and GSAP plugins load correctly without CORS issues, run a local live server.
   - *If using VS Code:* Install the "Live Server" extension and click "Go Live".
   - *If using Node.js:* Run `npx serve` or `npx http-server`.
   - *If using Python:* Run `python -m http.server 5500`.

---

## 🛠️ Customization Guide

### Changing Colors
All main theme colors are controlled via CSS Variables located at the top of `css/global.css`:
```css
:root {
    --bg-main: #0C0D11;
    --bg-card: #15161C;
    --neon-green: #00E573; /* Change this to alter the primary accent color */
    --neon-cyan: #00F0FF;
}
```

### Adding New Games to the Slideshow
To edit the games shown in the main `games.html` slideshow, open `js/games.js` and locate the `gamesData` object at the top. Simply add a new object with the game's details and image path, then add its key to the `gameIds` array.

---

## 💻 Tech Stack
- **Structure:** HTML5
- **Styling:** Vanilla CSS3 (CSS Variables, Flexbox, Grid)
- **Logic:** Vanilla JavaScript (ES6+)
- **Animation:** [GSAP (GreenSock) 3.12.5](https://greensock.com/gsap/) + ScrollTrigger

---

## 📜 Authorship
Created and maintained by **Rudrapatel330** (Commits authored by `wherewindmeets330-max`).
