import { metadata } from "./metadata.js";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { content as c, navigation, ideas } from "./content";
import { config, trackBooking } from "./config";
import EnquiryForm from "./EnquiryForm";
import "./editorial.css";
export function BookingCTA({ location = "page" }) {
  return (
    <Link
      className="booking-button"
      to={config.bookingUrl || "/booking"}
      onClick={() => trackBooking(location)}
    >
      Book a Coaching Session <span aria-hidden="true">↗</span>
    </Link>
  );
}
function ArrowLink({ to, children }) {
  return (
    <Link className="text-link" to={to}>
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}
function Photo({ kind, alt, priority = false }) {
  return (
    <img
      className={`editorial-photo photo-${kind}`}
      src={c.images[kind]}
      srcSet={`${c.images[kind].replace(".webp", "-480.webp")} 480w, ${c.images[kind].replace(".webp", "-720.webp")} 720w, ${c.images[kind]} ${kind === "speaking" ? 1170 : 900}w`}
      sizes={
        kind === "speaking"
          ? "(max-width: 767px) calc(100vw - 48px), 90vw"
          : "(max-width: 767px) calc(100vw - 48px), 40vw"
      }
      width={kind === "speaking" ? 1170 : 900}
      height={kind === "speaking" ? 1226 : 900}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
function Paragraphs({ items }) {
  return items.map((x) => <p key={x}>{x}</p>);
}
function List({ items }) {
  return (
    <ul className="editorial-list">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}
function Closing() {
  return (
    <section className="closing-band">
      <div className="frame">
        <h2>{c.closing.title}</h2>
        <div>
          <p>{c.closing.body}</p>
          <BookingCTA location="closing" />
        </div>
      </div>
    </section>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" aria-label="Precious Evans home">
          Precious
          <br />
          Evans<span aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((x) => (
            <NavLink key={x.href} to={x.href}>
              {x.name}
            </NavLink>
          ))}
          {ideas.length > 0 && <NavLink to="/ideas">Ideas</NavLink>}
        </nav>
        <BookingCTA location="header" />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"

        >
          {navigation.map((x) => (
            <NavLink key={x.href} to={x.href}>
              {x.name}
            </NavLink>
          ))}
          {ideas.length > 0 && <NavLink to="/ideas">Ideas</NavLink>}
          <BookingCTA location="mobile-menu" />
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame footer-top">
        <p>
          I help people understand who they are, communicate what they stand for
          and build with purpose.
        </p>
        <nav aria-label="Footer navigation">
          {navigation.map((x) => (
            <Link key={x.href} to={x.href}>
              {x.name}
            </Link>
          ))}
        </nav>
        <div>
          {config.socialLinks.map((x) => (
            <a key={x.name} href={x.url}>
              {x.name} ↗
            </a>
          ))}
          {config.email && (
            <a href={`mailto:${config.email}`}>{config.email}</a>
          )}
          <Link to="/privacy">Privacy notice</Link>
        </div>
      </div>
      <div className="footer-name" aria-hidden="true">
        Precious Evans.
      </div>
      <div className="frame footer-bottom">
        <span>© {new Date().getFullYear()} Precious Evans</span>
        <span>Identity. Purpose. Personal Brand.</span>
      </div>
    </footer>
  );
}
function Meta({ page }) {
  const { pathname } = useLocation();
  const [title, description] = metadata[page] || metadata.home;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://preciousevans.com${pathname}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://preciousevans.com${pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://preciousevans.com/images/pepicture.png"
      />
      <meta property="og:image:alt" content="Precious Evans" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://preciousevans.com/images/pepicture.png"
      />
    </Helmet>
  );
}
function Home() {
  return (
    <>
      <section className="home-hero frame">
        <div className="hero-copy">
          <h1>{c.hero.title}</h1>
          <p>{c.hero.body}</p>
          <div className="hero-actions">
            <BookingCTA location="home-hero" />
            <a className="text-link" href="#work">
              Explore My Work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <Photo kind="hero" alt="Precious Evans" priority />
          <span className="portrait-signature" aria-hidden="true">
            Precious Evans
          </span>
        </div>
      </section>
      <section className="frame section intro-section">
        <h2>{c.intro.title}</h2>
        <div className="prose">
          <Paragraphs items={c.intro.paragraphs} />
          <ArrowLink to="/about">About Precious</ArrowLink>
        </div>
      </section>
      <section className="belief-band">
        <div className="frame">
          <p>{c.belief}</p>
        </div>
      </section>
      <section className="frame section work-section" id="work">
        <h2>What I Work On</h2>
        <div className="work-grid">
          {c.work.map((x) => (
            <article key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="audience-section">
        <div className="frame section">
          <h2>Who I Work With</h2>
          <div className="audience-grid">
            {c.audiences.map((x, i) => (
              <Link
                className="audience-card"
                key={x.title}
                to={i ? "/personal-branding" : "/coaching"}
              >
                <h3>{x.title}</h3>
                <p>{x.body}</p>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="frame section offers-section">
        <div className="offer-grid">
          {c.offers.map((x, i) => (
            <article className={`offer offer-${i}`} key={x.title}>
              <h2>{x.title}</h2>
              <p className="offer-statement">{x.statement}</p>
              <p>{x.body}</p>
              {i === 0 ? (
                <BookingCTA location="home-coaching" />
              ) : (
                <ArrowLink to={i === 1 ? "/personal-branding" : "/speaking"}>
                  {i === 1
                    ? "Explore Personal Branding"
                    : "Invite Precious to Speak"}
                </ArrowLink>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="speaking-photo frame">
        <Photo kind="speaking" alt="Precious Evans speaking on stage" />
      </section>
      <section className="ourtalento-band">
        <div className="frame section ourtalento-grid">
          <div>
            <h2>Ourtalento</h2>
          </div>
          <div>
            <h3>{c.ourtalento.title}</h3>
            <p>{c.ourtalento.body}</p>
            <a
              className="text-link"
              href={config.ourtalentoUrl || "/about#ourtalento"}
            >
              Explore Ourtalento <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <Closing />
    </>
  );
}

function PageHero({ data, image }) {
  return (
    <section className={`frame page-hero ${image ? "with-photo" : ""}`}>
      <div>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <BookingCTA location="page-hero" />
      </div>
      {image && (
        <Photo
          kind={image}
          alt={
            image === "speaking"
              ? "Precious Evans speaking on stage"
              : "Precious Evans"
          }
          priority
        />
      )}
    </section>
  );
}
function TextSection({ title, children, id }) {
  return (
    <section className="frame section text-section" id={id}>
      <h2>{title}</h2>
      <div className="prose">{children}</div>
    </section>
  );
}
function About() {
  return (
    <>
      <PageHero data={c.about} image="about" />
      <section className="frame section about-copy" id="ourtalento">
        <Paragraphs items={c.about.paragraphs} />
      </section>
      <TextSection title="What guides my work">
        <List items={c.about.values} />
      </TextSection>
      <Closing />
    </>
  );
}
function Coaching() {
  return (
    <>
      <PageHero data={c.coaching} />
      <TextSection title="You may want coaching if">
        <List items={c.coaching.reasons} />
      </TextSection>
      <TextSection title="What we can explore">
        <List items={c.coaching.topics} />
      </TextSection>
      <TextSection title="What to expect">
        <p>{c.coaching.expect}</p>
        <BookingCTA location="coaching-expect" />
      </TextSection>
      <Closing />
    </>
  );
}
function Branding() {
  return (
    <>
      <PageHero data={c.branding} />
      <section className="frame section">
        <h2>Who I work with</h2>
        <div className="audience-grid">
          {c.branding.audiences.map((x) => (
            <article className="audience-card" key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.body}</p>
            </article>
          ))}
        </div>
      </section>
      <TextSection title="What we work on">
        <List items={c.branding.topics} />
      </TextSection>
      <TextSection title="The outcome">
        <p>{c.branding.outcome}</p>
        <BookingCTA location="branding-outcome" />
        <p>
          <a className="text-link" href="#branding-enquiry">
            Enquire About Personal Branding Strategy ↗
          </a>
        </p>
      </TextSection>
      <TextSection
        title="Enquire About Personal Branding Strategy"
        id="branding-enquiry"
      >
        <EnquiryForm kind="branding" />
      </TextSection>
      <Closing />
    </>
  );
}
function Speaking() {
  return (
    <>
      <PageHero data={c.speaking} image="speaking" />
      <TextSection title="Possible topics">
        <List items={c.speaking.topics} />
        <a className="text-link" href="#speaking-enquiry">
          Invite Precious to Speak ↗
        </a>
      </TextSection>
      <TextSection title="Invite Precious to Speak" id="speaking-enquiry">
        <EnquiryForm kind="speaking" />
      </TextSection>
      <Closing />
    </>
  );
}
function Contact() {
  return (
    <>
      <PageHero data={c.contact} />
      <TextSection title="Contact">
        <EnquiryForm />
        {config.email && (
          <p>
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </p>
        )}
        {config.socialLinks.map((x) => (
          <p key={x.name}>
            <a href={x.url}>{x.name} ↗</a>
          </p>
        ))}
      </TextSection>
    </>
  );
}
function Privacy() {
  return (
    <>
      <section className="frame page-hero">
        <h1>Privacy notice</h1>
        <p>
          Enquiry forms collect the details you provide so Precious Evans can
          respond to your request. Please only include information relevant to
          your enquiry.
        </p>
      </section>
      <TextSection title="Enquiries and bookings">
        <p>
          Enquiries are delivered through EmailJS and the connected email
          service. Booking buttons open the configured calendar provider, whose
          privacy terms apply to information you enter there.
        </p>
        <p>
          Enquiry information is used to respond and arrange the service you
          request. It is not added to a marketing list through these forms. To
          ask about information you have submitted, use the{" "}
          <Link to="/contact">contact form</Link>
          {config.email && (
            <>
              {" "}
              or email <a href={`mailto:${config.email}`}>{config.email}</a>
            </>
          )}
          .
        </p>
      </TextSection>
      <TextSection title="Analytics">
        <p>
          Booking button clicks can be measured when analytics is enabled. The
          event contains the button’s location on the site, without your form
          details. This site does not load an analytics provider by default.
        </p>
      </TextSection>
    </>
  );
}
function Booking() {
  return (
    <section className="frame page-hero">
      <h1>Book a Coaching Session</h1>
      <p>Online booking is not available yet.</p>
      <p>{c.coaching.expect}</p>
      <ArrowLink to="/contact">Contact</ArrowLink>
    </section>
  );
}
export default function Platform({ page = "home" }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-seen");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section h2,.section h3,.section p,.section article,.belief-band p",
      )
      .forEach((e) => {
        e.classList.add("reveal");
        observer.observe(e);
      });
    return () => observer.disconnect();
  }, [pathname]);
  const pages = {
    home: <Home />,
    about: <About />,
    coaching: <Coaching />,
    branding: <Branding />,
    speaking: <Speaking />,
    contact: <Contact />,
    privacy: <Privacy />,
    booking: <Booking />,
    ideas: (
      <section className="frame page-hero">
        <h1>Ideas</h1>
        {ideas.map((x) => (
          <article key={x.slug}>
            <h2>{x.title}</h2>
            <p>{x.body}</p>
          </article>
        ))}
      </section>
    ),
  };
  return (
    <div className="editorial">
      <Meta page={page} />
      {pages[page] || pages.home}
    </div>
  );
}
