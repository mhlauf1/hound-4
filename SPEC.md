# Template 4: Hound Around Resort — Project Spec

> **Design Direction:** Elevated Editorial — Clean, spacious, premium-feeling local pet care website
> **Vibe:** Warm · Minimal · Confident
> **Stack:** Next.js (App Router) + Sanity CMS + Tailwind CSS
> **Base Template:** `sanity-template-nextjs-clean`

---

## 1. STYLE GUIDE

### 1.1 Color System

```
COLORS:
├── Background (main)     #FFFCF5   "cream"        — Used as page-level bg, warm off-white
├── Blue (accent)          #84AFE7   "blue"         — Buttons, hover states, service card overlay, badges, links
├── Dark Blue (text)       #363440   "dark"         — Headlines, primary text, nav text
├── Light Blue (surface)   #F3F4F4   "light"        — Section backgrounds (Why Us), card surfaces, subtle borders
├── White                  #FFFFFF   "white"        — Hero text on dark images, button text on blue
├── Dark Blue @ 70%        #363440B3 "muted"        — Subtext, descriptions, secondary copy
└── Transparent            —                        — Nav on hero, overlays
```

**Tailwind `extend.colors` config:**

```js
colors: {
  cream:    '#FFFCF5',
  blue:     '#84AFE7',
  dark:     '#363440',
  light:    '#F3F4F4',
  muted:    '#363440B3', // dark @ 70% opacity
}
```

**Usage Rules:**

- Page background is always `cream` (#FFFCF5)
- Headlines are always `dark` (#363440)
- Body/subtext is `muted` (dark @ 70%) or `dark` depending on context
- Buttons: blue bg (#84AFE7) with white text, pill-shaped
- Section label badges ("+ Services", "+ Our Team"): dark text, uppercase, tracked
- "Why Us" section uses `light` (#F3F4F4) as section bg
- Hero section: full-bleed image with white text overlay
- Service card hover: blue (#84AFE7) slides up as overlay, text turns white

### 1.2 Typography

**Font Family:** Switzer Variable (single font, all weights)
**Source:** [Fontshare](https://www.fontshare.com/fonts/switzer) (free) or self-hosted variable font

```
TYPOGRAPHY SCALE:
├── Hero Headline
│   ├── Font: Switzer Variable
│   ├── Size: 84px (5.25rem)
│   ├── Weight: 400 (normal/regular)
│   ├── Line Height: 90% (0.9)
│   ├── Letter Spacing: -1px (-0.012em)
│   ├── Color: white (on hero image) or dark (on cream bg)
│   └── Style: Normal (not italic, not bold)
│
├── Section Heading (large)
│   ├── Font: Switzer Variable
│   ├── Size: ~48-56px (3rem–3.5rem)
│   ├── Weight: 400 (normal)
│   ├── Line Height: 95% (~0.95)
│   ├── Letter Spacing: -0.5px
│   ├── Color: dark
│   └── Used on: "What's on the menu?", "Meet the pack", "Be at peace..."
│
├── Card/Item Heading
│   ├── Font: Switzer Variable
│   ├── Size: ~32-40px (2rem–2.5rem)
│   ├── Weight: 500 (medium) or 600 (semibold)
│   ├── Line Height: 110%
│   ├── Color: dark (default) / white (on blue hover)
│   └── Used on: "Daycare", "Boarding", "Grooming", "Self-Wash"
│
├── Body / Paragraph
│   ├── Font: Switzer Variable
│   ├── Size: 20-24px (1.25rem–1.5rem)
│   ├── Weight: 300 (light)
│   ├── Line Height: 150% (1.5)
│   ├── Color: muted (dark @ 70%)
│   └── Used on: descriptions, subtext, paragraph content
│
├── Section Label / Badge
│   ├── Font: Switzer Variable
│   ├── Size: 12-14px (0.75rem–0.875rem)
│   ├── Weight: 400 (regular)
│   ├── Text Transform: UPPERCASE
│   ├── Letter Spacing: 10% (0.1em)
│   ├── Color: muted
│   ├── Prefix: "+" icon/symbol before text
│   └── Used on: "+ Hound Around Resort", "+ Services", "+ Our Team", "+ Why Us", "+ Start Today"
│
├── Button Text
│   ├── Font: Switzer Variable
│   ├── Size: 14-16px (0.875rem–1rem)
│   ├── Weight: 400 (regular)
│   ├── Color: white
│   └── Includes: right arrow icon (→)
│
├── Nav Links
│   ├── Font: Switzer Variable
│   ├── Size: 16px (1rem)
│   ├── Weight: 400
│   ├── Color: white (on hero) / dark (on sticky solid nav)
│   └── Multi-line stacked layout in hero nav
│
├── Marquee Text
│   ├── Font: Switzer Variable
│   ├── Size: ~48-64px (3rem–4rem)
│   ├── Weight: 400
│   ├── Color: dark
│   └── Separator: blue square dot (■) between items
│
└── Footer Text
    ├── Font: Switzer Variable
    ├── Size: 14-16px
    ├── Weight: 300-400
    └── Color: dark / muted
```

**Tailwind `extend.fontFamily` config:**

```js
fontFamily: {
  sans: ['Switzer Variable', 'Switzer', 'system-ui', 'sans-serif'],
}
```

**Tailwind `extend.fontSize` (custom scale):**

```js
fontSize: {
  'hero':     ['5.25rem', { lineHeight: '0.9', letterSpacing: '-0.012em' }],
  'section':  ['3.25rem', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
  'card':     ['2.25rem', { lineHeight: '1.1' }],
  'body-lg':  ['1.5rem',  { lineHeight: '1.5' }],
  'body':     ['1.25rem', { lineHeight: '1.5' }],
  'label':    ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
}
```

### 1.3 Spacing & Layout

```
LAYOUT:
├── Container Max Width:    ~1280px (80rem)
├── Container Padding:      24px mobile / 48px tablet / 80px desktop
├── Section Padding (Y):    96-120px (6rem–7.5rem) vertical between sections
├── Overall Density:        Spacious / airy — generous whitespace
├── Grid:                   12-column implicit, mostly 2-col and full-width layouts
├── Content Alignment:      Left-aligned headings, centered section labels on some sections
└── Border Radius:          12px (0.75rem) — used on buttons, cards, images, overlays
```

### 1.4 UI Elements & Patterns

**Buttons:**

```
Primary Button:
├── Background: #84AFE7 (blue)
├── Text: white, 14-16px
├── Padding: 12px 24px (~0.75rem 1.5rem)
├── Border Radius: 9999px (full pill shape)
├── Icon: Arrow right (→) after text
├── Hover: Slightly darker blue or scale
├── Variants: "Book Now →", "Learn More →", "Learn About Us →"
└── Shadow: subtle or none

Secondary/Ghost Button:
├── Background: transparent
├── Border: 1px solid light (#F3F4F4) or blue
├── Text: dark
├── Border Radius: 9999px (pill)
└── Used on: "Learn About Us →" in team section
```

**Section Labels (Badges):**

```
├── Format: "+ Label Text"
├── The "+" is a small cross/plus icon
├── Text: uppercase, tracked (letter-spacing: 0.1em)
├── Size: 12-14px
├── Weight: regular (400)
├── Color: muted
├── No background — just floating text above section heading
```

**Cards (Service Cards):**

```
Default State:
├── Layout: Full-width row, image left (~20-25%), content right
├── Background: cream (#FFFCF5) or transparent
├── Border: subtle bottom border between cards
├── Image: rounded corners (12px), small square/rectangle thumbnail
├── Heading: card size (32-40px), dark
├── Description: body size (20px), muted
├── CTA: pill button aligned right

Hover State:
├── Blue overlay (#84AFE7) slides UP from bottom
├── Transition: transform translateY or clip-path, ~400ms ease
├── Text turns white on hover
├── Button becomes white bg with dark text (inverted)
├── Image stays visible (above overlay or to the side)
```

**Image Treatments:**

```
├── Border Radius: 12px on all images
├── Hero: full-bleed, no radius (edge-to-edge)
├── About section: large image, right side, slight overlap with content area
├── Service cards: small thumbnail, left-aligned
├── Team: full-width photo, 12px radius
├── CTA section: "Suites not kennels" — full-width banner image with text overlay
├── Why Us cards: medium images within cards
```

**Icons:**

```
├── Library: Iconify (rounded style)
├── Usage: Arrow icons on buttons (→), plus (+) on section labels
├── Style: Line/outline, not filled
├── Size: Matches text size contextually
```

**Stars (Trust Signal):**

```
├── 5 filled stars
├── Color: dark (#363440) or blue (#84AFE7)
├── Below hero subtext
├── Label: "2000+ 5 Star Reviews"
├── Size: ~20px per star
```

### 1.5 Navigation

**Hero State (transparent):**

```
├── Position: fixed/absolute over hero image
├── Background: transparent
├── Logo: top-left, white, "HOUND AROUND RESORT" wordmark (caps, tracked)
├── Nav Links: stacked vertically (unique!), top-right area
│   ├── Services
│   ├── About Us
│   ├── Web Cams
│   └── Pricing
├── CTA: "Book Now →" top-right corner
├── Text Color: white
└── Layout: Logo left, nav links center-right (stacked), CTA far right
```

**Scrolled State (sticky solid):**

```
├── Position: fixed top
├── Background: cream (#FFFCF5) or white with subtle shadow
├── Text Color: dark (#363440)
├── Logo: dark version
├── Transition: smooth bg color + shadow on scroll
├── Nav links: likely horizontal in sticky state
└── Z-index: above all content
```

### 1.6 Footer

```
├── Background: light (#F3F4F4) or very light grey
├── Layout: 4-column grid
│   ├── Col 1: Logo "Hound Around RESORT" + tagline + "since 2013" blurb
│   ├── Col 2: "Services" — Daycare, Boarding, Grooming, Self-Wash
│   ├── Col 3: "Company" — About Us, Pricing, Webcams, New Clients
│   └── Col 4: "Contact" — Address, Phone, Email
├── Bottom Bar: Copyright, "Part of Embark Pet Services family", Privacy Policy, Terms
├── Typography: 14-16px, regular weight, dark/muted color
├── Links: no underline, hover color change
└── Padding: generous (~80px top/bottom)
```

---

## 2. HOMEPAGE SECTIONS (Top to Bottom)

### Section 1: Hero

**Layout:** Full-viewport-height, full-bleed background image
**Background:** Large, close-up dog photo (Cavalier King Charles Spaniel in screenshot)
**Content overlay:**

- Logo wordmark top-left (white)
- Nav links stacked vertically top-center-right (white)
- "Book Now →" button top-right (blue pill)
- Main headline bottom-left: "Where dogs come to have the best day ever" (white, hero size 84px)
- Service quick-links bottom-right: "+ Day Care", "+ Boarding", "+ Grooming" (white, small)

**Data fields:**

```
hero:
  backgroundImage: image (Sanity image asset)
  headline: string
  serviceQuickLinks: array of { label: string, link: string }
```

**Dev notes:**

- Background image with object-fit: cover, object-position: center
- Text shadow or subtle gradient overlay at bottom for legibility
- Nav is transparent overlaying the image
- Hero takes full viewport height (100vh or 100svh)

---

### Section 2: Infinite Marquee

**Layout:** Full-width horizontal strip, cream (#FFFCF5) background
**Content:** "Boarding · Daycare · Grooming · Self-Wash" repeating infinitely
**Separator:** Blue square dot (■ in #84AFE7) between each word
**Animation:** CSS infinite scroll left-to-right, smooth, ~30-40s duration
**Typography:** ~48-64px, Switzer regular, dark

**Data fields:**

```
marquee:
  items: array of strings ["Boarding", "Daycare", "Grooming", "Self-Wash"]
```

**Dev notes:**

- Duplicate the list 3-4x for seamless loop
- Use CSS animation: `translateX(0) → translateX(-50%)` on doubled content
- No pause on hover (continuous)
- Thin padding top/bottom (~32-48px)

---

### Section 3: About / Sub-Hero

**Layout:** Two-column split — text left (~50%), image right (~50%)
**Background:** cream (#FFFCF5)

**Left column:**

- Section label: "+ Hound Around Resort" (badge style)
- Headline: "One place for everything your dog needs. Care that does more for your pet. And you." (hero-ish size, ~56-64px, dark)
- Subtext: "8,800 sq ft of tail-wagging fun in Cottage Grove, MN. Dog daycare, boarding, and grooming, with live webcams so you can peek at the pack." (body-lg, muted)
- CTA: "Book Now →" (blue pill button)
- Trust signal: ★★★★★ "2000+ 5 Star Reviews" (below button)

**Right column:**

- Large facility photo (lobby/reception area, motion blur of person walking)
- Image has 12px border radius
- Blue decorative block/accent in top-right corner of image area

**Data fields:**

```
aboutPreview:
  label: string ("Hound Around Resort")
  headline: string
  description: text
  ctaText: string
  ctaLink: string
  rating: number
  reviewCount: string
  image: image
```

---

### Section 4: Services — "What's on the menu?"

**Layout:** Centered heading, then stacked full-width service rows
**Background:** cream (#FFFCF5)

**Header:**

- Section label: "+ Services" (badge, centered)
- Headline: "What's on the menu? Pick your pup's adventure" (section size, centered)

**Service Rows (4 total):**
Each row is a full-width horizontal bar containing:

- Left: Square/rectangle image thumbnail (~120-150px) with 12px radius
- Center: Service name (card heading, 32-40px) + description (body, muted)
- Right: "Book Now →" pill button

**Services:**

1. **Daycare** — "A full day of friends, fun and freedom. 8,800 sq ft of play space to explore."
2. **Boarding** — "Sleepovers they'll actually enjoy. Spacious suites with TVs and comfy beds."
3. **Grooming** — "Breed-specific cuts and spa-level care from our expert groomers."
4. **Self-Wash** — "BIY with all the good stuff. Professional products, your elbow grease."

**Hover Interaction (SIGNATURE ELEMENT):**

- On hover of any service row, a blue (#84AFE7) overlay panel slides up from the bottom
- Covers the full row
- All text inverts to white
- Button inverts to white bg / dark text
- Transition: ~300-400ms ease-out, translateY(100%) → translateY(0)
- Image stays visible or peeks above the overlay

**Data fields:**

```
servicesSection:
  label: string
  headline: string
  services: array of {
    title: string
    description: string
    image: image
    link: string
  }
```

**Dev notes:**

- Each service row: relative container, overflow hidden
- Blue overlay: absolute positioned, starts at translateY(100%), on hover translateY(0)
- Content (text, button) has two layers — default dark and hover white (or single layer with color transition)
- Consider pointer-events and keyboard accessibility (focus-within for the hover state)

---

### Section 5: Why Hound — "Be at peace when you are away"

**Layout:** Section heading + stat + two feature cards in a 2-column grid
**Background:** light (#F3F4F4) — different from the cream

**Header area:**

- Section label: "+ Why Us" (badge)
- Headline: "Be at peace when you are away, we got you" (section size, dark)
- Stat callout right-aligned: "Open 365 Days+" (large text, dark, with small blue + accent)

**Feature Cards (2 columns):**

**Card 1 — Live Webcams:**

- Heading: "Live Webcams" (card size)
- Image: Person viewing webcam on phone (12px radius)
- CTA: "Learn More →" (blue pill)
- Layout: Text top-left, image bottom-right

**Card 2 — Suites, Not Kennels:**

- Heading: "Suites, Not Kennels" (card size)
- Image: Dog in boarding suite with TV (12px radius)
- CTA: "Learn More →" (blue pill)
- Layout: Text top-left, image bottom-right

**Data fields:**

```
whyUs:
  label: string
  headline: string
  stat: { value: string, suffix: string }  // "Open 365 Days" + "+"
  features: array of {
    title: string
    image: image
    link: string
    linkText: string
  }
```

---

### Section 6: Our Team — "Meet the pack"

**Layout:** Section heading with CTA, then full-width team photo
**Background:** cream (#FFFCF5)

**Header row:**

- Section label: "+ Our Team" (badge, left)
- Headline: "Meet the pack" (section size, left)
- CTA: "Learn About Us →" (ghost/outlined pill button, right-aligned)

**Content:**

- Single large team photo, full container width, 12px radius
- Shows 4 team members in branded polo shirts at the facility

**Data fields:**

```
teamSection:
  label: string
  headline: string
  ctaText: string
  ctaLink: string
  teamPhoto: image
```

**Dev notes:**

- Header is a flex row: heading left, button right, vertically centered
- Photo below at full container width
- This section could also support individual team member cards on the About page

---

### Section 7: CTA Banner + Welcome Info

**Layout:** Two distinct sub-sections stacked

**Sub-section A: CTA Banner — "Suites, not kennels"**

- Full-width background image (person walking dog in facility, motion blur)
- Overlay text: "Suites, not kennels. **There's a difference.**" (hero size, white)
- Bold emphasis on "There's a difference."
- "Book Now →" button (blue pill, centered or left)
- Image has slight dark overlay for text legibility

**Sub-section B: Welcome Info Block**
Two columns on cream background:

**Left column:**

- Section label: "+ Start Today"
- Headline: "Welcome to Hound Around Resort" (section size)
- Body text: Description of facility and services (2 paragraphs, muted)
- CTA: "Book Now →" (blue pill)

**Right column (split into 2 sub-areas):**

- Top-right: Small detail photo (dog leashes on wall hook, 12px radius)
- Below photo: Contact/info text
  - "Our purpose is to provide a safe, fun, place for your pet to stay while you are away! We're open 7 days a week for your convenience."
  - Address: "8607 W Point Douglas Rd S, Cottage Grove, MN 55016"
  - Phone: "(886) 493-2933"

**Data fields:**

```
ctaBanner:
  backgroundImage: image
  headline: string
  highlightText: string  // bold portion
  ctaText: string
  ctaLink: string

welcomeInfo:
  label: string
  headline: string
  bodyLeft: portableText
  ctaText: string
  ctaLink: string
  image: image
  bodyRight: portableText
  address: string
  phone: string
```

---

### Section 8: Footer

(See Section 1.6 in Style Guide above for full spec)

**Data from Sanity Settings document:**

```
settings:
  logo: image
  tagline: string
  founded: string
  address: string
  phone: string
  email: string
  socialLinks: array of { platform, url }
  footerNavGroups: array of {
    title: string
    links: array of { label, href }
  }
  legalLinks: array of { label, href }
  parentCompany: { name, url }
```

---

## 3. INNER PAGES (Shared Layout, Style-Inherited)

All inner pages share:

- Same nav (transparent hero if page has a hero image, or solid from the start)
- Same footer
- Same typography/color system
- Page builder approach in Sanity (compose sections per page)

### Page: About Us (`/about`)

Sections: Hero banner (smaller, image + title), Story block (text + image split), Team grid (individual cards), Facility gallery, Values/mission, CTA banner

### Page: Service — Boarding (`/services/boarding`)

Sections: Hero banner, Feature description (suites, TVs, beds), Photo gallery, Pricing preview, FAQ accordion, CTA

### Page: Service — Grooming (`/services/grooming`)

Sections: Hero banner, Service list/packages, Before & after gallery, Pricing preview, FAQ, CTA

### Page: Service — Daycare (`/services/daycare`)

Sections: Hero banner, Feature description (play space, groups), Webcam teaser, Pricing preview, FAQ, CTA

### Page: Service — Self-Wash (`/services/self-wash`)

Sections: Hero banner, How it works steps, What's included, Pricing, CTA

### Page: Webcams (`/webcams`)

Sections: Hero/title, Webcam embed grid (2-4 camera feeds), Info text

### Page: Pricing (`/pricing`)

Sections: Hero/title, Pricing tables by service (tabs or sections), FAQ, CTA

### Page: Contact / Schedule (`/contact`)

Sections: Hero/title, Contact form, Map embed, Hours/address info, CTA

---

## 4. SANITY SCHEMA ADDITIONS

Beyond the default template schemas (Page, Post, Person, Settings), add:

```
New Document Types:
├── service
│   ├── title: string
│   ├── slug: slug
│   ├── description: text
│   ├── shortDescription: string (for cards)
│   ├── icon: image
│   ├── heroImage: image
│   ├── gallery: array of images
│   ├── features: array of { title, description, icon }
│   ├── pricing: reference to pricing document
│   └── faq: array of { question, answer }
│
├── testimonial
│   ├── quote: text
│   ├── author: string
│   ├── petName: string
│   ├── rating: number (1-5)
│   └── photo: image
│
├── pricingTier
│   ├── service: reference to service
│   ├── tiers: array of { name, price, unit, features[], highlighted: boolean }
│   └── footnotes: text
│
└── siteSettings (extend existing)
    ├── hours: array of { day, open, close }
    ├── address: object { street, city, state, zip }
    ├── phone: string
    ├── email: string
    ├── webcamEmbeds: array of { name, embedUrl }
    ├── socialLinks: array of { platform, url }
    └── parentCompany: object { name, url }
```

**New Page Builder Section Types:**

```
├── hero (full-bleed image + text overlay)
├── heroSplit (image + text side by side — about sub-hero)
├── marquee (infinite scrolling text)
├── servicesList (stacked service rows with hover)
├── featureCards (2-col cards — Why Us style)
├── teamHighlight (heading + full-width photo)
├── ctaBanner (full-width image + overlay text)
├── infoBlock (multi-column text + image + contact info)
├── pricingTable
├── faqAccordion
├── gallery
├── webcamEmbed
├── contactForm
├── contentBlock (generic rich text)
└── statsBar (numbers + labels)
```

---

## 5. ASSET LIST

### Images Needed (Placeholder / Midjourney / Real Photos)

1. **Hero dog photo** — Close-up, emotional, high-quality dog portrait (Cavalier King Charles or similar)
2. **Facility lobby** — Clean, modern reception area with natural light
3. **Person walking dog in facility** — Motion blur, editorial style
4. **Dog leashes on hook** — Detail/lifestyle shot
5. **Person viewing webcam on phone** — Warm lighting, lifestyle
6. **Dog in boarding suite** — Suite with TV, bed, comfortable
7. **Team photo** — 4 staff members in branded polos at facility
8. **Service thumbnails** (4):
   - Daycare: Dog playing / running
   - Boarding: Dog in suite
   - Grooming: Dog being groomed
   - Self-wash: Dog in wash station
9. **Footer/general**: Facility exterior (optional)

### Logo

- "HOUND AROUND RESORT" — All caps wordmark, tracked spacing
- White version (for hero overlay)
- Dark version (for sticky nav, footer)
- May need SVG recreation

### Icons

- Arrow right (→) — for buttons
- Plus (+) — for section labels
- Star (★) — for reviews
- Iconify rounded set for any additional UI icons

---

## 6. TECHNICAL NOTES

### Key Dependencies (beyond template defaults)

```
- framer-motion (or CSS-only) — service card hover animation, nav transitions
- @fontsource/switzer or self-hosted Switzer Variable font
- @iconify/react — icon system
- embla-carousel or CSS — marquee infinite scroll
```

### Responsive Breakpoints

```
- Mobile: < 768px — single column, stacked sections, hamburger nav
- Tablet: 768-1024px — 2-col where appropriate
- Desktop: 1024px+ — full layout as designed
- Wide: 1280px+ — max-width container kicks in
```

### Performance Priorities

```
- Hero image: Next.js Image with priority, eager loading
- All other images: lazy loaded
- Switzer font: preload variable font file, font-display: swap
- Marquee: CSS-only animation (no JS dependency)
- Service hover: CSS transitions preferred over JS animation library
```

### Accessibility

```
- Service card hover states: also trigger on focus-within for keyboard users
- Hero image: meaningful alt text from Sanity
- Color contrast: white on blue (#84AFE7) — verify WCAG AA (may need slightly darker blue for small text)
- Nav: proper aria labels, mobile menu with focus trap
- Marquee: prefers-reduced-motion should pause animation
```

---

## 7. CLAUDE CODE KICKOFF PROMPT

Below is the prompt to give Claude Code to initialize and build this template. Copy this into Claude Code after running the Sanity template init command.

---

```
I've initialized a Next.js + Sanity project using sanity-template-nextjs-clean. I need you to build out
Template 4 of the Hound Around Resort website. Here's the complete specification:

## Project Context
This is a dog daycare, boarding, and grooming facility website. The design is "elevated editorial" —
warm, minimal, confident. Think premium local business, not generic pet site.

## Font Setup
Install Switzer Variable font from Fontshare (https://www.fontshare.com/fonts/switzer).
Self-host the variable font file in /public/fonts/. Set up @font-face in globals.css.

## Tailwind Theme
Extend tailwind.config with:
- Colors: cream (#FFFCF5), blue (#84AFE7), dark (#363440), light (#F3F4F4), muted (#363440B3)
- Font family: sans → ['Switzer Variable', 'Switzer', 'system-ui', 'sans-serif']
- Custom font sizes: hero (5.25rem/0.9/-0.012em), section (3.25rem/0.95/-0.01em),
  card (2.25rem/1.1), body-lg (1.5rem/1.5), body (1.25rem/1.5), label (0.8125rem/1.4/0.1em)
- Border radius: default 12px (0.75rem)

## Pages to Build
/ (homepage), /about, /services/boarding, /services/grooming, /services/daycare,
/services/self-wash, /webcams, /pricing, /contact

## Homepage Sections (in order)
1. HERO: Full-viewport, full-bleed dog photo background. White text overlay. Transparent nav
   with logo top-left, stacked nav links center-right, "Book Now" CTA top-right. Nav becomes
   sticky solid (cream bg) on scroll. Headline bottom-left: large (84px) normal weight.
   Service quick-links bottom-right with + prefix.

2. MARQUEE: Infinite horizontal auto-scrolling strip. "Boarding · Daycare · Grooming · Self-Wash"
   repeating. Blue square dot separators (#84AFE7). CSS animation only, ~35s loop.
   Pauses on prefers-reduced-motion.

3. ABOUT SPLIT: Two columns. Left: section label ("+ Hound Around Resort"), large headline,
   body text, "Book Now" blue pill button, 5-star rating with "2000+ 5 Star Reviews".
   Right: large facility photo with 12px radius, blue decorative accent block in corner.

4. SERVICES LIST: Centered header ("+ Services" label, "What's on the menu?" heading).
   4 stacked full-width rows. Each: image thumbnail left, title + description center, pill button right.
   HOVER INTERACTION: Blue (#84AFE7) overlay slides up from bottom (translateY transition, 300-400ms).
   All text/button inverts to white. Also works on focus-within for accessibility.

5. WHY US: Light (#F3F4F4) section background. Label + headline left, "Open 365 Days+" stat right.
   Two feature cards below in 2-col grid: "Live Webcams" and "Suites, Not Kennels" —
   each with heading, image, "Learn More" button.

6. TEAM: Label ("+ Our Team") + headline ("Meet the pack") left, ghost pill button right
   ("Learn About Us →"). Full-width team photo below with 12px radius.

7. CTA + INFO: Two sub-sections. Top: full-width image banner with "Suites, not kennels.
   There's a difference." white text overlay + "Book Now" button. Bottom: two-column info block —
   left has welcome text + CTA, right has detail photo + address/phone info.

8. FOOTER: Light bg (#F3F4F4), 4-column grid (brand, services, company, contact),
   bottom bar with copyright + Embark Pet Services + legal links.

## Component Patterns
- Buttons: Blue (#84AFE7) bg, white text, pill shape (rounded-full), includes → arrow icon
- Ghost buttons: transparent bg, subtle border, pill shape
- Section labels: "+ Label" format, uppercase, letter-spacing 0.1em, muted color
- All images: 12px border radius (except full-bleed hero)
- Icons: Iconify rounded style

## Sanity Schema
Extend with: service, testimonial, pricingTier document types.
Add page builder section types for each homepage section.
Settings doc should include hours, address, phone, email, webcam embeds, social links.

Build all components as modular, reusable page builder blocks that can be composed
on any page through Sanity Studio.
```

---

_This spec is ready for development. Send to Claude Code after project initialization._
