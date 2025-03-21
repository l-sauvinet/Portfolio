"use client";

import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <div className="logo">Sauvinet Lucas</div>
      <nav className="nav-menu">
        <a href="/" className={isActive("/") ? "active" : ""}>About Me.</a>
        <a href="/projects" className={isActive("/projects") ? "active" : ""}>Projects.</a>
        <a href="/skills" className={isActive("/skills") ? "active" : ""}>Skills.</a>
        <a href="/contact" className={isActive("/contact") ? "active" : ""}>Contact Me.</a>
      </nav>
    </header>
  );
}
