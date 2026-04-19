"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-[#060e20] border-t border-[#3d4a3d]/20 py-12 px-6"
    >
      <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Logo" width={120} height={120} className="object-contain" />
        </div>

        <p className="font-mono text-xs text-[#3d4a3d] text-center">
          {t.footer.copy}
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/AndyCG03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3d4a3d] hover:text-[#4be277] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/andy-clemente"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3d4a3d] hover:text-[#4be277] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/AndyClemente6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3d4a3d] hover:text-[#4be277] transition-colors"
            aria-label="X / Twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/clemen_lens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3d4a3d] hover:text-[#4be277] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}