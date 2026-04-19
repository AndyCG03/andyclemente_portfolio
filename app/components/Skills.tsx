"use client";
import { useLang } from "../context/LanguageContext";

const skillGroups = [
  {
    category: { en: "📱 Mobile", es: "📱 Mobile" },
    skills: ["Flutter", "Dart", "Provider", "Android Studio"],
  },
  {
    category: { en: "🤖 AI & Backend", es: "🤖 AI & Backend" },
    skills: ["FastAPI", "Python", "RAG", "NestJS", "Whisper", "ChromaDB"],
  },
  {
    category: { en: "💻 Languages", es: "💻 Lenguajes" },
    skills: ["Java", "C", "JavaScript", "TypeScript", "Vue.js", "Shell"],
  },
  {
    category: { en: "🗄️ Databases", es: "🗄️ Bases de Datos" },
    skills: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB"],
  },
  {
    category: { en: "🛠️ Tools", es: "🛠️ Herramientas" },
    skills: ["Git", "GitHub", "VS Code", "LaTeX", "FFmpeg"],
  },
  {
    category: { en: "🎨 Design & Other", es: "🎨 Diseño y Otros" },
    skills: ["Canva", "Adobe", "WordPress"],
  },
];

export default function Skills() {
  const { lang, t } = useLang();

  return (
    <section id="skills" className="py-24 bg-[#131b2e] relative overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute left-0 top-0 font-mono text-[18rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.018 }}
        aria-hidden
      >
        {"</>"}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            03_STACK
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#dae2fd] whitespace-nowrap">
            {t.skills.title}
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div key={i} className="bg-[#0b1326] ghost-border rounded-sm p-6">
              <h3 className="font-mono text-xs text-[#64748b] uppercase tracking-widest mb-5">
                {group.category[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip px-3 py-1.5 bg-[#171f33] ghost-border rounded-sm font-mono text-xs text-[#bcc7de] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-12 p-8 bg-[#0b1326] border-l-2 border-[#4be277] relative overflow-hidden">
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
              ? "Clean code, real projects, results that speak for themselves."
              : "Código limpio, proyectos reales, resultados que hablan solos."}
          </p>
          <p className="font-mono text-xs text-[#64748b] mt-2 relative z-10">
            — Andy Clemente, andy.dev brand manual
          </p>
        </div>
      </div>
    </section>
  );
}
