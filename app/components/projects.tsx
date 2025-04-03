"use client";
import React from "react";
import { useLanguage } from '../../context/languageContext';
import { translations } from '../../locales/translation';

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language];
  return (
    <section className="projects">
        <div className="projects-content">
            <h2>{t.project}</h2>
            <div className="projects-list">
                <div className="projects-card hover-box">
                    <h3>Hirify</h3>
                    <img className="background-card" src="/hirify.png"/>
                    <div className="text-hover"><span>{t.detail}</span><img src="/detail-icon.svg"/></div>
                </div>
                <div className="projects-card hover-box">
                    <h3>PassGuard</h3>
                    <img className="background-card" src="/PassGuard.png"/>
                    <div className="text-hover"><span>{t.detail}</span><img src="/detail-icon.svg"/></div>
                </div>
                <div className="projects-card hover-box">
                    <h3>Assistium</h3>
                    <img className="background-card" src="/assistium.png"/>
                    <div className="text-hover"><span>{t.detail}</span><img src="/detail-icon.svg"/></div>
                </div>
                <div className="projects-card hover-box">
                    <h3>TodoList</h3>
                    <img className="background-card" src="/todoList.png"/>
                    <div className="text-hover"><span>{t.detail}</span><img src="/detail-icon.svg"/></div>
                </div>
            </div>
        </div>
        
    </section>
  );
}