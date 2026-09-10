import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { language } = useLanguage();
  const zh = language === "zh";
  return (
    <footer className="site-footer page-shell">
      <div className="footer-top reveal">
        <div>
          <p className="eyebrow">
            {zh ? "你已经逛到底啦" : "YOU MADE IT TO THE BOTTOM"}
          </p>
          <h2>
            {zh ? (
              <>
                好啦，我去玩了。
                <br />
                下次见<span className="accent">！</span>
              </>
            ) : (
              <>
                That's me for now.
                <br />
                See you around<span className="accent">!</span>
              </>
            )}
          </h2>
        </div>
        <a className="contact-link" href="mailto:phoenixlwp@gmail.com">
          {zh ? "写封邮件" : "Say hello"}
          <ArrowUpRight size={30} />
        </a>
      </div>
      <div className="footer-bottom">
        <a className="wordmark" href="#about">
          STUDIO YYH
        </a>
        <p>
          © 2025-2026 STUDIO YYH ·{" "}
          {zh ? "Youthful · Yummy · Happy" : "Made with curiosity."}
        </p>
        <div>
          <a
            href="https://github.com/phoenixlwpapix"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://blog.studioyyh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {zh ? "博客" : "Journal"}
            <ArrowUpRight size={13} />
          </a>
          <a
            className="back-top"
            href="#about"
            aria-label={zh ? "返回顶部" : "Back to top"}
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
