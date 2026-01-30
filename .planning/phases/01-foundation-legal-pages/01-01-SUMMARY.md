---
phase: 01-foundation-legal-pages
plan: 01
subsystem: build-system
status: complete
completed: 2026-01-30

dependencies:
  requires: []
  provides:
    - jekyll-build-system
    - warm-neutrals-design-tokens
    - sass-compilation-pipeline
  affects:
    - 01-02 (layout creation will use design tokens)
    - 01-03 (legal pages will use design system)
    - 02-01 (landing page will use design system)

tech-stack:
  added:
    - jekyll: "3.10.0 (via github-pages 232)"
    - github-pages: "232"
    - minima: "2.5.1"
    - sass: "3.7.4"
    - ruby: "3.3.7"
    - rbenv: "1.3.2"
  patterns:
    - design-tokens: "SASS variables for color, typography, spacing, layout"
    - semantic-color-mapping: "Palette colors mapped to semantic purposes"
    - system-font-stack: "Native fonts for performance and familiarity"

key-files:
  created:
    - _config.yml: "Jekyll site configuration with GitHub Pages settings"
    - Gemfile: "Ruby dependencies (github-pages gem)"
    - .gitignore: "Exclude build artifacts and dependencies"
    - .ruby-version: "Pin Ruby 3.3.7 for consistency"
    - _sass/_variables.scss: "Warm neutrals design tokens"
    - _sass/_base.scss: "Base element styles using design tokens"
    - assets/css/main.scss: "Main stylesheet entry point"
  modified: []

decisions:
  - id: use-github-pages-gem
    choice: "Use github-pages gem instead of standalone Jekyll"
    rationale: "Ensures local development matches GitHub Pages production environment exactly"
    impact: "Locked to Jekyll 3.10.0 and specific plugin versions, but eliminates deployment surprises"

  - id: warm-neutrals-palette
    choice: "Cream (#FAF7F2, #F5EFE7), soft gray (#D8D4CF, #8E8B87, #4A4745), terracotta (#D4826C, #B8654F)"
    rationale: "Matches Ordtegl iOS app aesthetic for brand consistency"
    impact: "Calming, accessible palette appropriate for language learning context"

  - id: semantic-color-tokens
    choice: "Map palette colors to semantic purposes (background, text-primary, accent, etc.)"
    rationale: "Enables theme-wide color changes by updating semantic mappings only"
    impact: "Easier maintenance and potential future theme variations"

  - id: system-font-stack
    choice: "Native system fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)"
    rationale: "Zero latency, familiar to users, excellent rendering on all platforms"
    impact: "No web font loading, better performance, consistent with platform conventions"

  - id: ruby-version-management
    choice: "Install rbenv and Ruby 3.3.7 to resolve system Ruby incompatibility"
    rationale: "System Ruby 2.6.10 too old for github-pages gem (requires Ruby 3.0+)"
    impact: ".ruby-version file ensures consistent Ruby across development environments"

metrics:
  duration: "7 min"
  tasks_completed: 2
  commits: 2
  files_created: 7
  files_modified: 0

tags:
  - jekyll
  - sass
  - design-system
  - github-pages
  - build-configuration
  - ruby
---

# Phase 1 Plan 1: Jekyll Setup & Design System Summary

**One-liner:** Jekyll build system with GitHub Pages gem and warm neutrals SASS design tokens (cream, soft gray, terracotta).

## What Was Built

Established the Jekyll foundation with GitHub Pages compatibility and the Ordtegl warm neutrals design system.

**Core components:**
- Jekyll 3.10.0 via github-pages gem (232) for production parity
- Ruby 3.3.7 managed by rbenv (resolved system Ruby incompatibility)
- Minima theme with jekyll-seo-tag and jekyll-sitemap plugins
- SASS compilation pipeline with design tokens
- Warm neutrals color palette (7 colors: cream-light, cream, gray-soft, gray-medium, gray-dark, terracotta, terracotta-dark)
- Semantic color mappings (background, surface, text-primary/secondary, accent, accent-hover, border)
- Typography system (system font stack, base size 16px, line-height 1.6)
- Spacing scale (xs to xl: 0.5rem to 6rem)
- Base element styles (body, headings, links, lists, code, tables, blockquotes)

**Build verification:**
- `bundle exec jekyll build` succeeds without errors
- SASS compiles to `_site/assets/css/main.css` with all color values
- Sitemap and SEO plugins generate correctly

## Tasks Completed

### Task 1: Create Jekyll configuration and Gemfile
**Commit:** d0f65ed
**Duration:** ~3 min

Created Jekyll configuration with GitHub Pages settings:
- _config.yml with site metadata, Minima theme, SEO/sitemap plugins
- Gemfile with github-pages gem
- .gitignore for build artifacts and dependencies
- .ruby-version for Ruby 3.3.7

**Blocker resolved:** System Ruby 2.6.10 incompatible with github-pages gem (requires Ruby 3.0+). Installed rbenv and Ruby 3.3.7 to unblock bundle install.

### Task 2: Create SASS design system with warm neutrals palette
**Commit:** 1fbfcbf
**Duration:** ~4 min

Created SASS design system with Ordtegl aesthetics:
- _sass/_variables.scss with color palette, semantic tokens, typography, spacing, layout
- _sass/_base.scss with base element styles (body, headings, links, lists, code, tables)
- assets/css/main.scss entry point with Jekyll front matter

**Verification:** Compiled CSS contains all color values and styles render correctly.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Installed rbenv and Ruby 3.3.7**
- **Found during:** Task 1, bundle install
- **Issue:** System Ruby 2.6.10 incompatible with ffi gem (requires Ruby 3.0+), blocking github-pages installation
- **Fix:** Installed rbenv via Homebrew, installed Ruby 3.3.7, created .ruby-version file
- **Files added:** .ruby-version
- **Rationale:** Could not proceed with Task 1 verification without compatible Ruby version
- **Commit:** Included in d0f65ed

## Key Decisions Made

**1. Use github-pages gem for dependency management**
- Locks Jekyll to 3.10.0 and specific plugin versions
- Ensures local development exactly matches GitHub Pages production
- Eliminates deployment surprises from version mismatches

**2. Semantic color token layer**
- Palette colors ($color-cream, $color-terracotta) separate from semantic tokens ($color-background, $color-accent)
- Enables theme changes by remapping semantic tokens only
- Makes intent clear in stylesheets (use $color-background not $color-cream-light)

**3. System font stack**
- Native fonts for zero latency and excellent platform rendering
- Familiar to users (matches OS conventions)
- No web font loading performance impact

**4. Spacing scale with rem units**
- Consistent scale from 0.5rem to 6rem
- Rem units respect user font size preferences (accessibility)
- Easy to adjust globally by changing base font size

## Testing Performed

**Build verification:**
```bash
bundle exec jekyll build
# ✓ Builds without errors in 0.093 seconds
# ✓ Generates _site/assets/css/main.css
# ✓ CSS contains warm neutrals color values
# ✓ Sitemap.xml and robots.txt generated
```

**File verification:**
- _site/ directory created
- assets/css/main.css compiled with expected colors
- Design tokens flow: _sass/_variables.scss → _sass/_base.scss → assets/css/main.scss → _site/assets/css/main.css

**Color values confirmed in compiled CSS:**
- Background: #FAF7F2 (cream-light)
- Text: #4A4745 (gray-dark)
- Accent: #D4826C (terracotta)
- Accent hover: #B8654F (terracotta-dark)
- Surface: #F5EFE7 (cream)
- Borders: #D8D4CF (gray-soft)

## Known Issues / TODOs

None. Foundation is complete and ready for layout creation (01-02).

## Next Phase Readiness

**Ready for:**
- 01-02: Layout creation (will use design tokens)
- 01-03: Legal page creation (will use design system)

**Blockers:** None

**Concerns:** None

## Links to Key Files

- `_config.yml` - Jekyll configuration
- `Gemfile` - Ruby dependencies
- `_sass/_variables.scss` - Design tokens
- `_sass/_base.scss` - Base element styles
- `assets/css/main.scss` - Main stylesheet entry point
- `.ruby-version` - Ruby version specification

---

**Phase:** 01-foundation-legal-pages
**Plan:** 01
**Completed:** 2026-01-30
**Duration:** 7 min
**Commits:** d0f65ed, 1fbfcbf
