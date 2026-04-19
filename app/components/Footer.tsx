"use client";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#060e20] border-t border-[#3d4a3d]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Logo" width={120} height={120} className="object-contain" />
        </div>

        <p className="font-mono text-xs text-[#3d4a3d] text-center">
          {t.footer.copy}
        </p>

        <div className="flex gap-6">
          {[
            { href: "https://github.com/AndyCG03", icon: "code" },
            { href: "https://linkedin.com/in/andy-clemente", icon: "work" },
            { href: "https://x.com/AndyClemente6", icon: "alternate_email" },
            { href: "https://instagram.com/clemen_lens", icon: "photo_camera" },
          ].map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d4a3d] hover:text-[#4be277] transition-colors"
              aria-label={s.icon}
            >
              <span className="material-symbols-outlined text-xl">
                {s.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}