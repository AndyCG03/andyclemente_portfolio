"use client";
import { useLang } from "../context/LanguageContext";

export default function Experience() {
  const { lang, t } = useLang();

  const experiences = [
    {
      period: "Mar 2025 — Present",
      company: "BioCubaFarma (ETI)",
      role: "Technical Programmer",
      desc: {
        en: "Leading unified platform for multiple virtual assistants with RAG architecture. FastAPI with JWT, ChromaDB, PDF/DOCX processing and Whisper integration. Delegate at SIGESTIC 2025.",
        es: "Liderando plataforma unificada para múltiples asistentes virtuales con arquitectura RAG. FastAPI con JWT, ChromaDB, procesamiento de PDF/DOCX e integración con Whisper. Delegado en SIGESTIC 2025.",
      },
    },
    {
      period: "Nov 2024 — Jun 2025",
      company: "Medialytic",
      role: "Mobile Programmer",
      desc: {
        en: "Intensive Flutter training: Dart, Provider and REST APIs. Developed 'El Chismoso' — Flutter app with GPS and photo upload.",
        es: "Entrenamiento intensivo en Flutter: Dart, Provider y APIs REST. Desarrolló 'El Chismoso' — app Flutter con GPS y carga de fotos.",
      },
    },
    {
      period: "Mar 2025 — Present",
      company: "CUJAE",
      role: "Teaching Assistant",
      desc: {
        en: "Introductory Programming (C) instructor for 1st semester Computer Engineering students. Object-Oriented Programming (Java) instructor for 2nd semester students.",
        es: "Instructor de Programación Introductoria (C) para estudiantes de 1er semestre de Ingeniería en Computación. Instructor de Programación Orientada a Objetos (Java) para estudiantes de 2do semestre.",
      },
    },
  ];

  const achievements = [
    { icon: "emoji_events", label: "ICPC Caribbean Finals", sub: "3× · Best: #37" },
    { icon: "description", label: "RENIA Publication", sub: "Smart Greenhouse Prototype" },
    { icon: "public", label: "UNESCO", sub: "2024 & 2025" },
    { icon: "sports_esports", label: "Global Game Jam 2025", sub: "AVANCODE 2025" },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div
        className="absolute right-8 bottom-12 font-mono text-[10rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.02 }}
        aria-hidden
      >
        #
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            04_EXPERIENCE
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12">
              {t.experience.title}
            </h2>
            <div className="relative pl-8 border-l border-[#2d3449]">
              {experiences.map((exp, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  <div
                    className={`timeline-dot absolute -left-[1.175rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#0b1326] ${
                      i === 0
                        ? "bg-[#4be277]"
                        : "bg-[#2d3449] border-[#4be277]/40"
                    }`}
                  />
                  <span className="font-mono text-xs text-[#4be277] tracking-widest block mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-[#dae2fd] mb-0.5">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-sm text-[#64748b] mb-3">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[#bcc7de] leading-relaxed">
                    {exp.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12">
              {t.experience.education}
            </h2>

            <div className="bg-[#131b2e] ghost-border rounded-sm p-8 mb-8 relative overflow-hidden">
              <div
                className="absolute top-4 right-4 font-mono text-[6rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
                style={{ opacity: 0.05 }}
                aria-hidden
              >
                A
              </div>
              <span className="font-mono text-xs text-[#4be277] tracking-widest block mb-4">
                Feb 2023 — Jul 2026
              </span>
              <h3 className="text-2xl font-black text-[#dae2fd] mb-1">
                Computer Engineering
              </h3>
              <p className="font-mono text-sm text-[#64748b] mb-4">
                CUJAE · Havana, Cuba
              </p>
              <p className="text-sm text-[#bcc7de] leading-relaxed">
                {t.experience.edu.desc}
              </p>
            </div>

            <div className="space-y-3">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-[#131b2e] ghost-border rounded-sm"
                >
                  <span className="material-symbols-outlined text-2xl text-[#4be277]">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#dae2fd]">{item.label}</p>
                    <p className="font-mono text-xs text-[#64748b]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}