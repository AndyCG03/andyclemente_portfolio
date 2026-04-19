"use client";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
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

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
        {/* Left — Text */}
        <div className="relative z-10 order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-sm bg-[#171f33] ghost-border font-mono text-xs text-[#4be277] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4be277] inline-block animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-[#dae2fd] mb-4 leading-[0.9]">
            Andy{" "}
            <span className="gradient-text">Clemente</span>
          </h1>

          {/* Gago on new line */}
          <div className="font-mono text-lg text-[#bcc7de] mb-2 tracking-widest flex items-center gap-2">
            <span className="text-[#4be277]">///</span> {t.hero.role}
          </div>

          {/* Terminal line */}
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
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-[#002109] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(75,226,119,0.3)]"
              style={{ background: "linear-gradient(135deg, #4be277, #22c55e)" }}
            >
              {t.hero.cta_work}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/Andy_Clemente_CV.pdf"
              download="Andy_Clemente_CV.pdf"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all relative overflow-hidden"
            >
              {/* Animated bottom line on hover */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#4be277] to-[#22c55e] group-hover:w-full transition-all duration-300" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.hero.cta_cv}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-10">
            {[
              {
                href: "https://github.com/AndyCG03",
                label: "GitHub",
                svg: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/andy-clemente",
                label: "LinkedIn",
                svg: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: "https://x.com/AndyClemente6",
                label: "Twitter/X",
                svg: (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                href: "https://instagram.com/clemen_lens",
                label: "Instagram",
                svg: (
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          {/* Glow blob */}
          <div className="absolute inset-0 bg-[#4be277]/15 blur-[80px] rounded-full scale-75" />

          {/* Code frame decoration */}
          <div className="relative z-10 w-72 sm:w-80 lg:w-96">
            {/* Top bar */}
            <div className="bg-[#171f33] ghost-border rounded-t-lg px-4 py-2.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-[#64748b]">
                andy_clemente.jpg
              </span>
            </div>

            {/* Photo */}
            <div className="relative overflow-hidden ghost-border border-t-0 rounded-b-lg">
              <Image
                src="/andy.jpg"
                alt="Andy Clemente"
                width={500}
                height={600}
                className="object-cover object-top"
                style={{ width: "100%", height: "auto", aspectRatio: "4/5" }}
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-xs text-[#4be277]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4be277] inline-block animate-pulse" />
                  Mobile Dev · AI Engineer · CUJAE&apos;26
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
