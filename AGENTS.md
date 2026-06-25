# Portfolio — AGENTS.md

## Commands
```sh
pnpm dev        # dev server
pnpm build      # static build → dist/
pnpm preview    # preview production build
```
No test/lint/typecheck scripts exist.

## Architecture
- **Astro 5** with `output: 'static'` — no SSR, no API routes.
- **Tailwind CSS v4** — uses `@import "tailwindcss"`, `@variant dark`, no `tailwind.config`. Dark mode via `.dark` class.
- **TypeScript** with `verbatimModuleSyntax: true` — must use `import type` for type-only imports.
- **Fonts:** self-hosted via `@fontsource` (Outfit, Plus Jakarta Sans).
- **Icons:** Devicon CDN (`devicon.min.css`) loaded in `BaseLayout.astro:40`.

## i18n
- Manual ES/EN via `src/i18n/`. No i18n library.
- Routes: `/:lang/` (index), `/:lang/projects/:slug` (project details).
- `t('ns.key', lang)` helper in `src/i18n/index.ts`.
- Translations in `src/i18n/ui.ts` — must add keys to both `es` and `en` objects.
- Locale detection: `getLangFromUrl(url)` parses first path segment; default is `'es'`.

## Data
- All portfolio content lives in `src/lib/mock-data.ts` — edit arrays directly, no CMS.
- Data layer: `getData(locale)` returns typed collections (projects, skills, certifications, etc.).
- Some fields are locale-dependent (degree, description) as `{ es: string, en: string }`.

## Astro 5 Quirks
- **`define:vars` breaks with ES module `<script>` imports.** Use `data-*` attributes + `querySelector` instead when a `<script>` uses `import`.
- Client scripts use `document.querySelectorAll('.some-class')` pattern (not IDs from `define:vars`).
- `<script>` (no `is:inline`) is bundled as ESM — imports work. `<script is:inline>` skips bundling.

## Project Page Routing
- `src/pages/[lang]/projects/[slug].astro` uses `getStaticPaths()` to generate all project pages.
- Each project must have a unique `slug` in `mock-data.ts`.
- Links should use `/{lang}/projects/{slug}` pattern.

## Visualizations
- Only `Timeline.astro` remains in `src/components/visualizations/`.
- Chart.js and d3 remain in `package.json` dependencies but are **no longer used** (garbage-collect if needed).

## Conventions
- **`class:list`** for conditional classes (Astro syntax, not classnames library).
- **`t()`** for all user-facing strings.
- **`aria-label`**, **`role`**, **`sr-only`**, **`focus-visible`** rings required for interactive elements.
- `no-print` class hides elements from print output.
- Scroll animations via `ScrollReveal.astro` component — `delay` prop for staggering.
