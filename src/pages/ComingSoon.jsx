import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <main className="min-h-screen text-[#F5E9DC] flex items-center">
      <div className="w-full max-w-3xl mx-auto px-6 py-16 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold">
          ⏳ Coming Soon
        </span>

        <h1 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold">
          We’re putting the final touches on this page
        </h1>
        <p className="mt-3 text-neutral-300 max-w-xl mx-auto">
          This feature is almost ready. Join the list to get notified the moment
          it goes live, or head back to the homepage for now.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/reach-out?type=clarity"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-black px-5 py-3 font-semibold"
          >
            Notify Me
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold hover:bg-white/5"
          >
            Back to Home
          </Link>
        </div>

        {/* Decorative line */}
        <div className="mt-12 h-px w-full bg-white/10" />
        <p className="mt-4 text-xs text-neutral-500">
          Thanks for your patience—great things take a little time.
        </p>
      </div>
    </main>
  );
}
