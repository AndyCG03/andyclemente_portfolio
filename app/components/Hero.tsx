"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { MdArrowForward, MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const { t, lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden hero-gradient">
      {/* Background decorative watermarks */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-6 md:py-12">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
          
          {/* Foto */}
          <div className={`order-1 md:order-2 flex justify-center w-full transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#4be277]/15 blur-[80px] rounded-full scale-75" />
              <div className="relative z-10 w-56 sm:w-64 md:w-72 lg:w-80">
                <div className="bg-[#171f33] ghost-border rounded-t-lg px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-[10px] sm:text-xs text-[#64748b] truncate">andy_clemente.jpg</span>
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
                  
                  {/* Tags de la foto */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-[9px] sm:text-[10px] text-[#4be277]">
                        <span className="w-1 h-1 rounded-full bg-[#4be277] inline-block animate-pulse" />
                        Software Engineer
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-[9px] sm:text-[10px] text-[#4be277]">
                        <span className="material-symbols-outlined text-[10px]">psychology</span>
                        AI
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-[9px] sm:text-[10px] text-[#4be277]">
                        <span className="material-symbols-outlined text-[10px]">smartphone</span>
                        Mobile
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-[9px] sm:text-[10px] text-[#4be277]">
                        <span className="material-symbols-outlined text-[10px]">code</span>
                        Fullstack
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-[9px] sm:text-[10px] text-[#4be277]">
                        <span className="material-symbols-outlined text-[10px]">campaign</span>
                        Marketing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className={`order-2 md:order-1 relative z-10 w-full transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 md:mb-8 rounded-sm bg-[#171f33] ghost-border font-mono text-xs text-[#4be277] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4be277] inline-block animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#dae2fd] mb-3 leading-[1.1]">
              Andy{" "}
              <span className="gradient-text">Clemente</span>
            </h1>

            <div className="font-mono text-base md:text-lg text-[#bcc7de] mb-2 tracking-widest flex items-center gap-2">
              <span className="text-[#4be277]">//</span> {t.hero.role}
            </div>

            <div className="font-mono text-xs text-[#64748b] mb-6 md:mb-8 flex items-center gap-1 flex-wrap">
              <span className="text-[#22c55e]">&gt;_</span>
              <span>la_habana</span>
              <span className="text-[#3d4a3d]">/</span>
              <span>cuba</span>
              <span className="cursor-blink ml-1 text-[#4be277]">|</span>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[#bcc7de] max-w-lg mb-8 leading-relaxed">
              {t.hero.bio}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-[#002109] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(75,226,119,0.3)] text-sm md:text-base"
                style={{ background: "linear-gradient(135deg, #4be277, #22c55e)" }}
              >
                {t.hero.cta_work}
                <MdArrowForward className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Andy_Clemente_CV.pdf"
                download="Andy_Clemente_CV.pdf"
                className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all relative overflow-hidden text-sm md:text-base"
              >
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#4be277] to-[#22c55e] group-hover:w-full transition-all duration-300" />
                <MdDownload className="text-sm group-hover:translate-y-0.5 transition-transform" />
                {t.hero.cta_cv}
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 md:gap-5 mt-8 md:mt-10">
              <a
                href="https://github.com/AndyCG03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all"
              >
                <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/andy-clemente"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all"
              >
                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://x.com/AndyClemente6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all"
              >
                <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://instagram.com/ing.andyclemente"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all"
              >
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}