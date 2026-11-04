# Editing and configuring the redesign

Use Node 22+ for local audit tools. The existing Vite application still builds with its retained deployment stack. Run `npm ci`, copy `.env.example` to `.env.local`, then `npm run dev`. Build with `npm run build`; serve with `npm run preview`. Checks: `npm run lint`, `npm run typecheck`, `npm test`.

## Owner configuration
All `VITE_` values are public browser configuration, embedded at build time. Never put a secret in them. Rebuild after changes. The cPanel workflow reads booking, Ourtalento, social, email and analytics values from GitHub repository Variables, and the existing EmailJS identifiers from repository Secrets.

| Variable | Supply |
| --- | --- |
| VITE_BOOKING_URL | One confirmed HTTPS Cal.com/Calendly/calendar URL. All new booking buttons use it. Empty shows a factual local availability page. |
| VITE_OURTALENTO_URL | Confirmed HTTPS platform URL. Empty links to the Ourtalento description on About. |
| VITE_CONTACT_EMAIL | Confirmed public email. Empty omits it. |
| VITE_INSTAGRAM_URL, VITE_LINKEDIN_URL, VITE_YOUTUBE_URL | Confirmed HTTPS social profiles. Empty omits each link. |
| VITE_EMAILJS_SERVICE_ID | Existing EmailJS service identifier. |
| VITE_EMAILJS_ADMIN_TEMPLATE_ID | Template that receives all three enquiry types. |
| VITE_EMAILJS_PUBLIC_KEY | EmailJS browser public key; not a private API key. |
| VITE_EMAILJS_USER_TEMPLATE_ID | Retained for the older reach-out implementation; new enquiries do not use it. |
| VITE_ANALYTICS_PROVIDER | Empty disables external analytics; `plausible` or `gtag` enables the selected loader. |
| VITE_ANALYTICS_ID | Plausible site domain or Google measurement ID. No embedded account ID. |

## Email delivery
Reuse EmailJS rather than add an unnecessary server or change hosting. Set the **recipient/form email inside the EmailJS template**, not in client input. Use `{{reply_to}}`, `{{name}}`, `{{email}}`, `{{subject}}`, `{{form_type}}`, and `{{message}}`. Speaking details are included in message and also exposed as `organisation`, `event_date`, `audience`, `topic`. Contact includes `enquiry_type`. Escape template variables in HTML templates; do not use raw HTML interpolation.

Restrict allowed origins to the production domain and approved preview origins in EmailJS. Honeypot, required fields, lengths, email checks, trimmed validation, in-flight locking and SDK throttling protect the UI. EmailJS delivery remains the provider boundary, so its account-level rate/spam controls matter. The new forms never clear input on failed delivery and never show success without an awaited provider response.

Tests use an injected delivery stub, not real email. Complete a real recipient-inbox check once configured. No test messages were sent to external recipients.

## Analytics and booking
Every new booking action dispatches `booking_cta_click` with `{location}`. Supported analytics adapters forward that event and location; no form data is sent. Plausible uses its configured domain. Google defaults storage consent to denied and page-view collection off; integrate the owner's approved consent mechanism before changing that setting. Register the custom event in the chosen analytics dashboard. Completed bookings, calendar forms, confirmations, reminders and cancellation rules belong to the selected calendar provider and remain pending the real URL/account setup.

## Editing content
`src/editorial/content.js` holds the exact brief copy, images, speaking topics and Ideas list. `src/editorial/schema.ts` checks its structure; `npm run typecheck` checks this content contract (the inherited JSX application is not migrated to TypeScript). `src/editorial/metadata.js` holds route SEO. `src/editorial/editorial.css` contains palette/type/spacing/motion tokens and shared component styling.

Ideas is hidden when its array is empty. Adding entries exposes `/ideas` and its navigation entry; entries have slug, title, body, date. Update the sitemap when publishing Ideas. This is a typed local content layer, not a new CMS.

## Routes and hosting
The redesigned routes are `/`, `/about`, `/coaching`, `/personal-branding`, `/speaking`, `/contact`, `/privacy`. `/booking` is a safe unavailable state until a calendar is configured. `/services` permanently redirects to `/personal-branding`; `/reach-out` redirects to `/contact`. Existing resource/book/case-study/newsletter/course/purchase routes remain accessible and load lazily; they are omitted from the new primary navigation. Their historical commercial copy and pricing need owner review; no new prices or promises were introduced.

Build prerenders primary-page HTML and static SEO heads, then hydrates the same React application. No runtime server is added and the React/Vite stack is retained. Apache `.htaccess` retains HTTPS enforcement and SPA fallback. Vercel has equivalent replaced-route redirects and SPA fallback. No hosting account or live deployment was changed.

## Awaiting confirmation
Calendar URL; duration, fee, availability, cancellation terms; personal branding package details/prices; confirmed email/socials; Ourtalento URL; actual EmailJS recipient/template; approved analytics account/provider and privacy retention wording; status of historical commercial pages. These are configuration or owner decisions, not fabricated website copy.

Prerendering uses a build-only Vite rendering bundle in ignored `dist-ssr/`. Deploy only `dist/`, as the existing workflow does. No Node server is needed in production. Route markers ensure primary pages hydrate their own HTML and fallback legacy routes use ordinary client rendering. Forms use POST as the non-JavaScript fallback to avoid putting enquiry text in a URL; actual delivery requires JavaScript and the configured EmailJS service.
