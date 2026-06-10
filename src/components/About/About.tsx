import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I аm a frontend developer based in Macedonia, recently graduated 
             Front-End Programming Academy. I specialize in building
            modern, responsive, and high-performance web and mobile applications
            using React, Next.js, and TypeScript.
          </p>
          <p>
            I care deeply about clean, maintainable code and thoughtful user
            interfaces. I enjoy turning ideas into polished, real-world products
            — from concept and design all the way to deployment. Right now, I аm
            looking for my first professional role where I can grow, contribute,
            and keep learning every day.
          </p>
        </div>

        <div className="about-image">
          <div className="about-image-placeholder">KL</div>
        </div>
      </div>
    </section>
  );
}
