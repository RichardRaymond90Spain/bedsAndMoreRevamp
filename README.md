# Beds & More Website Revamp

A modern redesign of the Beds & More website using Next.js, Material-UI, and TypeScript.

## Mobile-First Design Standards

All components follow strict mobile viewport standards:

\\\css
/* Mobile viewport standards - MUST BE FOLLOWED BY ALL COMPONENTS */
@media screen and (max-width: 600px) {
  .viewport-fit {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    padding: 0;
  }
}
\\\

### Key Features
- Responsive design with mobile-first approach
- No horizontal scrolling on mobile
- Content fits within viewport height
- Optimized images and typography
- Clean, modern UI following brand guidelines

### Tech Stack
- Next.js 14
- Material-UI
- TypeScript
- CSS-in-JS with MUI System

### Getting Started
\\\ash
npm install
npm run dev
\\\

### Project Structure
\\\
src/
  components/
    layout/
      navbar.tsx
    FeaturedCategories.tsx
    CompanyIntro.tsx
    hero-section.tsx
  theme.ts
\\\

## First Draft Implementation
- [x] Mobile viewport standards
- [x] Responsive navigation
- [x] Featured categories section
- [x] Company introduction
- [x] Basic routing setup
