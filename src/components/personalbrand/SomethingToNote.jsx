import React from "react";

export default function SomethingToNote() {
  return (
    <section className="relative text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading + underline accent */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-dela">
            Something To Note
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-1 w-44 rounded-full bg-neutral-200" />
          </div>
        </div>

        {/* Decorative giant quote mark */}
        <QuoteMark className="pointer-events-none select-none absolute right-6 sm:right-[20%] lg:right-[28%] top-10 sm:top-12 hidden md:block h-24 w-24 text-navGray/20" />

        {/* Body */}
        <blockquote className="mt-8 sm:mt-10 text-center space-y-5">
          <p className="mx-auto max-w-3xl text-[13px] sm:text-sm md:text-base leading-relaxed text-neutral-300">
            A quote by Mark Twain says “The two most important days in your life are the day you are born and the day you find out why.”
          </p>
          <p className="mx-auto max-w-3xl text-[13px] sm:text-sm md:text-base leading-relaxed text-neutral-300">
            I discovered that the fastest route to discovering why is being intentional about your personal brand.
          </p>
          <footer className="pt-2 text-xs sm:text-sm font-medium text-neutral-200">
            With love, from Precious <span className="text-primary">🧡</span>
          </footer>
        </blockquote>
      </div>

      {/* bottom divider like in the screenshot */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-2">
        <div className="h-px w-full bg-white/10" />
      </div>
    </section>
  );
}

/* Minimal inline SVG for the decorative quote mark */
function QuoteMark({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M26 14c-7 0-12 5-12 12 0 6 4 10 9 11-2 6-6 9-11 11l2 6c14-4 21-13 21-26 0-8-4-14-9-14zm26 0c-7 0-12 5-12 12 0 6 4 10 9 11-2 6-6 9-11 11l2 6c14-4 21-13 21-26 0-8-4-14-9-14z" />
    </svg>
  );
}
