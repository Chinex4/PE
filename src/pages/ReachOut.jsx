import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const ReachOut = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calUrl, setCalUrl] = useState("#");
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const callType = (searchParams.get("type") || "general").toLowerCase();
  
  console.log("`callType` is", callType);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build Calendly link with prefill from current form values
    const fd = new FormData(form.current);
    const name = (fd.get("user_name") || "").toString();
    const email = (fd.get("user_email") || "").toString();

    const calendlyBases = {
      //   clarity: 'https://calendly.com/YOUR_HANDLE/clarity-call',
      //   strategy: 'https://calendly.com/YOUR_HANDLE/strategy-session',
      //   vip: 'https://calendly.com/YOUR_HANDLE/vip-day',
      general:
        "https://calendly.com/preciousevans/brandclaritycallwithpreciousevans",
    };
    const calendlyBase = calendlyBases.general;

    const prefilled = `${calendlyBase}?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}`;

    setCalUrl(prefilled);

    // Send the form to EmailJS (includes hidden type field)
    emailjs
      .sendForm(
        "service_hzqkqj6",
        "template_uyhpfre",
        form.current,
        "_hE5FK0e73MmOnlBf"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsModalOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="px-4 py-5 lg:px-[10rem] lg:py-[2rem] lg:mt-0">
      <div className="mt-8 lg:mt-28 py-16 px-4">
        <h2 className="text-center text-[24px] text-primary leading-[1.1] font-dela font-bold mb-12">
          Fill this form and I will reach out <br />
          to you shortly to get started
        </h2>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto"
        >
          {/* Hidden field sent to EmailJS so you know the request type */}
          <input type="hidden" name="type" value={callType} />

          <input
            type="email"
            name="user_email"
            placeholder="Email address"
            className="w-full p-3 rounded-md text-[#F5E9DC] bg-[#1c1c1c] placeholder:text-navGray focus:outline-none"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-md text-[#F5E9DC] bg-[#1c1c1c] placeholder:text-navGray focus:outline-none"
            required
          />
          <input
            type="text"
            name="brand_handle"
            placeholder="Brand Handle"
            className="w-full p-3 rounded-md text-[#F5E9DC] bg-[#1c1c1c] placeholder:text-navGray focus:outline-none"
            required
          />
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full p-3 rounded-md text-[#F5E9DC] bg-[#1c1c1c] placeholder:text-navGray focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Tell me a little about your brand and the problem you are facing and I will reach out to you in no time."
            className="w-full p-3 text-[#F5E9DC] bg-[#1c1c1c] placeholder:text-navGray rounded-md focus:outline-none h-32"
            required
          />
          <button
            type="submit"
            className="bg-primary text-black py-2 px-4 rounded-lg w-full font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* MODAL */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="bg-[#272727] text-[#F5E9DC] p-6 rounded-2xl shadow-xl max-w-sm w-[92%] text-center border border-white/10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-lg font-semibold font-dela">Message Sent</h2>
                <p className="text-neutral-300 mt-2">
                  Thanks for reaching out! You can take the next step right now.
                </p>

                <div className="mt-5 grid gap-3">
                  {/* Direct call link */}
                  {/* <a
                    href="tel:+2349021381455"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-black px-4 py-2 font-semibold"
                  >
                    Call Now
                  </a> */}

                  {/* Calendly link (prefilled with name & email, event varies by ?type=) */}
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 font-semibold hover:opacity-95"
                  >
                    Proceed To Calendly
                  </a>
                </div>

                <button
                  className="mt-5 text-sm text-neutral-400 hover:text-[#F5E9DC]"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReachOut;
