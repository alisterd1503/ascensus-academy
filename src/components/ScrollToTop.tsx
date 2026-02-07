import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use "auto" (instant) instead of "smooth" for route changes
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}