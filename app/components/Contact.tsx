"use client";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Big BG text */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black text-[20rem] text-[#4be277] select-none pointer-events-none leading-none"
        style={{ opacity: 0.015 }}
        aria-hidden
      >
        {`>_`}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#131b2e] ghost-border rounded-sm p-12 md:p-20 text-center relative overflow-hidden">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#4be277] to-transparent" />

          {/* Section label */}
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:ing.andyclemente@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-sm font-bold text-[#002109] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(75,226,119,0.3)]"
              style={{ background: "linear-gradient(135deg, #4be277, #22c55e)" }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.contact.btn}
            </a>
            <a
              href="https://linkedin.com/in/andy-clemente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:ing.andyclemente@gmail.com"
              className="flex items-center gap-2 font-mono text-sm text-[#64748b] hover:text-[#4be277] transition-colors"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ing.andyclemente@gmail.com
            </a>
            <a
              href="tel:+5355847601"
              className="flex items-center gap-2 font-mono text-sm text-[#64748b] hover:text-[#4be277] transition-colors"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.36-.36a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +53 55847601
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
