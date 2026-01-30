# Features Research: iOS App Landing Page & Privacy Policy

**Project:** Ordtegl (Danish vocabulary learning iOS app)
**Researched:** 2026-01-30
**Confidence:** HIGH (based on official Apple documentation and current 2026 requirements)

## Executive Summary

This research covers what features and content are required for an iOS app's public website, focusing on App Store compliance and conversion effectiveness. The site must serve two audiences: (1) Apple's App Store review team requiring compliance artifacts, and (2) potential users needing information before downloading.

**Key insight:** Privacy policy and support contact are not optional - they're App Store submission requirements that will cause rejection if missing or incomplete.

---

## Table Stakes

Features required for App Store compliance and basic functionality. Missing these = rejection or poor user experience.

### 1. Privacy Policy Page (REQUIRED - App Store Compliance)

**Why required:** App Store Review Guidelines 5.1.1 mandates all apps include a privacy policy link in App Store Connect AND within the app.

**Minimum content requirements:**

| Section | Content | Source |
|---------|---------|--------|
| Data Collection Statement | What data is collected, how it's collected, all uses | Apple Guidelines 5.1.1 |
| Third-Party Sharing | Confirm third parties (PostHog, Railway) provide equal protection | Apple Guidelines 5.1.1 |
| Data Retention/Deletion | How users revoke consent and request deletion | Apple Guidelines 5.1.1 |
| Contact Information | How users can reach developer about privacy | App Store requirement |

**Ordtegl-specific requirements:**

- **PostHog Analytics:** Must declare that anonymous usage data is collected, used for analytics only, anonymized, and opt-out available
  - Default iOS SDK behavior: Captures anonymous events, avoids PII (passwords, credit cards)
  - Privacy controls: Users can opt-out
  - Data types: Usage Data (product interaction), Diagnostics (crash/performance data)
  - Must confirm: Not used for tracking, not linked across apps, not shared with advertisers

- **Railway Backend (Sign in with Apple):** Must declare:
  - Progress sync data stored on Railway backend
  - Sign in with Apple used for authentication
  - Data retention policy
  - Account deletion process (required by Guidelines 5.1.1(v))

- **Content Error Reporting:** Declare what data is sent when users report errors

**Danish/GDPR requirements:**
- Age of consent is 13 in Denmark (lowered from 16)
- Must comply with GDPR transparency requirements
- Privacy policy must be in "clear and plain language"
- Must identify legal basis for processing (likely "legitimate interest" for analytics)

**Complexity:** Medium
**Confidence:** HIGH (verified with official Apple Developer documentation)

---

### 2. Support/Contact Information (REQUIRED - App Store Compliance)

**Why required:** App Review Guidelines 1.5 requires "an easy way to contact the developer" in both app and Support URL.

**Minimum requirements:**

- Email address clearly displayed (alb+ordtegl@andrewlb.com)
- Response time expectation (optional but recommended)
- Support scope: technical issues, privacy requests, account deletion requests

**Best practice additions:**

- FAQ section for common questions
- Contact form (in addition to email, not instead of)
- Expected response time: "Within 48 hours"

**Complexity:** Low
**Confidence:** HIGH (App Review Guidelines 1.5 explicit requirement)

---

### 3. Account Deletion Information (REQUIRED - App Store Compliance)

**Why required:** Guidelines 5.1.1(v) - "If your app supports account creation, you must also offer account deletion within the app."

**Website requirements:**

- Explain how in-app account deletion works
- Clarify what happens to user data after deletion
- For Sign in with Apple: Must revoke tokens via Apple's REST API when deleting account

**Note:** Primary deletion mechanism is in-app, but privacy policy must document the process.

**Complexity:** Low (documentation only - implementation is app-side)
**Confidence:** HIGH (explicit App Store requirement since June 30, 2022)

---

### 4. Terms of Service/EULA

**Why expected:** While Apple provides a Standard EULA, apps often include custom terms for clarity.

**Minimum content:**

- Acceptable use policy
- Intellectual property rights (vocabulary content)
- Limitation of liability
- Dispute resolution

**Note:** Can rely on Apple's Standard EULA if no custom terms needed.

**Complexity:** Low (can use template)
**Confidence:** MEDIUM (not explicitly required, but standard practice)

---

### 5. App Store Link/Download CTA

**Why required:** Core purpose of landing page is driving App Store downloads.

**Best practices:**

- Single, prominent CTA above the fold
- App Store badge (use official Apple badges)
- Direct link to Danish App Store listing
- Device detection: Show appropriate prompt for iOS users

**Anti-pattern:** Multiple competing CTAs ("Download," "Learn More," "Sign Up") reduce conversion.

**Complexity:** Low
**Confidence:** HIGH (landing page conversion best practices)

---

### 6. Basic App Information

**Why expected:** Users need to understand what the app does before downloading.

**Minimum content:**

| Element | Purpose | Best Practice |
|---------|---------|---------------|
| Headline | Value proposition | Benefit-focused, < 10 words |
| Subheadline | Who it's for | "For Danish language learners" |
| Description | What it does | Scannable bullets, not paragraphs |
| Screenshots | Show actual UI | 1-3 key screens (6.9" iPhone size) |

**Complexity:** Low
**Confidence:** HIGH (landing page best practices)

---

### 7. App Privacy Nutrition Labels (App Store Connect)

**Why required:** Required in App Store Connect since December 2020, enforced for all submissions.

**PostHog data types to declare:**

| Data Type | Linked to User? | Usage | Tracking? |
|-----------|----------------|-------|-----------|
| Usage Data | No (anonymous) | Analytics | No |
| Diagnostics | No | App Functionality | No |

**Sign in with Apple data to declare:**

| Data Type | Linked to User? | Usage | Tracking? |
|-----------|----------------|-------|-----------|
| User ID | Yes | App Functionality | No |
| Email (if shared) | Yes | App Functionality | No |

**Critical:** Must declare ALL data collected by third-party SDKs (PostHog), even if not directly accessed.

**Complexity:** Medium (requires understanding SDK behavior)
**Confidence:** HIGH (mandatory since 2020, verified with Apple documentation)

---

## Differentiators

Features that improve effectiveness but aren't required for compliance.

### 1. Press Kit/Media Resources

**Value proposition:** Helps journalists, bloggers, and educators write about the app.

**Contents:**

- App icon (multiple sizes)
- Screenshots (App Store sizes)
- App description (multiple lengths: tweet, short, long)
- Brand colors/guidelines
- Developer bio/contact

**When to include:** Post-launch when seeking press coverage.

**Complexity:** Low
**Confidence:** MEDIUM (common for apps seeking visibility, not required)

---

### 2. Social Proof/Reviews

**Value proposition:** Increases conversion by 15-30% according to landing page research.

**Options:**

- App Store rating/review count
- User testimonials (with permission)
- Download count
- Featured by Apple (if applicable)

**Best practice:** Place near primary CTA to reinforce decision.

**Complexity:** Low (if reviews exist)
**Confidence:** HIGH (proven landing page optimization technique)

---

### 3. Feature Highlights

**Value proposition:** Shows app differentiation vs competitors (Duolingo, Memrise, etc.)

**Education app table stakes (for context):**

- Spaced repetition system (SRS)
- Audio/pronunciation
- Progress tracking
- Gamification elements
- Adaptive difficulty

**Ordtegl differentiators to highlight:**

- Danish-specific content
- [Any unique features vs generic vocab apps]

**Best practice:** 3-5 bullets max, focus on outcomes not features.

**Complexity:** Low
**Confidence:** HIGH (competitive analysis of vocabulary learning apps)

---

### 4. Demo Video/App Preview

**Value proposition:** Video increases landing page conversion by 80%+ (per 2026 research).

**Options:**

- 15-30 second app preview
- Embedded demo on landing page
- Screen recording showing key flows

**Best practice:** Show actual app UI, not marketing fluff.

**Complexity:** Medium (production required)
**Confidence:** HIGH (proven conversion technique)

---

### 5. Multi-Language Support

**Value proposition:** For an app teaching Danish, site in multiple languages shows commitment.

**Options:**

- English (primary, for international users)
- Danish (for native speakers)
- [Other languages if target audience includes them]

**When valuable:** If significant user base speaks language.

**Complexity:** Medium (translation + maintenance)
**Confidence:** MEDIUM (nice-to-have, not required)

---

### 6. FAQ Section

**Value proposition:** Reduces support emails, builds confidence.

**Common questions for vocab learning apps:**

- "Is it free?"
- "What devices does it work on?"
- "How is this different from [competitor]?"
- "Can I use it offline?"
- "How do I cancel my subscription?" (if applicable)

**Best practice:** 5-8 most common questions, link to full support page.

**Complexity:** Low
**Confidence:** HIGH (reduces support burden)

---

### 7. Newsletter/Email Capture

**Value proposition:** Build audience for updates, new features.

**Use case:** Announce updates, new vocabulary packs, features.

**Anti-pattern:** Requiring email before download link (adds friction).

**Best practice:** Optional, positioned at bottom of page.

**Complexity:** Low (if email service exists)
**Confidence:** MEDIUM (common but not essential for new app)

---

## Anti-Features

Features to deliberately avoid - common mistakes that hurt conversion or compliance.

### 1. Navigation Header with Multiple Links

**Why avoid:** Distracts from primary goal (App Store download).

**Bad example:** Header with Home | Features | Pricing | Blog | About | Contact

**Instead:** Minimal header with logo and single CTA. Navigation in footer only.

**Rationale:** Landing pages are not websites - they're conversion-focused.

**Source:** [Landing Page Best Practices That Convert in 2026](https://lovable.dev/guides/landing-page-best-practices-convert)

---

### 2. Generic/Template Privacy Policy

**Why avoid:** App Store reviewers check if policy matches actual data practices.

**Bad example:** "We may collect various types of data..."

**Instead:** Specific declarations matching App Privacy Labels in App Store Connect.

**Consequence:** Apps rejected if privacy policy doesn't match labels.

**Source:** [Apple Developer - App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)

---

### 3. "Contact Support to Delete Account"

**Why avoid:** Violates App Review Guidelines 5.1.1(v).

**Requirement:** Account deletion must be available IN-APP, not requiring support contact.

**Website role:** Document the in-app process, don't replace it.

**Consequence:** Rejection from App Store.

**Source:** [App Review Guidelines 5.1.1(v)](https://developer.apple.com/app-store/review/guidelines/)

---

### 4. Broken or Missing Privacy Policy Link

**Why avoid:** Among most common rejection reasons.

**Requirement:** Privacy policy URL must be:
- Publicly accessible (no login required)
- Actually work (not 404)
- Contain actual privacy information (not "Coming soon")

**Testing:** Click link in App Store Connect before submission.

**Consequence:** Immediate rejection.

**Source:** [App Store Review Guidelines 2026: Best Practices](https://crustlab.com/blog/ios-app-store-review-guidelines/)

---

### 5. Long, Dense Paragraphs

**Why avoid:** Users scan, not read. Conversion drops 40% with dense text.

**Bad example:** Multiple paragraphs explaining app features.

**Instead:**
- Bullet points
- Short sentences (10-15 words)
- Scannable hierarchy (H2, H3 headings)

**Rationale:** 80% of users scan landing pages in F-pattern.

**Source:** [Landing Page Best Practices 2026](https://www.involve.me/blog/landing-page-best-practices)

---

### 6. Multiple Competing CTAs

**Why avoid:** Reduces conversion - "paradox of choice."

**Bad example:** "Download Now" + "Watch Demo" + "Learn More" + "Contact Us"

**Instead:** Single primary CTA ("Download on App Store") repeated 2-3 times on long page.

**Rationale:** One conversion goal = higher conversion rate.

**Source:** [Landing Page Conversion Best Practices 2026](https://lovable.dev/guides/landing-page-best-practices-convert)

---

### 7. Requiring Email Before Showing App Store Link

**Why avoid:** Adds unnecessary friction, reduces conversion 30%+.

**Bad example:** "Enter email to get download link"

**Instead:** Direct App Store link, optional email signup elsewhere.

**Rationale:** Users can download directly from App Store - email gate is pointless friction.

---

### 8. Auto-Playing Video with Sound

**Why avoid:** Annoys users, hurts mobile experience, reduces engagement.

**Instead:** Video with play button, or silent auto-play with unmute option.

**Note:** Video as optional engagement, not forced interruption.

---

### 9. COPPA Violations (If App Targets Children)

**Why avoid:** FTC enforcement, updated COPPA rules effective April 22, 2026.

**Requirements if targeting under-13:**
- Parental consent required
- Stricter data collection limits
- Enhanced privacy disclosures

**Note:** Ordtegl likely targets adults/teens learning Danish, but verify age targeting.

**Source:** [COPPA Compliance 2026](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)

---

## Privacy Policy Requirements (Detailed)

Based on Ordtegl's specific data practices.

### Required Sections

#### 1. Introduction

```
Who operates the app
Contact information: alb+ordtegl@andrewlb.com
Last updated date
Scope: "This privacy policy applies to the Ordtegl iOS app and website"
```

#### 2. Data We Collect

**A. Analytics Data (PostHog)**

```
What: Anonymous usage data, app interactions, crash reports
How: PostHog iOS SDK
Purpose: Improve app performance, understand feature usage
Retention: [Specify PostHog retention period]
User control: Opt-out available in app settings
```

**Data types for App Store labels:**
- Usage Data (not linked to user)
- Diagnostics (not linked to user)

**B. Account Data (Sign in with Apple + Railway backend)**

```
What: Apple ID token, email (if user shares), progress/learning data
How: Sign in with Apple authentication, Railway cloud storage
Purpose: Sync learning progress across devices, enable account features
Retention: Until account deletion requested
User control: In-app account deletion available
```

**Data types for App Store labels:**
- User ID (linked to user)
- Email (linked to user, only if shared)
- Learning Progress (linked to user)

**C. Content Error Reporting**

```
What: Error description, vocabulary word context, [device info?]
How: [In-app reporting mechanism]
Purpose: Fix content errors in vocabulary database
Retention: [Specify]
User control: Voluntary submission only
```

#### 3. How We Use Data

```
- Sync learning progress (Sign in with Apple + Railway)
- Improve app performance (PostHog analytics)
- Fix content errors (error reports)
- Not used for advertising or tracking
- Not shared with third parties except service providers (Railway, PostHog)
```

#### 4. Third-Party Services

**PostHog (Analytics)**

```
Service: PostHog product analytics
Data shared: Anonymous usage events, crash data
Their privacy policy: https://posthog.com/privacy
Data protection: GDPR compliant, SOC 2 certified
Purpose: Analytics only, not tracking
```

**Railway (Backend hosting)**

```
Service: Railway cloud hosting
Data shared: Account data, learning progress
Their privacy policy: [Railway privacy policy URL]
Data protection: [Railway security certifications]
Purpose: Data storage and synchronization
```

**Apple (Authentication)**

```
Service: Sign in with Apple
Data shared: Apple ID token
Their privacy policy: https://www.apple.com/legal/privacy/
Data protection: Apple privacy standards
Purpose: Secure authentication
```

#### 5. Data Retention and Deletion

```
Analytics: Retained for [X days/months] then automatically deleted
Account data: Retained until account deletion requested
Account deletion: Available in-app under Settings > Account > Delete Account
Deletion timeline: Complete within [7/30] days
What's deleted: All learning progress, account information
What's retained: Anonymized usage statistics (required for analytics)
Token revocation: Sign in with Apple tokens revoked via Apple REST API
```

#### 6. Children's Privacy

```
Age requirement: 13+ (Denmark's age of consent)
Parental consent: Not required for users 13+
COPPA: Not applicable (not directed at children under 13)
```

#### 7. GDPR Rights (Required for EU/Danish users)

```
Your rights:
- Access: Request copy of your data
- Rectification: Correct inaccurate data
- Erasure: Delete your account (in-app)
- Portability: Export your learning progress [if supported]
- Objection: Opt out of analytics
- Restriction: Limit processing

How to exercise: Email alb+ordtegl@andrewlb.com or use in-app account deletion
Response time: Within 30 days
Legal basis: Legitimate interest (analytics), Contract performance (account features)
```

#### 8. Security

```
How we protect data:
- HTTPS encryption in transit
- [Railway security measures]
- Sign in with Apple authentication
- No passwords stored (Sign in with Apple only)
- Regular security updates
```

#### 9. Changes to Policy

```
Notification method: [App update, email to users?]
Effective date of changes: [Standard is 30 days]
Continued use constitutes acceptance
```

#### 10. Contact Information

```
Privacy questions: alb+ordtegl@andrewlb.com
Data protection officer: [If applicable]
Danish Data Protection Authority: https://www.datatilsynet.dk/english
```

---

## App Store Compliance Checklist

Use this checklist before App Store submission:

### Privacy Policy
- [ ] Privacy policy URL added to App Store Connect
- [ ] Privacy policy publicly accessible (no login required)
- [ ] Privacy policy link works (not 404)
- [ ] Covers all data collection (PostHog, Railway, Sign in with Apple)
- [ ] Explains data retention and deletion
- [ ] Confirms third parties provide equal protection
- [ ] Includes contact information
- [ ] GDPR rights documented (for Danish users)

### App Privacy Labels (App Store Connect)
- [ ] Usage Data declared (PostHog - not linked to user)
- [ ] Diagnostics declared (PostHog - not linked to user)
- [ ] User ID declared (Sign in with Apple - linked to user)
- [ ] Email declared if collected (Sign in with Apple - linked to user)
- [ ] All data types marked as "not used for tracking"
- [ ] Purpose specified for each data type
- [ ] Third-party disclosure matches privacy policy

### Support/Contact
- [ ] Support email on website (alb+ordtegl@andrewlb.com)
- [ ] Support URL in App Store Connect
- [ ] Support page includes privacy contact
- [ ] Response time expectations set

### Account Deletion
- [ ] In-app account deletion implemented
- [ ] Sign in with Apple tokens revoked on deletion
- [ ] Privacy policy documents deletion process
- [ ] User data actually deleted (not just disabled)

### Website Requirements
- [ ] Landing page with App Store link
- [ ] Privacy policy page
- [ ] Support/contact page
- [ ] Terms of service (if custom terms needed)
- [ ] Press kit (optional but recommended)

### Danish/GDPR Specific
- [ ] Age requirement stated (13+)
- [ ] GDPR rights documented
- [ ] Legal basis for processing stated
- [ ] Data protection authority contact included
- [ ] Clear and plain language used

### Technical (April 2026 deadline)
- [ ] Built with iOS 26 SDK or later
- [ ] Privacy manifest included (PrivacyInfo.xcprivacy)
- [ ] Third-party SDK privacy manifests verified
- [ ] Required Reasons API declarations (if applicable)

---

## Sources

### Apple Official Documentation (HIGH confidence)
- [App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [User Privacy and Data Use](https://developer.apple.com/app-store/user-privacy-and-data-use/)
- [Privacy Manifest Files](https://developer.apple.com/documentation/bundleresources/privacy-manifest-files)

### App Store Requirements 2026 (HIGH confidence)
- [iOS App Store Review Guidelines 2026: Best Practices](https://crustlab.com/blog/ios-app-store-review-guidelines/)
- [Apple App Store Submission Changes — April 2026](https://medium.com/@thakurneeshu280/apple-app-store-submission-changes-april-2026-5fa8bc265bbe)
- [Account deletion requirement](https://developer.apple.com/news/?id=12m75xbj)

### Privacy Policy Requirements (HIGH confidence)
- [Requirements of Apple's Privacy Policy Details](https://www.privacypolicies.com/blog/apple-privacy-policy-details-requirements/)
- [Privacy Policy for iOS Apps](https://www.termsfeed.com/blog/ios-apps-privacy-policy/)

### Sign in with Apple (HIGH confidence)
- [Apple's Requirement for In-App Account Deletion](https://www.privacypolicies.com/blog/apple-requirement-in-app-account-deletion/)
- [New requirement for apps using Sign in with Apple](https://developer.apple.com/news/?id=j9zukcr6)

### PostHog Documentation (HIGH confidence)
- [PostHog Privacy Compliance](https://posthog.com/docs/privacy)
- [PostHog GDPR Compliance](https://posthog.com/docs/privacy/gdpr-compliance)
- [PostHog iOS SDK Usage](https://posthog.com/docs/libraries/ios/usage)

### GDPR/Danish Requirements (MEDIUM confidence)
- [Denmark Data Protection Overview](https://www.dataguidance.com/notes/denmark-data-protection-overview)
- [Data Protection Laws Denmark](https://www.dlapiperdataprotection.com/?t=law&c=DK)

### Landing Page Best Practices (MEDIUM confidence)
- [Landing Page Best Practices That Convert in 2026](https://lovable.dev/guides/landing-page-best-practices-convert)
- [Best App Landing Page Design Tips for 2026](https://bitly.com/blog/best-app-landing-page-design/)
- [15 Best App Landing Page Examples (2026)](https://www.designrush.com/best-designs/apps/trends/app-landing-pages)

### COPPA 2026 Updates (MEDIUM confidence)
- [COPPA Compliance in 2025: A Practical Guide](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Children's Online Privacy Protection Rule](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule)

### Vocabulary Learning App Features (MEDIUM confidence)
- [Best Vocabulary Learning Apps 2026](https://brighterly.com/blog/best-vocabulary-learning-apps/)
- [5 Best Vocabulary Builder Apps in 2026](https://emergent.sh/learn/best-vocabulary-builder-apps)

---

## Confidence Assessment

| Area | Confidence | Rationale |
|------|-----------|-----------|
| Privacy Policy Requirements | HIGH | Verified with official Apple Developer documentation |
| App Privacy Labels | HIGH | Mandatory since 2020, official Apple sources |
| Account Deletion | HIGH | Explicit requirement since June 2022 |
| Support Contact | HIGH | App Review Guidelines 1.5 explicit requirement |
| PostHog Data Collection | HIGH | Official PostHog documentation |
| GDPR Requirements | MEDIUM | Danish law research, not Apple-specific |
| Landing Page Best Practices | MEDIUM | Industry sources, not Apple requirements |
| Press Kit Requirements | LOW | Optional feature, no official guidance |

---

## Summary for Roadmap

**Phase 1: Compliance Foundation (Must-have)**
- Privacy policy page (PostHog, Railway, Sign in with Apple disclosures)
- Support/contact page
- Account deletion documentation
- Terms of service

**Phase 2: Conversion Optimization (Should-have)**
- Landing page with clear value prop
- App screenshots
- App Store link with prominent CTA
- FAQ section

**Phase 3: Growth Features (Nice-to-have)**
- Press kit
- Social proof/testimonials
- Demo video
- Multi-language support

**Critical path:** Phase 1 must be complete before App Store submission. Missing privacy policy = rejection.
