"use client";
import React from "react";

export default function Projects() {
  return (
    <section className="projects">
        <div className="projects-content">
            <h2>My projects</h2>
            <div className="projects-list">
                <div className="projects-card hover-box">
                    <h3>Hirify</h3>
                    <img className="background-card" src="/hirify.png"/>
                    <div className="text-hover"><span>View Details</span><img src="/detail-icon.svg"/></div>
                </div>
                <div className="projects-card hover-box">
                    <h3>PassGuard</h3>
                    <img className="background-card" src="/passGuard.png"/>
                    <div className="text-hover"><span>View Details</span><img src="/detail-icon.svg"/></div>
                </div>
                <div className="projects-card hover-box">
                    <h3>Assistium</h3>
                    <img className="background-card" src="/assistium.png"/>
                    <div className="text-hover"><span>View Details</span><img src="/detail-icon.svg"/></div>
                </div>
                <div className="projects-card hover-box">
                    <h3>TodoList</h3>
                    <img className="background-card" src="/todoList.png"/>
                    <div className="text-hover"><span>View Details</span><img src="/detail-icon.svg"/></div>
                </div>
            </div>
        </div>
        
    </section>
  );
}