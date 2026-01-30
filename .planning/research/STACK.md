# Stack Research: iOS App Landing Page on GitHub Pages

**Project:** Ordtegl - Danish vocabulary learning iOS app
**Researched:** 2026-01-30
**Confidence:** HIGH

## Executive Summary

For a simple iOS app landing page with privacy policy hosted on GitHub Pages, the standard 2026 stack is **Jekyll 3.10.0 with GitHub's native build pipeline** using either a custom minimal theme or the automatic-app-landing-page theme. GitHub Pages only supports Jekyll 3.x (not Jekyll 4), but this is sufficient for a marketing site. Custom styling via SCSS overrides provides design control while staying within GitHub Pages constraints.

**Recommended approach:** Start with Jekyll + Minima theme (or automatic-app-landing-page), customize via SCSS, deploy via GitHub's native pipeline.

## Recommended Stack

### Core Framework
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Jekyll | 3.10.0 | Static site generator | Only version supported by GitHub Pages native build |
| Ruby | 3.3.4 | Jekyll runtime | GitHub Pages dependency |
| Kramdown | 2.4.0 | Markdown parser | Default for Jekyll on GitHub Pages |
| Liquid | 4.0.4 | Templating engine | Jekyll's template language |
| Sass | 3.7.4 | CSS preprocessing | Built-in GitHub Pages support for styling |

### Theme Options

**Option 1: Minima (Recommended for Custom Design)**
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Minima | 2.5.1 | Base Jekyll theme | Official default, highly customizable, clean minimal base |

**Option 2: Automatic App Landing Page (Quickstart)**
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| automatic-app-landing-page | Latest | iOS-specific theme | Pre-built for iOS apps, 5-minute setup, but less control |

### Officially Supported Jekyll Plugins

GitHub Pages enables 9 plugins by default and supports additional whitelisted plugins:

| Plugin | Version | Purpose | Auto-enabled |
|--------|---------|---------|--------------|
| jekyll-seo-tag | 2.8.0 | Meta tags for SEO | No (add to config) |
| jekyll-sitemap | 1.4.0 | XML sitemap generation | No (add to config) |
| jekyll-feed | 0.17.0 | Atom/RSS feed | No (add to config) |
| jekyll-redirect-from | 0.16.0 | URL redirects | No (add to config) |
| jemoji | 0.13.0 | Emoji support | No (add to config) |
| jekyll-github-metadata | 2.16.1 | GitHub repo metadata | Yes (default) |
| jekyll-relative-links | - | Convert .md links to .html | Yes (default) |
| jekyll-optional-front-matter | - | YAML front matter optional | Yes (default) |
| jekyll-titles-from-headings | - | Extract titles from headings | Yes (default) |

### Deployment Pipeline
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| GitHub Pages | - | Hosting + build | Free, automatic builds on push, built-in Jekyll support |
| github-pages gem | 232 | Local development | Mirrors GitHub Pages environment exactly |

### Styling Approach
| Technology | Purpose | Why |
|------------|---------|-----|
| SCSS/Sass | Custom styling | Native GitHub Pages support, override theme variables |
| Custom variables | Color scheme | `/assets/css/style.scss` or `_sass/minima/custom-variables.scss` |

## Rationale

### Why Jekyll 3.10.0 (not Jekyll 4)?

GitHub Pages **only supports Jekyll 3.10.0** as of 2026. While Jekyll 4+ exists, using it requires GitHub Actions for custom builds, adding complexity for no benefit on a simple marketing site.

**Source:** [GitHub Pages dependency versions](https://pages.github.com/versions.json) confirms Jekyll 3.10.0

**Verdict:** Jekyll 3.x is sufficient. Features from Jekyll 4 (incremental regeneration improvements, better plugin system) don't matter for a 5-page marketing site.

### Why Minima Theme?

**Pros:**
- Official Jekyll default theme, guaranteed GitHub Pages compatibility
- Minimal, clean base perfect for customization
- Supports "skins" system for color schemes via `_sass/minima/custom-variables.scss`
- Well-documented customization path
- Active maintenance

**Cons:**
- Requires manual setup for iOS-specific features (App Store badges, screenshots)
- More setup than automatic-app-landing-page

**For Ordtegl:** Minima is recommended because you need custom warm neutral colors matching your app design. Minima's customization system makes this straightforward.

### Why NOT automatic-app-landing-page?

The [automatic-app-landing-page theme](https://github.com/emilbaehr/automatic-app-landing-page) is purpose-built for iOS app landing pages with automatic App Store integration.

**Pros:**
- 5-minute setup with App Store ID
- Pre-built iOS-specific layouts (hero with device frame, feature list, etc.)
- Screenshot galleries
- App Store badge integration

**Cons:**
- 179 commits but unclear maintenance status (no releases tagged)
- Less flexible for custom design aesthetics
- Harder to customize color scheme to match "warm neutrals"

**Verdict:** Good for generic iOS landing pages, but Minima + custom SCSS gives more design control for Ordtegl's specific aesthetic.

### Why GitHub Pages Native Build (not GitHub Actions)?

**GitHub Pages offers two deployment methods:**

1. **Native build:** Push `.md` and `.html` files, GitHub builds Jekyll automatically
2. **GitHub Actions:** Build locally/in CI, push static HTML to `gh-pages` branch

**For this project:**
- Native build is simpler (no Actions workflow to maintain)
- Jekyll 3.x has everything needed (no Jekyll 4 features required)
- Automatic builds on every push to main
- Supports all needed plugins (SEO, sitemap, feed)

**When you'd need Actions:**
- Using Jekyll 4+ features
- Unsupported plugins
- Custom build steps (asset optimization, etc.)

**Verdict:** Native build is the right choice for simplicity.

### Why These Plugins?

**Essential:**
- `jekyll-seo-tag` - Meta tags for App Store SEO, social sharing
- `jekyll-sitemap` - Google indexing

**Recommended:**
- `jekyll-feed` - RSS feed (nice-to-have for updates)
- `jekyll-redirect-from` - If URLs change

**Not needed:**
- `jemoji` - Unnecessary for professional marketing site
- Pagination plugins - Not a blog

## Styling Implementation

To implement warm neutral colors matching Ordtegl's design:

**File:** `/assets/css/style.scss`

```scss
---
---

@import "minima";

// Warm neutral color overrides
$brand-color: #D4A373; // warm tan
$text-color: #3E3E3E; // warm dark gray
$background-color: #FAF8F5; // warm off-white
$link-color: #A67C52; // warm brown

// Apply overrides
body {
  background-color: $background-color;
  color: $text-color;
}

a {
  color: $link-color;
}

// iOS-specific additions
.app-store-badge {
  display: inline-block;
  margin: 20px 0;
}

.screenshot-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
}
```

**For Minima 3.x (if using newer version):**
Use `_sass/minima/custom-variables.scss` for cleaner overrides.

## Installation & Setup

### Initial Setup

```bash
# Install GitHub Pages gem (mirrors GH Pages environment)
gem install github-pages

# Or use Gemfile:
# source 'https://rubygems.org'
# gem "github-pages", group: :jekyll_plugins

# Create Jekyll site
jekyll new ordtegl-site
cd ordtegl-site
```

### Configuration (`_config.yml`)

```yaml
title: Ordtegl
description: Learn Danish vocabulary naturally
baseurl: "" # if root domain
url: "https://yourusername.github.io"

# Theme
theme: minima

# Plugins (add to enable)
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed

# SEO
author: Your Name
twitter:
  username: ordtegl
  card: summary

# Collections (for features, press kit)
collections:
  features:
    output: false
```

### Local Development

```bash
# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Deployment

**Setup:**
1. Create repository named `username.github.io` (user site) or `ordtegl-public` (project site)
2. Push to main branch
3. GitHub Pages > Settings > Build from main branch

**Deploy:**
```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub automatically builds and deploys within ~1 minute.

## Alternatives Considered

### Alternative 1: Just the Docs
**What:** Modern documentation theme
**Why not:** Over-engineered for marketing site, designed for docs not landing pages

### Alternative 2: Minimal Mistakes
**What:** Feature-rich Jekyll theme with 9 skins
**Why not:** Too heavy for simple landing page, blog-oriented

### Alternative 3: Custom HTML/CSS (no Jekyll)
**What:** Pure HTML files on GitHub Pages
**Why not:** Lose templating, harder to maintain privacy policy across updates

### Alternative 4: Next.js/Hugo/Astro
**What:** Modern static site generators
**Why not:**
- Next.js/Astro require GitHub Actions (more complex)
- Hugo not supported natively by GitHub Pages
- Jekyll is the standard for GitHub Pages with zero-config deploy

### Alternative 5: Webflow/Framer
**What:** Visual website builders
**Why not:** Paid, not open source, can't version control in same repo as app

## GitHub Pages Constraints

### Critical Constraints

| Constraint | Impact | Mitigation |
|------------|--------|------------|
| Jekyll 3.10.0 only | Can't use Jekyll 4 features | Not needed for marketing site |
| Plugin whitelist | Only ~15 plugins supported | Needed plugins are supported |
| No custom Ruby code | Can't write custom Jekyll plugins | Use supported plugins or client-side JS |
| 1GB size limit | Repo size capped | Not an issue (site will be <10MB) |
| 100GB bandwidth/month | Soft limit | Not an issue for marketing site |

### Supported Plugins Only

**Full list of supported plugins:**
- jekyll-coffeescript
- jekyll-default-layout
- jekyll-gist
- jekyll-github-metadata
- jekyll-optional-front-matter
- jekyll-paginate
- jekyll-readme-index
- jekyll-titles-from-headings
- jekyll-relative-links
- jekyll-feed
- jekyll-sitemap
- jekyll-seo-tag
- jekyll-mentions
- jemoji
- jekyll-redirect-from
- jekyll-avatar
- jekyll-include-cache

**Source:** [GitHub Pages versions API](https://pages.github.com/versions.json)

**Unsupported popular plugins:**
- jekyll-assets (asset pipeline)
- jekyll-compose (authoring helpers)
- jekyll-archives (archive pages)

**Workaround:** If you need unsupported plugins, use GitHub Actions to build Jekyll locally and push static files.

### Build Constraints

- **Build time:** ~1 minute typical, 10 minutes max
- **Safe mode:** `--safe` flag disables custom plugins
- **No server-side code:** Pure static HTML output

### HTTPS

- **Custom domains:** Free automatic HTTPS via Let's Encrypt
- **github.io domains:** HTTPS by default

## Privacy Policy Specific Considerations

For your privacy policy page covering PostHog analytics, backend sync, and error reporting:

### Recommended Structure

```
_pages/
  privacy.md
  terms.md
  support.md
_data/
  privacy_sections.yml  # Structured privacy data
```

### Privacy Policy Template Approach

**Don't use:** External privacy policy generators (outdated, generic)
**Do use:** Custom markdown with structured sections

```markdown
---
layout: page
title: Privacy Policy
permalink: /privacy/
---

# Privacy Policy

Last updated: {{ site.time | date: '%B %d, %Y' }}

## Data We Collect

### Analytics Data (PostHog)
- Device type and OS version
- App usage patterns
- Crash reports

[Continue with your specific sections...]
```

**Why markdown:** Easy to version control, update alongside app changes, no external dependencies.

## Summary

**Recommended Stack:**
- Jekyll 3.10.0 (GitHub Pages native)
- Minima theme with SCSS customization
- Plugins: jekyll-seo-tag, jekyll-sitemap, jekyll-feed
- Deploy: Push to main, GitHub builds automatically

**Setup time:** ~1 hour for basic site, ~4 hours for full customization
**Maintenance:** Near-zero (update markdown files only)
**Cost:** Free (GitHub Pages)

**This stack is:**
- Simple (no CI/CD to configure)
- Standard (GitHub Pages default)
- Customizable (SCSS overrides for warm neutrals)
- Well-supported (official GitHub documentation)

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Jekyll version | HIGH | Verified via official GitHub Pages versions API |
| Plugin support | HIGH | Verified via official GitHub documentation |
| Theme recommendations | MEDIUM | Based on popularity + maintenance, not exhaustive survey |
| Styling approach | HIGH | Official Jekyll/GitHub Pages documentation |
| Deployment process | HIGH | Standard GitHub Pages workflow |

## Sources

**Official Documentation:**
- [GitHub Pages Jekyll Documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
- [GitHub Pages Supported Versions](https://pages.github.com/versions.json)
- [Jekyll Official Documentation](https://jekyllrb.com/docs/github-pages/)

**Themes:**
- [automatic-app-landing-page](https://github.com/emilbaehr/automatic-app-landing-page)
- [Minima Theme](https://github.com/jekyll/minima)
- [GitHub Pages Themes Directory](https://jekyllthemes.io/github-pages-themes)

**Customization:**
- [Customizing Minima Theme](https://mcmasterrs.github.io/lm_minimal-computing/jekyll-customization/customize-minima-theme.html)
- [GitHub Pages Custom CSS](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)

**Jekyll 4 Context:**
- [Making GitHub Pages Work With Jekyll 4+](https://www.moncefbelyamani.com/making-github-pages-work-with-latest-jekyll/)
- [GitHub Pages Jekyll 4 Support Discussion](https://github.com/github/pages-gem/issues/651)
