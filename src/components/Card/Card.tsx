import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import "./Card.css";

interface CardProps {
  title: string;
  github: string;
  demo: string;
}

export default function Card({ title, github, demo }: CardProps) {
  return (
    <article className="card">
      <div className="card-image">
        <FiImage className="card-image-icon" />
      </div>

      <h3 className="card-title">{title}</h3>

      <div className="card-buttons">
        <a href={github || undefined} className="card-btn" target="_blank" rel="noopener noreferrer">
          <FiGithub /> Code
        </a>
        <a href={demo || undefined} className="card-btn card-btn-outline" target="_blank" rel="noopener noreferrer">
          <FiExternalLink /> Live View
        </a>
      </div>
    </article>
  );
}
