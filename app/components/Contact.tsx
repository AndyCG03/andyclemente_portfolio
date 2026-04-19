"use client";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0b1326] to-[#0a1020]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#dae2fd] mb-2">
          {t.contact.title}{" "}
          <span className="text-[#4be277]">{t.contact.highlight}</span>
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#dae2fd] mb-6">
          {t.contact.together}
        </h2>

        <p className="text-[#94a3b8] max-w-md mx-auto mb-10 leading-relaxed">
          {t.contact.desc}
        </p>

        {/* CTA */}
        <a
          href="mailto:ing.andyclemente@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[#0b1326] bg-[#4be277] hover:bg-[#3dd168] transition-all duration-200"
        >
          {t.contact.btn}
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
