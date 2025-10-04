import React from "react";

export default function CourseFitSection({
  courseLink = "https://selar.com/7q87935pb5",
}) {
  return (
    <section className="text-[#F5E9DC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="rounded-[28px] border border-white/5 bg-[#272727]/30 shadow-[0_20px_80px_rgba(0,0,0,0.55)] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
          {/* Intro */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            If you fall into either of these 2 categories, this course was built
            for you…
          </h2>

          <ul className="mt-6 space-y-4 text-sm sm:text-base text-neutral-300">
            <li className="flex gap-3">
              <Star className="mt-1 shrink-0" />
              <p>
                If you’re an entrepreneur (early stage or scaling) who wants to
                build visibility, attract opportunities, and stand out from
                competitors by showing up authentically, this is for you.
              </p>
            </li>
            <li className="flex gap-3">
              <Star className="mt-1 shrink-0" />
              <p>
                If you’re a professional, creator, or communicator who wants to
                stop copying others because you’re confused, build a strong
                personal brand, and start monetizing it globally, you’re in the
                right place.
              </p>
            </li>
          </ul>

          {/* Blueprint */}
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl font-semibold">
              The ‘Build & Monetize Your Personal Brand’ Blueprint
            </h3>
            <p className="mt-3 max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
              A world-class digital product designed to help you{" "}
              <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary">
                create an authentic brand
              </span>
              ,{" "}
              <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary">
                build influence
              </span>
              , and{" "}
              <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary">
                monetize your presence
              </span>
              .
            </p>

            <p className="mt-6 text-sm sm:text-base font-medium">
              Course Module:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Personal Brand Clarity",
                "Content Strategy & Storytelling",
                "Authentic Visibility",
                "Monetization Systems",
                "Consistency & Growth",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-primary/30 bg-primary/15 px-3 py-1.5 text-xs sm:text-sm font-semibold text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm sm:text-base font-medium">
              You'll get :
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Recorded Explanatory Videos",
                "Ebook & Guides",
                "15mins Clarity Call",
                "Checklists",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-primary/30 bg-primary/15 px-3 py-1.5 text-xs sm:text-sm font-semibold text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={courseLink}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm sm:text-base font-semibold text-black transition hover:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                Get Course Now <ExternalIcon />
              </a>
            </div>
          </div>

          {/* Body copy */}
          <div className="mt-10 sm:mt-12 space-y-5 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <p className="text-neutral-200">
              Never believe the lie…
              <br />
              That “personal branding doesn’t work” or “only influencers can
              make money online.” The truth is opportunities are everywhere but
              many people are not equipped with the right framework to take
              advantage of them.
            </p>

            <p>
              That’s why this course is here: to give you a clear plug-and-play
              system for building and monetizing your personal brand so you can
              finally:
            </p>

            <ul className="list-disc pl-6 marker:text-primary space-y-2">
              <li>Show up as yourself (not a copy of someone else).</li>
              <li>Build trust with the right audience.</li>
              <li>Create multiple income streams from your brand.</li>
              <li>Compete at a global level with clarity and confidence.</li>
            </ul>

            <p>
              And it’s not just theory—upon completing the course, you’ll apply
              your learning through plug-and-play templates, exercises, and
              action steps that help you see results.
            </p>

            <p className="text-neutral-100">
              Your personal brand is your biggest asset. Don’t leave it to
              chance.
              <br />
              See you in class!
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <a
              href={courseLink}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm sm:text-base font-semibold text-black transition hover:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Get Course Now <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- tiny inline icons (no dependencies) --- */
function Star({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 sm:h-5 sm:w-5 text-primary ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 2.5l2.47 5.01 5.53.8-4 3.9.94 5.48L10 15.9l-4.94 2.78.94-5.48-4-3.9 5.53-.8L10 2.5z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11 3h6v6h-2V6.41l-7.3 7.3-1.41-1.41 7.3-7.3H11V3z" />
      <path d="M5 5h4v2H7v6h6v-2h2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    </svg>
  );
}
