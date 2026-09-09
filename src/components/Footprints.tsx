import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Maximize2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { footprints } from "../data/footprints";
import { useLanguage } from "../hooks/useLanguage";

export default function Footprints() {
  const { language } = useLanguage();
  const galleryRef = useRef<HTMLDivElement>(null);
  const [emblaRef, api] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [position, setPosition] = useState({
    index: 0,
    prev: false,
    next: true,
  });
  const update = useCallback(() => {
    if (api)
      setPosition({
        index: api.selectedScrollSnap(),
        prev: api.canScrollPrev(),
        next: api.canScrollNext(),
      });
  }, [api]);
  useEffect(() => {
    if (!api) return;
    update();
    api.on("select", update).on("reInit", update);
    return () => {
      api.off("select", update).off("reInit", update);
    };
  }, [api, update]);
  const zh = language === "zh";
  useEffect(() => {
    if (!galleryRef.current || !api) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a.photo-frame",
      pswpModule: () => import("photoswipe"),
      mainClass: "footprints-lightbox",
      bgOpacity: 0.96,
      paddingFn: (viewport) => ({
        top: 60,
        bottom: 90,
        left: viewport.x < 700 ? 12 : 70,
        right: viewport.x < 700 ? 12 : 70,
      }),
      closeTitle: zh ? "关闭（Esc）" : "Close (Esc)",
      zoomTitle: zh ? "放大 / 缩小" : "Zoom in / out",
      arrowPrevTitle: zh ? "上一张照片" : "Previous photo",
      arrowNextTitle: zh ? "下一张照片" : "Next photo",
      errorMsg: zh
        ? "照片暂时无法加载，请关闭后重试。"
        : "The photo could not be loaded. Please close and try again.",
      indexIndicatorSep: " / ",
    });
    // Embla suppresses clicks after a drag; don't interpret them as photo opens.
    lightbox.addFilter("clickedIndex", (index, event) =>
      event.defaultPrevented ? -1 : index,
    );
    lightbox.on("beforeOpen", () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const options = lightbox.pswp?.options;
      if (options) {
        options.showAnimationDuration = reduced ? 0 : 280;
        options.hideAnimationDuration = reduced ? 0 : 220;
        options.zoomAnimationDuration = reduced ? 0 : 250;
      }
    });
    lightbox.on("uiRegister", () => {
      lightbox.pswp?.ui?.registerElement({
        name: "photo-caption",
        appendTo: "root",
        onInit: (element, pswp) => {
          element.setAttribute("aria-live", "polite");
          element.setAttribute("aria-atomic", "true");
          const updateCaption = () => {
            const photo = footprints[pswp.currIndex];
            element.textContent = photo
              ? `${photo.title[language]} · ${photo.date}\n${photo.description[language]}`
              : "";
          };
          pswp.on("change", updateCaption);
          updateCaption();
        },
      });
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, [api, language, zh]);
  return (
    <section id="footprints" className="life-section">
      <div className="page-shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">02 / BEYOND THE SCREEN</p>
            <h2>
              {zh ? (
                <>
                  屏幕之外，
                  <br />
                  <span className="serif-accent">也在探索。</span>
                </>
              ) : (
                <>
                  A life beyond
                  <br />
                  <span className="serif-accent">the screen.</span>
                </>
              )}
            </h2>
          </div>
          <div className="life-intro">
            <p>
              {zh
                ? "跆拳道、网球、游泳，以及下一次出发。"
                : "Taekwondo, tennis, swimming. And the next adventure."}
            </p>
            <p className="muted">
              {zh
                ? "有些灵感，来自合上电脑之后。"
                : "Some ideas begin when the laptop closes."}
            </p>
            <div className="life-tags">
              <span>{zh ? "运动" : "MOVEMENT"}</span>
              <span>{zh ? "旅行" : "PLACES"}</span>
              <span>{zh ? "日常" : "EVERYDAY"}</span>
            </div>
          </div>
        </div>
        <div
          className="photo-viewport"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={zh ? "旅行与生活照片" : "Travel and life photographs"}
        >
          <div className="photo-track" ref={galleryRef}>
            {footprints.map((photo, index) => (
              <figure
                className="photo-slide"
                key={photo.imageUrl}
                role="group"
                aria-label={`${index + 1} / ${footprints.length}`}
              >
                <a
                  className="photo-frame"
                  href={photo.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-pswp-width={photo.width}
                  data-pswp-height={photo.height}
                  data-cropped="true"
                  aria-label={
                    zh
                      ? `全屏查看：${photo.title.zh}`
                      : `View full size: ${photo.title.en}`
                  }
                >
                  <img
                    src={photo.imageUrl}
                    alt={`${photo.title[language]} — ${photo.description[language]}`}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="photo-expand" aria-hidden="true">
                    <Maximize2 size={16} />
                  </span>
                </a>
                <figcaption>
                  <span className="photo-date">{photo.date}</span>
                  <h3>{photo.title[language]}</h3>
                  <p>
                    <MapPin size={12} />
                    {photo.location[language]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="photo-controls">
          <span className="eyebrow" aria-live="polite">
            {String(position.index + 1).padStart(2, "0")}{" "}
            <span className="muted">
              /{" "}
              {String(
                api?.scrollSnapList().length ?? footprints.length,
              ).padStart(2, "0")}
            </span>
          </span>
          <span className="photo-drag-note">
            {zh
              ? "慢慢走，慢慢看。点击照片放大。"
              : "TAKE YOUR TIME. CLICK A PHOTO TO EXPLORE."}
          </span>
          <div>
            <button
              className="circle-button"
              onClick={() => api?.scrollPrev()}
              disabled={!position.prev}
              aria-label={zh ? "上一组照片" : "Previous photos"}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              className="circle-button"
              onClick={() => api?.scrollNext()}
              disabled={!position.next}
              aria-label={zh ? "下一组照片" : "Next photos"}
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
