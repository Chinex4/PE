import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom"; // not needed
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const LimitlessCompleteSubscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !profession) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      name,
      email,
      number,
      profession,
    };

    emailjs
      .send(
        "service_pt9g2vh",
        "template_cjxiose",
        {
            name,
            email: 'evapreciou@gmail.com',
            number: number === "" ? "Number not provided" : number,
            profession
        },
        "ZEqjeNrJc7plNzfWX"
      )

    emailjs
      .send(
        "service_pt9g2vh",
        "template_axrv1gy",
        templateParams,
        "ZEqjeNrJc7plNzfWX"
      )
      .then(() => {
        toast.success("Thanks! Details recorded and email sent.");
        setName("");
        setEmail("");
        setNumber("");
        setProfession("");

        // small delay so the toast can show, then redirect to Substack
        setTimeout(() => {
          window.location.href = "https://substack.com/@preciousevans";
          // or use replace() if you don't want users to navigate back:
          // window.location.replace("https://substack.com/@preciousevans");
        }, 400);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="min-h-screen bg-[#171717] text-[#F5E9DC] px-6 py-16 flex items-center justify-center">
      <Toaster />
      <div className="w-full max-w-lg bg-zinc-900 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center font-dela">
          Complete Your Subscription
        </h2>
        <p className="text-center mb-6 text-gray-400">
          You've successfully subscribed to the Limitless Newsletter.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-[#1c1c1c] border border-zinc-700 text-[#F5E9DC] placeholder-navGray"
          />
          <input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-[#1c1c1c] border border-zinc-700 text-[#F5E9DC] placeholder-navGray"
          />
          <input
            type="text"
            placeholder="Whatsapp Number (optional)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-3 rounded bg-[#1c1c1c] border border-zinc-700 text-[#F5E9DC] placeholder-navGray"
          />
          <input
            type="text"
            placeholder="Industry or Profession"
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="w-full p-3 rounded bg-[#1c1c1c] border border-zinc-700 text-[#F5E9DC] placeholder-navGray"
          />

          <button
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            className="w-full bg-primary hover:opacity-90 text-black font-semibold py-3 rounded transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending…
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LimitlessCompleteSubscription;
