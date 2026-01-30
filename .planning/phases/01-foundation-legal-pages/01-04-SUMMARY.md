---
phase: 01-foundation-legal-pages
plan: 04
subsystem: legal-content
status: complete
completed: 2026-01-30

dependencies:
  requires:
    - phase: 01-02
      provides: Default layout template with header/footer navigation
  provides:
    - terms-of-service-page
    - exam-disclaimer-content
    - liability-limitations-clause
    - danish-jurisdiction-clause
  affects:
    - 02-02 (support page will link to terms)
    - 03-01 (landing page will link to terms)

tech-stack:
  added: []
  patterns:
    - jekyll-pages-collection: "Terms page in _pages/ directory with permalink"
    - markdown-legal-content: "Markdown format for readability and maintainability"
    - anchor-navigation: "Table of contents with in-page anchor links"

key-files:
  created:
    - _pages/terms-of-service.md: "Complete terms of service with 11 sections"
  modified: []

decisions:
  - id: prominent-exam-disclaimer
    choice: "Dedicated H2 section with bold formatting for exam disclaimer"
    rationale: "Critical legal requirement to avoid liability for exam preparation claims"
    impact: "PD2, PD3 explicitly mentioned as non-affiliated examination bodies"

  - id: comprehensive-liability-limits
    choice: "Three-part liability section covering educational accuracy, learning outcomes, and maximum liability"
    rationale: "Protect against claims related to vocabulary accuracy or exam results"
    impact: "Clear 'as is' disclaimer and maximum liability cap"

  - id: detailed-acceptable-use
    choice: "Eight specific prohibited activities listed in acceptable use policy"
    rationale: "Prevent reverse engineering, content scraping, and commercial abuse"
    impact: "Clear boundaries for user behavior with termination consequences"

  - id: danish-jurisdiction
    choice: "Explicit Danish law and Danish courts clause in Governing Law section"
    rationale: "App published from Danish App Store account, developer preference"
    impact: "Disputes resolved under Danish legal system"

metrics:
  duration: "3 min"
  tasks_completed: 1
  commits: 1
  files_created: 1
  files_modified: 0

tags:
  - legal
  - terms-of-service
  - jekyll
  - markdown
  - app-store-compliance
---

# Phase 1 Plan 4: Terms of Service Summary

**Complete terms of service page with exam preparation disclaimer, liability limitations, and Danish jurisdiction clause.**

## Performance

- **Duration:** 3 min
- **Started:** 2026-01-30T23:19:36Z
- **Completed:** 2026-01-30T23:22:41Z
- **Tasks:** 1
- **Files created:** 1

## Accomplishments

- Terms of service accessible at stable /terms/ URL
- Prominent exam preparation disclaimer stating no affiliation with PD2, PD3, or other Danish exam bodies
- Comprehensive liability limitations covering educational accuracy and learning outcomes
- Acceptable use policy with 8 specific prohibited activities
- User responsibilities for account security and compliance
- Intellectual property section with third-party data attribution (OpenSubtitles, COR)
- Service modification rights clearly documented
- Account termination procedures (voluntary and involuntary)
- Danish jurisdiction and governing law clause
- Changes to terms notification process
- Table of contents with 11 anchor links for easy navigation
- Contact email displayed at bottom

## Task Commits

1. **Task 1: Create terms of service page with full content** - `24ec6e1` (feat)

## Files Created/Modified

**Created:**
- `_pages/terms-of-service.md` - Complete terms of service (259 lines) with front matter (layout: default, permalink: /terms/)

**Modified:** None

## Decisions Made

**1. Prominent exam preparation disclaimer**
- Dedicated H2 section with bold "IMPORTANT NOTICE" heading
- Explicitly states no affiliation with Prøveudvalget for Dansk (PD2, PD3)
- Makes no guarantees about exam preparation effectiveness
- Directs users to official exam resources
- Positioned early in document (section 2 after description)

**2. Comprehensive liability limitations**
- Three-part structure: Educational Accuracy, Learning Outcomes, Maximum Liability
- "As is" disclaimer without warranties of any kind
- Maximum liability capped at amount paid (if any)
- Excludes indirect, consequential, or punitive damages
- Protects against claims related to vocabulary accuracy or exam results

**3. Detailed acceptable use policy**
- Eight specific prohibited activities listed:
  - Reverse engineering or decompilation
  - Content copying or redistribution
  - Automated access or scraping
  - Account credential sharing
  - Commercial use without permission
  - Derivative works creation
  - Service interference or disruption
- Clear consequences: immediate termination

**4. Danish jurisdiction clause**
- Governed by laws of Denmark
- Disputes resolved in Danish courts
- Danish language version prevails in translations
- Aligns with app published from Danish App Store account

**5. Third-party data attribution**
- OpenSubtitles frequency data (licensed, attribution in press kit)
- COR (Det Centrale Ordregister) dictionary data
- Establishes intellectual property ownership while acknowledging sources

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

**Minor bundler version issue (resolved):**
- System Ruby (2.6) didn't have correct bundler version
- Resolved by using rbenv Ruby 3.3.7 specified in .ruby-version
- No impact on task completion

## Next Phase Readiness

**Ready for:**
- 02-02: Support page can link to /terms/ URL
- 03-01: Landing page can include terms link in footer

**Blockers:** None

**Concerns:** None

## Verification Performed

**Build verification:**
```bash
bundle exec jekyll build
# ✓ Builds successfully in ~0.13 seconds
# ✓ Terms page compiled to _site/terms/index.html (14,561 bytes)
# ✓ All markdown sections converted to HTML with proper heading IDs
```

**Content verification:**
```bash
curl http://localhost:4000/terms/
# ✓ Page loads with title "Terms of Service - Ordtegl"
# ✓ Last Updated date visible: January 30, 2026
# ✓ Table of contents present with 11 anchor links
# ✓ Exam Preparation Disclaimer section with bold heading
# ✓ PD2, PD3 explicitly mentioned in disclaimer text
# ✓ Liability Limitations section present
# ✓ Acceptable Use Policy with prohibited activities list
# ✓ Governing Law section states "Denmark"
# ✓ Contact email: alb+ordtegl@andrewlb.com displayed
```

**Layout verification:**
- Default layout applied (header with navigation, footer)
- Responsive container (max-width 800px)
- Warm neutrals design from Phase 1
- Mobile-friendly navigation from Plan 02

**Requirements coverage:**
- ✓ TERMS-01: Terms of service page created
- ✓ TERMS-02: Liability limitations present
- ✓ TERMS-03: Exam preparation disclaimer prominently displayed
- ✓ TERMS-04: Acceptable use policy included
- ✓ TERMS-05: Danish jurisdiction clause
- ✓ TERMS-06: Service modification rights stated
- ✓ TERMS-07: User responsibilities outlined
- ✓ TERMS-08: Intellectual property notice with third-party attribution

## Links to Key Files

- `_pages/terms-of-service.md` - Terms of service source
- `_site/terms/index.html` - Built HTML output
- `_layouts/default.html` - Layout template used

---

**Phase:** 01-foundation-legal-pages
**Plan:** 04
**Completed:** 2026-01-30
**Duration:** 3 min
**Commit:** 24ec6e1
