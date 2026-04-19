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
    <section id="skills" className="py-20 bg-[#0f1624]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <span className="text-xs text-[#4be277] tracking-widest uppercase font-medium">
            Technical Stack
          </span>
          <div className="hidden sm:block h-px flex-grow bg-[#3d4a3d]/30" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#dae2fd]">
            {t.skills.title}
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div key={i} className="bg-[#131b2e] border border-[#2d3449]/50 rounded-lg p-5">
              <h3 className="text-xs text-[#64748b] uppercase tracking-widest mb-4">
                {group.category[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#2d3449]/50 rounded-md text-xs text-[#bcc7de]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-10 p-6 bg-[#131b2e] border-l-2 border-[#4be277] rounded-r-lg">
          <p className="text-sm text-[#94a3b8] italic">
            {lang === "en"
              ? "\"Software engineering is not just about writing code; it's about solving human problems through precision and empathy.\""
              : "\"La ingeniería de software no es solo escribir código; es resolver problemas humanos con precisión y empatía.\""}
          </p>
        </div>
      </div>
    </section>
  );
}
