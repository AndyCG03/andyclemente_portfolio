"use client";
import { useLang } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Timeline */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#dae2fd] mb-8">
              {t.experience.title}
            </h2>
            <div className="relative pl-6 border-l border-[#2d3449]">
              {t.experience.items.map((item, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[0.8rem] top-1.5 w-2.5 h-2.5 rounded-full ${
                      i === 0 ? "bg-[#4be277]" : "bg-[#3d4a3d]"
                    }`}
                  />

                  {/* Period */}
                  <span className="text-xs text-[#4be277] block mb-1">
                    {item.period}
                  </span>

                  {/* Company */}
                  <h3 className="text-base font-semibold text-[#dae2fd] mb-0.5">
                    {item.company}
                  </h3>
                  <p className="text-sm text-[#64748b] mb-2">
                    {item.role}
                  </p>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack Summary */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#dae2fd] mb-8">
              Technical Stack
            </h2>

            {/* Stack categories */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs text-[#64748b] uppercase tracking-wider mb-3">Mobile Development</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "React Native", "Kotlin"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#131b2e] border border-[#2d3449]/50 rounded-md text-sm text-[#dae2fd]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs text-[#64748b] uppercase tracking-wider mb-3">AI / Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["LLM Integration", "Python / FastAPI", "Node.js"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#131b2e] border border-[#2d3449]/50 rounded-md text-sm text-[#dae2fd]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs text-[#64748b] uppercase tracking-wider mb-3">Tools & Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git / CI/CD", "Docker", "Clean Architecture"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#131b2e] border border-[#2d3449]/50 rounded-md text-sm text-[#dae2fd]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-5 bg-[#4be277]/5 border border-[#4be277]/20 rounded-lg">
              <p className="text-sm text-[#94a3b8] italic leading-relaxed">
                &quot;Software engineering is not just about writing code; it&apos;s about solving human problems through precision and empathy.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
