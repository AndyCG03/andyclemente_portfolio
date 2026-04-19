"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

export type Translations = {
  nav: {
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    role: string;
    bio: string;
    cta_work: string;
    cta_cv: string;
  };
  projects: {
    title: string;
    view: string;
    all: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
    education: string;
    edu: {
      desc: string;
    };
  };
  contact: {
    title: string;
    highlight: string;
    together: string;
    desc: string;
    btn: string;
  };
  footer: {
    copy: string;
  };
  stats: {
    experience: string;
    experienceLabel: string;
    projects: string;
    projectsLabel: string;
    graduation: string;
    graduationLabel: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "Open to opportunities",
      role: "Software Engineer & AI Developer",
      bio: "Software Engineer specialized in AI, Fullstack development, Mobile apps, and Digital Marketing. Building intelligent solutions that connect technology with people.",
      cta_work: "View My Work",
      cta_cv: "Download CV",
    },
    projects: {
      title: "Projects",
      view: "View on GitHub",
      all: "View all repositories on GitHub",
    },
    skills: {
      title: "Technical Stack",
    },
    experience: {
      title: "Work Experience",
      education: "Education",
      edu: {
        desc: "3× ICPC Caribbean Finals participant · Best ranking: #37 in the Caribbean · RENIA Publication: 'Smart Greenhouse Prototype' · UNESCO 2024 & 2025 · AVANCODE 2025 · Global Game Jam 2025",
      },
    },
    contact: {
      title: "Let's build something",
      highlight: "meaningful",
      together: "together.",
      desc: "Currently open to freelance projects and collaboration opportunities.",
      btn: "Work With Me",
    },
    footer: {
      copy: "© 2025 Andy Clemente Gago · La Habana, Cuba · Software Engineer",
    },
    stats: {
      experience: "1+",
      experienceLabel: "YEAR EXPERIENCE",
      projects: "5+",
      projectsLabel: "SOLUTIONS DEPLOYED",
      graduation: "2026",
      graduationLabel: "Software Engineer",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      badge: "Abierto a oportunidades",
      role: "Ingeniero Informático y Especialista en IA",
      bio: "Ingeniero de Software especializado en IA, desarrollo Fullstack, apps móviles y Marketing Digital. Construyendo soluciones inteligentes que conectan la tecnología con las personas.",
      cta_work: "Ver mi trabajo",
      cta_cv: "Descargar CV",
    },
    projects: {
      title: "Proyectos",
      view: "Ver en GitHub",
      all: "Ver todos los repositorios en GitHub",
    },
    skills: {
      title: "Stack Técnico",
    },
    experience: {
      title: "Experiencia Laboral",
      education: "Educación",
      edu: {
        desc: "3× participante en la Final del Caribe de la ICPC · Mejor ranking: #37 en el Caribe · Publicación en RENIA: 'Prototipo de Casa de Cultivo Inteligente' · UNESCO 2024 & 2025 · AVANCODE 2025 · Global Game Jam 2025",
      },
    },
    contact: {
      title: "Construyamos algo",
      highlight: "significativo",
      together: "juntos.",
      desc: "Actualmente abierto a proyectos freelance y oportunidades de colaboración.",
      btn: "Trabajar conmigo",
    },
    footer: {
      copy: "© 2025 Andy Clemente Gago · La Habana, Cuba · Ingeniero Informático",
    },
    stats: {
      experience: "1+",
      experienceLabel: "AÑO DE EXPERIENCIA",
      projects: "5+",
      projectsLabel: "SOLUCIONES DESPLEGADAS",
      graduation: "2026",
      graduationLabel: "Ingeniero Informático",
    },
  },
};

const LangContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);