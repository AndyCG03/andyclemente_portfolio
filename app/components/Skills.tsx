"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { 
  SiFlutter, 
  SiDart, 
  SiFastapi, 
  SiPython, 
  SiNestjs, 
  SiOpenai,
  SiJava, 
  SiC, 
  SiJavascript, 
  SiTypescript, 
  SiVuedotjs,
  SiPostgresql, 
  SiMysql, 
  SiSqlite,
  SiGit, 
  SiGithub, 
  SiVisualstudiocode, 
  SiLatex, 
  SiFfmpeg,
  SiCanva, 
  SiAdobe, 
  SiWordpress
} from "react-icons/si";
import { MdSettings, MdDeveloperMode, MdPsychology, MdCloud, MdMic, MdStorage, MdDataset, MdFunctions, MdVideoCamera, MdDesignServices, MdBrush, MdWeb, MdCode } from "react-icons/md";
import { GrAndroid } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";

const skillGroups = [
  {
    category: { en: "Mobile", es: "Mobile" },
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-[#4be277] text-sm" /> },
      { name: "Dart", icon: <SiDart className="text-[#4be277] text-sm" /> },
      { name: "Provider", icon: <MdSettings className="text-[#4be277] text-sm" /> },
      { name: "Android Studio", icon: <MdDeveloperMode className="text-[#4be277] text-sm" /> }
    ]
  },
  {
    category: { en: "AI & Backend", es: "IA & Backend" },
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="text-[#4be277] text-sm" /> },
      { name: "Python", icon: <SiPython className="text-[#4be277] text-sm" /> },
      { name: "RAG", icon: <MdPsychology className="text-[#4be277] text-sm" /> },
      { name: "NestJS", icon: <SiNestjs className="text-[#4be277] text-sm" /> },
      { name: "Whisper", icon: <SiOpenai className="text-[#4be277] text-sm" /> }
    ]
  },
  {
    category: { en: "Languages", es: "Lenguajes" },
    skills: [
      { name: "Java", icon: <SiJava className="text-[#4be277] text-sm" /> },
      { name: "C", icon: <SiC className="text-[#4be277] text-sm" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#4be277] text-sm" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#4be277] text-sm" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-[#4be277] text-sm" /> }
    ]
  },
  {
    category: { en: "Databases", es: "Bases de Datos" },
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4be277] text-sm" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4be277] text-sm" /> },
      { name: "SQLite", icon: <SiSqlite className="text-[#4be277] text-sm" /> },
      { name: "ChromaDB", icon: <MdDataset className="text-[#4be277] text-sm" /> }
    ]
  },
  {
    category: { en: "Tools", es: "Herramientas" },
    skills: [
      { name: "Git", icon: <SiGit className="text-[#4be277] text-sm" /> },
      { name: "GitHub", icon: <SiGithub className="text-[#4be277] text-sm" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-[#4be277] text-sm" /> },
      { name: "LaTeX", icon: <MdFunctions className="text-[#4be277] text-sm" /> },
      { name: "FFmpeg", icon: <SiFfmpeg className="text-[#4be277] text-sm" /> }
    ]
  },
  {
    category: { en: "Design & Other", es: "Diseño y Otros" },
    skills: [
      { name: "Canva", icon: <SiCanva className="text-[#4be277] text-sm" /> },
      { name: "Adobe", icon: <SiAdobe className="text-[#4be277] text-sm" /> },
      { name: "WordPress", icon: <SiWordpress className="text-[#4be277] text-sm" /> }
    ]
  },
];

export default function Skills() {
  const { lang, t } = useLang();
  const [visibleGroups, setVisibleGroups] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillGroups.forEach((_, index) => {
            setTimeout(() => {
              setVisibleGroups(prev => [...prev, index]);
            }, index * 150);
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
    <section id="skills" className="py-24 bg-[#131b2e] relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute left-0 top-0 font-mono text-[18rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.018 }}
        aria-hidden
      >
        {"</>"}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            03_STACK
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#dae2fd] whitespace-nowrap">
            {t.skills.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`bg-[#0b1326] ghost-border rounded-sm p-6 transition-all duration-500 ease-out transform ${
                visibleGroups.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="font-mono text-xs text-[#64748b] uppercase tracking-widest mb-5">
                {group.category[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={skill.name}
                    className="skill-chip px-3 py-1.5 bg-[#171f33] ghost-border rounded-sm font-mono text-xs text-[#bcc7de] flex items-center gap-1.5 cursor-default"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-8 bg-[#0b1326] border-l-2 border-[#4be277] relative overflow-hidden transition-all duration-700 delay-500 ease-out transform ${visibleGroups.length === skillGroups.length ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div
            className="absolute -right-4 -bottom-4 font-mono text-[8rem] text-[#4be277] select-none pointer-events-none leading-none font-black"
            style={{ opacity: 0.05 }}
            aria-hidden
          >
            {"{ }"}
          </div>
          <p className="font-mono text-sm text-[#bcc7de] relative z-10 italic">
            <span className="text-[#4be277] not-italic">/// </span>
            {lang === "en"
              ? "I build mobile apps with Flutter, RAG systems with FastAPI, and have over 1 year of professional software development experience from Havana, Cuba."
              : "Construyo aplicaciones móviles con Flutter, sistemas RAG con FastAPI y tengo más de 1 año de experiencia profesional en desarrollo de software desde La Habana, Cuba."}
          </p>
          <p className="font-mono text-xs text-[#64748b] mt-2 relative z-10">
            — Andy Clemente Gago
          </p>
        </div>
      </div>
    </section>
  );
}