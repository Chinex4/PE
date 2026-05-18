import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
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

function FAQ() {
  return (
    <section className="text-[#F5E9DC] py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="text-center lg:text-center">
          <h2 className="text-2xl font-bold mb-8 uppercase font-dela">
            Everything you’ve been wondering but haven’t asked yet.
          </h2>
          <p className="mt-2 text-navGray">
            Do you have any questions about building your brand or ready to get
            started? Dive into our FAQs for quick answers, or reach out
            directly. I’m just a message away!
          </p>
          <div className="mt-6">
            <MyButton to="/contact" label="Send A message &rarr;" />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border-b border-[#F5E9DC] pb-2">
                  <Disclosure.Button className="flex justify-between items-center w-full py-4 text-left text-lg">
                    <span className="flex-1">{faq.question}</span>
                    <ChevronUpIcon
                      className={`w-5 h-5 min-w-[20px] min-h-[20px] text-[#F5E9DC] transition-transform ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-navGray pb-4">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
