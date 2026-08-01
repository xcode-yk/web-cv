# Ryan Fahri Atanto — Professional Portfolio

> **Network Operation Engineer** | Kab. Klaten, Jawa Tengah
> Personal branding portfolio — single-page, glassmorphism, dark techy theme.

## Quick Start

### Local Development
```bash
# Serve locally (Python stdlib — no install)
python3 -m http.server 8080

# Open in browser
# http://localhost:8080
```

### Build (Tailwind CSS via CLI)
```bash
npm install -D tailwindcss
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch   # dev
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify  # prod
```

### Validate HTML
```bash
npx html-validate index.html
```

### Deploy (GitHub Pages)
```bash
git push origin main   # GH Pages auto-deploy if enabled
```

## Project Structure

```
web-cv/
├── index.html                  # Single page, all 6 sections
├── src/
│   ├── input.css               # Tailwind directives + custom theme
│   └── main.js                 # Scrollspy, hamburger, animations, particles
├── assets/
│   └── (fonts, favicon, optional images)
├── dist/                       # Built CSS output (gitignored)
├── PROJECT_PRD.md              # Product requirements
├── PROJECT_SRS.md              # Technical requirements
├── PROJECT_DESIGN.md           # Visual & architectural design
├── PROJECT_SKILLS.md           # Skills registry & sub-agent rules
├── PROJECT_MEMORY.md           # Project context & decisions log
├── PROJECT_AGENT.md            # Hermes agent config for this project
├── PROJECT_README.md           # This file
└── todo.md                     # Implementation task list
```

## Sections

1. **Hero** — Full-viewport intro with animated particle background, glassmorphism card, CTA buttons
2. **About** — Professional summary with key stats
3. **Experience** — Vertical timeline of work history (Biznet, Boombas Carlo, Hotel)
4. **Skills** — Interactive chips with hover glow effect
5. **Education & Certifications** — SMK background and OJT certificate
6. **Contact/Footer** — WhatsApp, Email, address (plain text)

## Design Specs

- **Style:** Glassmorphism over dark techy background
- **Font:** Inter / Poppins (modern-minimalist)
- **Animations:** Fade+slide on scroll (re-triggerable), hover glow on skill chips
- **Responsive:** 320px / 768px / 1024px / 1440px breakpoints
- **Language:** English (International)

## Contact

- **WhatsApp:** [+62 838 3618 6053](https://wa.me/+6283836186053)
- **Email:** [ryan.fahri03@gmail.com](mailto:ryan.fahri03@gmail.com)
- **Address:** Kab. Klaten, Jawa Tengah

## License

Personal project. All content sourced from Ryan Fahri Atanto's CV.
