# Time Tracking Dashboard - Product Requirements Document (PRD)

## Project Overview

**Project Name:** Time Tracking Dashboard  
**Challenge:** Frontend Mentor Challenge  
**Type:** Responsive Web Application  
**Framework:** Vanilla HTML, CSS, JavaScript

## Requirements Analysis

### Functional Requirements
1. **Data Display**: Show time tracking data for 6 activities (Work, Play, Study, Exercise, Social, Self Care)
2. **Time Period Switching**: Toggle between Daily, Weekly, and Monthly views
3. **Dynamic Previous Period Text**: Update text based on selected timeframe
4. **Responsive Design**:Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.
5. **Interactive Elements**: Hover states for buttons and menu icons

### Technical Requirements
- Use provided `data.json` for activity data
- Implement without external frameworks
- Follow design specifications exactly
- Ensure accessibility compliance

### Design Specifications

#### Layout
- **Mobile**: 375px - Single column layout, stacked cards
- **Desktop**: 1440px - 4-column grid (1 profile + 3 activity columns)
- **Responsive Range**: 320px to large screens (WCAG compliant)

#### Typography System
- **Font Family**: Rubik (Google Fonts)
- **Font Weights**: Light (300), Regular (400), Medium (500)
- **Text Presets**:
  - Text Preset 1: 56px Rubik Light, 66px line height, 0px letter spacing
  - Text Preset 2: 40px Rubik Light, 47px line height, 0px letter spacing
  - Text Preset 3: 32px Rubik Light, 38px line height, 0px letter spacing
  - Text Preset 4: 24px Rubik Light, 28px line height, 0px letter spacing
  - Text Preset 5 (Medium): 18px Rubik Medium, 21px line height, 0px letter spacing
  - Text Preset 5 (Regular): 18px Rubik Regular, 21px line height, 0px letter spacing
  - Text Preset 6: 15px Rubik Regular, 18px line height, 0px letter spacing

#### Color System
**Primary Colors:**
- Purple 600: `hsl(246, 80%, 60%)` / `#5747EA`

**Activity Colors:**
- Orange 300 (Work): `hsl(15, 100%, 70%)` / `#FF8B64`
- Blue 300 (Play): `hsl(195, 74%, 62%)` / `#55C2E6`
- Pink 400 (Study): `hsl(348, 100%, 68%)` / `#FF5E7D`
- Green 400 (Exercise): `hsl(145, 58%, 55%)` / `#4BCF82`
- Purple 700 (Social): `hsl(264, 64%, 52%)` / `#7335D2`
- Yellow 300 (Self Care): `hsl(43, 84%, 65%)` / `#F1C75B`

**Neutral Colors:**
- White: `hsl(0, 100%, 100%)` / `#FFFFFF`
- Black: `hsl(0, 0%, 0%)` / `#000000`
- Navy 950: `hsl(226, 43%, 10%)` / `#0E1323`
- Navy 900: `hsl(235, 46%, 20%)` / `#1C204B`
- Navy 800: `hsl(235, 41%, 34%)` / `#33397A`
- Navy 200: `hsl(236, 100%, 87%)` / `#BBC0FF`
- Purple 500: `hsl(235, 45%, 61%)` / `#7078C9`
- Grey 200: `hsl(0, 0%, 85%)` / `#D8D8D8`

#### Spacing System
- spacing-0: 0px
- spacing-100: 8px
- spacing-200: 16px
- spacing-300: 24px
- spacing-400: 32px
- spacing-500: 40px

## Implementation Steps

### Phase 1: Project Setup & Structure
1. **Analyze existing files**
   - Review `index.html` structure
   - Check current CSS implementation
   - Examine `data.json` structure

2. **Set up development environment**
   - Create/update CSS file structure
   - Set up JavaScript file
   - Link Google Fonts (Rubik)

### Phase 2: HTML Structure
3. **Create semantic HTML structure**
   - Profile card container
   - Time period selector buttons
   - Activity cards grid container
   - Proper accessibility attributes

4. **Implement responsive grid layout**
   - CSS Grid for desktop layout
   - Single column for mobile
   - Flexible card containers

### Phase 3: CSS Styling
5. **Implement base styles**
   - CSS custom properties for colors
   - Typography system (Rubik font)
   - Reset/normalize styles

6. **Style profile card**
   - Purple gradient background
   - Avatar styling
   - User name typography
   - Time period button styles

7. **Style activity cards**
   - Colored header backgrounds with icons
   - Dark blue content areas
   - Typography for hours and previous periods
   - Three-dot menu icons

8. **Implement responsive design**
   - Mobile-first approach
   - Desktop media queries
   - Flexible layouts and spacing

### Phase 4: JavaScript Functionality
9. **Data management**
   - Fetch and parse `data.json`
   - Create data structure for easy access
   - Handle different timeframes

10. **DOM manipulation**
    - Update activity card content
    - Handle time period switching
    - Update previous period text dynamically

11. **Event handling**
    - Time period button click handlers
    - Active state management
    - Keyboard navigation support

### Phase 5: Interactive Features
12. **Implement hover states**
    - Time period button hover effects
    - Activity card hover effects
    - Three-dot menu hover states

13. **Dynamic content updates**
    - Previous period text logic:
      - Daily: "Yesterday - Xhrs"
      - Weekly: "Last Week - Xhrs"  
      - Monthly: "Last Month - Xhrs"

### Phase 6: Polish & Optimization
14. **Cross-browser testing**
    - Test on major browsers
    - Verify responsive behavior
    - Check accessibility features

15. **Performance optimization**
    - Optimize images and assets
    - Minify CSS/JS if needed
    - Test loading performance

16. **Final quality assurance**
    - Compare with design files
    - Test all interactive elements
    - Validate HTML and CSS

## Data Structure

### JSON Data Format
```json
{
  "title": "Activity Name",
  "timeframes": {
    "daily": { "current": 5, "previous": 7 },
    "weekly": { "current": 32, "previous": 36 },
    "monthly": { "current": 103, "previous": 128 }
  }
}
```

### Activity Colors Mapping
- **Work**: `hsl(15, 100%, 70%)` (orange)
- **Play**: `hsl(195, 74%, 62%)` (light blue)
- **Study**: `hsl(348, 100%, 68%)` (pink)
- **Exercise**: `hsl(145, 58%, 55%)` (green)
- **Social**: `hsl(264, 64%, 52%)` (purple)
- **Self Care**: `hsl(43, 84%, 65%)` (yellow)

## Color Palette

### Primary Colors
- Purple 600: `hsl(246, 80%, 60%)`

### Activity Colors
- Orange 300 (work): `hsl(15, 100%, 70%)`
- Blue 300 (play): `hsl(195, 74%, 62%)`
- Pink 400 (study): `hsl(348, 100%, 68%)`
- Green 400 (exercise): `hsl(145, 58%, 55%)`
- Purple 700 (social): `hsl(264, 64%, 52%)`
- Yellow 300 (self care): `hsl(43, 84%, 65%)`

### Neutral Colors
- Navy 950: `hsl(226, 43%, 10%)`
- Navy 900: `hsl(235, 46%, 20%)`
- Purple 500: `hsl(235, 45%, 61%)`
- Navy 200: `hsl(236, 100%, 87%)`

## Success Criteria

### Functional Success
- ✅ All 6 activities display correctly
- ✅ Time period switching works (Daily/Weekly/Monthly)
- ✅ Previous period text updates correctly
- ✅ Data loads from JSON file
- ✅ Responsive design works on all screen sizes

### Visual Success
- ✅ Matches design files exactly
- ✅ Proper hover states implemented
- ✅ Correct colors and typography
- ✅ Icons and images display properly

### Technical Success
- ✅ Clean, semantic HTML
- ✅ Efficient CSS with proper organization
- ✅ JavaScript follows best practices
- ✅ Accessibility requirements met
- ✅ Cross-browser compatibility

## Deliverables

1. **Updated HTML file** - Semantic structure
2. **CSS file** - Complete styling system
3. **JavaScript file** - Interactive functionality
4. **Testing documentation** - Browser compatibility
5. **README update** - Implementation details

## Timeline Estimate

- **Phase 1-2**: 2-3 hours (Setup & HTML)
- **Phase 3**: 4-5 hours (CSS Styling)
- **Phase 4**: 3-4 hours (JavaScript)
- **Phase 5**: 2-3 hours (Interactions)
- **Phase 6**: 2-3 hours (Polish)

**Total Estimated Time**: 13-18 hours