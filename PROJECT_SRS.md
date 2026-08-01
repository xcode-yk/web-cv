# SRS: Ryan Fahri Atanto — Professional Portfolio Website

> Status: Draft v1.0 · Date: 2026-08-01 · Type: Software Requirement Specification

## Objective

Define the functional and non-functional requirements for Ryan Fahri Atanto's single-page professional portfolio website. The system is a static, client-side web application rendered in the browser. It presents Ryan's professional profile (Network Engineer) through 6 scrollable sections with glassmorphism styling, scroll-triggered animations, and interactive elements.

**Source of truth for content:** `/tmp/cv-ryan.txt` (extracted text from CV).

## Commands

```bash
# Local development server (Python stdlib — no install)
python3 -m http.server 8080

# Tailwind CLI (if using build pipeline)
npm install -D tailwindcss
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# HTML validation
npx html-validate index.html

# Deploy to GitHub Pages
git push origin main
```

No build step required for v1. No CI/CD pipeline specified.

## Project Structure

```
web-cv/
├── index.html                  # Single-page entry point
├── src/
│   ├── input.css               # Tailwind directives + custom theme
│   └── main.js                 # Scrollspy, hamburger, animations, particles
├── assets/
│   └── (fonts, favicon, optional images)
├── dist/                       # Tailwind build output (gitignored)
├── PROJECT_PRD.md              # Product requirements (companion)
└── PROJECT_SRS.md              # This document
```

**Section IDs in `index.html`:**

| ID | Section | Content |
|---|---|---|
| `#hero` | Hero | Name, title, location, CTA buttons |
| `#about` | About | Professional summary |
| `#experience` | Experience | Vertical timeline of work history |
| `#skills` | Skills | Interactive chips/tags |
| `#education` | Education & Certifications | Formal background |
| `#contact` | Contact / Footer | WhatsApp, Email, address |

## Code Style

### Visual System

| Aspect | Specification |
|---|---|
| Aesthetic | Glassmorphism — transparent, blurred backgrounds (`backdrop-filter: blur`, `bg-white/10`, `border border-white/15`) |
| Font | Inter or Poppins, modern-minimalist |
| Color palette | Dark, techy theme complementing glassmorphism (dark backgrounds, white/light text, subtle accent colors) |
| Language | English (International) |

### Glassmorphism Card Pattern

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
}
```

### Animation Requirements

| Trigger | Effect | Notes |
|---|---|---|
| Scroll into view | Fade-in + slide-up | Uses IntersectionObserver |
| Scroll up then down | Re-triggerable | Observer with `threshold` + `rootMargin` reset |
| Hover on skill chips | Glow effect | CSS `box-shadow` transition |
| Navbar | Sticky + glassmorphism | `position: sticky`, `backdrop-filter` |

### Navbar (Scrollspy)

- Floating, sticky, glassmorphism effect
- Highlights active section as user scrolls
- Mobile: hamburger menu, single-column
- Desktop: horizontal links

### Contact Links

| Button | Target |
|---|---|
| WhatsApp | `https://wa.me/+6283836186053` |
| Email | `mailto:ryan.fahri03@gmail.com` |
| Address | Plain text: `Kab. Klaten, Jawa Tengah` |

## Testing Strategy

### Validation Checks (Manual)

| # | Check | Pass Condition |
|---|---|---|
| 1 | HTML validity | `npx html-validate index.html` → 0 errors |
| 2 | Breakpoint 320px | Single-column, hamburger menu visible, no horizontal scroll |
| 3 | Breakpoint 768px | Tablet layout, navbar horizontal, cards adapt |
| 4 | Breakpoint 1024px | Laptop layout, multi-column where appropriate |
| 5 | Breakpoint 1440px | Desktop layout, comfortable max-width |
| 6 | Scrollspy | Navbar link highlights match current section |
| 7 | Scroll animations | Fade-in + slide-up on each section entry |
| 8 | Animation re-trigger | Scroll past section, scroll back → animation replays |
| 9 | Skill chips hover | Glow effect visible on hover |
| 10 | WhatsApp link | Opens `https://wa.me/+6283836186053` |
| 11 | Email link | Opens `mailto:ryan.fahri03@gmail.com` |
| 12 | Hero CTAs | "View My Work" scrolls to `#experience`, "Contact Me" scrolls to `#contact` |
| 13 | Particles/flow | Subtle, non-distracting animated background in hero |
| 14 | Load performance | LCP < 2.5s on throttled connection |
| 15 | Animation FPS | 60fps during scroll animations (DevTools FPS meter) |
| 16 | Content accuracy | All roles, dates, skills, certifications match `/tmp/cv-ryan.txt` |
| 17 | Keyboard navigation | All interactive elements reachable and focusable |
| 18 | Accessibility | Semantic HTML, aria labels on nav, sufficient color contrast |

### Performance Budget

- Total page weight: < 500 KB (all assets)
- LCP: < 2.5s
- CLS: < 0.1
- TBT: < 200ms

## Boundaries

### Always Do

- All personal data (phone, email, address, dates, companies, skills, certifications) must match `/tmp/cv-ryan.txt` exactly — no fabrication
- English (International) UI copy throughout
- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- Accessible: keyboard-navigable, focus-visible states, aria labels on nav
- Responsive at all 4 breakpoints (320/768/1024/1440)
- Sticky navbar with scrollspy active-state highlighting
- Glassmorphism aesthetic with dark techy theme
- All 6 sections present and ordered: Hero → About → Experience → Skills → Education → Contact

### Ask First

- Adding any JavaScript framework or build system beyond Tailwind CLI
- Adding GSAP, Framer Motion, or any animation library (CSS transitions first)
- Changing any content fact from the CV source
- Adding backend, forms, analytics, or third-party services
- Adding a profile photo / avatar (not in CV source)
- Changing the contact details (phone, email, address)
- Adding a new section not listed above

### Never Do

- Fabricate or modify credentials, employers, dates, or certifications
- Commit secrets or sensitive personal data beyond what's already in the CV
- Remove accessibility features (focus states, aria labels, semantic HTML) for visual effect
- Use `alert()`, `prompt()`, or `confirm()` for any UI interaction
- Add auto-playing media (video/audio)
- Use `!important` in CSS except for override edge cases
- Exceed 500 KB total page weight

## Success Criteria

1. All 6 sections render correctly at all 4 breakpoints (320/768/1024/1440)
2. Sticky navbar with glassmorphism + scrollspy active highlighting works
3. Hero section has animated particle/flow background, glass card with name/title/location, and both CTAs functional
4. Each content section is a glassmorphism card with fade-in + slide-up on scroll, re-triggerable
5. Skills section renders as interactive chips with hover glow
6. Footer contact panel: WhatsApp → `wa.me/+6283836186053`, Email → `mailto:ryan.fahri03@gmail.com`, address as plain text
7. All content matches `/tmp/cv-ryan.txt` exactly
8. HTML validates with 0 errors
9. Animations maintain 60fps
10. LCP < 2.5s on throttled connection
11. English (International) copy throughout
12. Single HTML file, no routing, no subpages

## Open Questions

- Deploy target not specified (default: GitHub Pages)
- Tailwind via CDN vs CLI (default: CLI for production)
- GSAP vs pure CSS animations (default: CSS first)
- Profile photo / avatar not in CV source (default: text-only hero)
- No forms or backend — contact is link-out only (WhatsApp/Email)
