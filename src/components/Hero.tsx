import { ArrowDown, ArrowUpRight, Code2, Compass, Waves } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return (
    <section id="about" className="hero page-shell">
      <div className="hero-kicker"><span><i className="status-dot" />{zh ? "以恒的探索手记" : "AARON’S FIELD NOTES"}</span><span>CREATING · PLAYING · EXPLORING</span></div>
      <div className="hero-heading">
        <h1>{zh ? "保持好奇，" : "Stay curious."}<br /><span>{zh ? "去创造。" : "Make things."}</span></h1>
        <div className="hero-intro"><span className="intro-symbol" aria-hidden="true">✳</span><p>{zh ? "嗨，我是以恒。" : "Hey, I’m Aaron."}<br />{zh ? "写点代码，打会儿球，" : "A little coding. A little tennis."}<br />{zh ? "把世界变成我的游乐场。" : "A whole world to explore."}</p><a className="text-link" href="#works">{zh ? "探索我的作品" : "Explore my work"}<ArrowUpRight size={18} /></a></div>
      </div>
      <div className="hero-landscape">
        <img data-parallax="0.13" className="landscape-image" src="/images/footprints/switzerland_jungfrau.webp" alt={zh ? "以恒在瑞士少女峰的旅行照片" : "Aaron exploring Jungfrau in the Swiss Alps"} fetchPriority="high" />
        <div className="landscape-shade" />
        <div className="landscape-top"><span><Compass size={17} /> THE WORLD IS MY PLAYGROUND</span><span>46°32′ N / 7°57′ E</span></div>
        <div className="landscape-bottom"><div><span className="eyebrow">A MOMENT FROM MY JOURNAL</span><p>{zh ? "下一站，未知。" : "Next stop: somewhere new."}</p><span>{zh ? "瑞士 · 少女峰" : "JUNGFRAU · SWITZERLAND"}</span></div><a className="round-link" href="#footprints" aria-label={zh ? "探索旅行相册" : "Explore travel photographs"}><ArrowDown size={26} /></a></div>
        <span className="photo-stamp" aria-hidden="true">GET OUT<br />& GET LOST<span>YYH / FIELD NOTES</span></span>
      </div>
      <div className="personal-strip"><span>YOUTHFUL. YUMMY. HAPPY.</span><div><span><Code2 size={16} />{zh ? "创造" : "MAKE"}</span><span><Waves size={16} />{zh ? "运动" : "PLAY"}</span><span><Compass size={16} />{zh ? "探索" : "EXPLORE"}</span></div><a href="#works" aria-label={zh ? "向下探索" : "Scroll to explore"}>SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
    </section>
  );
}
