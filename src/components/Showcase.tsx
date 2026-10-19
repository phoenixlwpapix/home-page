import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import imagePreviews from "../data/image-previews.json";

const selected = [
  {
    name: "Chat-O-Matic",
    image: imagePreviews["/images/projects/chat-o-matic.jpg"],
    className: "reveal featured-project project-chat",
    category: ["我的心头好 / AI 对话", "PERSONAL FAVORITE / AI CHAT"],
    headline: [
      "有问题，有脑洞，找聊聊机聊聊。",
      "For every question and every little what-if.",
    ],
  },
  {
    name: "Dolphin English",
    image: imagePreviews["/images/projects/dolphin-mascot.png"],
    className: "reveal featured-project project-dolphin",
    category: ["英语学习 / AI 精读", "ENGLISH / AI READING"],
    headline: [
      "和小海豚一起，把英语读得更明白。",
      "Read, discover, and learn with a little dolphin.",
    ],
  },
  {
    name: "Voce",
    image: imagePreviews["/images/projects/voce-authenticated.png"],
    className: "reveal featured-project project-voce",
    category: ["语言学习 / 词汇笔记", "LANGUAGE / VOCABULARY"],
    headline: [
      "遇到不认识的词？先放进我的单词本。",
      "A little home for every new word.",
    ],
  },
  {
    name: "ConjuGO",
    image: imagePreviews["/images/projects/conjugo.jpg"],
    className: "reveal featured-project project-conjugo",
    category: ["语言学习 / 交互练习", "LANGUAGE / PRACTICE"],
    headline: [
      "动词变来变去，练练就不怕了。",
      "Make conjugation second nature.",
    ],
  },

];

export default function Showcase() {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const zh = language === "zh";
  const remaining = projects.filter(
    (project) => !selected.some((item) => item.name === project.title.en),
  );
  const visible = expanded ? remaining : remaining.slice(0, 3);
  return (
    <section id="works" className="work-section page-shell">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">{zh ? "01 / 从好奇心开始" : "01 / SELECTED EXPLORATIONS"}</p>
          <h2>{zh ? "想到了，就做出来。" : "Ideas, made real."}</h2>
        </div>
        <p className="section-description">
          {zh ? (
            <>
              学英语、记单词、偷个小懒……
              <br />
              遇到问题，就试着做个工具。
            </>
          ) : (
            <>
              Words, languages, everyday puzzles.
              <br />A few tools I made along the way.
            </>
          )}
        </p>
      </div>
      <div className="featured-grid" tabIndex={0} role="region" aria-label={zh ? "精选作品，可横向滚动" : "Selected projects, scroll horizontally"}>
        {selected.map((item, index) => {
          const project = projects.find(
            (project) => project.title.en === item.name,
          );
          if (!project) return null;
          return (
            <article key={item.name} className={item.className}>
              <a
                className="project-visual"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${zh ? "打开" : "Open"} ${project.title[language]}`}
              >
                <div className="project-art-label">
                  <span>{project.title[language]}</span>
                  <span>0{index + 1} / YYH</span>
                </div>
                {item.name === "Dolphin English" ? (
                  <div className="dolphin-art">
                    <p>{zh ? <>一起读懂<br />更大的世界。</> : <>Read a little.<br />Discover a lot.</>}</p>
                    <span>READ · DISCOVER · GROW</span>
                    <img
                      src={item.image.src}
                      srcSet={item.image.srcSet}
                      sizes="(max-width: 700px) 55vw, (max-width: 1552px) 30vw, 450px"
                      alt={zh ? "海豚英语品牌吉祥物" : "Dolphin English brand mascot"}
                      loading="lazy"
                      decoding="async"
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </div>
                ) : (
                  <div className="project-browser">
                    <div className="browser-bar">
                      <i />
                      <i />
                      <i />
                      <span>{new URL(project.demoUrl).hostname}</span>
                    </div>
                    <img
                      src={item.image.src}
                      srcSet={item.image.srcSet}
                      sizes="(max-width: 700px) 75vw, (max-width: 1552px) 40vw, 620px"
                      alt={
                        zh
                          ? `${project.title.zh}实际界面`
                          : `${project.title.en} interface`
                      }
                      loading="lazy"
                      decoding="async"
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </div>
                )}
                <span className="project-open">
                  <ArrowUpRight size={23} />
                </span>
              </a>
              <div className="project-info">
                <div>
                  <p className="eyebrow">{item.category[zh ? 0 : 1]}</p>
                  <h3>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title[language]}
                      <ArrowUpRight size={20} />
                    </a>
                  </h3>
                  <p>{item.headline[zh ? 0 : 1]}</p>
                </div>
                {project.githubUrl && (
                  <a
                    className="icon-button"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title[language]} GitHub`}
                  >
                    <Github size={19} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="project-index reveal">
        <div className="index-heading">
          <h3>
            {zh ? "更多探索" : "More explorations"}
            <span> / {String(remaining.length).padStart(2, "0")}</span>
          </h3>
          <span className="eyebrow">
            {zh ? "还有这些 ↓" : "AND THERE'S MORE ↓"}
          </span>
        </div>
        <div id="project-directory">
          {visible.map((project, index) => (
            <div className="project-row" key={project.title.en}>
              <span className="row-number">
                {String(index + selected.length + 1).padStart(2, "0")}
              </span>
              <a
                className="row-main"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>{project.title[language]}</h4>
                <p>{project.description[language]}</p>
                <ArrowUpRight size={20} />
              </a>
              {project.githubUrl && (
                <a
                  className="row-github icon-button"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title[language]} GitHub`}
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
        <button
          className="directory-toggle text-link"
          aria-expanded={expanded}
          aria-controls="project-directory"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? zh
              ? "收起目录"
              : "Show less"
            : zh
              ? `展开全部 ${projects.length} 个作品`
              : `Explore all ${projects.length} projects`}
          <ArrowDown
            size={16}
            className={expanded ? "rotate-arrow" : undefined}
          />
        </button>
      </div>
    </section>
  );
}
