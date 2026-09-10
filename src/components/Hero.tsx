import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Waves,
  MoveUpRight,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import TravelGlobe from "./TravelGlobe";

export default function Hero() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return (
    <section id="about" className="hero page-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hello-note">
            {zh ? "欢迎来我这儿玩 :)" : "Hey, come on in :)"}
          </span>
          <h1 className="kid-title">
            <span>{zh ? "嗨，我是" : "Hey, I'm"}</span>
            <strong>
              {zh ? "以恒" : "Aaron"}
              <span className="name-dot">.</span>
            </strong>
            <span className="name-scribble">
              YYH
              <svg viewBox="0 0 150 18" aria-hidden="true">
                <path
                  d="M4 12Q65 0 145 7M20 17Q70 8 132 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="kid-intro">
            {zh ? (
              <>
                写点代码，打会儿球。
                <br />
                有空就去看看世界。
              </>
            ) : (
              <>
                A little coding. A little tennis.
                <br />A lot of places left to explore.
              </>
            )}
          </p>
          <div
            className="hobby-scribbles"
            aria-label={zh ? "我的爱好" : "My hobbies"}
          >
            <span>
              <Code2 size={20} />
              {zh ? "爱捣鼓" : "MAKER"}
            </span>
            <span>
              <svg
                viewBox="0 0 26 26"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="13" cy="13" r="10" />
                <path d="M7 5c10 5 10 11 12 16M3 14c9-2 13-5 16-10" />
              </svg>
              {zh ? "网球" : "TENNIS"}
            </span>
            <span>
              <Waves size={21} />
              {zh ? "游泳" : "SWIMMING"}
            </span>
            <span className="belt-hobby">
              <span aria-hidden="true">🥋</span>
              {zh ? "跆拳道" : "TAEKWONDO"}
            </span>
          </div>
          <div className="hero-actions">
            <a className="button-primary" href="#works">
              {zh ? "看看我做了什么" : "See what I'm making"}
              <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#footprints">
              {zh ? "翻翻相册" : "My photo album"}
              <ArrowDown size={16} />
            </a>
          </div>
          <p className="hero-aside">
            <MoveUpRight size={22} />
            {zh
              ? "右边是我去过的地方，可以转哦。"
              : "That's my travel globe. Try spinning it."}
          </p>
        </div>
        <TravelGlobe />
      </div>
      <div className="personal-strip">
        <span>
          <b>Y</b>outhful <b>Y</b>ummy <b>H</b>appy
        </span>
        <span>
          {zh
            ? "这个小角落，装着我的作品和日常。"
            : "A corner of the internet for my projects & everyday adventures."}
        </span>
        <span className="strip-star" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
