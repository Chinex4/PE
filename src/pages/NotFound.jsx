import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen text-[#F5E9DC] flex items-center">
      <div className="w-full max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary w-20 h-20 text-3xl font-extrabold">
          404
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Page Not Found
        </h1>
        <p className="mt-3 text-neutral-300 max-w-xl mx-auto">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-black px-5 py-3 font-semibold"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold hover:bg-white/5"
          >
            Contact Support
          </Link>
        </div>

        {/* subtle divider */}
        <div className="mt-12 h-px w-full bg-white/10" />
        <p className="mt-4 text-xs text-neutral-500">
          If you believe this is an error, please reach out.
        </p>
      </div>
    </main>
  );
}
