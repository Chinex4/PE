// @ts-check
/** @typedef {{title: string, body: string}} Item */
/** @type {{name: string, href: string}[]} */
export const navigation = [
  { name: "About Precious", href: "/about" },
  { name: "Coaching", href: "/coaching" },
  { name: "Personal Branding", href: "/personal-branding" },
  { name: "Speaking", href: "/speaking" },
  { name: "Contact", href: "/contact" },
];
/** @satisfies {import("./schema").SiteContent} */
export const content = {
  hero: {
    title: "Understand who you are. Build what matters.",
    body: "I teach, coach and work with people on identity, purpose and personal branding — helping young people find direction and young entrepreneurs build a clear, meaningful presence.",
  },
  intro: {
    title: "I'm Precious Evans.",
    paragraphs: [
      "I’m interested in how people understand themselves, make decisions and show up in the world.",
      "My work sits at the intersection of identity, purpose and personal branding. I help young people think clearly about who they are and where they are going, while working with young entrepreneurs to communicate their value and build stronger personal brands.",
    ],
  },
  belief:
    "Identity comes first. It shapes the decisions we make, the stories we tell and how we show up in the world. Personal branding is one practical expression of that identity.",
  work: [
    {
      title: "Identity & Purpose",
      body: "Understanding who you are, what matters to you and the kind of life you want to build.",
    },
    {
      title: "Personal Branding Strategy",
      body: "Connecting who you are, what you stand for and how you communicate that to the world.",
    },
    {
      title: "Direction & Personal Growth",
      body: "Making intentional decisions, setting priorities and turning self-understanding into action.",
    },
    {
      title: "Communication & Influence",
      body: "Expressing ideas clearly, telling your story and building meaningful connections.",
    },
  ],
  audiences: [
    {
      title: "For young people finding their direction",
      body: "You might be at the beginning of your journey, exploring your interests, strengths and possibilities. I help you ask better questions, gain clarity and take your next steps with intention.",
    },
    {
      title: "For young entrepreneurs building something",
      body: "You have a business, an idea or a growing body of work. I help you clarify your personal brand, strengthen your positioning and communicate your value with confidence.",
    },
  ],
  offers: [
    {
      title: "Coaching",
      statement: "Sometimes, you need space to think things through.",
      body: "A coaching session gives you room to explore what matters, work through a decision and identify practical next steps. Whether you are figuring out your direction or navigating your next stage of growth, we start with where you are.",
    },
    {
      title: "Personal Branding Strategy",
      statement:
        "Your personal brand should communicate who you are and what you bring.",
      body: "I work with young entrepreneurs and emerging professionals to develop clear positioning, meaningful messaging and a consistent way of showing up. The goal is more than visibility. It is to build recognition, trust and authority around what you stand for.",
    },
    {
      title: "Speaking & Teaching",
      statement:
        "Ideas worth thinking about. Conversations that move people forward.",
      body: "I speak and teach on identity, purpose, personal branding, communication and intentional growth.",
    },
  ],
  ourtalento: {
    title: "Taking the work beyond one person.",
    body: "I’m the founder of Ourtalento, a platform creating experiences that help young people understand their identity, gain direction and grow through learning, community and accountability.",
  },
  closing: {
    title: "Build a life — and a personal brand — that reflects who you are.",
    body: "Start with a conversation about where you are and what you want to build.",
  },
  about: {
    title:
      "I care about who you are becoming — and how you show up in the world.",
    intro:
      "I’m Precious Evans, a strategist, speaker, teacher and coach working across identity, purpose and personal branding.",
    paragraphs: [
      "I believe the way we build our lives and the way we present ourselves to the world should start with a clear understanding of who we are.",
      "That belief shapes my work. I help young people think through identity, purpose and direction. I also work with young entrepreneurs to clarify their positioning, communicate their value and build personal brands with intention.",
      "I’m the founder of Ourtalento, where I’m building a wider platform for young people to learn, grow and take ownership of their future.",
    ],
    values: [
      "Identity should inform direction.",
      "A strong personal brand starts with clarity, not just content.",
      "Purpose is expressed through choices and action.",
      "Visibility matters most when it communicates real value.",
      "Growth is stronger when learning is supported by practice and community.",
    ],
  },
  coaching: {
    title: "Get clear about where you are and what comes next.",
    intro:
      "One-on-one coaching for young people and emerging entrepreneurs navigating important questions, decisions and next steps.",
    reasons: [
      "You feel unsure about your direction.",
      "You are making an important personal or career decision.",
      "You want to understand your strengths, values and priorities.",
      "You are building something and need clarity about your next move.",
      "You want to become more intentional about your growth.",
    ],
    topics: [
      "Identity, values and personal convictions.",
      "Purpose and life direction.",
      "Personal and professional decisions.",
      "Goals, priorities and intentional growth.",
      "The relationship between your identity and the work you want to do.",
    ],
    expect:
      "A thoughtful, guided conversation focused on your situation. You’ll have room to reflect, ask questions and identify practical next steps. You do not need to have everything figured out before booking.",
  },
  branding: {
    title: "Build a personal brand that means something.",
    intro:
      "Personal branding is not just about posting consistently or becoming visible. It is about understanding what you stand for, communicating your value and building a reputation around it.",
    audiences: [
      {
        title: "Young entrepreneurs",
        body: "For founders and business owners who want their personal brand to support their business, build trust and create opportunities.",
      },
      {
        title: "Emerging professionals and creatives",
        body: "For people at the beginning of their journey who want to communicate their strengths, ideas and value with more clarity.",
      },
    ],
    topics: [
      "Identity and positioning — what you want to be known for and who you serve.",
      "Brand story and messaging — communicating your ideas and value clearly.",
      "Content direction — choosing the right themes and formats.",
      "Visibility and authority — showing up consistently and building trust.",
    ],
    outcome:
      "A clearer understanding of your brand, a stronger message and a practical direction for how to communicate it. The work connects who you are with what you want to build.",
  },
  speaking: {
    title: "Conversations that help people think and act differently.",
    intro:
      "I speak and teach on identity, purpose, personal branding, communication and intentional growth.",
    topics: [
      "Who Am I? Understanding Identity",
      "Purpose Beyond a Career",
      "Building a Personal Brand with Intention",
      "Identity vs. Expectations",
      "Communicating Ideas with Clarity",
      "Building a Life with Intention",
    ],
  },
  contact: {
    title: "Let's start a conversation.",
    intro:
      "For coaching, personal branding strategy, speaking, collaborations or general enquiries, send a message.",
  },
  images: {
    hero: "/images/portrait.webp",
    about: "/images/about-portrait.webp",
    speaking: "/images/speaking.webp",
    community: "/images/gathering.png",
  },
};
/** @type {{slug: string,title: string,body: string,date: string}[]} */
export const ideas = [];
