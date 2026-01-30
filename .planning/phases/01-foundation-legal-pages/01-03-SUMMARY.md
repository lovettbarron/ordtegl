---
phase: 01-foundation-legal-pages
plan: 03
subsystem: legal
status: complete
completed: 2026-01-30

dependencies:
  requires:
    - phase: 01-02
      provides: Default layout template, header/footer navigation, warm neutrals design system
  provides:
    - comprehensive-privacy-policy
    - app-store-compliant-privacy-disclosure
    - gdpr-compliant-privacy-documentation
  affects:
    - 01-05 (deployment will make /privacy/ URL live)
    - 02-01 (support page will link to privacy policy)

tech-stack:
  added: []
  patterns:
    - legal-document-structure: "Table of contents with anchor links for navigation"
    - plain-language-summaries: "Brief plain-language summaries at start of major sections"
    - privacy-disclosure-pattern: "Organized by purpose (How We Improve, How We Store, etc.)"

key-files:
  created:
    - _pages/privacy-policy.md: "Comprehensive privacy policy covering all Ordtegl data practices"
  modified: []

decisions:
  - id: user-identification-disclosure
    choice: "Disclose that analytics data is linked to anonymous user ID for cohort analysis"
    rationale: "Transparency required by App Store and GDPR, clarifies 'anonymized but user-linked' practice"
    impact: "Users understand data is anonymized but tracked for cohort patterns"

  - id: plain-language-summaries
    choice: "Include brief plain-language summaries at start of major sections"
    rationale: "Improves readability while maintaining legal precision per CONTEXT.md discretion"
    impact: "Privacy policy accessible to non-legal readers while meeting compliance needs"

  - id: step-by-step-deletion
    choice: "Provide detailed step-by-step account deletion instructions"
    rationale: "GDPR right to erasure requires clear deletion process"
    impact: "Users can easily exercise deletion rights, reduces support burden"

metrics:
  duration: 3 min
  tasks_completed: 1
  commits: 1
  files_created: 1
  files_modified: 0

tags:
  - privacy-policy
  - gdpr
  - app-store-compliance
  - posthog
  - railway
  - sign-in-with-apple
  - jekyll
---

# Phase 1 Plan 3: Privacy Policy Summary

**Comprehensive privacy policy at /privacy/ covering PostHog analytics with user identification, Railway backend sync, Sign in with Apple authentication, content error reporting, GDPR compliance, and account deletion instructions**

## Performance

- **Duration:** 3 min
- **Started:** 2026-01-30T22:19:13Z
- **Completed:** 2026-01-30T22:21:56Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Complete privacy policy page at /privacy/ with 13 sections
- PostHog analytics disclosure with explicit user identification note for cohort analysis
- Railway backend sync disclosure with Sign in with Apple authentication details
- Content error reporting section (user-initiated only, sent to PostHog)
- Step-by-step account deletion instructions (Settings > Account > Delete Account)
- GDPR compliance section with legal basis stated (Consent for analytics, Contract for sync)
- Children's privacy section (not intended for under 13)
- Contact email (alb+ordtegl@andrewlb.com) displayed in multiple sections
- Table of contents with anchor links for easy navigation
- Plain language summaries at start of major sections for readability

## Task Commits

Each task was committed atomically:

1. **Task 1: Create privacy policy page with full content** - `26039b0` (feat)

## Files Created/Modified

**Created:**
- `_pages/privacy-policy.md` - Complete privacy policy content (185 lines) covering all Ordtegl data practices with formal legal tone, plain language summaries, and comprehensive disclosures

**Modified:**
- None

## Decisions Made

**1. User identification disclosure in analytics section**
- Explicitly stated that analytics data is linked to anonymous user ID for cohort analysis
- Clarified that individual users are not personally identified in analysis
- Rationale: Transparency required by App Store review and GDPR compliance
- Impact: Users understand data collection practices clearly

**2. Plain language summaries**
- Added brief plain-language summaries at start of major sections
- Maintained formal legal tone in main content
- Rationale: Per CONTEXT.md discretion, improves accessibility without compromising legal precision
- Impact: Privacy policy readable by non-legal users while meeting compliance requirements

**3. Step-by-step account deletion instructions**
- Provided detailed 5-step deletion process
- Listed what gets deleted (progress, data, analytics associations)
- Included fallback contact email for deletion issues
- Rationale: GDPR right to erasure requires clear, accessible deletion mechanism
- Impact: Users can exercise deletion rights easily, reduces support burden

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## Next Phase Readiness

**Ready for:**
- 01-04: Terms of service page (can follow same legal document pattern)
- 01-05: Deployment to GitHub Pages (privacy policy will be live at stable URL)
- App Store submission (critical privacy policy requirement satisfied)

**Blockers:** None

**Concerns:** None

## Verification Performed

**Build verification:**
```bash
bundle exec jekyll build
# ✓ Builds successfully with privacy policy page
# ✓ Front matter correctly parsed (layout: default, permalink: /privacy/)
# ✓ All 13 sections render as HTML
```

**Content verification:**
```bash
curl -s http://localhost:4000/privacy/ | grep -E "<h2"
# ✓ All 12 major sections present (plus Table of Contents)
# ✓ PostHog disclosure includes user identification note
# ✓ Railway and Sign in with Apple mentioned in backend sync section
# ✓ Content error reporting section exists
# ✓ Account deletion instructions with 5-step process
# ✓ Contact email (alb+ordtegl@andrewlb.com) displayed in multiple places
# ✓ GDPR compliance section with legal basis
# ✓ Children's privacy section present
```

**Navigation verification:**
- Header navigation shows "Privacy" link with .active class
- Table of contents anchor links work (e.g., #analytics, #gdpr-compliance)
- Page loads with warm neutrals design (cream backgrounds, terracotta accents)

**Must-haves verification:**
- ✓ Privacy policy accessible at /privacy/ URL
- ✓ PostHog analytics disclosure with user identification noted
- ✓ Backend sync disclosure mentioning Railway and Sign in with Apple
- ✓ Content error reporting disclosure present
- ✓ Account deletion instructions clear and detailed
- ✓ Contact email for privacy inquiries displayed
- ✓ File has 185 lines (exceeds 150 line minimum)
- ✓ Contains "PostHog" (required keyword present)

## Links to Key Files

- `_pages/privacy-policy.md` - Comprehensive privacy policy

---

**Phase:** 01-foundation-legal-pages
**Plan:** 03
**Completed:** 2026-01-30
**Duration:** 3 min
**Commit:** 26039b0
