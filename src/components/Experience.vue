<template>
  <section id="experience" ref="sectionRef" class="py-24 relative">
    <div class="absolute right-8 bottom-12 font-mono text-[10rem] font-black text-[#4be277] select-none pointer-events-none leading-none" style="opacity:0.02" aria-hidden="true">#</div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div :class="['flex items-center gap-6 mb-16 transition-all duration-700 ease-out transform', headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
        <span class="font-mono text-xs text-[#4be277] tracking-widest uppercase">04_EXPERIENCE</span>
        <div class="h-px flex-grow bg-[#3d4a3d]/20" />
      </div>

      <div class="grid md:grid-cols-2 gap-16 lg:gap-24">
        <!-- Work column -->
        <div>
          <h2 :class="['text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12 transition-all duration-500 ease-out transform', visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0']">
            {{ t.experience.title }}
          </h2>
          <div class="relative pl-8 border-l border-[#2d3449]">
            <div
              v-for="(exp, i) in experiences"
              :key="i"
              :class="[
                'relative mb-12 last:mb-0 transition-all duration-500 ease-out transform',
                visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0',
              ]"
              :style="{ transitionDelay: `${i * 150 + 200}ms` }"
            >
              <div :class="[
                'absolute -left-[1.15rem] top-2 w-3.5 h-3.5 rounded-full border-2 border-[#0b1326] transition-all duration-300',
                i === 0 ? 'bg-[#4be277] shadow-[0_0_10px_rgba(75,226,119,0.5)]' : 'bg-[#2d3449] border-[#4be277]/40',
              ]" />
              <span class="font-mono text-xs text-[#4be277] tracking-widest block mb-2">{{ exp.period }}</span>
              <h3 class="text-xl font-bold text-[#dae2fd] mb-0.5">{{ exp.company }}</h3>
              <p class="font-mono text-sm text-[#64748b] mb-3">{{ exp.role }}</p>
              <p class="text-sm text-[#bcc7de] leading-relaxed">{{ exp.desc[lang] }}</p>
            </div>
          </div>
        </div>

        <!-- Education column -->
        <div>
          <h2
            :class="['text-3xl md:text-4xl font-black tracking-tighter text-[#dae2fd] mb-12 transition-all duration-500 ease-out transform', visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0']"
            style="transition-delay:100ms"
          >
            {{ t.experience.education }}
          </h2>

          <!-- Education card -->
          <div :class="['bg-[#131b2e] ghost-border rounded-sm p-8 mb-8 relative overflow-hidden transition-all duration-700 delay-300 ease-out transform', visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0']">
            <div class="absolute top-4 right-4 font-mono text-[6rem] font-black text-[#4be277] select-none pointer-events-none leading-none transition-opacity duration-700 delay-500" :style="{ opacity: visible ? 0.05 : 0 }" aria-hidden="true">A</div>
            <span class="font-mono text-xs text-[#4be277] tracking-widest block mb-4">Feb 2023 — Mar 2026</span>
            <h3 class="text-2xl font-black text-[#dae2fd] mb-1">Software Engineer</h3>
            <p class="font-mono text-sm text-[#64748b] mb-4">CUJAE · {{ lang === 'en' ? 'Havana, Cuba' : 'La Habana, Cuba' }}</p>
            <p class="text-sm text-[#bcc7de] leading-relaxed">{{ t.experience.edu.desc }}</p>
          </div>

          <!-- Achievements -->
          <div class="space-y-3">
            <div
              v-for="(item, index) in achievements"
              :key="item.label.en"
              :class="[
                'flex items-center gap-4 p-4 bg-[#131b2e] ghost-border rounded-sm transition-all duration-500 ease-out transform hover:border-[#4be277]/30 hover:bg-[#4be277]/5',
                visibleAchievements.includes(index) ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0',
              ]"
              :style="{ transitionDelay: `${index * 100 + 500}ms` }"
            >
              <span class="material-symbols-outlined text-2xl text-[#4be277]">{{ item.icon }}</span>
              <div>
                <p class="text-sm font-bold text-[#dae2fd]">{{ item.label[lang] }}</p>
                <p class="font-mono text-xs text-[#64748b]">{{ item.sub[lang] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()

const experiences = [
  {
    period: 'Mar 2025 — Present', company: 'BioCubaFarma (ETI)', role: 'Technical Programmer',
    desc: {
      en: 'Leading unified platform for multiple virtual assistants with RAG architecture. FastAPI with JWT, ChromaDB, PDF/DOCX processing and Whisper integration. Delegate at SIGESTIC 2025.',
      es: 'Liderando plataforma unificada para múltiples asistentes virtuales con arquitectura RAG. FastAPI con JWT, ChromaDB, procesamiento de PDF/DOCX e integración con Whisper. Delegado en SIGESTIC 2025.',
    },
  },
  {
    period: 'Nov 2024 — Jun 2025', company: 'Medialytic', role: 'Mobile Programmer',
    desc: {
      en: "Intensive Flutter training: Dart, Provider and REST APIs. Developed 'El Chismoso' — Flutter app with GPS and photo upload.",
      es: "Entrenamiento intensivo en Flutter: Dart, Provider y APIs REST. Desarrolló 'El Chismoso' — app Flutter con GPS y carga de fotos.",
    },
  },
  {
    period: 'Mar 2025 — Present', company: 'CUJAE', role: 'Teaching Assistant',
    desc: {
      en: 'Introductory Programming (C) instructor for 1st semester Computer Engineering students. Object-Oriented Programming (Java) instructor for 2nd semester students.',
      es: 'Instructor de Programación Introductoria (C) para estudiantes de 1er semestre de Ingeniería en Computación. Instructor de Programación Orientada a Objetos (Java) para estudiantes de 2do semestre.',
    },
  },
]

const achievements = [
  { icon: 'emoji_events', label: { en: 'ICPC Caribbean Finals', es: 'Finales del Caribe ICPC' }, sub: { en: '3× · Best: #37', es: '3× · Mejor: #37' } },
  { icon: 'description',  label: { en: 'RENIA Publication', es: 'Publicación RENIA' }, sub: { en: 'Smart Greenhouse Prototype', es: 'Prototipo de Invernadero Inteligente' } },
  { icon: 'public',       label: { en: 'UNESCO', es: 'UNESCO' }, sub: { en: '2024 & 2025', es: '2024 & 2025' } },
  { icon: 'sports_esports', label: { en: 'Global Game Jam 2025', es: 'Global Game Jam 2025' }, sub: { en: 'AVANCODE 2025', es: 'AVANCODE 2025' } },
]

const sectionRef         = ref(null)
const headerVisible      = ref(false)
const visible            = ref(false)
const visibleAchievements = ref([])

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      headerVisible.value = true
      setTimeout(() => { visible.value = true }, 200)
      achievements.forEach((_, i) => {
        setTimeout(() => { visibleAchievements.value.push(i) }, 500 + i * 100)
      })
      observer.disconnect()
    }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>
