# Project Outline - Cognitive Capacities Website

## File Structure
```
/mnt/okcomputer/output/
├── index.html          # Main landing page with skill cards
├── about.html          # About page explaining cognitive capacities
├── explore.html        # Interactive exploration page
├── main.js            # Main JavaScript functionality
├── resources/         # Media and assets folder
│   ├── hero-bg.jpg    # Hero background image
│   ├── skill-icons/   # Individual skill icons/images
│   └── patterns/      # Background patterns and textures
└── README.md          # Project documentation
```

## Page Breakdown

### index.html - Main Landing Page
**Sections:**
1. **Navigation Bar**
   - Logo/Site title
   - Navigation links (Home, About, Explore)
   - Dark mode toggle button

2. **Hero Section**
   - Animated background with neural network visualization
   - Main heading with typewriter effect
   - Subtitle explaining cognitive capacities
   - Call-to-action button leading to explore page

3. **Skills Grid Section**
   - 10 skill cards in responsive grid (2x5 desktop, 1x10 mobile)
   - Each card contains:
     - Skill icon/image
     - Skill name
     - Brief description
     - Click to expand functionality

4. **Interactive Features**
   - Card hover effects with lift and glow
   - Modal/expansion for detailed skill views
   - Smooth animations and transitions

### about.html - About Page
**Sections:**
1. **Navigation Bar** (same as index)
2. **Content Section**
   - Explanation of cognitive capacities
   - Importance and applications
   - Scientific background
   - Benefits of developing these skills

### explore.html - Interactive Exploration
**Sections:**
1. **Navigation Bar** (same as index)
2. **Interactive Tools**
   - Skill assessment quiz
   - Progress tracking
   - Personalized recommendations
   - Skill relationship visualization

## Technical Implementation

### Core Libraries Used
- **Anime.js**: Card animations and transitions
- **Splitting.js**: Text effects and reveals
- **p5.js**: Background neural network visualization
- **ECharts.js**: Skill relationship charts
- **Pixi.js**: Particle effects

### Key Features
1. **Dark Mode Toggle**: Persistent theme switching
2. **Responsive Design**: Mobile-first approach
3. **Accessibility**: WCAG AA compliance
4. **Performance**: Optimized loading and animations
5. **Interactive Cards**: Hover, click, and expand functionality

### Content Strategy
- **Skill Cards**: Each with unique imagery and detailed descriptions
- **Visual Hierarchy**: Clear information architecture
- **Progressive Enhancement**: Works without JavaScript
- **SEO Optimized**: Proper meta tags and semantic HTML

## Development Priorities
1. **Core Functionality**: Ensure all interactive elements work properly
2. **Visual Design**: Maintain consistent aesthetic across all pages
3. **Accessibility**: High contrast, keyboard navigation, screen reader support
4. **Performance**: Fast loading times and smooth animations
5. **Content Quality**: Clear, informative descriptions for each skill