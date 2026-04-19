"use client";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#060e20] border-t border-[#3d4a3d]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 32 32" 
            fill="none" 
            className="opacity-60"
          >
            <rect x="2" y="2" width="28" height="28" rx="4" stroke="#4be277" strokeWidth="2" fill="none"/>
            <path d="M8 22L16 10L24 22" stroke="#4be277" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="18" r="2" fill="#4be277"/>
          </svg>
          <span className="font-mono text-xs text-[#64748b]">
            andy<span className="text-[#4be277]/60">.dev</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-[#3d4a3d] text-center">
          {t.footer.copy}
        </p>

        {/* Social */}
        <div className="flex gap-6">
          {[
            { href: "https://github.com/AndyCG03", label: "GitHub" },
            { href: "https://linkedin.com/in/andy-clemente", label: "LinkedIn" },
            { href: "https://x.com/AndyClemente6", label: "X" },
            { href: "https://instagram.com/clemen_lens", label: "Instagram" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#3d4a3d] hover:text-[#4be277] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
