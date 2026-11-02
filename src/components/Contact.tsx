import { contact, site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <SectionHeading index="03" label="Contact" />
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display contact__title">{contact.title}</h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={100}>
            <p className="contact__blurb">{contact.blurb}</p>
          </Reveal>

          <Reveal delay={160}>
            <a className="contact__mail" href={`mailto:${site.email}`}>
              <span className="mono">Email</span>
              <span className="contact__address">{site.email}</span>
              <span className="contact__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <ul className="contact__links">
              {contact.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
