# PROJECT_MEMORY.md

> Status: Draft v1.0 · Date: 2026-08-01 · Type: Project Memory

## Project Context

**Project Name:** Ryan Fahri Atanto — Professional Portfolio Website
**Location:** `/root/web-cv/`
**Type:** New project (single-page static portfolio)
**Status:** In progress — documentation phase complete, ready for implementation

## User Profile

- **Name:** Ryan Fahri Atanto
- **Role:** Network Operation Engineer
- **Location:** Kab. Klaten, Jawa Tengah
- **Phone:** +62 838 3618 6053
- **Email:** ryan.fahri03@gmail.com
- **Experience:** 4+ years in ISP network operations
- **Education:** SMK Muhammadiyah 1 Klaten Utara (Teknik Komputer dan Jaringan, 2016–2019)

## User Preferences

### UI/UX Preferences (CRITICAL — remember always)
- **Hates static, "demo-like" UI** — wants dynamic, professional, creative interfaces
- **Full interactive elements** — hero section must be interactive, not static
- **Re-triggering scroll animations** — fade+slide animations must replay when user scrolls up and down
- **Aesthetically pleasing components** — not just functional, but visually polished
- **Glassmorphism style** — translucent, blurred backgrounds
- **Dark techy theme** — deep navy/charcoal backgrounds, cool accent colors
- **Modern-minimalist font** — Inter or Poppins
- **Subtle animated background** — particles/flow in hero, not distracting
- **Interactive footer** — contact panel with hover glow

### Workflow Preferences
- **Documentation-first** — PRD/SRS/DESIGN must exist before any code
- **Skill-driven development** — always load relevant skills before coding
- **Sub-agent delegation** — use sub-agents for implementation tasks
- **No manual coding** — user explicitly corrected this behavior repeatedly
- **WAJIB enforcement** — sub-agents must follow strict instructions

### Language
- **Website language:** English (International)
- **Target audience:** General/international

## CV Data Summary (from `/tmp/cv-ryan.txt`)

### Work Experience
1. **PT Supra Primatama Nusantara (Biznet)** — Network Operation Engineer (Mar 2025 – Present)
   - 3-7 customer tickets/day, SLA compliance
   - ODP preventive maintenance
   - ONT/GPON configuration, OTDR testing
   - Cross-team collaboration

2. **PT Boombas Carlo Medianet** — Network Engineer (Feb 2021 – Jan 2024)
   - 4-8 tickets/day
   - Install/configure/activate customer internet
   - Wireless AP antenna pointing, tower equipment
   - FTTX network infrastructure

3. **Griya Persada Convention Hotel & Resort Kaliurang** — Housekeeping Public Area (Jul 2024 – Mar 2025)
   - Public area cleanliness
   - High-season efficiency
   - Guest request handling
   - Cross-department communication

### Skills
- Basic MikroTik, LAN, OTDR, FTTX Networks, Router Configuration, ONT
- Ping/Tracert/IP Configuration, Problem Solving, Teamwork, Network Troubleshooting

### Education
- SMK Muhammadiyah 1 Klaten Utara — Teknik Komputer dan Jaringan (Aug 2016 – Jul 2019)

### Certificate
- Certification of Competencies – OJT, Griya Persada Convention Hotel & Resort Kaliurang (Jan 2020 – Present)

### Organization
- OSIS – Section of Arts & Sports, Event Committee (Oct 2016 – Jan 2019)
- Volunteer – Bersih Gunung Merbabu (Feb 2018)

## Design Decisions Log

| # | Decision | Rationale | Date |
|---|---|---|---|
| 1 | Single-page portfolio | User wants personal branding, not job application portal | 2026-08-01 |
| 2 | English (international) | Target audience is international, CV already in English | 2026-08-01 |
| 3 | Glassmorphism aesthetic | User explicitly requested glassmorphism style | 2026-08-01 |
| 4 | Dark techy theme | Complements glassmorphism, professional for Network Engineer | 2026-08-01 |
| 5 | CSS-first animations | Zero JS animation library dependency, smaller bundle | 2026-08-01 |
| 6 | Tailwind CSS via CLI | Custom utilities for glassmorphism, production minification | 2026-08-01 |
| 7 | WhatsApp + Email in footer | User confirmed these are the contact methods | 2026-08-01 |
| 8 | Address as plain text | No link needed for address | 2026-08-01 |
| 9 | No profile photo | Not in CV source, text-only hero | 2026-08-01 |
| 10 | No backend/forms | Static site, link-out only for contact | 2026-08-01 |

## Open Questions (Unresolved)
- Deploy target (GitHub Pages / Netlify / Vercel / local only) — default: GitHub Pages
- Profile photo — user may provide one later
- Social media links — user may want to add LinkedIn/GitHub/etc.
- Additional sections — user may want to add projects/certifications detail pages later

## Phase Progress
| Phase | Status |
|---|---|
| Phase 1: Skill Discovery & Loading | ✅ Complete |
| Phase 2: Requirement Gathering (GRILL) | ✅ Complete |
| Phase 3: Documentation Creation | ✅ Complete (PRD, SRS, DESIGN, SKILLS, MEMORY, AGENT, README) |
| Phase 4: PLAN | ✅ Complete (todo.md created, 5 vertical slices with dependency graph) |
| Phase 4b: User Approval Gate | ⏳ Pending user approval before BUILD |
| Phase 5: BUILD | ⏳ Pending user approval |
| Phase 6: VERIFY | ⏳ Pending BUILD completion |
| Phase 7: REVIEW | ⏳ Pending REVIEW completion |
| Phase 8: SHIP | ⏳ Pending REVIEW completion |
## Key Files
## Key Files
- `/root/web-cv/PROJECT_PRD.md` — Product requirements
- `/root/web-cv/PROJECT_SRS.md` — Technical requirements
- `/root/web-cv/PROJECT_DESIGN.md` — Visual & architectural design
- `/root/web-cv/PROJECT_SKILLS.md` — Skills registry & sub-agent rules
- `/root/web-cv/PROJECT_MEMORY.md` — This file
- `/root/web-cv/PROJECT_AGENT.md` — Hermes config for this project
- `/root/web-cv/PROJECT_README.md` — Project overview
- `/root/web-cv/todo.md` — Implementation task list
- `/tmp/cv-ryan.txt` — Extracted CV data source
