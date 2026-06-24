# Portfolio — Nirec

Personal portfolio built with Astro, Tailwind CSS v4, and TypeScript. Fully static, zero JS bloat.

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Sitemap:** @astrojs/sitemap

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── ExperienceCard.astro
│   └── ProjectCard.astro
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── mock-data.ts      # All portfolio data (projects, experience, skills, etc.)
│   ├── payload.ts         # Data fetching layer
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts           # Helper functions (Devicon icons, etc.)
├── pages/
│   ├── index.astro        # Main page
│   └── projects/
│       └── [slug].astro   # Individual project pages
└── styles/
    └── global.css         # Base styles, animations, theme
```

## Sections

- Hero with monogram and terminal-style intro
- Work experience
- Projects (filterable by language)
- Skills (bento grid layout)
- Education
- Certifications (color-coded by category)
- Languages with proficiency bars

## Customization

All content lives in `src/lib/mock-data.ts`. Edit the arrays directly — no CMS required.

## License

MIT
