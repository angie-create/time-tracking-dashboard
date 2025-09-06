# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting Started](#getting-started)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Desktop Design](./design/desktop-design.jpg)

*Desktop layout showing the time tracking dashboard with Jeremy's profile and activity cards*

### Links

- Solution URL: [GitHub Repository](https://github.com/angie-create/time-tracking-dashboard)
- Live Site URL: [Live Demo](https://angie-create.github.io/time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Fetch API for JSON data
- ARIA attributes for accessibility
- Claude Code for rapid CSS and HTML development

For this project, I leveraged Claude Code to accelerate the CSS and HTML development process, which allowed me to focus primarily on implementing the JavaScript functionality. This approach enabled me to:

- Quickly establish the responsive grid layouts and styling system
- Implement precise design specifications efficiently
- Concentrate my learning efforts on JavaScript data management and DOM manipulation
- Practice modern ES6+ features like async/await and class-based architecture

### What I learned

This project helped me solidify several key concepts:


**JavaScript Data Management**: Used the Fetch API to load and manipulate JSON data
```js
async loadData() {
  const response = await fetch('./data.json');
  this.data = await response.json();
}
```

**Interactive State Management**: Implemented dynamic content switching with proper active states
```js
changeTimeframe(newTimeframe) {
  this.currentTimeframe = newTimeframe;
  this.updateActiveButton();
  this.updateDisplay();
}
```

### Continued development

Areas I want to focus on in future projects:

- **Advanced CSS animations** for smoother transitions between states
- **TypeScript** for better type safety in JavaScript projects
- **Web Components** to create reusable UI components
- **CSS container queries** for more flexible responsive design

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Comprehensive guide that helped with the complex grid layouts
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Essential for understanding asynchronous data loading
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Helped ensure accessibility compliance
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Great for implementing design systems

## Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/angie-create/time-tracking-dashboard.git
   cd time-tracking-dashboard
   ```

2. **Start a local web server**
   
   The project requires a local server to load JSON data due to CORS restrictions.
   
   **Option 1: Python**
   ```bash
   python -m http.server 8000
   ```
   
   **Option 2: Node.js**
   ```bash
   npx http-server
   ```
   
   **Option 3: VS Code Live Server**
   - Install the Live Server extension
   - Right-click `index.html` and select "Open with Live Server"

3. **Open in browser**
   Navigate to `http://localhost:8000` (or the port shown in your terminal)

4. **Interact with the dashboard**
   - Click on Daily/Weekly/Monthly buttons to see different time periods
   - Hover over interactive elements to see hover states
   - Test the responsive design by resizing your browser

## Author

- Frontend Mentor - [@angie-create](https://www.frontendmentor.io/profile/angie-create)
- GitHub - [@angie-create](https://github.com/angie-create)