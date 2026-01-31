---
milestone: v1
audited: 2026-01-31
status: passed
scores:
  requirements: 33/33
  phases: 4/4
  integration: 3/3
  flows: 4/4
gaps:
  requirements: []
  integration: []
  flows: []
tech_debt:
  - phase: 03-landing-page
    items:
      - "Placeholder screenshots need replacement with real app screenshots"
      - "Placeholder caption 'Screenshots are placeholders' needs removal"
      - "App Store URL is placeholder (will 404 until app published)"
  - phase: 04-press-kit-attribution
    items:
      - "All press icons are SVG placeholders"
      - "All press screenshots are SVG placeholders"
---

# v1 Milestone Audit Report

**Milestone:** v1 - Ordtegl Public Website
**Audited:** 2026-01-31
**Status:** Passed

## Executive Summary

All 33 requirements are satisfied. All 4 phases completed successfully. Critical integration issues fixed in commit 9dae55b. Remaining items are placeholder assets to be replaced before public launch.

## Requirements Coverage

| Category | Satisfied | Total | Status |
|----------|-----------|-------|--------|
| Privacy Policy (PRIV-*) | 14 | 14 | ✓ Complete |
| Terms of Service (TERMS-*) | 8 | 8 | ✓ Complete |
| Landing Page (LAND-*) | 6 | 6 | ✓ Complete |
| Support (SUPP-*) | 4 | 4 | ✓ Complete |
| Press Kit (PRESS-*) | 5 | 5 | ✓ Complete |
| Attribution (ATTR-*) | 2 | 2 | ✓ Complete |
| Site Infrastructure (SITE-*) | 5 | 5 | ✓ Complete |
| **Total** | **33** | **33** | **100%** |

### Detailed Requirements Status

#### Privacy Policy (Phase 1)
- [x] PRIV-01: Privacy policy page accessible at /privacy/
- [x] PRIV-02: Quick summary section at top
- [x] PRIV-03: Plain language style throughout
- [x] PRIV-04: PostHog analytics disclosure with user identification
- [x] PRIV-05: PostHog EU-US data transfer disclosure
- [x] PRIV-06: Backend sync disclosure (Railway, Sign in with Apple)
- [x] PRIV-07: Content error reporting disclosure
- [x] PRIV-08: User rights section
- [x] PRIV-09: Account deletion instructions
- [x] PRIV-10: Data retention policy
- [x] PRIV-11: GDPR compliance section
- [x] PRIV-12: Contact information (alb+ordtegl@andrewlb.com)
- [x] PRIV-13: Sign in with Apple data handling disclosure
- [x] PRIV-14: Children's privacy section

#### Terms of Service (Phase 1)
- [x] TERMS-01: Terms of service page at /terms/
- [x] TERMS-02: Liability limitations
- [x] TERMS-03: Exam preparation disclaimer (PD2, PD3 mentioned)
- [x] TERMS-04: Acceptable use policy
- [x] TERMS-05: Danish jurisdiction clause
- [x] TERMS-06: Service modification rights
- [x] TERMS-07: User responsibilities
- [x] TERMS-08: Intellectual property notice

#### Support (Phase 2)
- [x] SUPP-01: Support page at /support/
- [x] SUPP-02: Contact email displayed
- [x] SUPP-03: Account deletion instructions (step-by-step, visible)
- [x] SUPP-04: FAQ section (12 items)

#### Landing Page (Phase 3)
- [x] LAND-01: Landing page at root URL
- [x] LAND-02: Clear app description and value proposition
- [x] LAND-03: App Store download badge/link
- [x] LAND-04: App screenshots (3 placeholder SVGs)
- [x] LAND-05: Feature highlights section
- [x] LAND-06: Exam prep disclaimer visible

#### Press Kit (Phase 4)
- [x] PRESS-01: Press kit page at /press/
- [x] PRESS-02: App icon in multiple sizes (3 placeholder SVGs)
- [x] PRESS-03: App screenshots (3 placeholder SVGs)
- [x] PRESS-04: Short app description (copyable)
- [x] PRESS-05: Long app description (copyable)

#### Attribution (Phase 4)
- [x] ATTR-01: OpenSubtitles attribution
- [x] ATTR-02: COR attribution

#### Site Infrastructure (Phase 1)
- [x] SITE-01: Jekyll site structure compatible with GitHub Pages
- [x] SITE-02: Warm neutrals design aesthetic
- [x] SITE-03: Mobile-responsive layout
- [x] SITE-04: Deployed to GitHub Pages
- [x] SITE-05: Deploy after each phase completion

## Phase Completion

| Phase | Status | Plans | Duration | Key Deliverable |
|-------|--------|-------|----------|-----------------|
| 1. Foundation & Legal | ✓ Complete | 5/5 | ~33 min | Jekyll + Privacy + Terms |
| 2. Support & FAQ | ✓ Complete | 1/1 | ~3 min | Support page with FAQ |
| 3. Landing Page | ✓ Complete | 1/1 | ~3 min | Full marketing landing |
| 4. Press Kit & Attribution | ✓ Complete | 1/1 | ~3 min | Press resources |

## Integration Check

### SCSS Design Token Flow
**Status: ✓ CONNECTED**

All 6 SCSS files properly chain through the design system:
- `_variables.scss` → `_base.scss` → `_layout.scss` → `_components.scss` → `_landing.scss` → `_press.scss`

### Layout Inheritance
**Status: ✓ CONNECTED**

All 5 pages inherit from `default.html` layout with consistent header/footer.

### Navigation
**Status: ✓ CONNECTED**

- Header: Home, Privacy, Terms, Support, Press
- Footer: Privacy, Terms, Contact email

### Data Files
**Status: ✓ CONNECTED**

- `navigation.yml` consumed by `header.html`
- `press.yml` consumed by `press.md`

## Critical Integration Issues

**All resolved in commit 9dae55b:**
- ✓ JavaScript path now uses `relative_url` filter
- ✓ Icon asset paths now use `relative_url` filter
- ✓ Screenshot asset paths now use `relative_url` filter

## E2E User Flows

| Flow | Status | Notes |
|------|--------|-------|
| Landing → All Pages | ✓ | Navigation works |
| Legal Page Access | ✓ | Footer and header links work |
| Support FAQ Interaction | ✓ | Accordions and contact email work |
| Press Kit Downloads | ✓ | Fixed in commit 9dae55b |

## Tech Debt Summary

### Placeholders to Replace Before Launch

| Item | Location | Action Required |
|------|----------|-----------------|
| Landing screenshots | `assets/images/screenshots/*.svg` | Replace with real iPhone screenshots |
| Press icons | `assets/press/icons/*.svg` | Replace with real app icons |
| Press screenshots | `assets/press/screenshots/*.svg` | Replace with real screenshots |
| App Store URL | `index.html` lines 10, 71 | Update when app is published |
| Placeholder caption | `index.html` line 56 | Remove before launch |

### Code Fixes Required

None — all critical issues resolved in commit 9dae55b.

## Recommendations

### Before Public Launch
1. Replace placeholder screenshots with actual app screenshots
2. Replace placeholder icons with actual app icon
3. Update App Store URL when app is published
4. Remove placeholder caption from landing page

## Conclusion

The milestone is **complete** for App Store submission. Privacy policy and terms of service URLs are live and accessible. All integration issues have been resolved.

**Recommended Next Step:** Complete milestone and deploy.

---
*Audit completed: 2026-01-31*
*Auditor: gsd-integration-checker*
