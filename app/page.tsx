"use client";
import { useState, useEffect } from "react";
import { useLanguage } from '../context/languageContext';
import { translations } from '../locales/translation';
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

function myCV() {
  window.open('/cv-lucas.pdf', '_blank');
}

function Hero({ onNext }: { onNext: () => void }) {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <div className="hero-content">
        <div className="about-section">
          <h1 className="hero-title">
            {t.introAbout} <br />
            <span className="highlight">Sauvinet Lucas</span>
          </h1>
          <h2>{t.Iam}</h2>
          <TypingEffect />
        </div>
        <div className="profil-picture">
          <img src="./lucas-picture.png" alt="lucas" />
        </div>
      </div>
      <button className="slide-button" onClick={onNext}>
        {t.about}
      </button>
    </>
  );
}

function About({ onBack }: { onBack: () => void }) {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="about-content">
      <h2>{t.about}</h2>
      <p> 
        {t.descAbout1}
        <br/><br/> 
        {t.descAbout2}
      </p>
      <div className="about-btn">
        <button className="CV-btn" onClick={myCV}>{t.CV}</button>
        <button className="slide-button" onClick={onBack}>
          {t.back}
        </button>
      </div>
    </div>
  );
}

function TypingEffect() {
  const { language } = useLanguage();

  const texts = language === 'fr'
    ? ['Développeur Web', 'Alternance', 'Passionné']
    : ['Web Developer', 'Work-Study', 'Passionate'];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    setText('');
    setCharIndex(0);
    setIndex(0);
    setIsDeleting(false);
    setIsPaused(false);
  }, [language]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < texts[index].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
        setIsPaused(false);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
        setIsPaused(false);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[index].length) {
      setIsPaused(true);
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      setIsPaused(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <h2 className="typing-effect">
      {text}
      <span className={`cursor ${isPaused ? 'blink' : 'solid'}`}>|</span>
    </h2>
  );
}
