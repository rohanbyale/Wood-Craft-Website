import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current URL path
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" makes it jump, "smooth" makes it glide
    // For luxury sites, 'instant' is actually better to avoid 
    // seeing the old page content while the new one loads.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // Fires every time the URL changes

  return null;
};

export default ScrollToTop;