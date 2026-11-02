import { about } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading index="01" label="About" />
        </Reveal>

        <div className="about">
          <Reveal className="about__lead">
            <h2 className="display">{about.title}</h2>
          </Reveal>

          <div className="about__body">
            <Reveal delay={80}>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={140}>
              <dl className="facts">
                {about.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="mono">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <Reveal delay={60}>
          <div className="skills">
            {about.skills.map((g) => (
              <div className="skills__group" key={g.group}>
                <h3 className="mono">{g.group}</h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
