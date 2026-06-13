import Card from "@/components/Card/Card";
import "./Projects.css";

const projects = [
  { title: "Project 1", github: "", demo: "" },
  { title: "Project 2", github: "", demo: "" },
  { title: "Project 3", github: "", demo: "" },
  { title: "Project 4", github: "", demo: "" },
  { title: "Project 5", github: "", demo: "" },
  { title: "Project 6", github: "", demo: "" },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}
