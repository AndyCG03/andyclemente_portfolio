"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1326]/90 backdrop-blur-xl shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image 
            src="/icono.png"
            alt="Andy.dev"
            width={28}
            height={28}
            className="transition-transform duration-300 group-hover:scale-110"
            style={{ width: "auto", height: "auto" }}
          />
          <span className="font-bold text-sm text-[#dae2fd] tracking-wide hidden sm:block uppercase">
            Andy Clemente
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-[#bcc7de] hover:text-[#4be277] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Lang toggle + Contact */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171f33]/50 font-mono text-xs text-[#bcc7de] hover:text-[#4be277] transition-all"
          >
            <span className={lang === "en" ? "text-[#4be277]" : ""}>EN</span>
            <span className="text-[#3d4a3d]">/</span>
            <span className={lang === "es" ? "text-[#4be277]" : ""}>ES</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-[#0b1326] bg-[#4be277] hover:bg-[#3dd168] transition-all duration-200"
          >
            {t.nav.contact}
          </a>

          {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1326]/95 backdrop-blur-xl border-t border-[#3d4a3d]/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#bcc7de] hover:text-[#4be277] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm text-[#0b1326] bg-[#4be277] mt-2"
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}
