"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "bg-[#0b1326]/80 backdrop-blur-xl shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/Icono.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-[#bcc7de] hover:text-slate-100 transition-colors pb-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-sm bg-[#171f33] ghost-border font-mono text-xs text-[#bcc7de] hover:text-[#4be277] hover:border-[#4be277]/30 transition-all"
          >
            <span className={lang === "en" ? "text-[#4be277]" : ""}>EN</span>
            <span className="text-[#3d4a3d]">/</span>
            <span className={lang === "es" ? "text-[#4be277]" : ""}>ES</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-gradient-to-br from-[#4be277] to-[#22c55e] text-[#002109] px-5 py-2 font-bold rounded-md hover:-translate-y-0.5 transition-transform"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#bcc7de]"
          >
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0b1326]/95 backdrop-blur-xl border-t border-[#3d4a3d]/20 px-6 py-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#bcc7de] hover:text-[#4be277] transition-colors py-1 font-mono"
            >
              <span className="text-[#4be277] mr-2">&gt;_</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2 rounded-sm font-bold text-sm text-[#002109] mt-2 bg-gradient-to-br from-[#4be277] to-[#22c55e]"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}