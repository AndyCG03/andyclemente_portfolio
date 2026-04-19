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

          {/* Role line */}
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
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-[#002109] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(75,226,119,0.3)]"
              style={{ background: "linear-gradient(135deg, #4be277, #22c55e)" }}
            >
              {t.hero.cta_work}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="/Andy_Clemente_CV.pdf"
              download="Andy_Clemente_CV.pdf"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all relative overflow-hidden"
            >
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#4be277] to-[#22c55e] group-hover:w-full transition-all duration-300" />
              <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">
                download
              </span>
              {t.hero.cta_cv}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-10">
            {[
              { href: "https://github.com/AndyCG03", label: "GitHub", icon: "code" },
              { href: "https://linkedin.com/in/andy-clemente", label: "LinkedIn", icon: "work" },
              { href: "https://x.com/AndyClemente6", label: "Twitter/X", icon: "alternate_email" },
              { href: "https://instagram.com/clemen_lens", label: "Instagram", icon: "photo_camera" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all"
              >
                <span className="material-symbols-outlined text-lg">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
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