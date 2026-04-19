"use client";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1326] via-[#0b1326] to-[#0f1a2e]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 lg:gap-24 items-center py-20 relative z-10">
        {/* Left — Text */}
        <div className="relative z-10 order-2 md:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#4be277]/10 border border-[#4be277]/20 text-xs text-[#4be277] tracking-wide uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-[#4be277] inline-block animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#dae2fd] mb-2 leading-[1.1]">
            Andy
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#4be277] mb-4 leading-[1.1]">
            Clemente
          </h1>

          {/* Role */}
          <p className="text-lg text-[#bcc7de] mb-6 italic">
            {t.hero.role}
          </p>

          <p className="text-base text-[#94a3b8] max-w-md mb-8 leading-relaxed">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#0b1326] bg-[#4be277] hover:bg-[#3dd168] transition-all duration-200"
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#dae2fd] border border-[#3d4a3d] hover:border-[#4be277] hover:text-[#4be277] transition-all"
            >
              {t.hero.cta_cv}
            </a>
          </div>

        </div>

        {/* Right — Photo */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 sm:w-72 lg:w-80">
            {/* Photo with gradient border effect */}
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/andy.jpg"
                alt="Andy Clemente"
                width={400}
                height={500}
                className="object-cover object-top grayscale"
                style={{ width: "100%", height: "auto", aspectRatio: "4/5" }}
                priority
              />
              {/* Green tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#4be277]/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
