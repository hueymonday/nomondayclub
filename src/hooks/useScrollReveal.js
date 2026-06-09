import { useEffect, useRef } from "react";

/**
 * Custom hook that triggers a CSS animation (fade + slide up)
 * when elements matching a selector scroll into view.
 *
 * @param {string} selector - CSS selector for child elements to observe (e.g. ".faq-item")
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject} ref - Attach this ref to the parent container
 */
export function useScrollReveal(selector = ".reveal-item", options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    if (targets.length === 0) return;

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, [selector, options]);

  return containerRef;
}
