# PRD: Ryan Fahri Atanto — Professional Portfolio Website

> Status: Draft v1.0 · Date: 2026-08-01 · Type: Product Requirement Document

## Objective

Build a visually impressive, interactive, single-page professional portfolio for Ryan Fahri Atanto, a Network Operation Engineer. Purpose: personal branding + digital business card. NOT for active job hunting.

**Primary users:** potential collaborators, recruiters, clients, anyone curious about his professional profile.

**Success criteria (product level):**
- Fully responsive at 320px / 768px / 1024px / 1440px breakpoints
- Fast initial load (LCP < 2.5s on typical connection)
- Smooth 60fps animations
- Accurately reflects Ryan's professional identity (Network Engineer) per approved design
- Content sourced from `/tmp/cv-ryan.txt`

**User flow:** single-page application. User scrolls through sections guided by sticky navbar. All info on one page. No routing, no subpages.

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Markup | HTML5 | Semantic, accessible |
| Styling | CSS3 + Tailwind CSS (recommended) | Utility-first, fast glassmorphism implementation |
| Interactivity | Vanilla JavaScript (ES6+) | Scrollspy, hamburger menu, scroll animations |
| Animation | GSAP or pure CSS transitions | Lightweight; CSS first, GSAP only if insufficient |
| Fonts | Inter / Poppins (modern-minimalist) | Spec requirement |
| Build | None required (static assets) — Tailwind via CDN or CLI | Portfolio needs no framework |

## Commands

```bash
# Serve locally (any static server)
python3 -m http.server 8080          # dev preview

# Build Tailwind (if using CLI)
npm install -D tailwindcss
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch   # dev
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify  # prod build

# Validate HTML
npx html-validate index.html

# Deploy (choice of host, e.g. GitHub Pages)
git push origin main                  # GH Pages auto-deploy if enabled
```

No test framework required — static site. Manual verification checklist in Testing Strategy.

## Project Structure

```
web-cv/
├── index.html          → Single page, all sections
├── src/
│   ├── input.css       → Tailwind entry + custom theme (glassmorphism utilities)
│   └── main.js         → Scrollspy, hamburger, scroll-reveal animations, particles
├── assets/
│   └── (fonts, favicon, any images)
├── dist/               → Built CSS output (generated, gitignored)
├── PROJECT_PRD.md      → This document
└── PROJECT_SRS.md      → Technical specification (companion doc)
```

All content lives in `index.html` sections: `#hero`, `#about`, `#experience`, `#skills`, `#education`, `#contact`.

## Code Style

- Semantic HTML5: `header/nav/main/section/footer`, one `h1` per page (hero name)
- BEM-ish class naming for custom CSS; Tailwind utilities inline otherwise
- Vanilla ES6+, no framework; `const`/`let`, arrow functions, modules not required for single file
- English (International) UI copy — all visible text in English
- Config values (phone, email, address) in one JS config object at top of `main.js`

```js
// src/main.js — config at top, single source of truth for contact links
const CONTACT = {
  phone: "+6283836186053",          // E.164, used for wa.me link
 email: "ryan.fahri03@gmail.com",
 address: "Kab. Klaten, Jawa Tengah",
};
```

```css
/* src/input.css — glassmorphism utility (Tailwind @layer) */
@layer utilities {
  .glass {
    @apply bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl;
  }
}
```

## Testing Strategy

Static site — no unit test framework. Verification = manual + automated checks:

| Check | How | Target |
|---|---|---|
| HTML validity | `npx html-validate index.html` | 0 errors |
| Breakpoints | DevTools responsive mode | 320/768/1024/1440 all correct |
| Animations | DevTools FPS meter during scroll | 60fps, no jank |
| Scrollspy | Scroll each section | Navbar highlights correct item |
| Re-trigger animations | Scroll up then down over a section | Animation replays |
| Contact links | Click WhatsApp / Email | `https://wa.me/+6283836186053`, `mailto:ryan.fahri03@gmail.com` |
| Load time | DevTools Network (throttled) | LCP < 2.5s |
| Content accuracy | Cross-check vs `/tmp/cv-ryan.txt` | No missing/fabricated roles, dates, skills |

If animation library is added later (GSAP), a smoke test may be added; not required for v1.

## Boundaries

- **Always:**
  - Keep all personal data (phone, email, address, dates, companies) exactly as in `/tmp/cv-ryan.txt`
  - English (International) UI copy
  - Semantic HTML, accessible contrast, keyboard-navigable navbar
  - Test all 4 breakpoints before declaring done
- **Ask first:**
  - Adding a JS framework or build system beyond Tailwind CLI
  - Adding GSAP/Framer Motion (CSS may suffice)
  - Changing content facts from the CV source
  - Adding a backend, forms, or analytics
- **Never:**
  - Fabricate credentials, employers, dates, or certifications not in CV
  - Publish real phone/email without confirming they are public-contact-safe (CV already lists them; keep as-is)
  - Commit secrets, personal private data beyond CV contents
  - Remove accessibility (aria labels, focus states) for aesthetics

## Success Criteria

- [ ] One-page site, all 6 sections present: Hero, About, Experience, Skills, Education & Certifications, Contact/Footer
- [ ] Sticky glassmorphism navbar with working scrollspy
- [ ] Hero: animated particle/flow background, name + title + location on glass card, both CTAs ("View My Work" → experience, "Contact Me" → footer) scroll correctly
- [ ] Sections reveal with fade-in + slide-up on scroll, re-triggerable
- [ ] Skills as interactive chips with hover glow
Footer: WhatsApp → `https://wa.me/+6283836186053`, Email → `mailto:ryan.fahri03@gmail.com`, address as plain text
- [ ] Responsive at 320/768/1024/1440; hamburger menu on mobile
- [ ] 60fps animations; LCP < 2.5s
- [ ] Content matches CV source 1:1 (roles, dates, skills, certifications)

## Open Questions

- Deploy target not specified (GitHub Pages / Netlify / Vercel / local only). Default: GitHub Pages.
- Tailwind via CDN vs CLI build — CDN is faster to start; CLI for production minification. Default: CLI.
- Animation library: GSAP vs pure CSS. Decision deferred until CSS attempt proves insufficient.
- Profile photo / avatar: none in CV source. Hero will be text-only unless asset provided later.
