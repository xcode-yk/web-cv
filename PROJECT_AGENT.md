# PROJECT_AGENT.md

> Status: Draft v1.0 · Date: 2026-08-01 · Type: Hermes Agent Configuration

## Project Identity

**Project:** Ryan Fahri Atanto — Professional Portfolio Website
**Type:** New project (single-page static portfolio)
**Root:** `/root/web-cv/`

## Hermes Capabilities for This Project

### Available Tools
- `read_file` — Read project files
- `write_file` — Create/overwrite files
- `patch` — Targeted find-and-replace edits
- `terminal` — Run shell commands (serve, validate, build)
- `search_files` — Find files by pattern
- `delegate_task` — Spawn sub-agents for parallel work
- `skill_view` — Load skill instructions
- `clarify` — Ask user questions
- `todo` — Manage task list

### Available Skills (Loaded)
1. `agent-orchestrator` — Multi-agent workflow engine
2. `spec-driven-development` — PRD/SRS creation
3. `planning-and-task-breakdown` — Task decomposition
4. `design-an-interface` — UI design exploration
5. `frontend-ui-engineering` — UI component building
6. `test-runner` — Code verification
7. `doc-writer` — Documentation generation
8. `documentation-and-adrs` — ADR format & standards
9. `delegation-patterns` — Reliable sub-agent delegation
10. `interview-me` — Requirements extraction
11. `grill-me` / `grilling` — Stress-test planning
12. `idea-refine` — Concept refinement

## Workflow Configuration

### Phase Order (Mandatory for New Projects)
1. **Phase 1:** Skill Discovery & Loading
2. **Phase 2:** Requirement Gathering (GRILL)
3. **Phase 3:** Documentation Creation (PRD, SRS, DESIGN, SKILLS, MEMORY, AGENT, README)
4. **Phase 4:** Implementation (BUILD → VERIFY → REVIEW → SHIP)

### Current Phase
**Phase 3: Documentation Creation — COMPLETE**
All 7 documentation files created and approved.

### Next Phase
**Phase 4: Implementation**
- Read all PROJECT_*.md files
- Load skills per PROJECT_SKILLS.md
- Execute tasks per todo.md
- Delegate to sub-agents with full context

## Sub-Agent Rules

### Before Any Delegation
1. Sub-agent MUST read all PROJECT_*.md files in `/root/web-cv/`
2. Sub-agent MUST load skills listed in PROJECT_SKILLS.md
3. Sub-agent context MUST include WAJIB enforcement
4. Sub-agent context MUST include absolute paths
5. Sub-agent MUST verify output on disk before reporting

### Delegation Context Template
```
skill_view('[main-skill]'). skill_view('[sub-skill-1]'). skill_view('[sub-skill-2]').
Ikuti How-to-Execute dari SEMUA skill.
WAJIB write file. WAJIB verifikasi file exists.

Project: /root/web-cv/
Venv: source /root/web-cv/.venv/bin/activate (if dependencies needed)

Goal: [specific goal with quantity floor]
Output: [exact path]
```

### Model Routing
| Task Type | Model |
|---|---|
| HTML/CSS/JS implementation | `gc/gemini-2.5-flash` |
| Code review | `oz/deepseek-v4-flash-free` |
| Documentation | `oz/deepseek-v4-flash-free` |
| Testing | `gc/gemini-2.5-flash-lite` |

## Project Conventions

### File Naming
- All project docs: `PROJECT_*.md` (uppercase, underscore, .md)
- Source: `index.html`, `src/main.js`, `src/input.css`
- Built: `dist/output.css` (gitignored)

### Content Rules
- All personal data must match CV source exactly
- English (International) UI copy
- No fabrication of credentials, dates, or roles
- No secrets in committed files

### Code Style
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- BEM-ish class naming for custom CSS
- Vanilla ES6+, no framework
- Single `h1` per page (hero name)
- Config object at top of `main.js` for contact details

## Gate Checklist

Before proceeding to next phase, verify:
- [ ] All PROJECT_*.md files exist and are current
- [ ] All skills loaded for current phase
- [ ] User approved each gate
- [ ] Sub-agent context includes all required skills
- [ ] Output verified on disk
- [ ] No broken existing tests
