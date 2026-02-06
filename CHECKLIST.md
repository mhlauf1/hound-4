# Project Checklist — Hound Around Resort

Track all work from kickoff to production launch.

---

## Phase 1: Foundation & Homepage Sections

- [x] Project init from `sanity-template-nextjs-clean`
- [x] Self-host Switzer Variable font
- [x] Tailwind v4 theme (colors, typography scale, container, animations)
- [x] Sanity schemas for all 8 page builder section types
- [x] Settings schema (nav, footer, contact, SEO groups)
- [x] Page schema with pageBuilder field accepting all section types
- [x] GROQ queries with full pageBuilder projections and link resolution
- [x] NavBar — sticky header, scroll state, mobile hamburger menu
- [x] Footer — 4-column grid, contact info, legal bar
- [x] Hero section component
- [x] Marquee section component (CSS-only animation, a11y pause)
- [x] HeroSplit section component (about/sub-hero)
- [x] ServicesList section component (blue overlay hover interaction)
- [x] FeatureCards section component (Why Us)
- [x] TeamHighlight section component
- [x] CtaBanner section component (highlight text parsing)
- [x] InfoBlock section component (address/phone)
- [x] BlockRenderer dispatch for all section types
- [x] Button component (primary + ghost variants)
- [x] SectionLabel component
- [x] Icon set (ArrowRight, Plus, Star)
- [x] `next.config.ts` image hostname fix for `cdn.sanity.io`

## Phase 2: Content Population & Visual Polish

- [ ] Populate homepage content in Sanity Studio (all sections)
- [ ] Upload real/placeholder images for hero, services, team, facility
- [ ] Verify all sections render correctly with real content
- [ ] Responsive QA — mobile, tablet, desktop breakpoints
- [ ] Typography fine-tuning (sizes, weights, line-heights match spec)
- [ ] Color/spacing audit against SPEC.md design reference
- [ ] Service card hover animation polish (timing, easing)
- [ ] Nav transparent-to-solid scroll transition polish
- [ ] Image optimization (proper sizes, aspect ratios, priority flags)

## Phase 3: Inner Pages

- [ ] About page (`/about`)
- [ ] Boarding service page (`/services/boarding`)
- [ ] Grooming service page (`/services/grooming`)
- [ ] Daycare service page (`/services/daycare`)
- [ ] Self-Wash service page (`/services/self-wash`)
- [ ] Webcams page (`/webcams`)
- [ ] Pricing page (`/pricing`)
- [ ] Contact page (`/contact`)

## Phase 4: Additional Schemas & Features

- [ ] `service` document type schema
- [ ] `testimonial` document type schema
- [ ] `pricingTier` document type schema
- [ ] Extended settings: hours, webcam embeds
- [ ] FAQ accordion section type
- [ ] Pricing table section type
- [ ] Gallery section type
- [ ] Webcam embed section type
- [ ] Contact form section type
- [ ] Content block (generic rich text) section type
- [ ] Stats bar section type

## Phase 5: Pre-Production QA

- [ ] Full responsive test (all pages, all breakpoints)
- [ ] Accessibility audit (contrast, focus states, screen reader, reduced motion)
- [ ] Lighthouse performance audit (target 90+ across all metrics)
- [ ] SEO: meta titles, descriptions, og:image for all pages
- [ ] Sitemap generation / `robots.txt`
- [ ] Favicon / app icons
- [ ] 404 page
- [ ] Error boundary / error pages
- [ ] Visual editing / Presentation tool verification
- [ ] Draft mode / preview flow testing
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Image alt text audit (all images have meaningful alt text in Sanity)
- [ ] Link audit (no broken internal/external links)
- [ ] Form submission testing (contact form)

## Phase 6: Deployment & Launch

- [ ] Environment variables set in production host
- [ ] Sanity Studio deployed (`npm run deploy --workspace=studio`)
- [ ] Frontend deployed to Vercel (or hosting provider)
- [ ] Custom domain configured
- [ ] SSL certificate verified
- [ ] DNS propagation confirmed
- [ ] Production smoke test (all pages, all sections)
- [ ] Analytics setup (Vercel Analytics / Google Analytics)
- [ ] Client handoff / CMS training
- [ ] Go live
