'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/languageContext'; // ← ⚠️ adapte ce chemin si besoin
import { translations } from '../../locales/translation';       // ← idem
import LanguageSwitcher from '../components/languageSwitcher';

export default function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="logo text-xl font-bold">Sauvinet Lucas</div>
      <nav className="nav-menu flex gap-6">
        <a href="/" className={isActive('/') ? 'font-bold underline' : ''}>{t.aboutHome}</a>
        <a href="/projects" className={isActive('/projects') ? 'font-bold underline' : ''}>{t.projects}</a>
        <a href="/skills" className={isActive('/skills') ? 'font-bold underline' : ''}>{t.skills}</a>
        <a href="/contact" className={isActive('/contact') ? 'font-bold underline' : ''}>{t.contact}</a>
        <LanguageSwitcher />
      
      </nav>
    </header>
  );
}
