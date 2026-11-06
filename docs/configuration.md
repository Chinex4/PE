# Configuration

All `VITE_` values are public and embedded at build time, so never put a secret in them. The deploy workflow reads them from GitHub repository Variables, and the EmailJS identifiers from repository Secrets. Rebuild after any change.

| Variable | Effect |
| --- | --- |
| `VITE_BOOKING_URL` | HTTPS calendar link. Every booking button opens it. When empty, the buttons open the on-page request form instead. |
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_ADMIN_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Deliver the request form. When empty, the form says it is unavailable. |
| `VITE_CONTACT_EMAIL` | Shown in the footer when set. |
| `VITE_OURTALENTO_URL` | Adds an Ourtalento link to the footer when set. |
| `VITE_INSTAGRAM_URL`, `VITE_LINKEDIN_URL` | Override the default profile links in `src/site/config.js`. |
| `VITE_YOUTUBE_URL` | Adds YouTube to the footer when set. |
| `VITE_ANALYTICS_PROVIDER`, `VITE_ANALYTICS_ID` | `plausible` or `gtag`. Empty disables analytics. |

The EmailJS template receives `name`, `email`, `reply_to`, `subject`, `form_type`, `enquiry_type` and `message`. Set the recipient inside the template. Every booking button sends a `booking_cta_click` event with its location.

## Before launch

1. Replace the placeholder testimonials in `src/site/content.js` and their images `public/img/t1.webp` to `t5.webp`. They are dummy content.
2. Buy a Neue Montreal web licence from Pangram Pangram, then follow the steps in `src/site/fonts.css`.
3. Set `VITE_BOOKING_URL`, or confirm the EmailJS template works for the request form.

## URLs

The site has one page. `public/.htaccess` sends every retired URL to `/` with a 301, and `vercel.json` does the same on Vercel.
