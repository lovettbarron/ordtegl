# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-01-30)

**Core value:** Provide a comprehensive, accessible privacy policy that satisfies App Store requirements and builds user trust, while giving the app a professional public presence.
**Current focus:** Phase 4: Press Kit & Attribution

## Current Position

Phase: 4 of 4 (Press Kit & Attribution)
Plan: 1 of 1 complete
Status: Phase complete
Last activity: 2026-01-31 - Completed 04-01-PLAN.md (Press kit with icons, screenshots, descriptions, attributions)

Progress: [████████████████████] 100% (All phases complete)

## Performance Metrics

**Velocity:**
- Total plans completed: 8
- Average duration: 5 min
- Total execution time: 0.7 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 01    | 5     | 33 min | 7 min    |
| 02    | 1     | 3 min  | 3 min    |
| 03    | 1     | 3 min  | 3 min    |
| 04    | 1     | 3 min  | 3 min    |

**Recent Trend:**
- Last 5 plans: 3, 15, 3, 3, 3
- Trend: Consistent 3-min execution for content-focused phases

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

| Decision | Phase-Plan | Rationale | Impact |
|----------|-----------|-----------|---------|
| Use github-pages gem | 01-01 | Ensures local dev matches production exactly | Locked to Jekyll 3.10.0 but eliminates deployment surprises |
| Warm neutrals palette | 01-01 | Matches Ordtegl iOS app aesthetic | Calming, accessible colors for language learning context |
| Semantic color tokens | 01-01 | Enables theme changes by remapping only | Easier maintenance, future theme variations possible |
| System font stack | 01-01 | Zero latency, familiar to users | Better performance, no web font loading |
| Ruby 3.3.7 via rbenv | 01-01 | System Ruby too old for github-pages gem | Consistent Ruby across development environments |
| Data-driven navigation | 01-02 | Single source of truth for site structure | Navigation from _data/navigation.yml, easy to modify |
| Mobile-first responsive | 01-02 | Simpler CSS, better mobile performance | Base mobile styles with desktop overrides at 768px |
| Semantic HTML5 | 01-02 | Better accessibility, SEO, code clarity | Header, nav, main, footer elements for document structure |
| User ID disclosure | 01-03 | Transparency for App Store and GDPR | Analytics linked to anonymous user ID for cohort analysis |
| Plain language summaries | 01-03 | Improves accessibility without compromising legal precision | Privacy policy readable by non-legal users |
| Step-by-step deletion | 01-03 | GDPR right to erasure requires clear process | Users can easily exercise deletion rights |
| Prominent exam disclaimer | 01-04 | Critical legal requirement for exam prep claims | PD2, PD3 explicitly mentioned as non-affiliated bodies |
| Comprehensive liability limits | 01-04 | Protect against vocabulary accuracy/exam claims | Three-part liability section with maximum liability cap |
| Danish jurisdiction | 01-04 | App published from Danish App Store account | Disputes resolved under Danish legal system |
| GitHub Pages deployment | 01-05 | Native GitHub integration, stable URLs for App Store | Site automatically rebuilds on push to main |
| Placeholder landing page | 01-05 | Only need legal pages accessible for Phase 1 | Full landing page comes in Phase 3 |
| GitHub Actions workflow | 01-05 | Consistent deployment with proper permissions | Faster builds with Bundler caching |
| Native details/summary | 02-01 | Better accessibility than JS accordions | No JavaScript required, keyboard accessible |
| Component styles pattern | 02-01 | Reusable UI component styling | _components.scss for accordion and future components |
| 12 FAQ items | 02-01 | Comprehensive coverage of user questions | App basics, account, technical, exam prep topics |
| Visible deletion instructions | 02-01 | Apple/GDPR requirement for accessible deletion | Not hidden in accordion, clear 5-step process |
| Practice-focused headline | 03-01 | Position as practice tool not just exam prep | "Master Danish Words Through Practice" emphasizes spaced repetition |
| Placeholder screenshots | 03-01 | Real screenshots require production app | SVG mockups as placeholders, user replaces before launch |
| Visible landing disclaimer | 03-01 | Same exam disclaimer prominence as legal pages | Exam disclaimer visible on landing page (not just terms) |
| Gradient hero background | 03-01 | Visual interest within design system | Subtle cream-to-surface gradient for hero depth |
| Native Clipboard API | 04-01 | Well-supported in modern browsers | No external library needed for copy functionality |
| Data-driven press content | 04-01 | Separation of content from presentation | _data/press.yml for structured press content |
| SVG placeholder assets | 04-01 | Real assets require production app | All press icons/screenshots are placeholders to replace |
| Attribution transparency | 04-01 | COR required, OpenSubtitles for transparency | Both attributions included pending license verification |

**From PROJECT.md:**
- Jekyll over other SSGs: Native GitHub Pages support, no build action needed
- Email-only support: User preference, simpler than contact form
- Single language (English): Reduces scope, can add Danish later if needed

### Pending Todos

None yet.

### Blockers/Concerns

None yet.

## Session Continuity

Last session: 2026-01-31 12:16
Stopped at: Completed 04-01-PLAN.md (Press kit with icons, screenshots, descriptions, attributions) - **ALL PHASES COMPLETE**
Resume file: None
Next: Project complete - replace placeholder assets before launch

---
*Last updated: 2026-01-31*
