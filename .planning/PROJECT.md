# Ordtegl Public Site

## What This Is

A Jekyll-based public website for the Ordtegl Danish vocabulary learning iOS app, hosted on GitHub Pages. Provides App Store compliance pages (privacy policy, terms of service), a marketing landing page, support documentation with FAQ, and press resources with downloadable assets.

## Core Value

Provide a comprehensive, accessible privacy policy that satisfies App Store requirements and builds user trust, while giving the app a professional public presence.

## Requirements

### Validated

- ✓ Landing page with app description and App Store link — v1
- ✓ Privacy policy covering all data collection (PostHog analytics, backend sync, content error reporting) — v1
- ✓ Terms of service for app usage with exam disclaimer — v1
- ✓ Support page with contact email and FAQ — v1
- ✓ Press kit with screenshots, app icon, and description — v1
- ✓ Jekyll site structure compatible with GitHub Pages — v1
- ✓ Automatic deployment to GitHub Pages after each phase — v1
- ✓ COR attribution for vocabulary data — v1

### Active

(None — define for next milestone with `/gsd:new-milestone`)

### Out of Scope

- Contact form — email only per user preference
- Blog/news section — not needed for MVP
- Multi-language support — English only for now
- Custom domain — using github.io subdomain initially
- Analytics on the website itself — unnecessary complexity

## Context

**Current State (v1 shipped 2026-01-31):**
- Live at https://lovettbarron.github.io/ordtegl/
- 1,834 LOC across HTML, Markdown, SCSS, JavaScript, YAML
- Jekyll 3.10.0 with github-pages gem
- Warm neutrals design palette (creams, soft grays, terracotta accents)

**Parent app (Ordtegl):**
- iOS app for learning Danish vocabulary with FSRS spaced repetition
- 3,500 vocabulary items across 32 CEFR-aligned levels (A1-B2)
- Published from Danish App Store account

**Data practices documented:**
- PostHog analytics: Comprehensive navigation/usage tracking, linked to anonymous user ID, opt-out available
- Backend sync (Railway): Progress data only, Sign in with Apple authentication
- Content error reporting: User-initiated, sends content context to PostHog

**Support:**
- Email: alb+ordtegl@andrewlb.com

**Tech Debt (before public launch):**
- Replace placeholder screenshots with real app screenshots
- Replace placeholder press icons with real app icon
- Update App Store URL when app is published

## Constraints

- **Hosting**: GitHub Pages (Jekyll with github-pages gem)
- **Design**: Echoes Ordtegl's warm neutrals aesthetic
- **Privacy policy**: Must be comprehensive and legible for App Store review
- **Deployment**: Changes pushed to GitHub trigger automatic rebuild

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Jekyll over other SSGs | Native GitHub Pages support, no build action needed | ✓ Good |
| Email-only support | User preference, simpler than contact form | ✓ Good |
| Single language (English) | Reduces scope, can add Danish later if needed | ✓ Good |
| github-pages gem | Ensures local dev matches production exactly | ✓ Good |
| Warm neutrals palette | Matches Ordtegl iOS app aesthetic | ✓ Good |
| System font stack | Zero latency, familiar to users | ✓ Good |
| Data-driven navigation | Single source of truth for site structure | ✓ Good |
| Mobile-first responsive | Simpler CSS, better mobile performance | ✓ Good |
| Native details/summary | Better accessibility than JS accordions | ✓ Good |
| Placeholder screenshots | Real screenshots require production app | ✓ Good |
| Data-driven press content | Separation of content from presentation | ✓ Good |

---
*Last updated: 2026-01-31 after v1 milestone*
