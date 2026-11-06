import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { hero, navigation } from "../content";
import { BookingButton } from "./Booking";
import Logo from "./Logo";

export default function Header() {
  const { scrollY } = useScroll();
  const [state, setState] = useState({ hidden: false, scrolled: false });
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    const hidden = y > previous && y > 160;
    const scrolled = y > 24;
    setState((current) =>
      current.hidden === hidden && current.scrolled === scrolled
        ? current
        : { hidden, scrolled },
    );
  });
  return (
    <header
      className="header"
      data-hidden={state.hidden}
      data-scrolled={state.scrolled}
    >
      <div className="frame header__inner">
        <a className="header__logo" href="#main" aria-label="Precious Evans, back to top">
          <Logo />
        </a>
        <nav className="header__nav" aria-label="Main">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <BookingButton
          label={hero.primary}
          location="header"
          className="btn--sm"
          icon={false}
        />
      </div>
    </header>
  );
}
