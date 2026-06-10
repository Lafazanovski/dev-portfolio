import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiFirebase,
} from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
