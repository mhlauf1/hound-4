# Changelog — Hound Around Resort

All notable changes to this project are documented here.

---

## [0.1.0] — 2026-02-06

### Project Setup & Foundation

- Initialized from `sanity-template-nextjs-clean` (Next.js 16 + Sanity v5 + Tailwind v4)
- Added `SPEC.md` — full design spec for elevated editorial dog daycare site
- Added `CLAUDE.md` — project conventions and dev reference for Claude Code
- Added `starting-prompt.md` — implementation kickoff instructions
- Self-hosted Switzer Variable font (regular + italic, weights 100-900) in `public/fonts/`

### Tailwind v4 Theme (`globals.css`)

- Configured Tailwind v4 with `@import`, `@theme`, `@utility`, `@plugin` syntax
- Defined color palette: cream (#FFFCF5), blue (#84AFE7), dark (#363440), light (#F3F4F4), muted (#363440B3)
- Custom typography scale: hero, section, card, body-lg, body, label sizes
- Custom container utility (80rem max-width, responsive padding)
- `@font-face` declarations for Switzer Variable
- CSS-only marquee animation (35s linear infinite)
- Removed legacy `tailwind.config.ts` (replaced by Tailwind v4 CSS config)

### Sanity Schemas (Studio)

- **hero** — Full-bleed background image + headline + service quick links
- **heroSplit** — Two-column split (text + image) with star rating, blue accent block
- **marquee** — Array of scrolling text items
- **servicesList** — Headline + array of services (title, description, image, button)
- **featureCards** — Label, headline, stat callout, 2-column feature cards
- **teamHighlight** — Label, headline, button, full-width team photo
- **ctaBanner** — Full-width image banner with `*highlighted*` text parsing
- **infoBlock** — Two-column info section with address/phone, secondary body text
- Updated `page.ts` — pageBuilder field now accepts all 8 new section types with grid insert menu
- Updated `settings.tsx` — 5 setting groups (General, Navigation, Footer, Contact, SEO) with nav links, footer nav groups, legal links, parent company, social links
- Updated `schemaTypes/index.ts` — registered all new object schemas
- Updated `initialValues.ts` — placeholder content for Hound Around Resort

### Frontend Components

**Section components** (`app/components/sections/`):
- **Hero.tsx** — Full-viewport hero with background image, gradient overlay, headline, service quick links
- **HeroSplit.tsx** — Two-column layout with label, headline, PortableText, button, star rating, blue accent
- **Marquee.tsx** — Infinite CSS scroll, blue diamond separators, `prefers-reduced-motion` support
- **ServicesList.tsx** — Stacked service cards with signature blue overlay slide-up hover (translateY transition)
- **FeatureCards.tsx** — 2-column grid on light bg, optional stat display
- **TeamHighlight.tsx** — Header row with ghost button, full-width team photo
- **CtaBanner.tsx** — Full-width banner with dark overlay, inline `*highlight*` text in blue
- **InfoBlock.tsx** — Two-column info with PortableText bodies, clickable phone `tel:` link

**Utility components**:
- **Button.tsx** — Primary (blue) and ghost variants, pill shape, ArrowRight icon
- **NavBar.tsx** — Sticky header with scroll detection, desktop nav + mobile hamburger overlay, Escape to close
- **SectionLabel.tsx** — "+ Label" badge pattern, uppercase, tracked
- **icons.tsx** — ArrowRight, Plus, Star SVG icons with aria-hidden

**Updated existing components**:
- **BlockRenderer.tsx** — Dispatches all 10 block types, distinguishes full-bleed sections, data-sanity attributes
- **PageBuilder.tsx** — Wraps section rendering with optimistic update support
- **Footer.tsx** — Async server component, 4-column grid, contact info, bottom bar with copyright
- **Header.tsx** — Updated for new site branding
- **layout.tsx** — Root layout with metadata, draft mode, visual editing, Vercel Speed Insights

**Removed template boilerplate**:
- Removed `GetStartedCode.tsx`, `Onboarding.tsx`, `SideBySideIcons.tsx`
- Removed template placeholder images (`tile-*.png`)

### GROQ Queries (`sanity/lib/queries.ts`)

- Added reusable projections: button, link, postFields, pageBuilderProjections
- Added `homePageQuery` with full pageBuilder section resolution
- Added `navSettingsQuery` and `footerSettingsQuery` for layout data
- All page builder sections resolve nested links (page/post references dereferenced)
- Updated `demo.ts` with Hound Around Resort placeholder content

### Config

- Updated `next.config.ts` — configured `cdn.sanity.io` remote image pattern
- Updated `studio/sanity.config.ts` — studio branding
- Regenerated `sanity.types.ts` in both workspaces
- Updated `sanity.schema.json` with all new schemas
