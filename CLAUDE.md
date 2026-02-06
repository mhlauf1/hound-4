# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hound Around Resort — a dog daycare, boarding, and grooming facility website (Cottage Grove, MN). Built from the `sanity-template-nextjs-clean` starter. Design direction is "elevated editorial" — warm, minimal, confident. See `SPEC.md` for the full design spec and `starting-prompt.md` for implementation kickoff instructions.

## Architecture

**Monorepo** using npm workspaces with two packages:

- `studio/` — Sanity Studio v5 (CMS, runs on port 3333)
- `frontend/` — Next.js 16 App Router (runs on port 3000)

Shared schema output at root: `sanity.schema.json`

### Frontend Structure (`frontend/`)
- `app/` — Next.js App Router pages and components
- `app/components/` — React components (BlockRenderer, PageBuilder, Cta, etc.)
- `app/[slug]/` — Dynamic pages built from Sanity page builder
- `app/posts/` — Blog post pages
- `sanity/lib/` — Sanity client, queries (GROQ), live content, utils, types

### Studio Structure (`studio/`)
- `src/schemaTypes/documents/` — Document schemas (page, post, person)
- `src/schemaTypes/objects/` — Object schemas (blockContent, callToAction, infoSection, button, link)
- `src/schemaTypes/singletons/` — Singleton schemas (settings)
- `src/schemaTypes/index.ts` — Schema registry (all types exported here)
- `src/structure/` — Custom Studio desk structure

### Key Patterns
- **Page Builder**: Pages use a `pageBuilder` array field with typed section blocks. `BlockRenderer` dispatches to the correct component. New sections must be added to the schema, BlockRenderer, and PageBuilder.
- **Visual Editing**: Presentation tool with draft mode (`/api/draft-mode/enable`). Components use `data-sanity` attributes for click-to-edit overlays. PageBuilder supports optimistic updates.
- **Type Generation**: `sanity.types.ts` is auto-generated in both workspaces — never edit manually. Regenerate with `npm run sanity:typegen` in either workspace.
- **Live Content**: Uses `next-sanity` Live Content API (`sanity/lib/live.ts` exports `sanityFetch` and `SanityLive`) for real-time updates without ISR.
- **Settings Singleton**: Site-wide settings doc with ID `siteSettings`, accessed via `settingsQuery`.

## Commands

```bash
# Development (both servers in parallel)
npm run dev

# Individual servers
npm run dev:next        # Frontend only (port 3000)
npm run dev:studio      # Studio only (port 3333)

# Build
npm run build --workspace=frontend
npm run build --workspace=studio

# Linting & formatting
npm run lint                        # ESLint (frontend)
npm run lint:fix --workspace=frontend  # ESLint auto-fix
npm run format                      # Prettier (all files)

# Type checking
npm run type-check    # Both workspaces

# Type generation (auto-runs before dev/build)
npm run sanity:typegen --workspace=frontend
npm run sanity:typegen --workspace=studio

# Deploy Studio to Sanity hosting
npm run deploy --workspace=studio

# Import sample content
npm run import-sample-data
```

## Tech Stack & Version Notes

- **Next.js 16.1.1** with App Router and React 19
- **Sanity v5.1.0** with `next-sanity` 12.x
- **Tailwind CSS v4.1.17** — uses the new v4 syntax:
  - `@import 'tailwindcss'` instead of `@tailwind` directives
  - `@theme {}` for CSS custom properties (not JS `theme.extend`)
  - `@utility` for custom utilities, `@custom-variant` for variants
  - `@plugin` for plugins
  - Theme config lives in `frontend/app/globals.css`, not `tailwind.config.ts`
- **TypeScript 5.9** in strict mode
- **ESLint** flat config (`eslint.config.mjs`) in frontend

## Environment Variables

Both workspaces need `.env` files (see `.env.example` in each):

**Studio:** `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`, `SANITY_STUDIO_PREVIEW_URL`

**Frontend:** `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`

## Design Spec Reference

The target design is specified in `SPEC.md`. Key values:

- **Colors**: cream `#FFFCF5`, blue `#84AFE7`, dark `#363440`, light `#F3F4F4`, muted `#363440B3`
- **Font**: Switzer Variable (from Fontshare, self-hosted)
- **Border radius**: 12px default on cards/images, full-pill on buttons
- **Signature interaction**: Service card blue overlay slides up on hover (translateY transition)

## GROQ Queries

All GROQ queries live in `frontend/sanity/lib/queries.ts`. When adding new content types, add corresponding queries there and use `sanityFetch` from `sanity/lib/live.ts` for data fetching.
