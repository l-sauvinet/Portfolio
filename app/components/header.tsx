'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/languageContext';
import { translations } from '../../locales/translation';
import LanguageSwitcher from '../components/languageSwitcher';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language];

  const isActive = (path: string) => pathname === path;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="custom-header">
      <div className="logo">Sauvinet Lucas</div>

      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/" className={isActive('/') ? 'active' : ''}>{t.aboutHome}</a>
        <a href="/projects" className={isActive('/projects') ? 'active' : ''}>{t.projects}</a>
        <a href="/skills" className={isActive('/skills') ? 'active' : ''}>{t.skills}</a>
        <a href="/contact" className={isActive('/contact') ? 'active' : ''}>{t.contact}</a>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
