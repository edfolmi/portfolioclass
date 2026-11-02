import { hero, site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow hero__status">
          <span className="pulse" aria-hidden="true" />
          {site.availability}
        </p>

        <h1 className="hero__title">
          {hero.headline.map((line, i) => (
            <span className="hero__line" key={line}>
              <span style={{ animationDelay: `${120 + i * 110}ms` }}>
                {i === hero.headline.length - 1 ? (
                  <em>{line}</em>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero__foot">
          <p className="hero__intro">{hero.intro}</p>
          <div className="hero__actions">
            <a className="btn" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <span aria-hidden="true">↓</span>
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <ul className="hero__stats">
          {hero.stats.map((s) => (
            <li key={s.value}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
