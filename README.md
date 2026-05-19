# Precious Evans Website

React + Vite website.

## Reach-out Form Email Setup

The `/reach-out` application form sends email through EmailJS from the React
client. EmailJS public keys are intended for browser use, but keep the values in
environment variables so setup stays clean across local and deployed builds.

Create a local `.env.local` file from `.env.example`:

```bash
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
VITE_EMAILJS_USER_TEMPLATE_ID=your_optional_user_confirmation_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

- `VITE_EMAILJS_SERVICE_ID`: your EmailJS service id.
- `VITE_EMAILJS_ADMIN_TEMPLATE_ID`: the template that sends the full
  application to you.
- `VITE_EMAILJS_USER_TEMPLATE_ID`: optional template for the applicant
  confirmation email.
- `VITE_EMAILJS_PUBLIC_KEY`: your EmailJS public key.

The form sends template variables such as `full_name`, `user_email`,
`phone`, `brand_handle`, `profile_type`, `online_footprint`,
`monthly_revenue`, `urgent_problems`, `content_creation`, `brand_goals`,
`investment_range`, `done_for_you_fit`, `weekly_time`, `start_timeline`,
`extra_notes`, `submitted_at`, and a full plain-text `message`.

To test locally, run:

```bash
npm run dev
```

Open `/reach-out`, complete the form, and submit. For deployment, add the same
`VITE_EMAILJS_*` variables in Vercel Project Settings before building.
