# PROJECT_DESIGN.md

> Status: Draft v1.0 · Date: 2026-08-01 · Type: Design Document

## 1. Visual Design System

### 1.1 Aesthetic Direction
- **Primary Style:** Glassmorphism (translucent, blurred cards over warm cream background)
- **Secondary Style:** Warm, earthy Anthropic/Claude theme — off-white cream backgrounds, burnt sienna accents
- **Overall Mood:** Professional, warm, sophisticated — inspired by Anthropic/Claude design language

### 1.2 Color Palette
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#FAF8F5` | Page background (off-white cream) |
| `--bg-secondary` | `#E8DDD3` | Secondary section background (warm sand) |
| `--bg-card` | `#F5E6D3` | Card background (soft peach) |
| `--surface` | `#FFFFFF` | Surface / modal background (cream white) |
| `--text-primary` | `#191716` | Main body text (deep charcoal) |
| `--text-secondary` | `#747069` | Secondary text, dates, labels (warm grey) |
| `--accent` | `#993A14` | Links, CTAs, active states (burnt sienna) |
| `--accent-hover` | `#7D2F10` | Accent hover state (darker burnt sienna) |
| `--accent-light` | `#C44D2B` | Accent light / highlights (light sienna) |
| `--sage` | `#6B8F71` | Success status (muted sage) |
| `--amber` | `#D4A853` | Warning status (warm amber) |
| `--coral` | `#C75B5B` | Error status (soft coral) |
| `--border` | `#E5DDD3` | Borders, dividers (warm beige) |
| `--glass-border` | `rgba(255, 255, 255, 0.5)` | Glass card border (light frosted) |
| `--glass-bg` | `rgba(255, 255, 255, 0.6)` | Glass card background (light frosted) |
| `--glass-blur` | `16px` | Backdrop blur for glassmorphism |

### 1.3 Typography
| Role | Font | Weight | Size (Desktop) |
|---|---|---|---|
| H1 (Hero Name) | Inter | 700 (Bold) | 3rem (48px) |
| H2 (Section Title) | Inter | 600 (SemiBold) | 1.75rem (28px) |
| H3 (Job Title) | Inter | 500 (Medium) | 1.25rem (20px) |
| Body | Inter | 400 (Regular) | 1rem (16px) |
| Small / Meta | Inter | 300 (Light) | 0.875rem (14px) |

### 1.4 Glassmorphism Card Pattern
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  padding: 2rem;
}
```

### 1.5 Animation Specifications
| Trigger | Effect | Duration | Easing |
|---|---|---|---|
| Scroll into view | Fade-in + translateY(30px) → 0 | 0.6s | `ease-out` |
| Scroll up then down over same section | Re-trigger (animation replays) | — | — |
| Hover on skill chips | Box-shadow glow (accent color) | 0.3s | `ease` |
| Hover on CTA buttons | Scale 1.05 + accent border glow | 0.2s | `ease` |
| Navbar link active | Color shift to accent | 0.2s | `ease` |

**Implementation approach:** CSS transitions + IntersectionObserver for scroll-triggered animations. No heavy JS animation library unless CSS proves insufficient.

### 1.6 Layout Grid
| Breakpoint | Columns | Navbar | Content |
|---|---|---|---|
| 320px (Mobile) | 1 | Hamburger menu, sticky | Single column, stacked |
| 768px (Tablet) | 2 | Horizontal, sticky | 2-col for skills/certs |
| 1024px (Laptop) | 2-3 | Horizontal, sticky | Timeline alternating L/R |
| 1440px (Desktop) | 3 max | Horizontal, sticky | Centered container, max-width 1200px |

### 1.7 Navigation
- **Type:** Sticky, floating, glassmorphism
- **Behavior:** Auto-highlight active section (scrollspy via IntersectionObserver)
- **Mobile:** Hamburger toggle, single-column dropdown
- **Desktop:** Horizontal links, smooth scroll to section

### 1.8 Hero Section Design
- **Background:** Subtle animated particle/flow effect (dark palette, low opacity, minimal movement)
- **Layout:** Centered glassmorphism card containing name, title, location
- **CTAs:** Two buttons below card — "View My Work" (scrolls to Experience), "Contact Me" (scrolls to Footer)
- **Scroll indicator:** Small animated arrow/bounce at bottom of hero

### 1.9 Footer Design
- **Layout:** Interactive contact panel with hover glow effect
- **Buttons:** WhatsApp (links to `wa.me/+6283836186053`), Email (links to `mailto:ryan.fahri03@gmail.com`)
- **Address:** Plain text, no link
- **Social links:** Placeholder slots for future social media icons

## 2. Architectural Decisions

### ADR-001: Single-Page Static Site
**Context:** Portfolio website for personal branding, no backend needed, no forms, no database.
**Decision:** Single `index.html` with all sections, vanilla JS for interactivity, Tailwind CSS for styling.
**Consequences:** Fastest possible load time, no build step required for v1, easy to deploy to any static host.

### ADR-002: CSS-First Animations
**Context:** Need scroll-triggered fade+slide animations and hover glow effects.
**Decision:** Use CSS transitions and IntersectionObserver API. Only consider GSAP if CSS proves insufficient.
**Consequences:** Zero JS animation library dependency, smaller bundle size, smoother 60fps performance.

### ADR-003: Tailwind CSS via CLI Build
**Context:** Need glassmorphism utilities and custom theme.
**Decision:** Tailwind CSS via CLI build pipeline (`input.css` → `dist/output.css`).
**Consequences:** Custom utility classes for glassmorphism, production minification, tree-shaking for unused styles.

### ADR-004: English (International) Copy
**Context:** Target audience is international, CV already has English paragraphs.
**Decision:** All visible UI text in English.
**Consequences:** Broader reach, consistent with professional networking norms.

## 3. Component Map

| Component | Type | Sections | Notes |
|---|---|---|---|
| `Navbar` | Navigation | All pages (sticky) | Scrollspy, hamburger on mobile |
| `HeroCard` | Glassmorphism card | Hero | Name, title, location, CTAs |
| `SectionCard` | Glassmorphism card | About, Education, Certs, Org | Reusable card pattern |
| `TimelineItem` | Glassmorphism card | Experience | Alternating L/R on desktop |
| `SkillChip` | Interactive tag | Skills | Hover glow, click filter |
| `ContactPanel` | Interactive panel | Footer | WhatsApp, Email, address |
| `ParticleBg` | Canvas/animation | Hero background | Subtle, non-distracting |

## 4. File Manifest

```
web-cv/
├── index.html              # Single page, all 6 sections
├── src/
│   ├── input.css           # Tailwind directives + custom theme
│   └── main.js             # Scrollspy, hamburger, animations, particles
├── assets/
│   └── (fonts, favicon)    # Optional
├── dist/
│   └── output.css          # Built CSS (gitignored)
├── PROJECT_PRD.md
├── PROJECT_SRS.md
├── PROJECT_DESIGN.md       # This document
├── PROJECT_SKILLS.md
├── PROJECT_MEMORY.md
├── PROJECT_AGENT.md
├── PROJECT_README.md
└── todo.md
```
