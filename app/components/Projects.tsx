"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { SiGithub } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";

const projects = [
  {
    num: "01",
    name: "ai-api-service",
    lang: "Python",
    desc: {
      en: "REST API with FastAPI for local AI services: text generation, audio transcription, embeddings and OCR. Optimized for limited resources.",
      es: "API REST con FastAPI para servicios de IA locales: generación de texto, transcripción de audio, embeddings y OCR. Optimizado para recursos limitados.",
    },
    tags: ["FastAPI", "RAG", "Whisper", "OCR"],
    href: "https://github.com/AndyCG03/ai-api-service",
    featured: false,
  },
  {
    num: "02",
    name: "backend-smart-task",
    lang: "Python",
    desc: {
      en: "Backend for a ticket management solution for developers with integrated AI. Architecture oriented towards development teams.",
      es: "Backend para una solución de gestión de tickets para programadores con IA integrada. Arquitectura orientada a equipos de desarrollo.",
    },
    tags: ["Python", "AI", "Tickets", "Backend"],
    href: "https://github.com/AndyCG03/backend-smart-task",
    featured: true,
  },
  {
    num: "03",
    name: "biocu",
    lang: "Dart / Flutter",
    desc: {
      en: "Flutter + NestJS platform to report environmental issues. Mobile app with citizen reporting system and integrated backend.",
      es: "Plataforma Flutter + NestJS para reportar problemas ambientales. App móvil con sistema de reportes ciudadanos y backend integrado.",
    },
    tags: ["Flutter", "Dart", "NestJS", "Environment"],
    href: "https://github.com/AndyCG03/biocu",
    featured: false,
  },
  {
    num: "04",
    name: "al_toque_app",
    lang: "Flutter / Dart",
    desc: {
      en: "Flutter app to check real-time exchange rates in Cuba. Converts between informal market currencies quickly and efficiently.",
      es: "App Flutter para consultar tasas de cambio en Cuba en tiempo real. Convierte entre monedas del mercado informal rápida y eficientemente.",
    },
    tags: ["Flutter", "Dart", "Cuba", "Finance"],
    href: "https://github.com/AndyCG03/al_toque_app",
    featured: false,
  },
  {
    num: "05",
    name: "VidCrush Pro",
    lang: "Shell",
    desc: {
      en: "Professional video compressor via terminal with FFmpeg. Magic Folder mode: drag a folder and automatically process videos. Creates optimized GIFs.",
      es: "Compresor de video profesional vía terminal con FFmpeg. Modo Carpeta Mágica: arrastra una carpeta y procesa videos automáticamente. Crea GIFs optimizados.",
    },
    tags: ["Shell", "FFmpeg", "CLI", "Video"],
    href: "https://github.com/AndyCG03/VidCrush---Video-Compresor",
    featured: false,
  },
];

const langColors: Record<string, string> = {
  Python: "#3572A5",
  "Dart / Flutter": "#00B4AB",
  "Flutter / Dart": "#00B4AB",
  Shell: "#89e051",
};

export default function Projects() {
  const { lang, t } = useLang();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute right-8 top-12 font-mono text-[10rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.02 }}
        aria-hidden
      >
        fn()
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            02_PROJECTS
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#dae2fd] whitespace-nowrap">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.num}
              className={`project-card group block bg-[#131b2e] ghost-border rounded-sm p-6 relative overflow-hidden transition-all duration-500 ease-out transform ${
                visibleItems.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 font-mono text-xs px-2 py-0.5 rounded-sm bg-[#4be277]/10 text-[#4be277] border border-[#4be277]/20 z-10">
                  ★ Featured
                </div>
              )}

              <div className="font-mono text-4xl font-black text-[#2d3449] mb-4 group-hover:text-[#4be277]/20 transition-colors select-none">
                {project.num}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: langColors[project.lang] || "#64748b" }}
                />
                <span className="font-mono text-xs text-[#64748b]">
                  {project.lang}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#dae2fd] mb-3 group-hover:text-[#4be277] transition-colors font-mono">
                {project.name}
              </h3>

              <p className="text-sm text-[#bcc7de] leading-relaxed mb-5">
                {project.desc[lang]}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-chip px-2.5 py-1 rounded-sm bg-[#2d3449] font-mono text-xs text-[#94a3b8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botón de GitHub con icono real */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-sm bg-[#0b1326] ghost-border text-[#4be277] hover:bg-[#4be277]/10 transition-all w-full group/btn"
                aria-label="View on GitHub"
              >
                <SiGithub className="text-lg" />
                <MdOpenInNew className="text-sm group-hover/btn:translate-x-0.5 transition-transform" />
              </a>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4be277] to-[#22c55e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/AndyCG03?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#4be277] hover:text-[#6bff8f] transition-colors group"
          >
            <SiGithub className="text-lg" />
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}