# Landingo — AI Agent Context

This file is the working context for coding agents operating in this repository. Read it before changing the site.

## Project

Landingo is an Indonesian landing-page service for service-based UMKM businesses. The site sells custom landing pages and routes visitors to WhatsApp consultation. The visual direction is a simple editorial studio: confident typography, generous whitespace, thin borders, restrained motion, and real design previews instead of generic SaaS decoration.

## Stack and commands

- Astro 5 static site with Vue 3 islands.
- Vite + Tailwind CSS 4.
- `@iconify/vue` remains in existing design previews, but the Landingo shell uses locally bundled SVG icons.
- `src/app-config.js` registers Naive UI and the global Iconify component for legacy preview components.

```powershell
npm run dev
npm run build
npm run preview
```

`npm run build` is the required verification command. Existing Vite warnings about large client chunks and Astro remote helpers are non-blocking unless they become errors.

## Important structure

- `src/pages/index.astro` — homepage composition.
- `src/pages/gallery.astro` — design catalog route.
- `src/pages/preview/[designId].astro` — static preview routes for every design.
- `src/layouts/Layout.astro` — document metadata, fonts, analytics, and global stylesheet import.
- `src/assets/main.css` — shared Landingo visual system and responsive layout rules.
- `src/components/section/` — homepage, gallery, header, footer, pricing, and CTA sections.
- `src/components/previews/` — the 12 individual design implementations. Treat these as customer-facing examples; do not casually restyle them during shell/catalog work.
- `src/components/preview/DesignThumbnail.vue` — constrained live preview renderer used by the gallery.
- `src/components/ui/LocalIcon.astro` and `LocalIcon.vue` — local SVG icon primitives for the Landingo shell. Prefer these over new Iconify usage in shell components.
- `src/data/designs.js` — source of truth for design IDs, names, categories, descriptions, feature lists, and preview component mappings.
- `src/lib/whatsapp.js` — shared WhatsApp phone number and URL builder. Use it for new consultation actions.

## Brand and UI rules

Keep these tokens unless the user explicitly requests a brand change:

- Primary indigo: `#5356FF`
- Secondary blue: `#378CE7`
- Cyan accent: `#67C6E3`
- Ink: `#17172A`
- Muted text: `#5F6277`
- Canvas: `#FCFCFF`
- Soft surface: `#F3F5FF`
- Border: `#DFE3F1`

Typography is Space Grotesk for display headings and Manrope for body/UI text. Use the existing CSS classes and tokens before adding one-off styles.

Avoid:

- AI-slop visuals: blurred blobs, excessive gradients, glassmorphism, glowing cards, fake scarcity, and decorative cursor-following effects.
- Emoji or remote icon dependencies for shell UI.
- Layout-shifting hover transforms.
- Fixed-width children that can create horizontal page overflow.
- Invented testimonials, client logos, metrics, or claims.

Required UI behavior:

- Maintain visible keyboard focus states and descriptive accessible names.
- Respect `prefers-reduced-motion`.
- Keep touch targets at least 44px where practical.
- Use `minmax(0, 1fr)`, `min-width: 0`, and `overflow: hidden` around live design canvases.
- Test at 375px, 768px, 1024px, and 1440px.

## Current user journeys

Homepage:

1. Hero with `seo.webp`, direct value proposition, and WhatsApp CTA.
2. Three-step process.
3. Featured design previews.
4. Condensed benefits.
5. Three pricing packages.
6. Closing WhatsApp CTA and footer.

Gallery:

- Filters are synchronized to `?category=...`.
- Primary card action is `Lihat preview`; WhatsApp is secondary.
- Gallery uses live Vue previews, lazy-loaded and clipped by a deterministic frame.

Preview:

- A minimal viewer shell surrounds the existing design component.
- The top bar provides gallery navigation, design identity, and consultation.
- Metadata and a final CTA follow the preview.
- Mobile has a sticky consultation CTA.

## Content and integrations

- Primary conversion channel: WhatsApp number `6285183077289`.
- Use `whatsappHref(message)` from `src/lib/whatsapp.js`; do not duplicate phone numbers or URL encoding logic.
- Preserve existing package pricing and renewal values unless explicitly instructed otherwise.
- Preserve existing design routes and IDs. New designs must be added to `src/data/designs.js` with a matching preview component.
- Keep Indonesian customer-facing copy direct, assured, and free of unsupported claims.

## Change protocol for agents

1. Inspect the relevant route/component and `src/data/designs.js` before editing.
2. Keep homepage shell, gallery shell, and individual preview implementations conceptually separate.
3. Reuse existing visual tokens and local icon primitives.
4. Check responsive overflow whenever touching preview or thumbnail sizing.
5. Run `npm run build` after UI changes.
6. Report any remaining non-blocking build warnings separately from actual failures.
