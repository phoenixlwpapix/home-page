import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Globe, COBEOptions } from "cobe";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

const places = [
  {
    id: "maldives",
    zh: "马尔代夫",
    en: "Maldives",
    note: "住进海上小屋，和珊瑚礁做邻居。",
    noteEn: "Overwater days with coral reefs next door.",
    image: "/images/footprints/maldives_faarufushi.webp",
    date: "2024.01",
    lat: 5.768,
    lng: 72.966,
  },
  {
    id: "paris",
    zh: "巴黎",
    en: "Paris",
    note: "这次，铁塔不在课本里。",
    noteEn: "The Eiffel Tower, off the page.",
    image: "/images/footprints/paris_eiffel_tower.webp",
    date: "2025.08",
    lat: 48.86,
    lng: 2.29,
  },
  {
    id: "jungfrau",
    zh: "少女峰",
    en: "Jungfrau",
    note: "在雪山上，跟世界打个招呼。",
    noteEn: "Saying hi from the snowy peaks.",
    image: "/images/footprints/switzerland_jungfrau.webp",
    date: "2025.08",
    lat: 46.55,
    lng: 7.98,
  },
  {
    id: "bali",
    zh: "巴厘岛",
    en: "Bali",
    note: "海风、阳光，还有下一次出发。",
    noteEn: "Sea breeze and sunshine.",
    image: "/images/footprints/bali_ayana.webp",
    date: "2024.07",
    lat: -8.79,
    lng: 115.14,
  },
];
type MarkerLabelStyle = CSSProperties & { positionAnchor: string };

const markerLabelStyle = (id: string): MarkerLabelStyle => ({
  positionAnchor: `--cobe-${id}`,
  opacity: `var(--cobe-visible-${id}, 0)`,
});

const phiFor = (lng: number) => Math.PI * 1.5 - (lng * Math.PI) / 180;
const globePalette = (
  dark: boolean,
): Pick<COBEOptions, "dark" | "mapBrightness" | "baseColor" | "glowColor"> => ({
  dark: dark ? 1 : 0,
  mapBrightness: dark ? 6 : 3,
  baseColor: dark ? [0.15, 0.42, 0.63] : [0.34, 0.68, 0.86],
  glowColor: dark ? [0.03, 0.09, 0.17] : [0.87, 0.96, 1],
});

export default function TravelGlobe() {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const zh = language === "zh";
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const globe = useRef<Globe | null>(null);
  const theme = useRef(isDark);
  const wakeGlobe = useRef<() => void>(() => {});
  const motion = useRef({
    phi: phiFor(72.966),
    target: phiFor(72.966),
    dragging: false,
    x: 0,
    paused: false,
  });
  const place = places[selected] ?? places[0]!;
  useEffect(() => {
    theme.current = isDark;
    globe.current?.update(globePalette(isDark));
    wakeGlobe.current();
  }, [isDark]);
  useEffect(() => {
    motion.current.paused = paused;
    wakeGlobe.current();
  }, [paused]);
  useEffect(() => {
    const next = places[selected];
    if (next) {
      motion.current.target = phiFor(next.lng);
      wakeGlobe.current();
    }
  }, [selected]);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const interactionRoot = element.parentElement;
    let disposed = false;
    let frame = 0;
    let visible = true;
    let lastTime = 0;
    let warmupUntil = 0;
    let observer: ResizeObserver | undefined;
    let intersection: IntersectionObserver | undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReady(false);
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const render = (time: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden || !globe.current) return;
      const state = motion.current;
      const dt = Math.min((time - lastTime) / 16.67 || 1, 3);
      lastTime = time;
      let distance = state.target - state.phi;
      distance = Math.atan2(Math.sin(distance), Math.cos(distance));
      if (!state.dragging) {
        if (Math.abs(distance) > 0.002)
          state.phi += reduced.matches
            ? distance
            : distance * Math.min(0.09 * dt, 1);
        else if (!state.paused && !reduced.matches) {
          state.phi += 0.0018 * dt;
          state.target = state.phi;
        }
      }
      globe.current.update({ phi: state.phi });
      if (
        (!reduced.matches && !state.paused) ||
        Math.abs(distance) > 0.002 ||
        time < warmupUntil
      )
        frame = requestAnimationFrame(render);
    };
    const start = () => {
      if (!frame && visible && !document.hidden && globe.current) {
        lastTime = performance.now();
        frame = requestAnimationFrame(render);
      }
    };
    const visibility = () => (document.hidden ? stop() : start());
    wakeGlobe.current = start;
    const wake = () => start();
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", wake);
    element.addEventListener("pointermove", wake);
    // External controls also wake a static globe when reduced motion is enabled.
    interactionRoot?.addEventListener("click", wake);
    void import("cobe")
      .then(({ default: createGlobe }) => {
        if (disposed) return;
        const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
        const size = element.clientWidth;
        try {
          if (!element.getContext("webgl2") && !element.getContext("webgl"))
            return;
          globe.current = createGlobe(element, {
            width: size,
            height: size,
            devicePixelRatio: ratio,
            phi: motion.current.phi,
            theta: 0.25,
            ...globePalette(theme.current),
            diffuse: 1.6,
            mapSamples: 16000,
            markerColor: [1, 0.69, 0.24],
            markers: places.map((p) => ({
              location: [p.lat, p.lng],
              size: 0.065,
              id: p.id,
            })),
          });
          setReady(true);
          warmupUntil = performance.now() + 800;
          observer = new ResizeObserver(() => {
            const width = element.clientWidth;
            globe.current?.update({
              width,
              height: width,
            });
          });
          observer.observe(element);
          intersection = new IntersectionObserver(([entry]) => {
            visible = entry?.isIntersecting ?? false;
            if (visible) start();
            else stop();
          });
          intersection.observe(element);
          start();
        } catch {
          setReady(false);
        }
      })
      .catch(() => {
        /* The photo postcards remain usable without WebGL. */
      });
    return () => {
      disposed = true;
      wakeGlobe.current = () => {};
      stop();
      observer?.disconnect();
      intersection?.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", wake);
      element.removeEventListener("pointermove", wake);
      interactionRoot?.removeEventListener("click", wake);
      globe.current?.destroy();
      globe.current = null;
    };
  }, []);
  // Render a selected location even when automatic rotation is disabled.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motion.current.phi = phiFor(place.lng);
      globe.current?.update({ phi: motion.current.phi });
    }
  }, [place]);

  return (
    <div className="world-board">
      <div className="world-heading">
        <span>
          <Globe2 size={17} />
          {zh ? "我的世界地图" : "MY LITTLE WORLD"}
        </span>
        <span className="hand-note">{zh ? "真的去过！" : "Been there!"}</span>
      </div>
      <div className="globe-stage">
        {!ready && (
          <div className="globe-fallback" aria-hidden="true">
            <Globe2 strokeWidth={0.65} />
          </div>
        )}
        <div className="globe-canvas-wrap">
          <canvas
            ref={canvas}
            className={ready ? "travel-globe is-ready" : "travel-globe"}
            aria-label={
              zh
                ? "可拖动的旅行地球，下方按钮可选择地点"
                : "Draggable travel globe. Select a place using the buttons below."
            }
            onPointerDown={(event) => {
              motion.current.dragging = true;
              motion.current.x = event.clientX;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (motion.current.dragging) {
                motion.current.phi += (event.clientX - motion.current.x) / 180;
                motion.current.target = motion.current.phi;
                motion.current.x = event.clientX;
                globe.current?.update({ phi: motion.current.phi });
              }
            }}
            onPointerUp={() => {
              motion.current.dragging = false;
            }}
            onPointerCancel={() => {
              motion.current.dragging = false;
            }}
            onLostPointerCapture={() => {
              motion.current.dragging = false;
            }}
          />
          {places.map((p, index) => (
            <span
              key={p.id}
              className="globe-marker-label"
              data-place={p.id}
              data-selected={selected === index ? "" : undefined}
              style={markerLabelStyle(p.id)}
              aria-hidden="true"
            >
              {p.en}
            </span>
          ))}
        </div>
        <div className="globe-controls">
          <button
            onClick={() => {
              motion.current.phi -= 0.35;
              motion.current.target = motion.current.phi;
              globe.current?.update({ phi: motion.current.phi });
            }}
            aria-label={zh ? "向左转地球" : "Rotate globe left"}
          >
            <ArrowLeft size={15} />
          </button>
          <button
            onClick={() => setPaused(!paused)}
            aria-label={
              zh
                ? paused
                  ? "继续转动"
                  : "暂停转动"
                : paused
                  ? "Resume rotation"
                  : "Pause rotation"
            }
            aria-pressed={paused}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button
            onClick={() => {
              motion.current.phi += 0.35;
              motion.current.target = motion.current.phi;
              globe.current?.update({ phi: motion.current.phi });
            }}
            aria-label={zh ? "向右转地球" : "Rotate globe right"}
          >
            <ArrowRight size={15} />
          </button>
        </div>
        <span className="drag-note">
          {zh ? "← 拖一下，转个方向" : "← Give it a spin"}
        </span>
        <a
          className="travel-postcard"
          href="#footprints"
          aria-label={
            zh ? "到足迹相册看更多照片" : "See more photos in my travel album"
          }
        >
          <img
            src={place.image}
            alt={zh ? place.zh : place.en}
            width="180"
            height="210"
          />
          <span>
            <MapPin size={12} />
            {zh ? place.zh : place.en}
            <small>{place.date}</small>
          </span>
        </a>
      </div>
      <div
        className="place-buttons"
        aria-label={zh ? "选择旅行地点" : "Choose a destination"}
      >
        {places.map((p, index) => (
          <button
            key={p.en}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {zh ? p.zh : p.en}
          </button>
        ))}
      </div>
      <p className="place-note" aria-live="polite">
        {zh ? place.note : place.noteEn}
      </p>
    </div>
  );
}
