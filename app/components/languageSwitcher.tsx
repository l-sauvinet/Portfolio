'use client';

import { useLanguage } from '../../context/languageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  const flagSrc = language === 'fr' ? '/fr.svg' : '/en.svg';
  const altText = language === 'fr' ? 'Français' : 'English';

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem'
      }}
      aria-label="Switch Language"
    >
      <img
        src={flagSrc}
        alt={altText}
        width={32}
        height={32}
        style={{ borderRadius: '0px', boxShadow: '0 0 4px rgba(0,0,0,0.2)' }}
      />
    </button>
  );
}
