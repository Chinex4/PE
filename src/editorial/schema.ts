export interface Item {
  title: string;
  body: string;
}
export interface PageIntro {
  title: string;
  intro: string;
}
export interface SiteContent {
  hero: Item;
  intro: { title: string; paragraphs: string[] };
  belief: string;
  work: Item[];
  audiences: Item[];
  offers: (Item & { statement: string })[];
  ourtalento: Item;
  closing: Item;
  about: PageIntro & { paragraphs: string[]; values: string[] };
  coaching: PageIntro & { reasons: string[]; topics: string[]; expect: string };
  branding: PageIntro & {
    audiences: Item[];
    topics: string[];
    outcome: string;
  };
  speaking: PageIntro & { topics: string[] };
  contact: PageIntro;
  images: { hero: string; about: string; speaking: string; community: string };
}
