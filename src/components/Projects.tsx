import { projects } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="02" label="Selected work" />
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display projects__title">
            Things I've built, run and written.
          </h2>
        </Reveal>

        <ol className="projects">
          {projects.map((p, i) => {
            const Tag = p.href ? "a" : "div";
            return (
              <li key={p.title}>
                <Reveal delay={i * 70}>
                  <Tag
                    className="project"
                    {...(p.href
                      ? { href: p.href, target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <span className="project__index mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="project__main">
                      <h3>{p.title}</h3>
                      <p>{p.summary}</p>
                      <ul className="tags">
                        {p.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="project__meta">
                      <span className="mono">{p.kind}</span>
                      <span className="mono project__year">{p.year}</span>
                      {p.href && (
                        <span className="project__arrow" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </div>
                  </Tag>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
