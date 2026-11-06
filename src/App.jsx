import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import "@fontsource-variable/instrument-sans";
import "./site/fonts.css";
import "./site/site.css";
import Header from "./site/components/Header";
import Hero from "./site/components/Hero";
import Potential from "./site/components/Potential";
import Framework from "./site/components/Framework";
import Work from "./site/components/Work";
import Testimonials from "./site/components/Testimonials";
import About from "./site/components/About";
import Faq from "./site/components/Faq";
import Closing from "./site/components/Closing";
import { BookingProvider } from "./site/components/Booking";
import Footer from "./site/components/Footer";
import StickyCta from "./site/components/StickyCta";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <BookingProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main" tabIndex={-1}>
            <Hero />
            <Potential />
            <Framework />
            <Work />
            <Testimonials />
            <About />
            <Faq />
            <Closing />
          </main>
          <Footer />
          <StickyCta />
        </BookingProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
