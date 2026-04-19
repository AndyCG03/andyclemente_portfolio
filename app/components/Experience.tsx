"use client";
import { useLang } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLang();

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
        {/* Section label */}
        <div className="flex items-center gap-6 mb-16">
          <span className="font-mono text-xs text-[#4be277] tracking-widest uppercase">
            04_EXPERIENCE
          </span>
          <div className="h-px flex-grow bg-[#3d4a3d]/20" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12">
              {t.experience.title}
            </h2>
            <div className="relative pl-8 border-l border-[#2d3449]">
              {t.experience.items.map((item, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  {/* Dot */}
                  <div
                    className={`timeline-dot absolute -left-[1.175rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#0b1326] ${
                      i === 0
                        ? "bg-[#4be277]"
                        : "bg-[#2d3449] border-[#4be277]/40"
                    }`}
                  />

                  {/* Period */}
                  <span className="font-mono text-xs text-[#4be277] tracking-widest block mb-2">
                    {item.period}
                  </span>

                  {/* Company */}
                  <h3 className="text-lg font-bold text-[#dae2fd] mb-0.5">
                    {item.company}
                  </h3>
                  <p className="font-mono text-sm text-[#64748b] mb-3">
                    {item.role}
                  </p>
                  <p className="text-sm text-[#bcc7de] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12">
              {t.experience.education}
            </h2>

            {/* CUJAE card */}
            <div className="bg-[#131b2e] ghost-border rounded-sm p-8 mb-8 relative overflow-hidden">
              <div
                className="absolute top-4 right-4 font-mono text-[6rem] font-black text-[#4be277] select-none pointer-events-none leading-none"
                style={{ opacity: 0.05 }}
                aria-hidden
              >
                A
              </div>

              <span className="font-mono text-xs text-[#4be277] tracking-widest block mb-4">
                {t.experience.edu.period}
              </span>
              <h3 className="text-2xl font-black text-[#dae2fd] mb-1">
                {t.experience.edu.degree}
              </h3>
              <p className="font-mono text-sm text-[#64748b] mb-4">
                {t.experience.edu.school}
              </p>
              <p className="text-sm text-[#bcc7de] leading-relaxed">
                {t.experience.edu.desc}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {[
                { icon: "🏆", label: "ICPC Caribbean Finals", sub: "3× · Best: #37" },
                { icon: "📄", label: "RENIA Publication", sub: "Smart Greenhouse Prototype" },
                { icon: "🌍", label: "UNESCO", sub: "2024 & 2025" },
                { icon: "🎮", label: "Global Game Jam 2025", sub: "AVANCODE 2025" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-[#131b2e] ghost-border rounded-sm"
                >
                  <span className="text-xl">{item.icon}</span>
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
