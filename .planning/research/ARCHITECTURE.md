# Architecture Research: Jekyll Site for iOS App Landing Page

**Project:** Ordtegl (Danish vocabulary learning iOS app)
**Domain:** Static site (landing page + privacy policy)
**Researched:** 2026-01-30
**Confidence:** HIGH

## Executive Summary

For an iOS app landing page with privacy policy hosted on GitHub Pages, the optimal Jekyll architecture uses a flat file structure with pages in `_pages/`, shared layouts in `_layouts/`, minimal includes in `_includes/`, and design tokens managed via SASS variables in `_sass/`. This structure balances simplicity (5 pages doesn't need complexity) with maintainability (design system centralized, easy to extend).

**Key architectural decisions:**
- Flat page structure over collections (small site, no taxonomy needed)
- Pretty permalinks for clean URLs (/privacy/ not /privacy.html)
- SASS variables for design tokens (warm neutrals palette)
- Single default layout with conditional sections (DRY principle)
- Asset organization follows Jekyll conventions (assets/css, assets/images)

## Site Structure

### Recommended Directory Layout

```
ordtegl-public/
├── _config.yml                 # Site configuration, Jekyll settings
├── _data/
│   └── navigation.yml          # Header/footer navigation links
├── _includes/
│   ├── header.html             # Site header with nav
│   ├── footer.html             # Site footer
│   └── app-download-cta.html   # Reusable App Store download button
├── _layouts/
│   └── default.html            # Main layout (header, content, footer)
├── _pages/
│   ├── privacy-policy.md       # Privacy policy content
│   ├── terms-of-service.md     # Terms of service content
│   ├── support.md              # Support page content
│   └── press-kit.md            # Press kit content
├── _sass/
│   ├── _variables.scss         # Design tokens (colors, typography, spacing)
│   ├── _base.scss              # Base styles (body, headings, links)
│   ├── _layout.scss            # Layout components (header, footer, sections)
│   └── _components.scss        # Reusable components (buttons, cards)
├── assets/
│   ├── css/
│   │   └── main.scss           # Main stylesheet (imports _sass partials)
│   ├── images/
│   │   ├── app-icon.png        # App icon
│   │   ├── screenshots/        # App screenshots
│   │   └── press/              # Press kit assets
│   └── videos/
│       └── demo.mp4            # App demo video (optional)
├── index.html                  # Landing page (home)
└── README.md                   # Project documentation
```

### Key Structural Decisions

**1. Pages in `_pages/` directory**
- Groups content pages separately from index
- Allows front matter permalink control
- Easy to add new pages without cluttering root
- **Configuration required:** Add to `_config.yml`:
  ```yaml
  collections:
    pages:
      output: true
      permalink: /:basename/
  ```

**2. Single default layout**
- All pages use `_layouts/default.html`
- Conditional sections based on page front matter
- Follows DRY principle (don't repeat header/footer)
- **Alternative considered:** Separate layouts per page type, but rejected as unnecessarily complex for 5 pages

**3. Minimal includes**
- Only extract truly reusable components
- Header, footer, and CTA button are candidates
- Avoid over-abstraction (Jekyll style guide warns against unnecessary includes for simple sites)

**4. Data-driven navigation**
- Navigation links in `_data/navigation.yml`
- Single source of truth for site structure
- Easy to reorder or add pages without touching templates

## URL Structure

### Permalink Configuration

**Global setting in `_config.yml`:**
```yaml
permalink: pretty
```

This converts `/foo.html` to `/foo/` (trailing slash, no extension).

**Individual page permalinks (via front matter):**

| Page | File | Permalink | Final URL |
|------|------|-----------|-----------|
| Home | index.html | / | https://ordtegl.app/ |
| Privacy | privacy-policy.md | /privacy/ | https://ordtegl.app/privacy/ |
| Terms | terms-of-service.md | /terms/ | https://ordtegl.app/terms/ |
| Support | support.md | /support/ | https://ordtegl.app/support/ |
| Press Kit | press-kit.md | /press/ | https://ordtegl.app/press/ |

**Why pretty permalinks:**
- Clean, human-readable URLs
- No file extensions (`.html`) visible
- GitHub Pages handles these automatically (no server config needed)
- Best practice: "Cool URIs don't change" - no implementation details in URL

**Example front matter for privacy-policy.md:**
```yaml
---
layout: default
title: Privacy Policy
permalink: /privacy/
include_in_header: true
---
```

### URL Best Practices

1. **Trailing slashes:** Always use (e.g., `/privacy/` not `/privacy`)
2. **Lowercase:** All URLs lowercase (e.g., `/press/` not `/Press/`)
3. **Hyphens:** Use hyphens for multi-word URLs (e.g., `/press-kit/` becomes `/press/`)
4. **No dates:** Don't include dates or version numbers (pages are evergreen)
5. **Semantic:** URL should describe content, not structure

## Layouts and Includes

### Layout Hierarchy

**Single layout approach:**

```html
<!-- _layouts/default.html -->
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% if page.title %}{{ page.title }} - {% endif %}{{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
</head>
<body>
  {% include header.html %}

  <main>
    {{ content }}
  </main>

  {% include footer.html %}
</body>
</html>
```

**Why single layout:**
- All pages have same structure (header, content, footer)
- Variations handled via front matter and conditional logic
- Easier to maintain consistency across site
- Follows Jekyll style guide recommendation for simple sites

### Includes Structure

**Essential includes:**

1. **`_includes/header.html`** - Site header with navigation
   - Logo/app icon
   - Navigation menu (from `_data/navigation.yml`)
   - Responsive hamburger menu for mobile

2. **`_includes/footer.html`** - Site footer
   - Copyright notice
   - Links to privacy/terms
   - Social media links (if applicable)

3. **`_includes/app-download-cta.html`** - Reusable call-to-action
   - App Store download button
   - Used on landing page and potentially support page
   - Parameters: `{% include app-download-cta.html size="large" %}`

**Optional includes (add if needed):**
- `head.html` - If meta tags become complex
- `analytics.html` - For tracking scripts
- `seo.html` - For structured data/Open Graph tags

### Data Files

**`_data/navigation.yml`** - Navigation structure:
```yaml
- name: Home
  url: /
- name: Privacy
  url: /privacy/
- name: Terms
  url: /terms/
- name: Support
  url: /support/
- name: Press
  url: /press/
```

**Usage in header.html:**
```html
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.url }}">{{ item.name }}</a>
  {% endfor %}
</nav>
```

## Design System Approach

### SASS Organization for Warm Neutrals Palette

**Color palette as design tokens in `_sass/_variables.scss`:**

```scss
// Color Palette - Warm Neutrals
$color-cream-light: #FAF7F2;
$color-cream: #F5EFE7;
$color-gray-soft: #D8D4CF;
$color-gray-medium: #8E8B87;
$color-gray-dark: #4A4745;
$color-terracotta: #D4826C;
$color-terracotta-dark: #B8654F;

// Semantic Color Tokens
$color-background: $color-cream-light;
$color-surface: $color-cream;
$color-text-primary: $color-gray-dark;
$color-text-secondary: $color-gray-medium;
$color-accent: $color-terracotta;
$color-accent-hover: $color-terracotta-dark;
$color-border: $color-gray-soft;

// Typography
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
$font-family-heading: "SF Pro Display", -apple-system, sans-serif;

$font-size-base: 16px;
$font-size-h1: 2.5rem;
$font-size-h2: 2rem;
$font-size-h3: 1.5rem;

$line-height-base: 1.6;
$line-height-heading: 1.2;

// Spacing Scale
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 2rem;     // 32px
$spacing-lg: 4rem;     // 64px
$spacing-xl: 6rem;     // 96px

// Layout
$max-width-content: 800px;
$max-width-wide: 1200px;
$border-radius-sm: 4px;
$border-radius-md: 8px;
```

**Why SASS variables over CSS custom properties:**
- GitHub Pages uses Jekyll 3.9.x with SASS built-in
- No build step complexity
- Compile-time substitution (smaller CSS output)
- **Alternative:** CSS custom properties (more dynamic, but unnecessary for static palette)

### File Structure for Styles

**`assets/css/main.scss`** - Main stylesheet (must have front matter):
```scss
---
---

@import "variables";
@import "base";
@import "layout";
@import "components";
```

**`_sass/_base.scss`** - Base element styles:
```scss
body {
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $color-text-primary;
  background-color: $color-background;
}

h1, h2, h3 {
  font-family: $font-family-heading;
  line-height: $line-height-heading;
  color: $color-text-primary;
}

a {
  color: $color-accent;
  text-decoration: none;

  &:hover {
    color: $color-accent-hover;
  }
}
```

**`_sass/_layout.scss`** - Layout components:
```scss
.container {
  max-width: $max-width-content;
  margin: 0 auto;
  padding: 0 $spacing-md;
}

header {
  background-color: $color-surface;
  border-bottom: 1px solid $color-border;
  padding: $spacing-sm 0;
}

footer {
  background-color: $color-surface;
  border-top: 1px solid $color-border;
  margin-top: $spacing-xl;
  padding: $spacing-md 0;
}
```

**`_sass/_components.scss`** - Reusable components:
```scss
.btn-download {
  display: inline-block;
  background-color: $color-accent;
  color: white;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-md;
  font-weight: 600;

  &:hover {
    background-color: $color-accent-hover;
  }
}

.card {
  background-color: $color-surface;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  padding: $spacing-md;
}
```

### Design System Benefits

1. **Single source of truth:** All colors defined once in `_variables.scss`
2. **Semantic naming:** Use `$color-accent`, not `$color-terracotta` in components
3. **Easy maintenance:** Change palette by updating variables file
4. **Scalable:** Add new colors/tokens as needed
5. **Type-safe:** SASS compilation catches undefined variables

## Build Order

### Dependency Chain

```
1. Configuration
   └── _config.yml (site settings, collections, permalinks)
       ↓
2. Design System
   └── _sass/_variables.scss (design tokens)
       ↓
3. Base Styles
   └── _sass/_base.scss (element styles using tokens)
       ↓
4. Layout Styles
   └── _sass/_layout.scss (header, footer, containers)
       ↓
5. Component Styles
   └── _sass/_components.scss (buttons, cards)
       ↓
6. Main Stylesheet
   └── assets/css/main.scss (imports all SASS partials)
       ↓
7. Includes
   ├── _includes/header.html
   ├── _includes/footer.html
   └── _includes/app-download-cta.html
       ↓
8. Default Layout
   └── _layouts/default.html (uses includes)
       ↓
9. Content Pages
   ├── index.html (landing page)
   ├── _pages/privacy-policy.md
   ├── _pages/terms-of-service.md
   ├── _pages/support.md
   └── _pages/press-kit.md
       ↓
10. Assets
    ├── assets/images/app-icon.png
    ├── assets/images/screenshots/
    └── assets/videos/demo.mp4
```

### Recommended Build Order for Development

**Phase 1: Foundation (build first)**
1. Create `_config.yml` with basic settings
2. Create design token file `_sass/_variables.scss` with warm neutrals palette
3. Create base styles `_sass/_base.scss`
4. Create main stylesheet `assets/css/main.scss` (imports variables + base)

**Phase 2: Structure (depends on Phase 1)**
5. Create layout styles `_sass/_layout.scss`
6. Create header include `_includes/header.html`
7. Create footer include `_includes/footer.html`
8. Create default layout `_layouts/default.html` (assembles includes)

**Phase 3: Content (depends on Phase 2)**
9. Create landing page `index.html`
10. Test locally with `bundle exec jekyll serve`
11. Verify layout and styles work

**Phase 4: Additional Pages (depends on Phase 3)**
12. Create privacy policy `_pages/privacy-policy.md`
13. Create terms of service `_pages/terms-of-service.md`
14. Create support page `_pages/support.md`
15. Create press kit page `_pages/press-kit.md`

**Phase 5: Enhancement (depends on Phase 4)**
16. Create component styles `_sass/_components.scss`
17. Create CTA include `_includes/app-download-cta.html`
18. Add navigation data `_data/navigation.yml`
19. Add screenshots and assets to `assets/images/`

**Phase 6: Polish (depends on Phase 5)**
20. Add App Store download buttons/links
21. Test all pages and navigation
22. Deploy to GitHub Pages

### Critical Dependencies

**Must have before building pages:**
- `_config.yml` (Jekyll won't build without it)
- `_layouts/default.html` (pages reference this in front matter)
- Design tokens (`_sass/_variables.scss`) if using SASS

**Can add incrementally:**
- Navigation data (hardcode links first, extract later)
- Includes (can inline in layout initially)
- Individual content pages (build one at a time)
- Assets (can use placeholders initially)

### Build Verification Checklist

After each phase, verify:
- [ ] Jekyll builds without errors (`bundle exec jekyll build`)
- [ ] Local server runs (`bundle exec jekyll serve`)
- [ ] Pages accessible at expected URLs
- [ ] Styles load correctly
- [ ] Navigation works
- [ ] No broken links

## Common Architectural Patterns

### Pattern 1: Front Matter for Page Metadata

**Every page should have front matter:**
```yaml
---
layout: default
title: Privacy Policy
permalink: /privacy/
description: Privacy policy for Ordtegl app
include_in_header: true
---
```

**Benefits:**
- Controls layout selection
- Sets page title and metadata
- Defines permalink
- Allows conditional rendering in templates

### Pattern 2: Data-Driven Navigation

**Use `_data/navigation.yml` instead of hardcoded links:**
```html
<!-- Good: data-driven -->
{% for item in site.data.navigation %}
  <a href="{{ item.url }}">{{ item.name }}</a>
{% endfor %}

<!-- Bad: hardcoded -->
<a href="/privacy/">Privacy</a>
<a href="/terms/">Terms</a>
```

**Benefits:**
- Single source of truth
- Easy to reorder or add pages
- Can add metadata (icons, external links, etc.)

### Pattern 3: Semantic Color Tokens

**Use semantic names in components:**
```scss
// Good: semantic
.btn-primary {
  background-color: $color-accent;
}

// Bad: literal
.btn-primary {
  background-color: $color-terracotta;
}
```

**Benefits:**
- Change palette without touching components
- Intent is clear from variable name
- Consistent across site

### Pattern 4: Mobile-First Responsive Design

**Start with mobile styles, add desktop overrides:**
```scss
// Mobile first (base)
.container {
  padding: $spacing-sm;
}

// Desktop override
@media (min-width: 768px) {
  .container {
    padding: $spacing-md;
  }
}
```

**Benefits:**
- Simpler CSS (less override complexity)
- Better mobile performance
- Forces focus on essential content

## Anti-Patterns to Avoid

### Anti-Pattern 1: Over-Abstracting with Includes

**Problem:** Creating includes for every tiny component
**Example:** Separate includes for `<head>`, `<nav>`, `<ul>`, etc.
**Why bad:** Adds unnecessary indirection, harder to understand page structure
**Instead:** Keep header, footer, and truly reusable components as includes. Inline simple markup.

**Jekyll style guide warning:** "Unless unusually complex, it's recommended not to delegate header and footer markup to dedicated includes, as this adds unnecessary complexity for simple sites."

### Anti-Pattern 2: Multiple Layouts for Similar Pages

**Problem:** Creating separate layouts for each page type
**Example:** `landing-layout.html`, `legal-layout.html`, `support-layout.html`
**Why bad:** Duplicates header/footer code, hard to maintain consistency
**Instead:** Single default layout with conditional sections based on front matter

### Anti-Pattern 3: Hardcoding Configuration Values

**Problem:** Repeating site name, URL, etc. in templates
**Example:** `<title>Ordtegl - Privacy Policy</title>` in every page
**Why bad:** Changes require editing multiple files
**Instead:** Use `{{ site.title }}` from `_config.yml`

### Anti-Pattern 4: Flat SASS File

**Problem:** All styles in single `main.scss` file
**Why bad:** Hard to navigate, no organization, merge conflicts
**Instead:** Split into partials by concern (variables, base, layout, components)

### Anti-Pattern 5: Absolute URLs in Links

**Problem:** Using `https://ordtegl.app/privacy/` instead of `/privacy/`
**Why bad:** Breaks local development, hardcodes domain
**Instead:** Use relative URLs or `{{ '/privacy/' | relative_url }}` filter

## Scalability Considerations

### At Launch (5 pages)

**Current structure is sufficient:**
- Flat page structure in `_pages/`
- Single layout
- Simple navigation
- Basic SASS organization

**No additional complexity needed.**

### At 10-20 Pages

**Potential additions:**
- Page categories (front matter: `category: legal`)
- Section-specific layouts (blog vs legal vs support)
- Automated navigation grouping
- Table of contents for long pages

**Structure changes:**
- Consider collections for blog posts if added
- Might split `_components.scss` into multiple files
- Add page templates for common patterns

### At 50+ Pages

**Significant additions:**
- Search functionality (lunr.js or Algolia)
- Hierarchical navigation (nested menus)
- Content taxonomy (tags, categories)
- Multiple layouts for different sections
- Build optimization (incremental builds)

**Structure changes:**
- Organize pages into subdirectories by section
- Extract layout sections into includes
- Add content strategy (templates, guidelines)
- Consider headless CMS for content management

**For Ordtegl:** Unlikely to reach this scale. iOS app sites rarely exceed 10-15 pages.

## GitHub Pages Specific Notes

### Jekyll Version Constraint

GitHub Pages uses Jekyll 3.9.x (as of 2026-01-30), not the latest 4.x.

**Implications:**
- Stick to Jekyll 3.x features
- Use gem-based themes carefully (must be GitHub Pages approved)
- Can't use some newer plugins

**Check current version:** https://pages.github.com/versions/

### Allowed Plugins Only

GitHub Pages restricts plugins to approved list.

**Safe to use:**
- jekyll-seo-tag (SEO meta tags)
- jekyll-sitemap (XML sitemap)
- jekyll-feed (RSS/Atom feed)

**Not allowed:**
- Most third-party plugins
- Custom Ruby plugins

**Workaround:** Use GitHub Actions for custom build process (more complex)

### Build Process

**Automatic build on push:**
1. Push to `main` branch (or configured branch)
2. GitHub Actions runs Jekyll build
3. Deploys to `gh-pages` branch or configured path
4. Site live at `https://username.github.io/repo/` or custom domain

**No manual deploy needed.**

### Custom Domain Configuration

**For ordtegl.app:**
1. Add `CNAME` file to root with domain name
2. Configure DNS (A record or CNAME)
3. Enable HTTPS in GitHub Pages settings

**File: `CNAME`**
```
ordtegl.app
```

## Alternative Architectures Considered

### Alternative 1: Using Existing iOS Landing Page Theme

**Approach:** Fork "automatic-app-landing-page" theme by emilbaehr
**Pros:**
- Quick setup (5 minutes)
- Proven structure for iOS apps
- Automatic App Store integration
- Built-in privacy policy template

**Cons:**
- Less control over design (warm neutrals palette)
- Opinionated structure (may not fit all needs)
- Harder to customize beyond configuration
- Additional learning curve for theme specifics

**Decision:** Rejected. Custom design (warm neutrals) is core requirement. Theme customization would be more work than building from scratch for 5 pages.

### Alternative 2: Pages in Root Directory

**Approach:** Put all pages in root (privacy-policy.md, terms.md, etc.)
**Pros:**
- Simpler structure (no `_pages/` collection)
- One less directory layer

**Cons:**
- Root directory gets cluttered as pages grow
- Harder to distinguish content from config files
- No collection-level front matter defaults

**Decision:** Rejected. `_pages/` directory provides better organization and allows collection-level configuration.

### Alternative 3: CSS Custom Properties Instead of SASS

**Approach:** Use CSS variables instead of SASS variables
**Pros:**
- Runtime customization (could support theme switching)
- Smaller CSS (no duplication)
- Modern approach

**Cons:**
- No compile-time validation
- Slightly larger CSS payload
- More complex syntax for color manipulation

**Decision:** Rejected for this project. Static palette doesn't need runtime customization. SASS provides better DX for color functions (lighten, darken, etc.) and compile-time errors.

### Alternative 4: Headless CMS (Contentful, Sanity)

**Approach:** Separate content management from Jekyll
**Pros:**
- Non-technical editor-friendly
- Content versioning
- Multi-language support potential

**Cons:**
- Additional complexity
- External dependency
- Build pipeline complexity
- Overkill for 5 static pages

**Decision:** Rejected. Markdown files in repo are sufficient for small site. Can revisit if content editing becomes bottleneck.

## Confidence Assessment

| Area | Confidence | Evidence |
|------|------------|----------|
| Jekyll structure conventions | HIGH | Official Jekyll documentation, verified best practices |
| URL/permalink configuration | HIGH | Official Jekyll permalink docs, GitHub Pages compatibility confirmed |
| SASS organization | HIGH | Jekyll built-in SASS support, verified asset organization patterns |
| Design token approach | MEDIUM | Multiple community approaches found, SASS variables well-established but CSS custom properties emerging |
| Build order dependencies | HIGH | Logical dependency chain, verified through Jekyll build process |
| GitHub Pages constraints | HIGH | Official GitHub Pages documentation, current dependency versions confirmed |

## Gaps and Open Questions

**Resolved during research:**
- ✓ Jekyll directory structure best practices
- ✓ Permalink configuration for static pages
- ✓ SASS organization for design systems
- ✓ GitHub Pages build constraints

**Remaining questions (defer to implementation):**
- Exact App Store integration approach (meta tags, smart banners, etc.)
- SEO optimization strategy (jekyll-seo-tag plugin configuration)
- Analytics implementation (Google Analytics, Plausible, etc.)
- Image optimization approach (responsive images, formats)

**These are implementation details, not architectural decisions.**

## Sources

**Jekyll Official Documentation (HIGH confidence):**
- [Directory Structure | Jekyll](https://jekyllrb.com/docs/structure/)
- [Layouts | Jekyll](https://jekyllrb.com/docs/step-by-step/04-layouts/)
- [Assets | Jekyll](https://jekyllrb.com/docs/step-by-step/07-assets/)
- [Permalinks | Jekyll](https://jekyllrb.com/docs/permalinks/)
- [Includes | Jekyll](https://jekyllrb.com/docs/includes/)
- [Themes | Jekyll](https://jekyllrb.com/docs/themes/)

**GitHub Pages Documentation (HIGH confidence):**
- [About GitHub Pages and Jekyll - GitHub Docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
- [Dependency versions | GitHub Pages](https://pages.github.com/versions/)

**Best Practices & Community (MEDIUM-HIGH confidence):**
- [Jekyll Tips, Tricks, and Best Practices : jreel](https://jreel.github.io/jekyll-tips-tricks-and-best-practices/)
- [Jekyll style guide - Ben Balter](https://ben.balter.com/jekyll-style-guide/permalinks/)
- [How to Control URLs and Links in Jekyll | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-control-urls-and-links-in-jekyll)

**iOS Landing Page References (MEDIUM confidence):**
- [automatic-app-landing-page - GitHub](https://github.com/emilbaehr/automatic-app-landing-page)
- [app-landing-page - GitHub](https://github.com/mikakruschel/app-landing-page)

**Design System Approaches (MEDIUM confidence):**
- [Jekyll SASS Guide](https://avic.devpractical.com/jekyll-sass/)
- [Building a living style guide with Jekyll - Made Mistakes](https://mademistakes.com/mastering-jekyll/living-style-guide/)
- [Integrating color scheme using custom properties](https://www.thisdaysportion.com/posts/integrating-nord/)
