# Interaction Design - Cognitive Capacities Website

## Core Interaction Components

### 1. Dark Mode Toggle
- **Location**: Top navigation bar (right side)
- **Functionality**: Toggle between light and dark themes
- **Visual Feedback**: Moon/Sun icon that animates on click
- **Persistence**: Saves user preference in localStorage

### 2. Skill Cards Interactive Grid
- **Layout**: 2x5 grid on desktop, responsive on mobile
- **Hover Effects**: Cards lift with shadow expansion and subtle scale transform
- **Click Interaction**: Cards expand to show detailed view with full description
- **Animation**: Smooth transitions using Anime.js

### 3. Skill Detail Modal/Expanded View
- **Trigger**: Click on any skill card
- **Content**: Shows complete skill description with key points
- **Navigation**: Previous/Next buttons to navigate between skills
- **Close**: Click outside or X button to return to grid

### 4. Skill Category Filter/Tabs
- **Categories**: All, Self-Management, Cognitive Processing, Decision Making
- **Functionality**: Filter cards by category
- **Visual Feedback**: Active tab highlighted, smooth transitions between states

### 5. Progress Indicator
- **Location**: Top of page or sidebar
- **Functionality**: Shows exploration progress as user views different skills
- **Visual**: Subtle progress bar or completion dots

## User Journey
1. User lands on homepage with hero section and skill grid
2. User can toggle dark mode for preferred viewing
3. User hovers over cards to see preview effects
4. User clicks on cards to explore detailed descriptions
5. User can navigate between skills without returning to grid
6. User can filter skills by category to focus on specific areas

## Accessibility Features
- High contrast colors for both light and dark modes
- Keyboard navigation support for all interactive elements
- Screen reader friendly descriptions
- Focus indicators for all interactive elements
- Reduced motion options for users with vestibular disorders