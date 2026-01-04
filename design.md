# Design Style Guide - Cognitive Capacities Website

## Design Philosophy

### Color Palette
- **Primary**: Deep charcoal (#1a1a1a) and crisp white (#ffffff) for maximum contrast
- **Accent**: Warm amber (#f59e0b) for highlights and interactive elements
- **Secondary**: Soft gray (#6b7280) for supporting text and subtle elements
- **Dark Mode**: True black (#000000) backgrounds with white text for accessibility

### Typography
- **Display Font**: "Playfair Display" - elegant serif for headings and hero text
- **Body Font**: "Inter" - clean, readable sans-serif for content and descriptions
- **Monospace**: "JetBrains Mono" - for technical elements and code-like content

### Visual Language
- **Minimalist Approach**: Clean, uncluttered layouts with generous white space
- **Geometric Elements**: Subtle use of circles, lines, and geometric patterns
- **Depth & Layering**: Soft shadows and elevation to create visual hierarchy
- **High Contrast**: Ensuring 4.5:1+ contrast ratio for accessibility compliance

## Visual Effects & Styling

### Used Libraries
- **Anime.js**: Smooth animations for card interactions and page transitions
- **Splitting.js**: Text effects for hero section and headings
- **p5.js**: Abstract background patterns and visual elements
- **ECharts.js**: Data visualization for skill relationships (if needed)
- **Pixi.js**: Particle effects and interactive backgrounds

### Animation & Effects
- **Card Hover**: Subtle lift with shadow expansion and slight scale transform
- **Text Reveal**: Staggered character animation for headings using Splitting.js
- **Background**: Subtle particle system or neural network visualization
- **Transitions**: Smooth page transitions and modal appearances
- **Interactive Feedback**: Immediate visual response to user actions

### Header Effect
- **Hero Background**: Abstract neural network visualization using p5.js
- **Gradient Overlay**: Subtle gradient to ensure text readability
- **Animated Particles**: Floating particles representing cognitive processes

### Layout Principles
- **Grid System**: 12-column responsive grid for consistent alignment
- **Card Design**: Clean cards with subtle borders and hover effects
- **Spacing**: Consistent 8px base unit for all spacing decisions
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

### Accessibility Features
- **High Contrast**: Both light and dark modes meet WCAG AA standards
- **Focus Indicators**: Clear focus rings for keyboard navigation
- **Screen Reader**: Semantic HTML and proper ARIA labels
- **Reduced Motion**: Respects user preferences for reduced motion