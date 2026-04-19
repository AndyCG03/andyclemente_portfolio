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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <span className="text-xs text-[#4be277] tracking-widest uppercase font-medium">
            Featured Work
          </span>
          <div className="hidden sm:block h-px flex-grow bg-[#3d4a3d]/30" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#dae2fd]">
            {t.projects.title}
          </h2>
          <span className="text-sm text-[#64748b]">
            {projects.length.toString().padStart(2, "0")} items
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.num}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#131b2e] border border-[#2d3449]/50 rounded-lg p-5 hover:border-[#4be277]/30 transition-all duration-300"
            >
              {/* Header with number and lang */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-[#2d3449] group-hover:text-[#4be277]/30 transition-colors">
                  {project.num}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: langColors[project.lang] || "#64748b" }}
                  />
                  <span className="text-xs text-[#64748b]">
                    {project.lang}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold text-[#dae2fd] mb-2 group-hover:text-[#4be277] transition-colors">
                {project.name}
              </h3>

              {/* Desc */}
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 line-clamp-3">
                {project.desc[lang]}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-[#4be277]/10 text-xs text-[#4be277]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* All projects link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/AndyCG03?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#4be277] hover:underline transition-colors"
          >
            {t.projects.all}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
