"use client";
import { useLang } from "../context/LanguageContext";

export default function StatsBar() {
  const { t } = useLang();

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#131b2e]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4be277]/3 via-transparent to-[#4be277]/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-8 divide-x divide-[#3d4a3d]/20">
          {t.stats.map((stat, i) => (
            <div key={i} className="stat-card px-4 md:px-8 py-4 text-center">
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
