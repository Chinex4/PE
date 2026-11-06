# Configuration

All `VITE_` values are public and embedded at build time, so never put a secret in them. The deploy workflow reads them from GitHub repository Variables, and the EmailJS public key from a repository Secret. Rebuild after any change.

| Variable | Effect |
| --- | --- |
| `VITE_BOOKING_URL` | Overrides the default calendar link in `src/site/config.js`. A `cal.com/user/event` link opens as a popup on the page. Any other HTTPS link opens in a new tab. |
| `VITE_EMAILJS_PUBLIC_KEY` | Lets the booking form send its email notification. Without it, the form still continues to the calendar but no email is sent. |
| `VITE_CONTACT_EMAIL` | Shown in the footer when set. |
| `VITE_OURTALENTO_URL` | Adds an Ourtalento link to the footer when set. |
| `VITE_INSTAGRAM_URL`, `VITE_LINKEDIN_URL` | Override the default profile links in `src/site/config.js`. |
| `VITE_YOUTUBE_URL` | Overrides the default YouTube link in the footer. |
| `VITE_ANALYTICS_PROVIDER`, `VITE_ANALYTICS_ID` | `plausible` or `gtag`. Empty disables analytics. |

The booking form sends `to_name`, `from_name`, `user_name`, `user_email`, `user_phone`, `type` and `reply_to` to the EmailJS template, then opens the calendar. The template design is in `docs/email-template.html`, and the recipient is set in EmailJS. Hours, session length and the booking page wording are set in the Cal.com dashboard. Every booking button sends a `booking_cta_click` event with its location.

## Before launch

1. Testimonial photos `public/img/t1.webp` to `t5.webp` match the quotes in `src/site/content.js` by order. Keep them at 500 × 620 and in black and white.
2. Buy a Neue Montreal web licence from Pangram Pangram, then follow the steps in `src/site/fonts.css`.
3. Make one test booking through a button on the live site, then cancel it in Cal.com.

## URLs

The site has one page. `public/.htaccess` sends every retired URL to `/` with a 301, and `vercel.json` does the same on Vercel.
