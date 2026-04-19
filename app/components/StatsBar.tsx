"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function StatsBar() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Los valores ahora vienen del contexto
  const stats = [
    { value: t.stats.experience, label: t.stats.experienceLabel },
    { value: t.stats.projects, label: t.stats.projectsLabel },
    { value: t.stats.graduation, label: t.stats.graduationLabel },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[#131b2e]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4be277]/3 via-transparent to-[#4be277]/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-8 divide-x divide-[#3d4a3d]/20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-card px-4 md:px-8 py-4 text-center transition-all duration-500 ease-out transform ${
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-3xl md:text-5xl font-black gradient-text mb-2 leading-none">
                {stat.value}
              </div>
              <div className="font-mono text-xs md:text-sm text-[#64748b] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}