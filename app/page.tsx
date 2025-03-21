"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // Typing effect
  const texts: string[] = ["Développeur Web", "Alternant", "Passionné"];
  const [index, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>(""); 
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const typingSpeed: number = 100;
  const deletingSpeed: number = 50;
  const pauseBetweenWords: number = 1500;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < texts[index].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
        setIsPaused(false);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
        setIsPaused(false);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[index].length) {
      setIsPaused(true);
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsPaused(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="about-section">
          <h1 className="hero-title">
            Bienvenue, je m'appelle <br/><span className="highlight">Sauvinet Lucas</span>
          </h1>
          <h2>Je suis</h2>
          <h2 className="typing-effect">
            {text}
            <span className={`cursor ${isPaused ? "blink" : "solid"}`}>|</span>
          </h2>
        </div>
        <div className="profil-picture">
          <img src="./lucas-picture.png" alt="lucas"/>
        </div>
      </div>
    </section>
  );
}
