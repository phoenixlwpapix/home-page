import { useEffect } from "react";

/** One frame per scroll event; transient positions never enter React state. */
export function useScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    let dispose = () => {};
    const setup = () => {
      dispose();
      const reveals = [...document.querySelectorAll<HTMLElement>(".reveal")];
      const layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
      if (preference.matches) {
        reveals.forEach((element) => element.classList.remove("reveal-pending"));
        layers.forEach((element) => element.style.removeProperty("--parallax"));
        root.style.removeProperty("--scroll-progress");
        return;
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      reveals.forEach((element) => {
        element.classList.add("reveal-pending");
        observer.observe(element);
      });
      let frame = 0;
      const update = () => {
        frame = 0;
        const distance = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", String(distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0));
        layers.forEach((element) => {
          const box = element.parentElement?.getBoundingClientRect();
          if (box && box.bottom > 0 && box.top < window.innerHeight) {
            const offset = (window.innerHeight / 2 - box.top - box.height / 2) * Number(element.dataset.parallax);
            // Keep the image covering its frame at every scroll position and viewport size.
            const travel = Math.max(0, (element.offsetHeight - box.height) / 2 - 1);
            element.style.setProperty("--parallax", `${Math.max(-travel, Math.min(travel, offset))}px`);
          }
        });
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      const resize = new ResizeObserver(schedule);
      resize.observe(document.body);
      update();
      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        resize.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        reveals.forEach((element) => element.classList.remove("reveal-pending"));
        layers.forEach((element) => element.style.removeProperty("--parallax"));
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { dispose(); preference.removeEventListener("change", setup); root.style.removeProperty("--scroll-progress"); };
  }, []);
}
