---
name: Serengeti Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#424844'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#7b5800'
  on-secondary: '#ffffff'
  secondary-container: '#fcbf3c'
  on-secondary-container: '#6e4f00'
  tertiary: '#3f251d'
  on-tertiary: '#ffffff'
  tertiary-container: '#573b32'
  on-tertiary-container: '#cda59a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#f9bd3a'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#e7bdb1'
  on-tertiary-fixed: '#2c160e'
  on-tertiary-fixed-variant: '#5d4037'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 24px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system is built on the principles of premium editorial journalism. It prioritizes storytelling through high-impact photography, expansive whitespace, and a disciplined typographic hierarchy. The aesthetic is "Luxurious Explorer"—a blend of high-end travel journals and sophisticated digital interfaces.

The UI avoids all "digital-first" trends like background blurs or floating elements. Instead, it relies on a **Minimalist and Structured** approach. The emotional response is one of awe, safety, and curated adventure. Every element feels intentional, handcrafted, and grounded in the physical reality of the Tanzanian landscape.

## Colors

The palette is derived from the natural flora and fauna of the Serengeti.
- **Safari Green (#2D4739):** A deep, lush forest green used for primary brand moments and key structural elements.
- **Golden Safari Yellow (#EBB02D):** A sun-drenched gold used for accents, calls to action, and highlighting active states.
- **Warm Earth Brown (#5D4037):** A grounded clay-tone used for secondary labels and subtle dividers.
- **Foundation:** The system uses a clean **White (#FFFFFF)** for most surfaces to maximize "breathability." **Deep Charcoal (#1A1A1A)** is used for primary text to ensure maximum legibility and a professional editorial feel.

## Typography

The typography strategy uses a high-contrast pairing to evoke a modern editorial feel. 

**Montserrat** is used for headings. Its geometric, bold nature provides a sense of strength and authority. Large headings should utilize generous letter spacing (tracking) to feel "airy" and expensive. 

**Work Sans** is the workhorse for body text and labels. It was chosen for its exceptional legibility and neutral, professional character. 

- Use `display-lg` for hero sections and major article titles.
- Use `label-caps` for eyebrows (small text above headings) and secondary navigation to maintain the journal aesthetic.
- Line heights are intentionally generous (1.6x for body) to facilitate a relaxed reading experience.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain editorial control over line lengths and image ratios. 

- **Grid:** 12-column grid with a 1280px max-width.
- **Rhythm:** A strict 8pt (pixel) linear scale. All padding, margins, and component heights must be multiples of 8.
- **Whitespace:** Emphasize vertical "breathing room." Section headers should have a minimum of 80px (`stack-lg`) of top/bottom margin to separate content chapters.
- **Mobile:** Content reflows to a single column with 24px side margins. Typography scales down slightly to ensure headers don't break awkwardly.

## Elevation & Depth

To maintain the "handcrafted" feel, the system avoids digital shadows and artificial depth.

- **Flat Architecture:** Most components sit directly on the background. Hierarchy is created through size, color contrast, and proximity rather than shadows.
- **Tonal Layers:** For overlapping elements (like text on images), use solid color blocks or subtle, high-quality image overlays. 
- **Borders:** Use thin, low-contrast 1px borders in Earth Brown or light Grey to define card boundaries or form inputs without adding visual weight.
- **No Gradients:** All surfaces are solid colors to maintain the "ink-on-paper" feel of a luxury journal.

## Shapes

The design system utilizes **Sharp (0px)** corners for all primary containers, buttons, and images. 

This decision reinforces a professional, architectural, and "un-app-like" aesthetic. The lack of rounded corners creates a more serious, editorial atmosphere reminiscent of printed magazines. 

The only exception to this rule is for specific interactive icons or UI toggles where a circular shape is required for functional clarity. All cards and buttons must remain sharp.

## Components

### Buttons
- **Primary:** Solid Safari Green background with White text. Sharp corners. Hover state: Background shifts to Golden Yellow with Charcoal text.
- **Secondary:** Transparent background with a 2px Safari Green border. Sharp corners.
- **Ghost:** Text-only with an underline that appears on hover, mimicking traditional editorial links.

### Cards
- **Photography-First:** Cards should be dominated by a high-resolution image. 
- **Typography Overlay:** Titles should be placed either directly below the image in `headline-md` or in a solid white container that overlaps the image corner for a tactile "pasted-on" look.

### Input Fields
- **Minimalist:** Bottom-border only (2px) in Earth Brown. Labels use `label-caps` and sit above the line. Focus state: Border changes to Safari Green.

### Navigation
- **Header:** Clean, high-contrast text links in the top-right. Active states are indicated by a 2px Golden Yellow underline.
- **Footer:** Deep Safari Green background with all-white text. Structured columns for links and a prominent "Newsletter" signup using the minimalist input style.

### Lists
- Use custom bullet points (a small Golden Yellow square) instead of standard circles to maintain the geometric shape language.