"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";
import { MdArrowForward, MdDownload } from "react-icons/md";

export default function Hero() {
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      <div
        className="absolute right-0 top-1/4 text-[20rem] font-black text-[#4be277] pointer-events-none select-none leading-none"
        style={{ opacity: 0.025 }}
        aria-hidden
      >
        {`{ }`}
      </div>
      <div
        className="absolute left-0 bottom-0 text-[16rem] font-black font-mono text-[#4be277] pointer-events-none select-none leading-none"
        style={{ opacity: 0.02 }}
        aria-hidden
      >
        {`>_`}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
        <div className={`relative z-10 order-2 md:order-1 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-sm bg-[#171f33] ghost-border font-mono text-xs text-[#4be277] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4be277] inline-block animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-[#dae2fd] mb-4 leading-[0.9]">
            Andy{" "}
            <span className="gradient-text">Clemente</span>
          </h1>

          <div className="font-mono text-lg text-[#bcc7de] mb-2 tracking-widest flex items-center gap-2">
            <span className="text-[#4be277]">//</span> {t.hero.role}
          </div>

          <div className="font-mono text-xs text-[#64748b] mb-8 flex items-center gap-1">
            <span className="text-[#22c55e]">&gt;_</span>
            <span>la_habana</span>
            <span className="text-[#3d4a3d]">/</span>
            <span>cuba</span>
            <span className="cursor-blink ml-1 text-[#4be277]">|</span>
          </div>

          <p className="text-base lg:text-lg text-[#bcc7de] max-w-lg mb-10 leading-relaxed">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-[#002109] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(75,226,119,0.3)]"
              style={{ background: "linear-gradient(135deg, #4be277, #22c55e)" }}
            >
              {t.hero.cta_work}
              <MdArrowForward className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Andy_Clemente_CV.pdf"
              download="Andy_Clemente_CV.pdf"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all relative overflow-hidden"
            >
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#4be277] to-[#22c55e] group-hover:w-full transition-all duration-300" />
              <MdDownload className="text-sm group-hover:translate-y-0.5 transition-transform" />
              {t.hero.cta_cv}
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <a
              href="https://github.com/AndyCG03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all text-xl"
            >
              <SiGithub />
            </a>
            <a
              href="https://linkedin.com/in/andy-clemente"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all text-xl"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://x.com/AndyClemente6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all text-xl"
            >
              <SiX />
            </a>
            <a
              href="https://instagram.com/clemen_lens"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all text-xl"
            >
              <SiInstagram />
            </a>
          </div>
        </div>

        <div className={`relative order-1 md:order-2 flex justify-center md:justify-end transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="absolute inset-0 bg-[#4be277]/15 blur-[80px] rounded-full scale-75" />
          <div className="relative z-10 w-72 sm:w-80 lg:w-96">
            <div className="bg-[#171f33] ghost-border rounded-t-lg px-4 py-2.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-[#64748b]">andy_clemente.jpg</span>
            </div>
            <div className="relative overflow-hidden ghost-border border-t-0 rounded-b-lg">
              <Image
                src="/andy.jpg"
                alt="Andy Clemente"
                width={500}
                height={600}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "4/5" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-xs text-[#4be277]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4be277] inline-block animate-pulse" />
                  Fullstack Developer · Software Engineer · CUJAE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}