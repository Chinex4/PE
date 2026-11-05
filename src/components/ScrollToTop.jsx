import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const frame = requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
      return () => cancelAnimationFrame(frame);
    }
    if (window.scrollY !== 0 || window.scrollX !== 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
