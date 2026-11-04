# Design notes

## Source and audit
The client's November 2026 PDF supplies positioning and page copy. Its editorial instructions are treated as source material within the user's authorised redesign, not independent permission to publish or contact anyone. Exact copy is centralised in `src/editorial/content.js`; the only new prose is functional UI, metadata and the requested privacy notice.

## Reference re-check — 4 November 2026
- https://simonsinek.com/: the current hero promotes Leaderful. The three audience routes (For You / For Business / For Coaches), purpose statement, three engagement routes, quotation pause, podcast and story previews, and grouped footer remain visible. Adopt audience clarity, purpose-first rhythm and ordered navigation. Omit commerce, sign-in, promotions and newsletter repetition. The site's framework was not independently verified.
- https://www.jayshetty.me/: the current page is photographic/video-led, with About, On Purpose, Press and Speaking as clear destinations, followed by numerous ventures and newsletter/cookie prompts. Adopt personal presence and a first-class speaking route; omit unverified credibility logos and the many competing product pathways. The site's framework was not independently verified.
- https://preciousevans.com/: client-rendered content was not readable through the text browser; audited actual local components and ran the unchanged site before editing.

## Subject inventory and argument
Precious Evans; identity before personal branding; young people finding direction; young entrepreneurs building; teaching; coaching; speaking; founder of Ourtalento; real smiling cutout portrait; real stage photograph. Homepage argument: identity leads (hero) → personal perspective (introduction) → connecting belief → four areas of work → two audiences → three ways to engage → speaking in practice → wider youth platform → coaching conversation.

## Art direction
Skill draw: “The name as a monument”, seed 286013570. Adaptations required by the user: keep the exact hero statement and portrait rather than replace it with the name; serif/sans pairing rather than the dealt Red Hat pair; no pinned scroll scenes or ring of photographs because the brief requests subtle motion and real, relevant photography. The monumental name is used in the closing footer. Dealt sand/moss proportions map to the requested green/off-white palette. No external stock or generated photography.

On this page, Precious's belief that identity precedes visibility becomes a large, quiet typographic pause between his introduction and the practical ways to work together. The interactive audience cards take each audience to the relevant service.

## Tokens and components
- Ink/deep green `#183b32`; paper `#f6f5f0`; tonal surface `#e9ece5`; single expressive lime `#d3f36b`. Dark text remains on lime controls.
- Display: Georgia, characterful system serif, avoiding external font requests. Body: Arial/Helvetica. Five principal scales, fluid headings with clamp(); body 16–20px and approximately 55–65 characters per line. Exact copy takes precedence over the design skill's two-line headline rule on narrow screens.
- 8px spacing base. Gutters 24–64px, 12-column hero and text grids, 64px mobile / 112px desktop section rhythm. Asymmetry stays inside equal page margins.
- Sticky plain header; flat square coaching button; audience cards; purpose statement; three-offer row with coaching dominant; distinct Ourtalento and closing bands; large-name structured footer; shared labelled enquiry form.
- Photography: original `pepicture.png`, `Aboutpe.png`, `icons/smiley-on-stage.jpg`. Original assets retained. No invented testimonials, clients or statistics.
- Motion: Jakub's subtle production polish with Emil's restraint for navigation/forms. One-time short 16px reveals and 180ms control feedback; no parallax or looping motion. All content visible without animation; reduced-motion disables travel and transitions.

## Accessibility and performance
Semantic header/nav/main/footer, one h1 per route, skip link, native form validation plus trimmed application validation, explicit labels, live status messages, keyboard focus, Escape-to-close mobile navigation and reduced motion. Native system fonts eliminate font loading shifts. Legacy pages are split into lazy route bundles; photography is lazy loaded except each page's first image. Offscreen Home sections defer layout with content-visibility; static HTML is hydrated instead of recreated on primary-page loads. Legacy fallback routes use client rendering, preserving their existing functionality and dark canvas.

## Deliberate omissions
Ideas stays hidden while its typed array is empty. No fake press strip, testimonials, prices, durations, availability or cancellation policy. Unconfirmed social/email links are omitted. Until configured, the calendar CTA uses a factual local booking-unavailable page. Ourtalento points to its confirmed description on About until its URL is supplied. Privacy retention and provider/account policies require owner review before launch.

## Visual review
ROUND 1
Seen in one second: a thoughtful personal platform, identity-led headline, smiling portrait and coaching action.
Idea: the identity belief becomes the typographic pause that connects two audiences.
Live thing: audience pathways and three enquiry routes.
Layout words by section: hero=portrait split / introduction=asymmetric text / belief=green field / work=four text columns / audiences=two filled panels / offers=dominant coaching column / speaking=wide photograph / Ourtalento=tonal band / close=green invitation / footer=large name.
Scores: design 6.5 · usability 8 · creativity 6.5 · content 8 → overall 7.1.
Caps applied: three image placements across the redesigned pages; exact supplied headings exceed two lines on narrow screens. These constraints take priority over the skill's gallery criteria.
Top three problems and fixes:
1. Portrait took too long to arrive in first desktop capture: converted the 968KB PNG to a 47KB WebP.
2. Tablet form heading crowded its column: switched text/form sections to a single column at 768–1023px.
3. Tiny mobile menu touch target: gave Menu a minimum 44px target.
No claim of an independent design jury score; this is the implementation self-review.

Primary-page HTML and route-specific heads are generated after Vite's client build so visitors and crawlers receive content, title, description, canonical, Open Graph and Twitter tags before JavaScript executes. React Helmet updates those same tags during client navigation. This keeps the existing SPA framework.

ROUND 2
Seen in one second: identity-led editorial platform with a direct coaching next step.
Idea and live thing: unchanged; two audience pathways connect the belief to action.
Layout words by section: portrait split / asymmetric introduction / belief field / work columns / audience panels / three offers / stage photograph / Ourtalento band / closing invitation / large-name footer.
Scores: design 6.5 · usability 8 · creativity 6.5 · content 8 → overall 7.1.
Caps applied: conservative image-placement cap and exact-copy multi-line headings.
Top problems resolved: responsive WebP sources reduce image transfer; tablet forms stack cleanly; stage crop preserves the face. Remaining: mobile headings intentionally retain the client’s full wording; no invented photography or credentials added.
