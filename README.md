# Portfolio — Nicolas Recalde

Personal portfolio built with Astro 5, Tailwind CSS v4, and TypeScript. Features interactive visualizations, scroll animations, and a terminal-style hero section.

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Charts:** Chart.js (radar), D3.js (force graph, word cloud)
- **Fonts:** Self-hosted via @fontsource (Outfit, Plus Jakarta Sans)
- **Sitemap:** @astrojs/sitemap

## Getting Started

```bash
pnpm install
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── ui/                         # Reusable animated components
│   │   ├── ScrollReveal.astro      # IntersectionObserver scroll animations
│   │   ├── Typewriter.astro        # Typing effect for hero
│   │   ├── Counter.astro           # Animated number counters
│   │   └── SkillBar.astro          # Animated proficiency bars
│   ├── visualizations/             # Interactive charts (client-side)
│   │   ├── SkillRadar.astro        # Chart.js radar chart
│   │   ├── TechStackGraph.astro    # D3.js force-directed graph
│   │   ├── Timeline.astro          # Animated timeline cards
│   │   └── CertificationCloud.astro # D3.js tag cloud
│   ├── ExperienceCard.astro
│   └── ProjectCard.astro
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── mock-data.ts                # All portfolio data (editable)
│   ├── payload.ts                  # Data fetching layer
│   ├── types.ts                    # TypeScript interfaces
│   └── utils.ts                    # Helpers (Devicon icons, dates)
├── pages/
│   ├── index.astro                 # Main page
│   └── projects/[slug].astro       # Project detail pages
└── styles/
    └── global.css                  # Animations, a11y, theme
```

## Features

- **View Transitions** — Native Astro page transitions
- **Scroll Animations** — Staggered reveal on scroll via IntersectionObserver
- **Interactive Visualizations** — Skill radar, tech network graph, cert cloud
- **Terminal Hero** — Decorative terminal with typing cursor
- **Animated Counters** — Stats that count up on scroll
- **Dark/Light Theme** — System preference + manual toggle, persisted in localStorage
- **Accessibility** — Skip-to-content, ARIA labels, focus-visible rings, keyboard navigation, prefers-reduced-motion support
- **SEO** — Open Graph, Twitter cards, canonical URLs, sitemap
- **Print** — Clean print styles for CV export

## Customization

All content lives in `src/lib/mock-data.ts`. Edit the arrays directly — no CMS required.

## License

MIT
