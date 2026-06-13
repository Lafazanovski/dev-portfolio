"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/mlgkozbz";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">
            Have a project in mind, a question, or just want to say hi? Feel
            free to reach out — I am always open to new opportunities and
            collaborations.
          </p>

          <ul className="contact-details">
            <li>
              <FiMail />
              <a href="mailto:your.email@example.com">
                lafazanovski.kristijan1993@gmail.com
              </a>
            </li>
            <li>
              <FiMapPin /> Skopje, Macedonia
            </li>
          </ul>

          <div className="contact-socials">
            <a
              href="https://github.com/Lafazanovski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kristijan-lafazanovski-b89814286/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-message form-success">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-message form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}