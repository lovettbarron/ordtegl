# Milestone v1: Ordtegl Public Site

**Status:** ✅ SHIPPED 2026-01-31
**Phases:** 1-4
**Total Plans:** 8

## Overview

This roadmap delivered a Jekyll-based public website for the Ordtegl iOS app, hosted on GitHub Pages. The journey started with Jekyll infrastructure and critical legal compliance pages (privacy policy, terms of service) to unblock App Store submission, then built out user support documentation, a landing page for potential users, and finally press resources. Each phase deployed to GitHub Pages so the privacy policy URL was live as early as possible.

## Phases

### Phase 1: Foundation & Legal Pages

**Goal**: Site is live with Jekyll infrastructure and critical legal compliance pages that satisfy App Store requirements
**Depends on**: Nothing (first phase)
**Plans**: 5 plans

Plans:
- [x] 01-01-PLAN.md — Jekyll foundation with config, Gemfile, and warm neutrals SASS design system
- [x] 01-02-PLAN.md — Site structure with default layout, header, footer, and navigation
- [x] 01-03-PLAN.md — Privacy policy page with full data practice disclosures
- [x] 01-04-PLAN.md — Terms of service page with exam disclaimer and legal terms
- [x] 01-05-PLAN.md — Deploy to GitHub Pages and verify live URLs

**Details:**

Requirements covered: SITE-01, SITE-02, SITE-03, SITE-04, SITE-05, PRIV-01 through PRIV-14, TERMS-01 through TERMS-08

Success Criteria achieved:
1. Privacy policy page accessible at ordtegl-public.github.io/privacy/ with stable URL
2. User can read privacy policy in plain language covering PostHog analytics, backend sync, Sign in with Apple, and content error reporting
3. Terms of service page accessible at ordtegl-public.github.io/terms/ with stable URL
4. Site displays correctly on mobile devices with warm neutrals design aesthetic
5. Site deployed to GitHub Pages and publicly accessible via HTTPS

### Phase 2: Support & FAQ

**Goal**: Users can find support contact information and clear account deletion instructions
**Depends on**: Phase 1
**Plans**: 1 plan

Plans:
- [x] 02-01-PLAN.md — Support page with contact info, account deletion, and FAQ

**Details:**

Requirements covered: SUPP-01, SUPP-02, SUPP-03, SUPP-04

Success Criteria achieved:
1. Support page accessible at ordtegl-public.github.io/support/ with stable URL
2. User can find contact email (alb+ordtegl@andrewlb.com) displayed prominently
3. User can read step-by-step account deletion instructions
4. User can find answers to common questions in FAQ section (12 items)

### Phase 3: Landing Page

**Goal**: Potential users can discover the app, understand its value, and download from App Store
**Depends on**: Phase 2
**Plans**: 1 plan

Plans:
- [x] 03-01-PLAN.md — Landing page with hero, features, screenshots, and App Store link

**Details:**

Requirements covered: LAND-01, LAND-02, LAND-03, LAND-04, LAND-05, LAND-06

Success Criteria achieved:
1. Landing page accessible at ordtegl-public.github.io/ (root URL)
2. User can read clear app description and understand value proposition
3. User can click App Store download badge/link
4. User can view 3 app screenshots (placeholder SVGs)
5. User can see exam prep disclaimer visible on landing page

### Phase 4: Press Kit & Attribution

**Goal**: Media can access press resources and legal attributions are properly displayed
**Depends on**: Phase 3
**Plans**: 1 plan

Plans:
- [x] 04-01-PLAN.md — Press kit page with icons, screenshots, copyable descriptions, and attributions

**Details:**

Requirements covered: PRESS-01, PRESS-02, PRESS-03, PRESS-04, PRESS-05, ATTR-01, ATTR-02

Success Criteria achieved:
1. Press kit page accessible at ordtegl-public.github.io/press/ with stable URL
2. User can download app icon in multiple sizes (placeholder SVGs)
3. User can download high-resolution app screenshots (placeholder SVGs)
4. User can copy short and long app descriptions
5. COR attribution displayed (OpenSubtitles removed as not required)

---

## Milestone Summary

**Key Decisions:**

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Jekyll over other SSGs | Native GitHub Pages support, no build action needed | ✓ Good |
| Email-only support | User preference, simpler than contact form | ✓ Good |
| Single language (English) | Reduces scope, can add Danish later | ✓ Good |
| github-pages gem | Ensures local dev matches production | ✓ Good |
| Warm neutrals palette | Matches Ordtegl iOS app aesthetic | ✓ Good |
| Native details/summary | Better accessibility than JS accordions | ✓ Good |
| Placeholder screenshots | Real screenshots require production app | ✓ Good |
| Data-driven press content | Separation of content from presentation | ✓ Good |

**Issues Resolved:**

- Asset paths missing relative_url filter (fixed in commit 9dae55b)
- Privacy policy data controller name incorrect (fixed in commit a0373ee)
- OpenSubtitles attribution not required (removed in commit 6e4d887)

**Issues Deferred:**

None

**Technical Debt Incurred:**

- Placeholder screenshots need replacement with real app screenshots before launch
- Placeholder press icons need replacement with real app icon
- App Store URL is placeholder until app is published

---

*For current project status, see .planning/PROJECT.md*
*Archived: 2026-01-31 as part of v1 milestone completion*
