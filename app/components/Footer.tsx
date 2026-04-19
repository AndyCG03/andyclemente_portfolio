"use client";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#060e20] border-t border-[#3d4a3d]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/icono.png" alt="Logo" width={28} height={28} className="object-contain opacity-60" />
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
