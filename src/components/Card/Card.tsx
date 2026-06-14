import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
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
        <Image
          src="/project-placeholder.svg"
          alt="Project preview"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3 className="card-title">{title}</h3>

      <div className="card-buttons">
        <a
          href={github || undefined}
          className="card-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> Code
        </a>
        <a
          href={demo || undefined}
          className="card-btn card-btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink /> Live View
        </a>
      </div>
    </article>
  );
}
