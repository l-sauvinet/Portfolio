"use client";

import React from "react";
import { useLanguage } from '../../context/languageContext';
import { translations } from '../../locales/translation';

export default function Skills() {
    const { language } = useLanguage();
    const t = translations[language];
    const skills = [
        { titre: "JavaScript", description: t.jsDesc, image: "../JavaScript-logo.png" },
        { titre: "HTML", description: t.htmlDesc, image: "../html.png" },
        { titre: "CSS", description: t.cssDesc, image: "../css.png" },
        { titre: "PHP", description: t.phpDesc, image: "../php.png" },
        { titre: "DOCKER", description: t.dockerDesc, image: "../docker.png" },
        { titre: "SQL", description: t.sqlDesc, image: "../sql.png" },
        { titre: "Symfony", description: t.symfonyDesc, image: "../symfony.png" },
        { titre: "React", description: t.reactDesc, image: "../react.png" },
        { titre: "Next.js", description: t.nextDesc, image: "../nextjs.png" },
        { titre: "TypeScript", description: t.tsDesc, image: "../typescript.png" }
      ];
    return (
        <section className="Skill-section">
            <h1 className="Skills-title">{t.skill}</h1>
            <div className="Skill-content">
                {skills.map((skill, index) => (
                    <div key={index} className="skills">
                        <img src={skill.image} alt={skill.titre} className="skill-image" />
                        <h2 className="Skill-text">{skill.titre}</h2>
                        <p className="Skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}