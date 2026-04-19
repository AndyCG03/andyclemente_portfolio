"use client";
import { useLang } from "../context/LanguageContext";

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

  return (
    <section id="projects" className="py-24 relative">
      {/* Section watermark */}
      <div
        className="absolute right-8 top-12 font-mono text-[10rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.02 }}
        aria-hidden
      >
        fn()
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            02_PROJECTS
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#dae2fd] whitespace-nowrap">
            {t.projects.title}
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.num}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block bg-[#131b2e] ghost-border rounded-sm p-6 relative overflow-hidden"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 font-mono text-xs px-2 py-0.5 rounded-sm bg-[#4be277]/10 text-[#4be277] border border-[#4be277]/20">
                  ★ Featured
                </div>
              )}

              {/* Line number */}
              <div className="font-mono text-4xl font-black text-[#2d3449] mb-4 group-hover:text-[#4be277]/20 transition-colors select-none">
                {project.num}
              </div>

              {/* Lang dot */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: langColors[project.lang] || "#64748b" }}
                />
                <span className="font-mono text-xs text-[#64748b]">
                  {project.lang}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-[#dae2fd] mb-3 group-hover:text-[#4be277] transition-colors font-mono">
                {project.name}
              </h3>

              {/* Desc */}
              <p className="text-sm text-[#bcc7de] leading-relaxed mb-5">
                {project.desc[lang]}
              </p>

              {/* Tags */}
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

              {/* View link */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#4be277] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                {t.projects.view}
              </div>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4be277] to-[#22c55e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* All projects link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/AndyCG03?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#4be277] hover:text-[#6bff8f] transition-colors group"
          >
            <span className="text-[#64748b]">&gt;_</span>
            {t.projects.all}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
