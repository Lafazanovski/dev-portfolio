import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I am </p>
        <h1 className="hero-name">Kristijan Lafazanovski</h1>
        <h2 className="hero-role">Frontend Developer</h2>
        <p className="hero-tagline">
          I build fast, modern, and professionally designed web and mobile
          applications for any use case.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
