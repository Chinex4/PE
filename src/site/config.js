const env = import.meta.env;
const safeUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
};
export const config = {
  bookingUrl:
    safeUrl(env.VITE_BOOKING_URL) ||
    "https://cal.com/precious-evans-cch1ym/truecallswithpe",
  ourtalentoUrl: safeUrl(env.VITE_OURTALENTO_URL),
  email: env.VITE_CONTACT_EMAIL || "",
  socialLinks: [
    {
      name: "Instagram",
      url:
        safeUrl(env.VITE_INSTAGRAM_URL) ||
        "https://www.instagram.com/_preciousevans",
    },
    { name: "TikTok", url: "https://www.tiktok.com/@_preciousevans" },
    {
      name: "YouTube",
      url:
        safeUrl(env.VITE_YOUTUBE_URL) ||
        "https://www.youtube.com/@_preciousevans",
    },
    {
      name: "LinkedIn",
      url:
        safeUrl(env.VITE_LINKEDIN_URL) ||
        "https://www.linkedin.com/in/precious-evans-009563270",
    },
  ].filter((x) => x.url),
  emailjs: {
    serviceId: "service_hzqkqj6",
    templateId: "template_uyhpfre",
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
  },
  analytics: env.VITE_ANALYTICS_PROVIDER || "",
  analyticsId: env.VITE_ANALYTICS_ID || "",
};
export function trackBooking(location) {
  window.dispatchEvent(
    new CustomEvent("booking_cta_click", { detail: { location } }),
  );
  if (config.analytics === "gtag" && typeof window.gtag === "function")
    window.gtag("event", "booking_cta_click", {
      location,
      send_to: config.analyticsId,
    });
  if (
    config.analytics === "plausible" &&
    typeof window.plausible === "function"
  )
    window.plausible("booking_cta_click", { props: { location } });
}

// Called once. Analytics remains off until a provider and public identifier are supplied.
export function initializeAnalytics() {
  if (
    !config.analytics ||
    !config.analyticsId ||
    document.getElementById("site-analytics")
  )
    return;
  const script = document.createElement("script");
  script.id = "site-analytics";
  script.async = true;
  if (config.analytics === "plausible") {
    script.src = "https://plausible.io/js/script.js";
    script.dataset.domain = config.analyticsId;
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  } else if (config.analytics === "gtag") {
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.analyticsId)}`;
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };
    window.gtag("js", new Date());
    // Storage stays denied unless an owner-supplied consent integration updates it.
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("config", config.analyticsId, { send_page_view: false });
  } else return;
  document.head.appendChild(script);
}
