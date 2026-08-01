# PROJECT_SKILLS.md

> Status: Draft v1.0 · Date: 2026-08-01 · Type: Project Skills Registry

## Project: Ryan Fahri Atanto — Professional Portfolio Website

### Skills Loaded (Phase 1)

| # | Skill Name | Role in Project | Phase Used |
|---|---|---|---|
| 1 | `agent-orchestrator` | Workflow engine — drives GRILL → DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP | All |
| 2 | `spec-driven-development` | Creates PRD/SRS before coding | DEFINE |
| 3 | `planning-and-task-breakdown` | Breaks spec into implementable tasks | PLAN |
| 4 | `design-an-interface` | Generates multiple UI design options | DEFINE (design) |
| 5 | `frontend-ui-engineering` | Builds production-quality UI components | BUILD |
| 6 | `test-runner` | Verifies code correctness | VERIFY |

### Skills Referenced (not loaded, but available)

| Skill | When to Load |
|---|---|
| `grill-me` | If user wants to stress-test design decisions |
| `interview-me` | If requirements need clarification |
| `delegation-patterns` | When spawning sub-agents for implementation |
| `documentation-and-adrs` | For writing ADRs (already used in DESIGN.md) |
| `doc-writer` | For project documentation |
| `codereviewer` | For code review phase |
| `security-and-hardening` | For security audit (if needed) |
| `shipping-and-launch` | For deployment prep |

### Sub-Agent Rules

1. **All sub-agents MUST read all PROJECT_*.md files before coding.**
2. **All sub-agents MUST load skills listed in this file before starting their task.**
3. **All sub-agents MUST use WAJIB enforcement in their context strings.**
4. **Sub-agents MUST NOT freestyle code without skill guidance.**
5. **Sub-agents MUST verify output on disk before reporting completion.**

### Task-to-Skill Mapping

| Task | Primary Skill | Secondary Skills |
|---|---|---|
| Write spec (PRD/SRS) | `spec-driven-development` | `design-an-interface` |
| Break down tasks | `planning-and-task-breakdown` | `agent-orchestrator` |
| Design UI | `design-an-interface` | `frontend-ui-engineering` |
| Build HTML structure | `frontend-ui-engineering` | — |
| Build CSS (Tailwind + glassmorphism) | `frontend-ui-engineering` | — |
| Build JS (scrollspy, animations) | `frontend-ui-engineering` | — |
| Make responsive | `frontend-ui-engineering` | — |
| Verify functionality | `test-runner` | — |
| Code review | `codereviewer` | `security-and-hardening` |
| Write documentation | `doc-writer` | `documentation-and-adrs` |

### Model Routing

| Task Type | Sub-Agent Model |
|---|---|
| HTML/CSS/JS implementation | `gc/gemini-2.5-flash` |
| Code review | `oz/deepseek-v4-flash-free` |
| Documentation | `oz/deepseek-v4-flash-free` |
| Testing | `gc/gemini-2.5-flash-lite` |
