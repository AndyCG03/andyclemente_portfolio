"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Experience() {
  const { lang, t } = useLang();
  const [visible, setVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleAchievements, setVisibleAchievements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Logros traducidos
  const achievements = [
    { 
      icon: "emoji_events", 
      label: { en: "ICPC Caribbean Finals", es: "Finales del Caribe ICPC" }, 
      sub: { en: "3× · Best: #37", es: "3× · Mejor: #37" } 
    },
    { 
      icon: "description", 
      label: { en: "RENIA Publication", es: "Publicación RENIA" }, 
      sub: { en: "Smart Greenhouse Prototype", es: "Prototipo de Invernadero Inteligente" } 
    },
    { 
      icon: "public", 
      label: { en: "UNESCO", es: "UNESCO" }, 
      sub: { en: "2024 & 2025", es: "2024 & 2025" } 
    },
    { 
      icon: "sports_esports", 
      label: { en: "Global Game Jam 2025", es: "Global Game Jam 2025" }, 
      sub: { en: "AVANCODE 2025", es: "AVANCODE 2025" } 
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeaderVisible(true);
          setTimeout(() => {
            setVisible(true);
          }, 200);
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleAchievements(prev => [...prev, index]);
            }, 500 + index * 100);
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
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute right-8 bottom-12 font-mono text-[10rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.02 }}
        aria-hidden
      >
        #
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header con fade */}
        <div className={`flex items-center gap-6 mb-16 transition-all duration-700 ease-out transform ${
          headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            04_EXPERIENCE
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Columna de Experiencia Laboral */}
          <div>
            <h2 className={`text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12 transition-all duration-500 ease-out transform ${
              visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              {t.experience.title}
            </h2>
            <div className="relative pl-8 border-l border-[#2d3449]">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`relative mb-12 last:mb-0 transition-all duration-500 ease-out transform ${
                    visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Timeline dot - alineado perfectamente */}
                  <div
                    className={`absolute -left-[1.15rem] top-2 w-3.5 h-3.5 rounded-full border-2 border-[#0b1326] transition-all duration-300 ${
                      i === 0
                        ? "bg-[#4be277] shadow-[0_0_10px_rgba(75,226,119,0.5)]"
                        : "bg-[#2d3449] border-[#4be277]/40"
                    }`}
                  />
                  <span className="font-mono text-xs text-[#4be277] tracking-widest block mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-[#dae2fd] mb-0.5 group-hover:text-[#4be277] transition-colors">
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

          {/* Columna de Educación y Logros */}
          <div>
            <h2 className={`text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12 transition-all duration-500 ease-out transform ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: "100ms" }}>
              {t.experience.education}
            </h2>

            {/* Tarjeta de Educación */}
            <div className={`bg-[#131b2e] ghost-border rounded-sm p-8 mb-8 relative overflow-hidden transition-all duration-700 delay-300 ease-out transform ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}>
              <div
                className="absolute top-4 right-4 font-mono text-[6rem] font-black text-[#4be277] select-none pointer-events-none leading-none transition-opacity duration-700 delay-500"
                style={{ opacity: visible ? 0.05 : 0 }}
                aria-hidden
              >
                A
              </div>
              <span className="font-mono text-xs text-[#4be277] tracking-widest block mb-4">
                Feb 2023 — Mar 2026
              </span>
              <h3 className="text-2xl font-black text-[#dae2fd] mb-1">
                Software Engineer
              </h3>
              <p className="font-mono text-sm text-[#64748b] mb-4">
                CUJAE · {lang === "en" ? "Havana, Cuba" : "La Habana, Cuba"}
              </p>
              <p className="text-sm text-[#bcc7de] leading-relaxed">
                {t.experience.edu.desc}
              </p>
            </div>

            {/* Logros traducidos */}
            <div className="space-y-3">
              {achievements.map((item, index) => (
                <div
                  key={item.label.en}
                  className={`flex items-center gap-4 p-4 bg-[#131b2e] ghost-border rounded-sm transition-all duration-500 ease-out transform ${
                    visibleAchievements.includes(index)
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-8 opacity-0'
                  } hover:border-[#4be277]/30 hover:bg-[#4be277]/5 transition-all duration-300`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <span className="material-symbols-outlined text-2xl text-[#4be277] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#dae2fd]">{item.label[lang]}</p>
                    <p className="font-mono text-xs text-[#64748b]">{item.sub[lang]}</p>
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