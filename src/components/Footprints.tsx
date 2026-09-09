import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { footprints } from "../data/footprints";
import { useLanguage } from "../hooks/useLanguage";

export default function Footprints() {
  const { language } = useLanguage();
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
          <div className="photo-track">
            {footprints.map((photo, index) => (
              <figure
                className="photo-slide"
                key={photo.imageUrl}
                role="group"
                aria-label={`${index + 1} / ${footprints.length}`}
              >
                <div className="photo-frame">
                  <img
                    src={photo.imageUrl}
                    alt={`${photo.title[language]} — ${photo.description[language]}`}
                    width="600"
                    height="800"
                    loading="lazy"
                  />
                </div>
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
            {zh ? "慢慢走，慢慢看。" : "TAKE YOUR TIME. LOOK AROUND."}
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
