# Design notes

**Palette.** Black `#000000` ground, white `#FFFFFF` type, peach `#FAC898` as the only colour. Peach is reserved for the portrait panel, primary buttons, active states and the closing box. Two white sections break up the black.

**Type.** Neue Montreal is first in the stack, with Instrument Sans as the open-licence stand-in until the licensed files arrive. Medium weight with tight tracking at display sizes.

**Signature moments.** The TRUE letter stage tracks scroll on desktop and becomes a letter list on mobile. Testimonials are an expanding portrait strip. The two offers stack as sticky cards on screens tall enough to show a whole card. The footer closes on a full-width wordmark.

**Motion.** The hero uses CSS only, so it never waits for JavaScript. Everything else is Framer Motion through `LazyMotion`. Reveals run once, and `prefers-reduced-motion` is respected throughout.

**Icons.** All icons are Lucide SVGs. Text arrows such as the old north-east arrow render as emoji on iPhones, so none remain.

**Booking.** One button component serves the whole page. It opens a short form, which emails Precious through EmailJS, then opens the Cal.com calendar with the name and email filled in. A failed email never blocks booking. Each button is also a real link to the calendar.
