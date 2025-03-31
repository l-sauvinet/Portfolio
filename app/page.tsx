"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<"hero" | "about">("hero");
  const [transitioning, setTransitioning] = useState(false);
  const [nextSection, setNextSection] = useState<"hero" | "about" | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSwitch = (target: "hero" | "about") => {
    if (transitioning || target === currentSection) return;

    setDirection(target === "about" ? "down" : "up");
    setNextSection(target);
    setTransitioning(true);

    setTimeout(() => {
      setCurrentSection(target);
      setNextSection(null);
      setTransitioning(false);
    }, 800);
  };

  return (
    <div className="slide-container">
      {/* Active section */}
      <section
        className={`slide-section ${
          transitioning
            ? direction === "down"
              ? "slide-out-up"
              : "slide-out-down"
            : "slide-in"
        }`}
      >
        {currentSection === "hero" ? (
          <Hero onNext={() => handleSwitch("about")} />
        ) : (
          <About onBack={() => handleSwitch("hero")} />
        )}
      </section>

      {/* Incoming section */}
      {transitioning && nextSection && (
        <section
          className={`slide-section ${
            direction === "down" ? "slide-enter-up" : "slide-enter-down"
          }`}
        >
          {nextSection === "hero" ? (
            <Hero onNext={() => handleSwitch("about")} />
          ) : (
            <About onBack={() => handleSwitch("hero")} />
          )}
        </section>
      )}
    </div>
  );
}

function Hero({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="hero-content">
        <div className="about-section">
          <h1 className="hero-title">
            Welcome, my name is <br />
            <span className="highlight">Sauvinet Lucas</span>
          </h1>
          <h2>I am</h2>
          <TypingEffect />
        </div>
        <div className="profil-picture">
          <img src="./lucas-picture.png" alt="lucas" />
        </div>
      </div>
      <button className="slide-button" onClick={onNext}>
        About me
      </button>
    </>
  );
}

function About({ onBack }: { onBack: () => void }) {
  return (
    <div className="about-content">
      <h2>About me</h2>
      <p>
        I'm a passionate web developer currently in a work-study program.
        I love building modern, accessible, and high-performing interfaces.
      </p>
      <button className="slide-button" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

function TypingEffect() {
  const texts: string[] = ["Web Developer", "Work-Study", "Passionate"];
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
    <h2 className="typing-effect">
      {text}
      <span className={`cursor ${isPaused ? "blink" : "solid"}`}>|</span>
    </h2>
  );
}
