import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Minus, Plus } from "lucide-react";
import MyButton from "./ui/Button";

const faqs = [
  {
    question: "Do I need to have a big following before working with you?",
    answer:
      "Not at all. This work isn't about numbers, it's about foundation. A small audience built on authenticity will always outperform a large one built on performance. We start with who you are, not how many followers you have.",
  },
  {
    question:
      "I've worked with other brand coaches before and it didn't stick. Why would this be different?",
    answer:
      "Because most brand work starts with strategy and skips the person. We do the opposite. Before we touch messaging or content, we go deep into who you actually are. That's why it sticks because it's built on something real.",
  },
  {
    question: "I'm not sure I'm ready to be fully seen. Is this still for me?",
    answer:
      "That uncertainty is exactly why you're in the right place. You don't need to arrive ready. You just need to arrive willing. The T.R.U.E. Method is designed to meet you where you are and walk you through it, without pressure, without judgement.",
  },
  {
    question: "How long does the process take?",
    answer:
      "There's the TRUE Intensive which is for 30 days and the TRUE Brand Build which is for 6 weeks. Both are designed to give you depth without dragging it out, because clarity shouldn't take forever.",
  },
  {
    question: "What's the difference between the two offers?",
    answer:
      "The TRUE Intensive is done-with-you, we build the strategy together and you execute. The TRUE Brand Build is done-for-you, I and my team handles the heavy lifting while you focus on showing up. Both end with a brand that sounds unmistakably like you.",
  },
  {
    question:
      "Will my brand actually sound like me or will it sound like you wrote it?",
    answer:
      "Everything we create goes through you. Your words, your stories, your voice, we just help shape and sharpen it. Clients often say it sounds more like them than anything they've written themselves.",
  },
  {
    question: "What if I don't know what makes me different?",
    answer:
      "That's the most common thing I hear, and it's exactly what the Truth and Reveal phases of the T.R.U.E. Method are designed to uncover. You don't need to know before we start. That's what we figure out together.",
  },
  {
    question: "Who is this NOT for?",
    answer:
      "This isn't for someone looking for a quick fix, a content calendar, or a logo. If you want tactics without doing the inner work, this isn't the right fit. But if you're ready to build something real? You're in exactly the right place.",
  },
  {
    question: "How do I know if I'm ready?",
    answer:
      "If you're reading this and something in you is nodding, you're ready. Book a discovery call and we'll figure out the rest together.",
  },
];

const faqTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#F4A261" },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function FAQ() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <ThemeProvider theme={faqTheme}>
      <section className="py-16 text-[#F5E9DC] sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                FAQ
              </p>
              <h2 className="max-w-2xl mx-auto font-heading text-3xl font-bold leading-tight md:text-4xl">
                Everything you've been wondering but haven't asked yet.
              </h2>
            </div>
            <div className="">
              <p className="max-w-xl mx-auto text-sm leading-6 text-neutral-400 lg:max-w-md">
                Quick answers about the personal brand process, what makes it
                different, and how to know if you're ready.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {faqs.map((faq, index) => {
              const isOpen = expanded === index;

              return (
                <Accordion
                  key={faq.question}
                  expanded={isOpen}
                  onChange={handleChange(index)}
                  disableGutters
                  square={false}
                  className={isOpen ? "lg:row-span-2" : ""}
                  sx={{
                    bgcolor: isOpen ? "#1F1B17" : "#171717",
                    color: "#F5E9DC",
                    border: isOpen
                      ? "1px solid rgba(244,162,97,0.55)"
                      : "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: isOpen
                      ? "0 20px 50px rgba(0,0,0,0.32)"
                      : "none",
                    transition:
                      "border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease",
                    "&:before": { display: "none" },
                    "&.Mui-expanded": { margin: 0 },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      isOpen ? (
                        <Minus size={21} color="#F4A261" strokeWidth={2.4} />
                      ) : (
                        <Plus size={21} color="#F5E9DC" strokeWidth={2.4} />
                      )
                    }
                    sx={{
                      minHeight: { xs: 74, sm: 86 },
                      px: { xs: 2.25, sm: 3.5 },
                      py: 1.5,
                      "&.Mui-expanded": {
                        minHeight: { xs: 74, sm: 86 },
                      },
                      "& .MuiAccordionSummary-content": {
                        alignItems: "center",
                        gap: 2.5,
                        my: 0,
                      },
                      "& .MuiAccordionSummary-content.Mui-expanded": {
                        my: 0,
                      },
                    }}
                  >
                    <span
                      className={`mr-2 h-[2px] w-5 shrink-0 rounded-full ${
                        isOpen ? "bg-primary" : "bg-white/50"
                      }`}
                    />
                    <span className="text-base font-semibold leading-6 text-[#F5E9DC] sm:text-lg">
                      {faq.question}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: { xs: 2.25, sm: 3.5 },
                      pb: { xs: 3, sm: 4 },
                      pt: 0,
                    }}
                  >
                    <p className="max-w-xl pl-9 text-sm leading-7 text-neutral-400 sm:pl-[3.25rem]">
                      {faq.answer}
                    </p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default FAQ;
