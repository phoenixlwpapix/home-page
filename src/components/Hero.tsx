import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { PointerEvent } from "react";
import { useLanguage } from "../hooks/useLanguage";

function RibbonMark() {
  const mark = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const box = event.currentTarget.getBoundingClientRect();
    mark.current?.style.setProperty(
      "--turn-x",
      `${(event.clientY - box.top - box.height / 2) / 70}deg`,
    );
    mark.current?.style.setProperty(
      "--turn-y",
      `${(event.clientX - box.left - box.width / 2) / 60}deg`,
    );
  };
  const reset = () => {
    mark.current?.style.setProperty("--turn-x", "0deg");
    mark.current?.style.setProperty("--turn-y", "0deg");
  };
  return (
    <div
      className="hero-art"
      onPointerMove={move}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <div className="art-orbit" />
      <span className="art-coordinate">FIG. 01 — A STUDY IN CURIOSITY</span>
      <div className="ribbon-mark" ref={mark}>
        <svg viewBox="0 0 600 540" fill="none" className="ribbon-svg">
          <defs>
            <linearGradient
              id="ribbon-paper"
              x1="100"
              y1="80"
              x2="440"
              y2="490"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#e5e0d5" />
              <stop offset=".48" stopColor="#f8f5ec" />
              <stop offset="1" stopColor="#aaa89e" />
            </linearGradient>
            <linearGradient
              id="ribbon-ink"
              x1="180"
              y1="110"
              x2="380"
              y2="450"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#585b50" />
              <stop offset=".5" stopColor="#292c25" />
              <stop offset="1" stopColor="#13160f" />
            </linearGradient>
            <linearGradient
              id="ribbon-orange"
              x1="350"
              y1="70"
              x2="450"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ed805b" />
              <stop offset=".48" stopColor="#d34b32" />
              <stop offset="1" stopColor="#a82c1b" />
            </linearGradient>
          </defs>
          <g className="ribbon ribbon-one">
            <path d="M67 146 128 112 222 243 185 291Z" fill="#a6a69a" />
            <path
              d="m67 130 61-34 100 136 46-158 62 29-72 236-78 105-60-33 77-107Z"
              fill="url(#ribbon-paper)"
            />
            <path d="m126 411 60 33 78-105-61-35Z" fill="#b7b6aa" />
            <path d="m274 74 62 29-72 236-36-107Z" fill="#dedbd0" />
          </g>
          <g className="ribbon ribbon-two">
            <path
              d="m220 197 57-39 76 100 41-128 59 31-61 190-78 126-62-35 79-123Z"
              fill="url(#ribbon-ink)"
            />
            <path d="m252 442 62 35 78-126-61-32Z" fill="#20241b" />
            <path d="m394 130 59 31-61 190-39-93Z" fill="#44483c" />
          </g>
          <g className="ribbon ribbon-three">
            <path
              d="m411 85 58 31-33 120 55 29 34-120 58 31-93 328-59-31 38-134-55-29-38 134-58-31Z"
              fill="url(#ribbon-orange)"
            />
            <path d="m318 413 58 31 38-134-29-57Z" fill="#a93523" />
            <path d="m431 473 59 31 93-328-30 9Z" fill="#be4029" />
            <path d="m436 236 55 29-22 74-55-29Z" fill="#f08b66" />
          </g>
        </svg>
      </div>
      <div className="art-caption">
        <span>
          THREE LETTERS.
          <br />
          ENDLESS POSSIBILITIES.
        </span>
        <span className="art-cross">+</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return (
    <section id="about" className="hero page-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-enter">
            <span className="status-dot" />{" "}
            {zh ? "以恒的个人创作空间" : "THE PERSONAL STUDIO OF YYH"}
          </p>
          <h1 className="hero-title">
            <span className="title-mask">
              <span>{zh ? "保持好奇，" : "Stay curious."}</span>
            </span>
            <span className="title-mask">
              <span>{zh ? "把想法" : "Make things"}</span>
            </span>
            <span className="title-mask">
              <span className="serif-accent">
                {zh ? "变成作品。" : "that matter."}
              </span>
            </span>
          </h1>
          <p className="hero-description hero-enter">
            {zh
              ? "我是以恒。探索代码、语言与生活，"
              : "I’m Aaron. Exploring code, languages and life."}
            <br />
            {zh
              ? "做一些有用，也有趣的东西。"
              : "Making useful things, with a little delight."}
          </p>
          <div className="hero-actions hero-enter">
            <a className="button-primary" href="#works">
              {zh ? "探索作品" : "Explore my work"}
              <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#footprints">
              {zh ? "屏幕之外" : "Beyond the screen"}
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <RibbonMark />
      </div>
      <div className="hero-bottom">
        <span className="brand-words">
          <b>Y</b>outhful, <b>Y</b>ummy, <b>H</b>appy.
        </span>
        <span className="hero-bottom-note">
          {zh
            ? "在创造中学习，在生活里发现。"
            : "LEARNING BY MAKING. LIVING WITH CURIOSITY."}
        </span>
        <a
          href="#works"
          aria-label={zh ? "向下探索作品" : "Scroll to selected work"}
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
