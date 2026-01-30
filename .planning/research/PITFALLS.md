# Pitfalls Research: iOS App Landing Page & Privacy Policy

**Project:** Ordtegl - Danish vocabulary learning iOS app
**Domain:** iOS app marketing site + privacy policy
**Researched:** 2026-01-30
**Overall confidence:** HIGH (App Store requirements), MEDIUM (technical implementation)

## Executive Summary

Building a privacy policy site for an iOS app is a high-stakes domain. App Store rejection rates for privacy-related issues are 12% as of Q1 2025, making it one of the most common rejection reasons. The critical risks cluster around three areas:

1. **App Store Review Compliance** - Missing or inaccessible privacy policies, broken links, and incomplete disclosures
2. **GDPR/Danish Legal Requirements** - Explicit consent mechanisms, data retention policies, account deletion
3. **Technical Infrastructure** - GitHub Pages HTTPS certificate issues, broken privacy policy links

For Ordtegl specifically, the combination of PostHog analytics, Sign in with Apple, backend progress sync, and content error reporting creates multiple disclosure requirements that must be handled correctly.

## Critical Pitfalls (Can cause rejection or legal issues)

### Pitfall 1: Inaccessible Privacy Policy Link

**What goes wrong:** Privacy policy exists but Apple reviewers can't find it easily within the app.

**Why it happens:** Developers put the privacy policy link in obscure locations (nested settings menus, help screens, account pages) or assume the App Store Connect metadata link is sufficient.

**Consequences:**
- Immediate App Store rejection under Guideline 5.1.1(i)
- Rejection loop - even if you fix it, reviewers may not re-test thoroughly
- 12% of App Store submissions in Q1 2025 were rejected for privacy violations

**Detection warning signs:**
- Privacy policy link requires more than 2 taps to reach from main screen
- Link is only in App Store Connect, not in the app itself
- Link buried in "About" screen without clear label
- Reviewers specifically look for links in Settings menu

**Prevention strategy:**
1. Add privacy policy link in app Settings screen (Settings > Privacy Policy)
2. Also link from login/signup screen if using Sign in with Apple
3. Use clear, unambiguous label: "Privacy Policy" not "Legal" or "Terms"
4. Test on clean device: can a new user find it within 30 seconds?
5. In App Store Connect metadata, provide the same URL

**Phase to address:** Phase 1 (Privacy Policy Creation) - Must be correct from first submission

**Sources:**
- [App Store Review Guidelines 2025](https://nextnative.dev/blog/app-store-review-guidelines)
- [iOS Submission Guide](https://iossubmissionguide.com/app-store-privacy-policy-requirements)

---

### Pitfall 2: Incomplete Third-Party Data Disclosure (PostHog)

**What goes wrong:** Privacy policy doesn't explicitly disclose what PostHog collects, how it's used, or that it's a third-party service.

**Why it happens:** Developers assume "we use analytics" is sufficient, or don't understand what PostHog's iOS SDK collects by default.

**Consequences:**
- App Store rejection under Guideline 5.1.1(i) - "must identify what data is collected and all uses"
- Privacy Manifest violations (May 2024+ requirement)
- GDPR violations - analytics requires explicit consent under GDPR Article 6
- Potential fines up to 20 million EUR under GDPR

**PostHog iOS SDK default collection:**
- Application Opened events (when app opens or foregrounds)
- Application Backgrounded events (when app backgrounds)
- Device properties: OS version, device model, screen size
- Anonymous user IDs (by default with personProfiles: .identifiedOnly)
- IP addresses (unless configured to anonymize)

**Detection warning signs:**
- Privacy policy says "we collect analytics" without specifics
- No mention of PostHog as third-party service
- No disclosure of what events are captured
- Missing "Product Analytics" in App Store Connect privacy nutrition labels
- Privacy Manifest (PrivacyInfo.xcprivacy) missing or incomplete

**Prevention strategy:**
1. **Privacy Policy must state:**
   - "We use PostHog, a third-party analytics service, to understand app usage"
   - List specific data collected: app opens/closes, device info, anonymized usage patterns
   - State purpose: "to improve app performance and user experience"
   - Provide opt-out mechanism: "You can disable analytics in Settings"
   - Link to PostHog's privacy policy

2. **Privacy Nutrition Labels in App Store Connect:**
   - Under "Data Types" > "Product Interaction" > select "Product Interaction"
   - Purpose: "Analytics"
   - Linked to user identity: depends on your config (if anonymized, select "No")

3. **Privacy Manifest (PrivacyInfo.xcprivacy):**
   - Declare any Required Reason APIs PostHog uses
   - Document data collection purposes
   - Required since May 1, 2024 for App Store submissions

4. **GDPR Consent:**
   - Show consent dialog on first launch: "We'd like to collect anonymous usage data to improve the app"
   - Provide "Accept" and "Decline" options
   - Store preference and respect it
   - Allow changing preference in Settings

**Ordtegl-specific note:** You mentioned PostHog is "anonymized" - verify this is configured correctly:
```swift
// Ensure anonymous mode
config.personProfiles = .identifiedOnly // Don't create person profiles for anonymous users
// Consider disabling IP capture
config.captureApplicationLifecycleEvents = true // Or false if you don't want this
```

**Phase to address:** Phase 1 (Privacy Policy) and Phase 2 (App Implementation)

**Sources:**
- [PostHog iOS SDK Data Collection](https://posthog.com/docs/privacy/data-collection)
- [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [GDPR Mobile App Compliance](https://www.mobiloud.com/blog/gdpr-compliant-mobile-app)

---

### Pitfall 3: Missing Account Deletion Functionality

**What goes wrong:** App uses Sign in with Apple (creates accounts) but doesn't provide in-app account deletion.

**Why it happens:** Developers assume email support or web portal deletion is sufficient.

**Consequences:**
- **Guaranteed App Store rejection** under Guideline 5.1.1(v)
- Enforcement started June 30, 2022 - still actively enforced in 2026
- Apple is "rejecting apps en masse" for this violation
- Cannot ship updates until fixed

**Requirements:**
- If app supports account creation, MUST offer account deletion within the app
- Just linking to email support is NOT sufficient
- Just allowing deletion from website is NOT sufficient
- Must be easy to find (typically in Settings or Account screen)

**Detection warning signs:**
- User can create account via Sign in with Apple
- No "Delete Account" button anywhere in app
- Account deletion only mentioned as "email us at support@..."
- Account deletion requires going to external website

**Prevention strategy:**
1. **Add "Delete Account" in Settings:**
   - Settings > Account > Delete Account (red destructive button)
   - Clear confirmation dialog: "This will permanently delete your account and all data"
   - Explain what happens: "Your progress and settings will be lost"

2. **Deletion flow:**
   - Can be instant OR can require up to 30 days processing
   - If delayed, explain timeline: "Deletion will complete within 30 days"
   - Must clearly state what happens to user data

3. **Backend implementation:**
   - Delete user's progress sync data from backend
   - Revoke Sign in with Apple tokens
   - Remove PostHog user data (if identified users)
   - Document deletion in privacy policy

4. **Sign in with Apple specific:**
   - Starting January 1, 2026, Korean developers must provide server-to-server notification endpoint
   - This receives account deletion notifications from Apple
   - Not required for Danish developers yet, but good practice

**Ordtegl-specific note:** You have:
- Sign in with Apple authentication (creates accounts) ✓
- Backend progress sync (user data stored) ✓
- **MUST implement in-app deletion** - this is non-negotiable

**Phase to address:** Phase 2 (App Implementation) - Required before first submission

**Sources:**
- [Account Deletion Requirement](https://developer.apple.com/news/?id=12m75xbj)
- [Apple's In-App Account Deletion Requirement](https://www.privacypolicies.com/blog/apple-requirement-in-app-account-deletion/)
- [Transcend Guide](https://transcend.io/blog/apple-requirement-app-account-deletion)

---

### Pitfall 4: Privacy Policy Not in Danish

**What goes wrong:** Privacy policy only available in English, not Danish.

**Why it happens:** Developers assume English is sufficient for international apps.

**Consequences:**
- Potential App Store rejection if app is marketed in Danish
- GDPR violations - users must understand privacy practices in their language
- Danish Data Protection Authority (Datatilsynet) enforcement
- Poor user trust - Danish users can't understand their rights

**Requirements:**
- App Store Connect supports Danish (da-DK) localization
- GDPR requires privacy policy in user's language for EU apps
- If app is published from Danish App Store account and targets Danish users, Danish policy expected

**Detection warning signs:**
- App Store listing is in Danish but privacy policy URL is English-only
- App localizes UI to Danish but privacy policy doesn't
- User complaint: "I can't understand what data you collect"

**Prevention strategy:**
1. **Create Danish version of privacy policy:**
   - Translate complete privacy policy to Danish
   - Use legal translator or native speaker for accuracy
   - Ensure legal terms are correct (e.g., "personoplysninger" not "personal data")

2. **Localization options:**
   - **Option A:** Separate URLs (privacy-da.html, privacy-en.html)
   - **Option B:** Single page with language toggle
   - **Option C:** Auto-detect user's language preference

3. **App Store Connect:**
   - In App Store Connect, provide Danish privacy policy URL for Danish localization
   - Provide English privacy policy URL for English localization

4. **In-app link:**
   - Detect user's iOS language setting
   - Link to appropriate privacy policy version
   - Provide language selector if user wants different language

**Ordtegl-specific note:** Since you're building a Danish vocabulary learning app published from Danish App Store account:
- Danish privacy policy is essentially mandatory
- Users expect Danish content
- Consider Danish as primary, English as fallback

**Phase to address:** Phase 1 (Privacy Policy) - Create both versions initially

**Sources:**
- [App Store Localizations](https://developer.apple.com/help/app-store-connect/reference/app-store-localizations/)
- [Privacy Policy Different Languages](https://www.iubenda.com/en/help/539-privacy-policy-different-languages)
- [Danish GDPR Requirements](https://www.dlapiperdataprotection.com/index.html?t=law&c=DK)

---

### Pitfall 5: Broken Privacy Policy Link After Deployment

**What goes wrong:** Privacy policy link works during development but breaks in production (404 error, HTTPS certificate issues, DNS problems).

**Why it happens:** Jekyll build issues, GitHub Pages custom domain HTTPS certificate provisioning fails, DNS misconfiguration.

**Consequences:**
- Immediate App Store rejection if detected during review
- Existing app may be removed if users report broken link
- Guideline 5.1.1(i) violation: "Apps should have all included URLs fully functional"
- User trust destroyed - looks like you're hiding something

**Common technical causes:**
1. **GitHub Pages HTTPS certificate issues:**
   - DNS not properly configured (wrong A records, extra CNAME records)
   - Domain name longer than 64 characters
   - Cloudflare proxy enabled (orange cloud) during certificate generation
   - CAA records missing letsencrypt.org

2. **Jekyll build failures:**
   - Privacy policy in _drafts instead of published
   - Incorrect front matter (published: false)
   - File name typo in app link vs actual file
   - Jekyll safe mode blocking plugins

3. **URL mismatches:**
   - App hardcodes https://example.com/privacy but actual URL is /privacy-policy
   - App links to www.example.com but GitHub Pages configured for apex domain
   - Trailing slash issues: /privacy vs /privacy/

**Detection warning signs:**
- "Enforce HTTPS" checkbox greyed out in GitHub Pages settings
- Certificate shows "Not Secure" warning in browser
- Link works from some devices but not others (DNS propagation)
- Link worked yesterday but broken today (certificate expired)

**Prevention strategy:**

1. **Pre-deployment testing:**
   - Test privacy policy URL from multiple devices (iOS, desktop)
   - Test both apex domain (example.com) and www subdomain
   - Verify HTTPS certificate is valid (no browser warnings)
   - Test in private/incognito mode (no cached DNS)

2. **GitHub Pages + Custom Domain setup:**
   ```
   # Correct DNS configuration for GitHub Pages
   A records for apex domain:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153

   CNAME record for www subdomain:
   username.github.io
   ```

3. **HTTPS Certificate provisioning:**
   - Add custom domain in GitHub Pages settings
   - Wait 10-15 minutes for DNS propagation
   - If "Enforce HTTPS" doesn't enable after 1 hour:
     - Remove custom domain, save
     - Wait 5 minutes
     - Re-add custom domain, save
   - Do NOT use Cloudflare orange-cloud (proxied) during initial setup
   - After certificate issued, can enable Cloudflare proxy

4. **Jekyll configuration:**
   ```yaml
   # _config.yml
   url: "https://ordtegl.com"  # No trailing slash
   baseurl: ""                  # Empty for custom domain

   # Ensure privacy policy is published
   # privacy-policy.md or privacy-policy.html in root or _pages/
   ```

5. **App implementation:**
   ```swift
   // Use absolute URL, not relative
   let privacyURL = URL(string: "https://ordtegl.com/privacy-policy")!

   // Verify URL is reachable before submission
   // Consider in-app fallback if network unavailable
   ```

6. **Monitoring after deployment:**
   - Set up uptime monitoring (UptimeRobot, StatusCake - free tier)
   - Monitor HTTPS certificate expiration (Let's Encrypt certs expire after 90 days)
   - GitHub Pages auto-renews, but can fail if DNS changes

**Ordtegl-specific note:** Test privacy policy link from:
- Danish iOS devices (might have different DNS)
- Both cellular and WiFi networks
- VPN and non-VPN connections

**Phase to address:** Phase 3 (Deployment) - Test thoroughly before App Store submission

**Sources:**
- [GitHub Pages HTTPS Issues](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Cloudflare Conflicts](https://community.cloudflare.com/t/github-pages-keep-saying-it-cant-enforce-https/397570)
- [Certificate Troubleshooting](https://github.com/orgs/community/discussions/22811)

---

## Moderate Pitfalls (Cause delays or require fixes)

### Pitfall 6: Incomplete "Sign in with Apple" Disclosure

**What goes wrong:** Privacy policy doesn't explain how Sign in with Apple email relay works or what data Apple shares.

**Why it happens:** Developers assume Sign in with Apple is "private by default" and doesn't need disclosure.

**Consequences:**
- Privacy policy feels incomplete to users
- Users confused about email relay addresses (privaterelay.appleid.com)
- Potential rejection if reviewers flag incomplete disclosure
- GDPR requires explaining data sharing with third parties (Apple is third party)

**What Sign in with Apple actually shares:**
- User's name (if user allows, editable by user)
- Email address (real or relay address: privaterelay.appleid.com)
- User identifier (stable, app-specific)

**Apple's privacy practices (to disclose):**
- Apple doesn't track which apps users sign into
- Email relay forwards messages without reading content
- User can disable email relay anytime
- Relay addresses are app-specific (can't be used to track across apps)

**Prevention strategy:**
1. **Privacy policy section on Sign in with Apple:**
   ```markdown
   ## Authentication

   We use Sign in with Apple for secure authentication. When you sign in:

   - Apple shares your name and email address with us
   - You can choose to hide your real email using Apple's private relay
   - We receive an app-specific user identifier
   - Apple does not track your app usage

   If you use Apple's email relay:
   - Emails we send are forwarded through Apple's relay
   - Apple doesn't read email content (only spam filtering)
   - You can disable relay forwarding in your Apple ID settings
   - Relay addresses are specific to this app
   ```

2. **App Store Connect Privacy Labels:**
   - Under "Data Used to Track You": None (Sign in with Apple doesn't track)
   - Under "Data Linked to You": Name, Email (if you store these)
   - Purpose: "App Functionality"

3. **Email delivery considerations:**
   - Set up SPF and DKIM for your sending domain
   - Register sending domain with Apple if sending automated emails
   - Don't share relay addresses with other services (will bounce)

**Phase to address:** Phase 1 (Privacy Policy)

**Sources:**
- [Sign in with Apple Privacy](https://www.apple.com/legal/privacy/data/en/sign-in-with-apple/)
- [Email Relay Service](https://developer.apple.com/documentation/signinwithapple/communicating-using-the-private-email-relay-service)

---

### Pitfall 7: Vague "Content Error Reports" Data Handling

**What goes wrong:** Privacy policy says "users can report errors" but doesn't explain what data is collected in error reports.

**Why it happens:** Developers focus on main features (analytics, auth) and treat error reporting as minor.

**Consequences:**
- Privacy policy incomplete
- Users don't know if error reports include personal data
- GDPR requires explaining all data collection, including user-submitted content
- If error reports include screenshots or user content, additional disclosures required

**What to disclose:**
- What data is included in error reports (content text, screenshot, device info?)
- Where error reports are stored (backend, email, third-party service?)
- Who can access error reports (just you, or support team?)
- How long error reports are retained
- Can users delete their error reports?

**Prevention strategy:**
1. **Define error report scope first:**
   - What data do you actually need to fix content errors?
   - Minimum: error description, content ID
   - Optional: user device info, app version
   - Avoid: screenshots (unless explicitly stated), user identifiers

2. **Privacy policy disclosure:**
   ```markdown
   ## Content Error Reports

   You can report errors in vocabulary content (typos, incorrect translations).

   When you submit a report:
   - We collect the error description you provide
   - The content ID (vocabulary word) being reported
   - Your app version and iOS version (for debugging)
   - Your user ID (if signed in) to follow up

   Error reports are:
   - Stored on our backend server
   - Reviewed by our team to fix content
   - Retained for 1 year, then deleted
   - Not shared with third parties

   You can request deletion of your error reports by emailing privacy@ordtegl.com
   ```

3. **App Store Connect Privacy Labels:**
   - Under "Data Types" > "User Content" > "Other User Content"
   - Purpose: "App Functionality"
   - Linked to user identity: Yes (if signed in)

4. **GDPR considerations:**
   - Error reports are "personal data" if they include user ID
   - Must have legal basis (legitimate interest: fixing app bugs)
   - Users have right to access/delete their reports (add to account deletion flow)

**Ordtegl-specific note:** For Danish vocabulary app:
- Error reports might include user's language skill level (personal data)
- Be specific about what content is reported (word, definition, example sentence?)
- Consider allowing anonymous error reports (better for privacy)

**Phase to address:** Phase 1 (Privacy Policy) and Phase 2 (App Implementation)

**Sources:**
- [GDPR User Content](https://www.termsfeed.com/blog/gdpr-mobile-apps/)
- [App Store User-Generated Content](https://www.termsfeed.com/videos/apple-app-store-comply-ugc-requirements/)

---

### Pitfall 8: No Data Retention or Deletion Policy

**What goes wrong:** Privacy policy explains what data is collected but not how long it's kept or how users can delete it.

**Consequences:**
- App Store rejection under Guideline 5.1.1(i): "explain data retention/deletion policies"
- GDPR violation - Article 17 "Right to Erasure" requires deletion process
- Users can't exercise their rights

**Required disclosures:**
1. **Data retention periods:**
   - How long is analytics data kept? (PostHog default: 7 years, configurable)
   - How long is progress sync data kept? (Until account deleted? Forever?)
   - How long are error reports kept?
   - How long are backups retained?

2. **Deletion process:**
   - How users request deletion (in-app account deletion, email request?)
   - Timeline for deletion (instant, 30 days, 90 days?)
   - What happens to backups? (Most GDPR-compliant: delete from backups too)
   - Can users delete partial data? (e.g., delete analytics but keep progress?)

**Prevention strategy:**
1. **Define retention policy:**
   ```
   PostHog analytics: 1 year, then auto-deleted
   Progress sync data: Kept until account deleted
   Error reports: 1 year, then auto-deleted
   Account metadata: Kept until account deleted
   Backups: 30-day backup retention, then purged
   ```

2. **Privacy policy section:**
   ```markdown
   ## Data Retention

   We keep your data for as long as you use the app:

   - **Progress data**: Stored until you delete your account
   - **Analytics data**: Retained for 1 year, then automatically deleted
   - **Error reports**: Retained for 1 year to fix content issues, then deleted
   - **Backups**: 30-day rolling backups, then purged

   ## Data Deletion

   You can delete your data:

   1. **Delete account** (Settings > Account > Delete Account):
      - Permanently deletes all your progress data
      - Removes your user profile
      - Completes within 30 days

   2. **Disable analytics** (Settings > Privacy > Analytics):
      - Stops future analytics collection
      - Does not delete past analytics data

   3. **Request full deletion** (email privacy@ordtegl.com):
      - We'll delete all data including analytics and error reports
      - Completes within 30 days per GDPR
   ```

3. **Technical implementation:**
   - Implement automated data deletion (cron jobs for old analytics/errors)
   - Document deletion process in backend
   - Test account deletion thoroughly (verify data actually deleted)

**Phase to address:** Phase 1 (Privacy Policy) and Phase 2 (Backend Implementation)

**Sources:**
- [GDPR Right to Erasure](https://www.dlapiperdataprotection.com/index.html?t=law&c=DK)
- [App Review Guidelines 5.1.1](https://developer.apple.com/app-store/review/guidelines/)

---

## Minor Pitfalls (Cause friction but fixable)

### Pitfall 9: Privacy Manifest (PrivacyInfo.xcprivacy) Missing

**What goes wrong:** App submitted without Privacy Manifest file or with incomplete manifest.

**Why it happens:** Developer unaware of May 2024 requirement or doesn't know what to include.

**Consequences:**
- App Store rejection since May 1, 2024
- Warning in Xcode when submitting
- Cannot upload to App Store Connect

**Requirements:**
- Apps must include PrivacyInfo.xcprivacy file in Xcode project
- File must declare "Required Reason APIs" used
- File must list data collection types

**Common Required Reason APIs:**
- File timestamp APIs (for caching)
- System boot time APIs (for app lifecycle)
- Disk space APIs (for storage management)
- User defaults APIs (for settings storage)

**Prevention strategy:**
1. **Create Privacy Manifest in Xcode:**
   - Right-click project > New File > App Privacy File
   - Named PrivacyInfo.xcprivacy

2. **Declare data collection:**
   ```xml
   NSPrivacyCollectedDataTypes:
   - NSPrivacyCollectedDataType: Name
     NSPrivacyCollectedDataTypePurpose: App Functionality
   - NSPrivacyCollectedDataType: Email Address
     NSPrivacyCollectedDataTypePurpose: App Functionality
   - NSPrivacyCollectedDataType: Product Interaction
     NSPrivacyCollectedDataTypePurpose: Analytics
   ```

3. **Check PostHog SDK:**
   - PostHog iOS SDK should include its own PrivacyInfo.xcprivacy
   - Verify by checking node_modules or Swift Package Manager cache
   - If missing, you may need to declare PostHog's APIs in your manifest

4. **Xcode validation:**
   - Xcode shows warnings if Required Reason APIs used without declaration
   - Review warnings before submission

**Phase to address:** Phase 2 (App Implementation)

**Sources:**
- [Privacy Manifest Files](https://developer.apple.com/documentation/bundleresources/privacy-manifest-files)
- [Required Reason APIs](https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api)

---

### Pitfall 10: Generic Privacy Policy Template

**What goes wrong:** Developer uses generic privacy policy template without customizing for Ordtegl's specific features.

**Why it happens:** Trying to save time, or not understanding what needs to be specific.

**Consequences:**
- App Store rejection for vague/incomplete policy
- Privacy policy doesn't match actual app behavior
- Users can't understand what data is collected
- GDPR violations if disclosures are inaccurate

**Generic template problems:**
- Says "we may collect location data" when app doesn't use location
- Doesn't mention PostHog specifically, just "analytics providers"
- Lists every possible data type instead of actual collection
- Uses legal jargon users can't understand

**Prevention strategy:**
1. **Customize for Ordtegl specifically:**
   ```markdown
   ❌ Generic: "We may collect various types of data including location."
   ✅ Specific: "Ordtegl collects: app usage patterns (PostHog analytics),
                 vocabulary progress (backend sync), and content error reports."

   ❌ Generic: "We use third-party service providers."
   ✅ Specific: "We use PostHog (analytics) and Sign in with Apple (authentication)."

   ❌ Generic: "We may use cookies and tracking technologies."
   ✅ Specific: "Ordtegl does not use cookies. Analytics are collected via PostHog SDK."
   ```

2. **Match privacy nutrition labels:**
   - If privacy policy says you collect X, App Store Connect labels must also show X
   - If labels show Y, privacy policy must explain Y
   - Mismatches cause rejection

3. **Plain language:**
   - Write for Danish learners (intermediate English level)
   - Avoid legal jargon: "We collect your progress data to sync across devices"
   - Not: "We process personal data pursuant to legitimate interests under GDPR Article 6(1)(f)"

4. **Accuracy check:**
   - Review app code to see what's actually collected
   - Review PostHog configuration for exact data types
   - Verify Sign in with Apple data sharing
   - Don't claim you don't collect data if PostHog is enabled

**Phase to address:** Phase 1 (Privacy Policy)

**Sources:**
- [iOS App Privacy Policy Examples](https://www.termsfeed.com/blog/ios-apps-privacy-policy/)
- [Generic Policy Pitfalls](https://www.privacypolicies.com/blog/apple-privacy-policy-details-requirements/)

---

### Pitfall 11: Missing Contact Information

**What goes wrong:** Privacy policy doesn't include developer contact info for privacy questions.

**Why it happens:** Developer forgets or assumes App Store listing contact is sufficient.

**Consequences:**
- App Store rejection (privacy policy must be complete)
- GDPR violation - users must have way to contact data controller
- Users can't exercise their rights (access, deletion, correction)

**Required contact info:**
- Email address specifically for privacy questions
- Physical address (required by GDPR for data controller identification)
- Company/developer name
- Optional: Phone number, support portal

**Prevention strategy:**
1. **Privacy policy contact section:**
   ```markdown
   ## Contact Us

   For privacy-related questions or to exercise your data rights:

   **Email:** privacy@ordtegl.com
   **Developer:** [Your Name or Company]
   **Address:** [Physical address required by GDPR]

   We'll respond to privacy requests within 30 days per GDPR requirements.
   ```

2. **Set up privacy email:**
   - Create privacy@ordtegl.com specifically for privacy inquiries
   - Monitor regularly (required to respond within 30 days for GDPR)
   - Consider auto-responder acknowledging receipt

3. **GDPR data controller registration:**
   - In Denmark, register with Datatilsynet if processing personal data
   - Provide registration number in privacy policy (if applicable)

**Phase to address:** Phase 1 (Privacy Policy)

**Sources:**
- [GDPR Denmark Requirements](https://www.datatilsynet.dk/english/legislation/)
- [Privacy Policy Contact Requirements](https://www.iubenda.com/en/help/401-privacy-policy-for-ios-and-macos-apps/)

---

### Pitfall 12: No "Opt Out of Analytics" Implementation

**What goes wrong:** Privacy policy says users can opt out of analytics but app doesn't actually implement it.

**Why it happens:** Developer writes policy before implementing feature, then forgets.

**Consequences:**
- Privacy policy is false/misleading
- GDPR violations - consent must be withdrawable
- Users can't exercise their choice
- Trust destroyed when users discover opt-out doesn't work

**Prevention strategy:**
1. **Implement opt-out before launch:**
   ```swift
   // Settings > Privacy > Analytics toggle

   @AppStorage("analyticsEnabled") private var analyticsEnabled = false

   // In app initialization
   if analyticsEnabled {
       PostHogSDK.shared.capture("event")
   } else {
       // Don't send analytics
       PostHogSDK.shared.optOut()
   }
   ```

2. **GDPR-compliant default:**
   - Default should be OFF (opt-in) for EU users
   - Show consent dialog on first launch
   - Store choice persistently
   - Apply immediately (don't wait for next launch)

3. **Test thoroughly:**
   - Toggle analytics off
   - Use app normally
   - Verify no events sent to PostHog
   - Check network traffic (Charles Proxy, Wireshark)

4. **Privacy policy matches implementation:**
   ```markdown
   ## Your Privacy Choices

   **Disable Analytics:**
   1. Open Settings
   2. Tap Privacy
   3. Toggle "Analytics" off

   This stops all analytics collection immediately. Your choice is saved
   and applied across all devices where you're signed in.
   ```

**Ordtegl-specific note:** Consider:
- Granular controls: analytics only, or also disable error reports?
- Sync preference across devices via backend (if user signed in)?
- Show impact: "Analytics help us improve vocabulary content"

**Phase to address:** Phase 2 (App Implementation)

**Sources:**
- [PostHog Privacy Controls](https://posthog.com/docs/product-analytics/privacy)
- [GDPR Consent Requirements](https://secureprivacy.ai/blog/mobile-app-consent-ios-2025)

---

## Technical Pitfalls (Infrastructure & Deployment)

### Pitfall 13: GitHub Pages Jekyll Build Failures

**What goes wrong:** Privacy policy site builds locally but fails on GitHub Pages.

**Why it happens:** GitHub Pages runs Jekyll in safe mode (limited plugins), different Jekyll version, or environment-specific issues.

**Consequences:**
- Privacy policy site doesn't deploy
- App links to 404 error
- App Store rejection if detected during review

**Common causes:**
1. **Unsupported plugins:**
   - GitHub Pages safe mode only allows specific plugins
   - Custom plugins in _plugins/ won't work
   - Solution: Build site locally, push _site/ directory (or use GitHub Actions)

2. **Jekyll version mismatch:**
   - Local: Jekyll 4.3.3
   - GitHub Pages: Jekyll 3.9.x (often behind latest)
   - Syntax differences cause build failures

3. **File path issues:**
   - Windows vs Linux path separators
   - Case-sensitive file names on GitHub, case-insensitive locally

4. **Missing dependencies:**
   - Gemfile not committed
   - GitHub Pages doesn't install all gems

**Prevention strategy:**
1. **Test with GitHub Pages environment:**
   ```ruby
   # Gemfile
   source "https://rubygems.org"
   gem "github-pages", group: :jekyll_plugins

   # This uses same Jekyll version as GitHub Pages
   ```

2. **Use only supported plugins:**
   - jekyll-feed
   - jekyll-sitemap
   - jekyll-seo-tag
   - Full list: https://pages.github.com/versions/

3. **Check build status:**
   - GitHub repo > Settings > Pages > shows build status
   - Email notifications for build failures
   - Review error logs

4. **Alternative: GitHub Actions for build:**
   ```yaml
   # .github/workflows/jekyll.yml
   # Build with any Jekyll version, deploy to gh-pages branch
   ```

**Phase to address:** Phase 3 (Deployment)

**Sources:**
- [Jekyll GitHub Pages](https://pappater.github.io/docs/GitHub%20Pages%20and%20Jekyll/)
- [Jekyll Safe Mode](https://docs.github.com/en/pages)

---

### Pitfall 14: Cloudflare + GitHub Pages HTTPS Conflicts

**What goes wrong:** Using Cloudflare for DNS causes GitHub Pages HTTPS certificate to fail or not renew.

**Why it happens:** Cloudflare's proxy (orange cloud) interferes with Let's Encrypt certificate generation.

**Consequences:**
- Privacy policy link shows HTTPS warning
- Certificate expires after 3 months (can't renew)
- App Store rejection if reviewers see security warning
- Users don't trust site

**Prevention strategy:**
1. **Initial setup (certificate generation):**
   - Set Cloudflare DNS records to "DNS Only" (grey cloud)
   - Add custom domain in GitHub Pages settings
   - Wait for GitHub to issue certificate (up to 24 hours)
   - Verify "Enforce HTTPS" is enabled in GitHub Pages

2. **After certificate issued:**
   - Can enable Cloudflare proxy if needed (orange cloud)
   - BUT certificate won't auto-renew - must disable proxy every 3 months
   - Better: Keep DNS-only (grey cloud) for simplicity

3. **Recommended approach for Ordtegl:**
   - Use GitHub Pages without Cloudflare proxy
   - GitHub Pages is already on CDN (fast globally)
   - Cloudflare adds complexity with minimal benefit for privacy policy page

4. **If using Cloudflare, configure:**
   - SSL/TLS mode: "Full" (not "Flexible" or "Full (strict)")
   - Add CAA record: `0 issue "letsencrypt.org"`
   - Set page rules to not cache privacy policy (always fresh)

**Phase to address:** Phase 3 (Deployment)

**Sources:**
- [Cloudflare GitHub Pages Conflicts](https://community.cloudflare.com/t/github-pages-keep-saying-it-cant-enforce-https/397570)
- [GitHub Pages HTTPS Troubleshooting](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

---

### Pitfall 15: External Resource Loading (Fonts, Analytics)

**What goes wrong:** Privacy policy site loads Google Fonts, FontAwesome CDN, or analytics scripts from third-party domains.

**Why it happens:** Jekyll themes include external resources by default.

**Consequences:**
- Privacy policy states "we don't use cookies" but Google Fonts sets cookies
- Third-party requests leak user IP addresses
- GDPR violation - external resources transfer personal data (IP)
- Users distrust privacy policy page that itself violates privacy

**Prevention strategy:**
1. **Self-host all resources:**
   ```html
   <!-- DON'T do this -->
   <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">

   <!-- DO this -->
   <link href="/assets/fonts/roboto.css" rel="stylesheet">
   ```

2. **Audit external requests:**
   - Open privacy policy in browser
   - Check Network tab in DevTools
   - Verify no requests to google.com, cloudflare.com, etc.
   - Only requests to your domain

3. **Minimal theme:**
   - Use simple Jekyll theme without external dependencies
   - Or strip out CDN resources from theme
   - Prioritize privacy over fancy fonts

4. **No analytics on privacy policy page:**
   - Don't load PostHog or Google Analytics on privacy policy site
   - Ironic to track users while explaining privacy
   - Static site doesn't need analytics

**Ordtegl-specific note:**
- Privacy policy site should be example of privacy-respecting design
- Demonstrates you practice what you preach
- Builds user trust

**Phase to address:** Phase 3 (Implementation)

**Sources:**
- [GDPR Jekyll Compliance](https://github.com/daattali/beautiful-jekyll/issues/356)
- [Privacy Policy Site Privacy](https://github.com/orgs/community/discussions/40768)

---

## Prevention Checklist by Phase

### Phase 1: Privacy Policy Creation

- [ ] Privacy policy in both Danish and English
- [ ] Explicitly lists PostHog analytics and what it collects
- [ ] Explains Sign in with Apple data sharing
- [ ] Describes backend progress sync data
- [ ] Explains content error report data handling
- [ ] Includes data retention periods for each data type
- [ ] Explains account deletion process
- [ ] Provides contact email for privacy questions
- [ ] Includes physical address (GDPR requirement)
- [ ] Written in plain language, not legal jargon
- [ ] Matches App Store Connect privacy nutrition labels
- [ ] No generic template language - specific to Ordtegl

### Phase 2: App Implementation

- [ ] Privacy policy link in Settings menu
- [ ] Privacy policy link on login/signup screen
- [ ] Account deletion button in Settings
- [ ] Account deletion confirms and explains consequences
- [ ] Analytics opt-out toggle in Settings
- [ ] Analytics opt-out actually works (test thoroughly)
- [ ] GDPR consent dialog on first launch
- [ ] Privacy Manifest (PrivacyInfo.xcprivacy) created
- [ ] PostHog configured for anonymous/privacy mode
- [ ] Sign in with Apple implemented correctly
- [ ] Backend account deletion endpoint implemented
- [ ] Error reports include minimal data (no unnecessary PII)

### Phase 3: Deployment & Testing

- [ ] GitHub Pages custom domain configured
- [ ] HTTPS certificate issued (Enforce HTTPS enabled)
- [ ] Privacy policy URL accessible from multiple devices
- [ ] No 404 errors, no HTTPS warnings
- [ ] Privacy policy site loads no external resources
- [ ] Jekyll build succeeds on GitHub Pages
- [ ] DNS configured correctly (A records, CNAME)
- [ ] Test from Danish IP addresses
- [ ] Privacy policy URL in app matches deployed URL
- [ ] Set up uptime monitoring for privacy policy URL

### Phase 4: App Store Submission

- [ ] App Store Connect privacy nutrition labels completed
- [ ] Privacy policy URL in App Store Connect metadata
- [ ] App Store listing localized to Danish
- [ ] Danish privacy policy URL for Danish localization
- [ ] Test app on clean device - can find privacy policy link?
- [ ] Test account deletion flow
- [ ] Test analytics opt-out
- [ ] Screenshot showing privacy policy link location
- [ ] Prepare for reviewer questions about data collection

---

## High-Risk Areas Requiring Extra Attention

Based on rejection statistics and community reports, prioritize:

1. **Privacy policy accessibility** (12% rejection rate in Q1 2025)
   - Triple-check link is easy to find in app
   - Test on clean device with no prior knowledge

2. **Account deletion** (active enforcement since 2022)
   - Non-negotiable requirement
   - Must be in-app, not just email support

3. **Privacy Manifest** (enforced since May 2024)
   - Required for submission
   - Must include Required Reason APIs

4. **Third-party disclosures** (PostHog, Sign in with Apple)
   - Be specific, not generic
   - Match privacy nutrition labels

5. **HTTPS certificate stability** (technical but critical)
   - Test thoroughly before submission
   - Monitor certificate expiration

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| App Store rejection risks | HIGH | Based on official Apple docs, recent enforcement data (2024-2026) |
| GDPR/Danish requirements | HIGH | Official Datatilsynet sources, legal references |
| PostHog specifics | MEDIUM | Based on PostHog docs, but should verify exact config for Ordtegl |
| GitHub Pages technical | HIGH | Well-documented common issues, official GitHub docs |
| Sign in with Apple | HIGH | Official Apple documentation |
| Privacy Manifest | HIGH | Required since May 2024, well-documented |
| Landing page UX | LOW | Generic best practices, not iOS-specific (out of scope) |

---

## Sources

### App Store Requirements (HIGH confidence)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [App Store Review Guidelines 2025 Checklist](https://nextnative.dev/blog/app-store-review-guidelines)
- [iOS App Store Review Guidelines 2026](https://crustlab.com/blog/ios-app-store-review-guidelines/)
- [Privacy Updates for App Store](https://developer.apple.com/news/?id=3d8a9yyh)
- [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)

### Account Deletion (HIGH confidence)
- [Account Deletion Requirement](https://developer.apple.com/news/?id=12m75xbj)
- [Apple's In-App Account Deletion Requirement](https://www.privacypolicies.com/blog/apple-requirement-in-app-account-deletion/)
- [Transcend Account Deletion Guide](https://transcend.io/blog/apple-requirement-app-account-deletion)

### GDPR/Danish Law (HIGH confidence)
- [Danish Data Protection Act](https://www.datatilsynet.dk/english/legislation/)
- [Data Protection Laws Denmark](https://www.dlapiperdataprotection.com/index.html?t=law&c=DK)
- [Mobile App Consent iOS 2025](https://secureprivacy.ai/blog/mobile-app-consent-ios-2025)
- [GDPR Mobile Apps](https://www.mobiloud.com/blog/gdpr-compliant-mobile-app)

### PostHog (MEDIUM confidence)
- [PostHog Privacy Compliance](https://posthog.com/docs/privacy)
- [PostHog Data Collection Control](https://posthog.com/docs/privacy/data-collection)
- [PostHog iOS SDK](https://posthog.com/docs/libraries/ios)

### Privacy Manifest (HIGH confidence)
- [Privacy Manifest Files](https://developer.apple.com/documentation/bundleresources/privacy-manifest-files)
- [Required Reason APIs](https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api)
- [Privacy Manifest Reminder](https://developer.apple.com/news/?id=pvszzano)

### Sign in with Apple (HIGH confidence)
- [Sign in with Apple Privacy](https://www.apple.com/legal/privacy/data/en/sign-in-with-apple/)
- [Private Email Relay Service](https://developer.apple.com/documentation/signinwithapple/communicating-using-the-private-email-relay-service)
- [Sign in with Apple 2026 Requirements](https://developer.apple.com/news/?id=j9zukcr6)

### GitHub Pages (HIGH confidence)
- [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Cloudflare Conflicts](https://community.cloudflare.com/t/github-pages-keep-saying-it-cant-enforce-https/397570)
- [Certificate Troubleshooting](https://github.com/orgs/community/discussions/22811)

### Localization (MEDIUM confidence)
- [App Store Localizations](https://developer.apple.com/help/app-store-connect/reference/app-store-localizations/)
- [Privacy Policy Languages](https://www.iubenda.com/en/help/539-privacy-policy-different-languages)

---

## Research Methodology & Limitations

**Research approach:**
- WebSearch for iOS App Store rejection patterns (2024-2026)
- Official Apple Developer documentation (high confidence)
- GDPR and Danish Datatilsynet official sources
- PostHog official documentation
- GitHub community discussions for technical issues

**Limitations:**
1. **PostHog configuration specifics:** Assumed default PostHog iOS SDK config. Ordtegl's actual PostHog setup may differ (e.g., custom anonymization, disabled features). Should verify exact config.

2. **Backend implementation details:** Don't know specifics of Ordtegl's backend (what data is stored, retention periods). Privacy policy will need these details.

3. **Danish legal review:** Research covers GDPR and Danish Data Protection Act, but not reviewed by Danish legal professional. Recommend legal review before launch.

4. **Landing page UX:** Focused on privacy policy compliance, not landing page marketing effectiveness (out of scope per research brief).

**Verification needed:**
- [ ] Confirm PostHog iOS SDK exact configuration
- [ ] Confirm backend data storage details (what, where, how long)
- [ ] Verify Danish privacy policy translation accuracy
- [ ] Legal review of privacy policy (Danish attorney recommended)

---

## Open Questions for Roadmap Planning

1. **Backend data storage:** Where is progress sync data stored? Retention period?
2. **Error report implementation:** What data will actually be collected in error reports?
3. **PostHog configuration:** Anonymous-only or identified users? IP anonymization enabled?
4. **Custom domain:** Does Ordtegl have domain already, or need to purchase?
5. **Danish legal entity:** Is there a registered company/entity for GDPR data controller?
6. **Support email infrastructure:** Need to set up privacy@ordtegl.com mailbox

These questions should be answered during Phase 1 (Privacy Policy) to ensure accurate disclosures.
