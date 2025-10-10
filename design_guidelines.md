# R-Hat Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern AR/tech product pages (Apple Vision Pro, Meta Quest) combined with industrial B2B clarity (Samsara, Tulip). Minimalist, futuristic aesthetic with practical, no-nonsense communication.

## Color Palette

### Primary Colors
- **Primary Orange**: `#FF7A00` (main brand color, CTAs, highlights)
- **Accent Orange**: `#FF9E3D` (hover states, gradients, secondary emphasis)
- **Beige Background**: `#F5E9DA` (main page background)
- **Ink**: `#1C1C1C` (text, very dark gray)
- **Subtle Lines**: `#E6D9C8` (borders, dividers, grid lines)

### Usage
- Orange reserved for CTAs, key UI elements, and brand moments
- Beige as primary background creates warmth and reduces eye strain
- Dark gray text maintains readability while being softer than pure black
- Minimal use of pure white; prefer beige backgrounds

## Typography

### Font Families
- **Primary**: Inter OR Space Grotesk (choose one, use consistently)
- Both are clean, modern sans-serifs that work well for tech/industrial

### Scale & Hierarchy
- **Headings**: Bold weights (600-700), generous letter-spacing
- **Body**: Regular (400), medium line-height (1.6-1.8)
- **Micro-copy**: Slightly reduced size, lighter weight (300-400)
- Maintain lots of white space between text blocks

## Layout System

### Spacing Primitives
Use Tailwind spacing units: **4, 8, 12, 16, 24, 32** (p-4, m-8, py-12, gap-16, etc.)
- Consistent vertical rhythm with section padding: py-16 to py-24
- Card/component internal padding: p-6 to p-8
- Element gaps: gap-4 to gap-8

### Container Strategy
- Max-width: 1280px (max-w-7xl)
- Content sections: px-6 md:px-12
- Centered containers with even horizontal padding

## Visual Style

### Aesthetic Direction
- **Minimal & Airy**: Generous white space, clean layouts, no clutter
- **Slightly Sci-Fi**: Subtle tech feeling through thin grid lines, soft glows, glass effects
- **Industrial Credibility**: Practical, grounded, B2B professional

### Visual Elements
- **Thin Grid Lines**: Subtle background patterns using CSS linear-gradients
- **Soft Shadows**: Gentle depth (shadow-sm, shadow-md)
- **Glass/Blur Effects**: Subtle backdrop-blur for layering (backdrop-blur-sm)
- **Hero Background**: Animated noise + gradient shimmer OR thin animated grid (CPU-light, no WebGL)

## Component Library

### Buttons
- **Primary Button**: Orange background (#FF7A00), white text, rounded corners
- **Ghost/Outline Button**: Transparent with orange border, orange text, blurred background when on images
- Hover: Shift to accent orange (#FF9E3D)
- No custom hover states needed when on images - Button handles its own

### Cards
- White/light backgrounds with subtle borders (#E6D9C8)
- Rounded corners (rounded-lg to rounded-xl)
- Hover: Subtle lift with shadow increase
- Internal padding: p-6 to p-8

### Navigation
- **Sticky header**: Backdrop blur, subtle shadow on scroll
- Logo (R-Hat wordmark from provided asset) on left
- Menu links center/right: Features, How it Works, Use Cases, FAQ, Contact
- Primary CTA button (Request a Demo) on far right

### Modals
- Centered overlay with backdrop blur
- Form containers: white background, rounded corners, shadow-xl
- Close button: top-right corner
- Form fields: Consistent styling with orange focus states

## Page Structure (10 Sections)

1. **Sticky Navigation**: Logo, menu links, CTA button
2. **Hero**: Headline + subheadline, dual CTAs (modal + waitlist), device mock image (right side on desktop, below on mobile), animated background
3. **Value Props**: 4 cards in grid (2x2 on desktop, stack on mobile)
4. **How It Works**: 3 steps with icons/diagram showing flow with arrows
5. **Use Cases**: 3 scenarios with descriptions
6. **Social Proof**: Single row of placeholder company logos
7. **Technical Callout**: Small section highlighting industrial features
8. **FAQ**: 6 accordion items (expandable)
9. **CTA Band**: Final call-to-action with demo button
10. **Footer**: Links, email, copyright

## Images

### Hero Section
- **Large hero image**: Device mock (AR hat + glasses) on right side of hero (desktop), below headline on mobile
- Use `<picture>` element for easy asset swapping
- Image placeholder with aspect ratio maintained
- Small caption below image

### Additional Images
- Use Cases section: Consider small icons or illustration placeholders for each use case
- Social proof: Placeholder grayscale company logos (3-5)
- No other major images needed; keep minimal

## Animations & Interactions

### Micro-Interactions
- **Gentle fade/slide**: Elements fade in as they enter viewport
- **Button hover**: Smooth color transition (200ms ease)
- **Card hover**: Subtle lift + shadow increase
- **Smooth scroll**: For in-page navigation links
- **Active link highlighting**: Orange underline/indicator

### Accessibility
- **prefers-reduced-motion**: Disable animations for users who prefer it
- All animations should be subtle and non-essential
- Focus states: Clear orange outline on interactive elements

## Copy Tone & Content

### Voice
- **Crisp, confident, practical**: No buzzword salad
- Short sentences, clear value propositions
- B2B professional but approachable
- Focus on concrete benefits for hands-on workers

### Sample Headlines
- Hero: "AI for hands-on engineers"
- Subhead: "Wearable AR guidance that highlights the right step, right where you're looking"
- CTA Band: "Bring AI to the bench, bay, and field"

## Technical Requirements

- Mobile-first responsive design
- WCAG AA accessibility
- SEO: Meta tags, Open Graph, Twitter cards, favicon, robots.txt, sitemap.xml
- Form validation with success states (fake POST + toast notification)
- Clean semantic HTML throughout
- No external UI kits - custom components only