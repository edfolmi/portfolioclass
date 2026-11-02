import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
