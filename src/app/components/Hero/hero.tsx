import "./hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Здраво, јас сум</p>
        <h1 className="hero-name">Кристијан Лафазановски</h1>
        <h2 className="hero-role">Frontend Developer</h2>
        <p className="hero-tagline">
          Градам модерни и брзи веб-апликации со React, Next.js и TypeScript.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Види проекти
          </a>
          <a href="#contact" className="btn btn-secondary">
            Контакт
          </a>
        </div>
      </div>
    </section>
  );
}
