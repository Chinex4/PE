import React from "react";

export const approachSteps = [
  {
    step: "1",
    title: "Brand Clarity:",
    description:
      "We redefined her message from “a podcast host” to a global voice of healing and intimacy. Her new positioning focused on African storytelling, emotional resilience, and breaking cultural silence around healing.",
  },
  {
    step: "2",
    title: "Visibility Strategy:",
    description:
      "Together, we built her personal brand system, from a compelling media kit to a powerful narrative, daily content direction, and a storytelling-driven framework.",
  },
  {
    step: "3",
    title: "Confidence & Fear Breakthrough:",
    description:
      "Through strategy sessions, I helped Mary overcome her fear of visibility, helping her show up on camera, and share her truth boldly and authentically.",
  },
];

const MaryWithTheVoice = () => {
  return (
    <div>
      <div className="px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0">
        <section className="mt-16 lg:mt-28 text-[#F5E9DC]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="lg:w-[30rem] mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Meet Mary With The Voice
              </h2>
              <p className="mb-8 opacity-80">
                Meet Mary,
                <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary">
                  a therapist
                </span>
                ,{" "}
                <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary">
                  storyteller
                </span>
                , and{" "}
                <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary">
                  speaker
                </span>
                .
              </p>
            </div>
            <div className="relative mx-auto w-full lg:w-2/3">
              <img
                loading="lazy"
                src="/images/mary-voice.png"
                alt="Mary With The Voice - Therapist, Storyteller, Speaker"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className=" text-[#F5E9DC] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold uppercase leading-[3px]">
              Background & Challenge
              <span className="text-5xl text-primary">.</span>
            </h2>
            {/* Client Overview Section */}
            <div className="my-8">
              <h3 className="text-xl font-medium mb-4">Client Overview</h3>
              <p className="text-sm leading-relaxed opacity-80">
                She is a global voice of healing and intimacy, helping
                individuals and communities heal, reconnect with themselves,
                their emotions, and others. Her work sits at the intersection of
                psychology, culture, and emotional wellness, blending African
                narratives with modern healing practices to help people move
                from silent struggles to authentic wholeness. <br /> <br />{" "}
                Through her talks, podcast, and private sessions, Mary creates
                safe spaces for reflection, healing, and reconnection, one
                story, one conversation, one heart at a time.
              </p>
            </div>

            {/* The Challenge Section */}
            <div>
              <h3 className="text-xl font-medium mb-4">The Challenge</h3>
              <p className="text-sm leading-relaxed opacity-80">
                When Mary first came onboard, she had a powerful message but
                struggled with visibility and fear of being fully seen. She
                wanted to help people heal through storytelling, intimacy, and
                emotional awareness, but her online presence didn’t reflect her
                depth or authority. Her brand was fragmented, and though she had
                a podcast, she wasn’t standing fully as the voice behind the
                movement.
              </p>
            </div>
          </div>
        </section>
        <section className=" text-[#F5E9DC] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold uppercase mb-8">
              Goal
              <span className="text-5xl text-primary">.</span>
            </h2>
            <p className="text-sm mb-12">
              Position Mary as a global voice of healing, helping her move
              beyond self-doubt to become a confident, visible, and influential
              figure in the wellness and relationship space.
            </p>
          </div>
        </section>
        <section className=" text-[#F5E9DC] py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-semibold uppercase mb-8">
              My Approach
              <span className="text-5xl text-primary">.</span>
            </h2>

            <p className="text-sm mb-12">
              We focused on clarity, confidence, and connection, three pillars
              that guided her transformation:
            </p>

            {/* Approach Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {/* Render Approach Steps */}
              {approachSteps.map((step) => (
                <div
                  key={step.step}
                  className="border border-gray-500 p-6 rounded-lg"
                >
                  <div className="text-2xl w-12 h-12 grid place-items-center rounded-full bg-[#F5E9DC33] border border-white font-semibold text-[#F5E9DC] mb-4">
                    <span>{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#F5E9DC]">
                    {step.title}
                  </h3>
                  <p className="text-[#F5E9DC]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" text-center py-16 px-4">
          <h2 className="text-2xl font-semibold text-[#F5E9DC] mb-4 uppercase font-dela">
            Results & Impact
            <span className="text-5xl text-primary">.</span>
          </h2>
          <p className="text-sm text-[#F5E9DC] mb-8 max-w-xl mx-auto">
            Our partnership with Mary with the voice has been linked to
            incredible results, like:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="text-center">
              <img
                loading="lazy"
                src="/images/archicon.png"
                alt="Increased Engagement"
                className="mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-[#F5E9DC]">
                Mary became recognized as a voice of depth and healing within
                her growing African and global audience.
              </p>
            </div>
            <div className="text-center">
              <img
                loading="lazy"
                src="/images/archicon.png"
                alt="Revenue Growth"
                className="mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-[#F5E9DC]">
                She began receiving speaking invitations.
              </p>
            </div>
            <div className="text-center">
              <img
                loading="lazy"
                src="/images/archicon.png"
                alt="Brand Recognition"
                className="mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-[#F5E9DC]">
                Her content began sparking deep engagement.
              </p>
            </div>
            <div className="text-center">
              <img
                loading="lazy"
                src="/images/archicon.png"
                alt="Brand Recognition"
                className="mx-auto mb-2"
              />
              <p className="text-lg font-semibold text-[#F5E9DC]">
                She now speaks boldly about intimacy, healing, and self-worth,
                with confidence that commands respect and compassion.
              </p>
            </div>
          </div>
        </section>
        <section className=" text-center py-16 px-4">
          <h2 className="text-2xl font-semibold text-[#F5E9DC] mb-8 uppercase">
            Client’s Testimonial
            <span className="text-5xl text-primary">.</span>
          </h2>
          <div className="max-w-3xl mx-auto text-[#F5E9DC] text-lg italic">
            <p className="mb-4">
              “Precious is good at strategy & consulting, that's his field and
              strength.”
            </p>
            <p className="text-lg font-semibold">Thank you, Precious!</p>
          </div>
        </section>
        <section className="bg-primary py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-smileyblue mb-4">
              Key Takeaway
            </h2>
            <p className="text-smileyblue mb-8 max-w-xl mx-auto">
              Mary With The Voice is redefining what healing sounds like,
              proving that emotional restoration isn’t just about therapy, it’s
              about voice, vulnerability, and visibility.
              <br /> <br />
              Personally, I am rooting for everything she has to offer because
              the world needs it
            </p>
            <a
              href="https://www.instagram.com/_preciousevans?igsh=ZzlnaHE3bnd5YjE5"
              className="bg-smileyblue text-primary py-5 px-24 rounded font-semibold"
            >
              Let's Chat
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MaryWithTheVoice;
