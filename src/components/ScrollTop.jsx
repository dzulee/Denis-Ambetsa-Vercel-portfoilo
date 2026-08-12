// src/components/ScrollTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset standard window scroll
    window.scrollTo(0, 0);

    // 2. Reset scroll on container div if overflow is set on app-content
    const contentElement = document.querySelector(".app-content");
    if (contentElement) {
      contentElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}