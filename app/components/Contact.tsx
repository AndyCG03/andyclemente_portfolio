"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black text-[20rem] text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.015 }}
        aria-hidden
      >
        {`>_`}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`bg-[#131b2e] ghost-border rounded-sm p-12 md:p-20 text-center relative overflow-hidden transition-all duration-700 ease-out transform ${
            visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#4be277] to-transparent" />

          <div className="font-mono text-xs text-[#4be277] tracking-widest uppercase mb-8 block">
            05_CONTACT
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#dae2fd] mb-4">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.highlight}</span>
            <br />
            {t.contact.together}
          </h2>

          <p className="text-[#bcc7de] max-w-lg mx-auto mb-10 text-lg leading-relaxed">
            {t.contact.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:ing.andyclemente@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-md font-bold text-[#002109] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(75,226,119,0.3)]"
              style={{ background: "linear-gradient(135deg, #4be277, #22c55e)" }}
            >
              <span className="material-symbols-outlined">
                mail
              </span>
              {t.contact.btn}
            </a>
            <a
              href="https://linkedin.com/in/andy-clemente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all"
            >
              <span className="material-symbols-outlined">
                work
              </span>
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:ing.andyclemente@gmail.com"
              className="flex items-center gap-2 font-mono text-sm text-[#64748b] hover:text-[#4be277] transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                mail
              </span>
              ing.andyclemente@gmail.com
            </a>
            <a
              href="tel:+5355847601"
              className="flex items-center gap-2 font-mono text-sm text-[#64748b] hover:text-[#4be277] transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                call
              </span>
              +53 55847601
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}