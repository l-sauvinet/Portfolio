"use client";
import React, { useState } from "react";
import { useLanguage } from '../../context/languageContext';
import { translations } from '../../locales/translation';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Hirify",
      date: "June 2024 - August 2024",
      context: "Development of a job platform",
      team: "In a team (3 people)",
      technologies: "React, Node.js, MongoDB",
      image: "/hirify.png",
      github: "https://github.com/yourusername/hirify",
    },
    {
      title: "PassGuard",
      date: "April 2024 - May 2024",
      context: "Development of a password manager",
      team: "Solo project",
      technologies: "JavaScript, LocalStorage",
      image: "/PassGuard.png",
      github: "https://github.com/yourusername/passguard",
    },
    {
      title: "Assistium",
      date: "March 2024 - April 2024",
      context: "Development of a support ticketing system",
      team: "In a team (4 people)",
      technologies: "PHP, MySQL",
      image: "/assistium.png",
      github: "https://github.com/yourusername/assistium",
    },
    {
      title: "TodoList",
      date: "February 2024 - March 2024",
      context: "Development of a task management app",
      team: "Solo project",
      technologies: "React, Firebase",
      image: "/todoList.png",
      github: "https://github.com/yourusername/todolist",
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedProject(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <div className="projects-content">
        <div className="projects-inner">
          <h2>{t.project}</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="projects-card hover-box"
                onClick={() => handleCardClick(index)}
              >
                <h3>{project.title}</h3>
                <img className="background-card" src={project.image} alt={project.title} />
                <div className="text-hover">
                  <span>{t.detail}</span>
                  <img src="/detail-icon.svg" alt="Detail icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject !== null && (
        <Modal
          project={projects[selectedProject]}
          onClose={handleCloseModal}
          isOpen={selectedProject !== null}
        />
      )}
    </section>
  );
}

function Modal({ project, onClose, isOpen }: { project: any; onClose: () => void; isOpen: boolean }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className={`modal-overlay ${isOpen ? 'fade-in' : 'fade-out'}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${isOpen ? 'fade-in' : 'fade-out'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        <div className="modal-details">
          <p><strong>Date:</strong> {project.date}</p>
          <p><strong>Context:</strong> {project.context}</p>
          <p><strong>Team:</strong> {project.team}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
        </div>
        <img src={project.image} alt={`${project.title} screenshot`} className="modal-image" />
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
          
        </a>
      </div>
    </div>
  );
}