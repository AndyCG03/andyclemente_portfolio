<template>
  <section id="skills" ref="sectionRef" class="py-24 bg-[#131b2e] relative overflow-hidden">
    <div class="absolute left-0 top-0 font-mono text-[18rem] font-black text-[#4be277] select-none pointer-events-none leading-none" style="opacity:0.018" aria-hidden="true">&lt;/&gt;</div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div :class="['flex items-center gap-6 mb-16 transition-all duration-700 ease-out transform', headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0']">
        <span class="font-mono text-xs text-[#4be277] tracking-widest uppercase">03_STACK</span>
        <div class="h-px flex-grow bg-[#3d4a3d]/20" />
        <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-[#dae2fd] whitespace-nowrap">{{ t.skills.title }}</h2>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(group, index) in skillGroups"
          :key="index"
          :class="[
            'bg-[#0b1326] ghost-border rounded-sm p-6 transition-all duration-500 ease-out transform',
            visibleGroups.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <h3 :class="['font-mono text-xs text-[#64748b] uppercase tracking-widest mb-5 transition-all duration-500 delay-200', visibleGroups.includes(index) ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0']">
            {{ group.category[lang] }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, si) in group.skills"
              :key="skill.name"
              :class="[
                'skill-chip px-3 py-1.5 bg-[#171f33] ghost-border rounded-sm font-mono text-xs text-[#bcc7de] flex items-center gap-1.5 cursor-default transition-all duration-300 ease-out',
                visibleGroups.includes(index) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95',
              ]"
              :style="{ transitionDelay: `${index * 150 + si * 50}ms` }"
            >
              <Icon :icon="skill.icon" class="text-[#4be277] text-sm" />
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div :class="['mt-12 p-8 bg-[#0b1326] border-l-2 border-[#4be277] relative overflow-hidden transition-all duration-700 delay-500 ease-out transform', quoteVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0']">
        <div class="absolute -right-4 -bottom-4 font-mono text-[8rem] text-[#4be277] select-none pointer-events-none leading-none font-black" style="opacity:0.05" aria-hidden="true">{ }</div>
        <p class="font-mono text-sm text-[#bcc7de] relative z-10 italic">
          <span class="text-[#4be277] not-italic">// </span>
          {{ lang === 'en'
            ? "Complex problems don't need complex solutions. Just clean code, clear thinking, and purpose."
            : "Los problemas complejos no necesitan soluciones complejas. Solo código limpio, pensamiento claro y propósito." }}
        </p>
        <p class="font-mono text-xs text-[#64748b] mt-2 relative z-10 transition-all duration-500 delay-700" :style="{ opacity: quoteVisible ? 1 : 0 }">
          — Andy Clemente Gago
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()

const skillGroups = [
  {
    category: { en: 'Mobile', es: 'Mobile' },
    skills: [
      { name: 'Flutter',        icon: 'simple-icons:flutter' },
      { name: 'Dart',           icon: 'simple-icons:dart' },
      { name: 'Provider',       icon: 'mdi:cog' },
      { name: 'Android Studio', icon: 'mdi:android-studio' },
    ],
  },
  {
    category: { en: 'AI & Backend', es: 'IA & Backend' },
    skills: [
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Python',  icon: 'simple-icons:python' },
      { name: 'RAG',     icon: 'mdi:brain' },
      { name: 'NestJS',  icon: 'simple-icons:nestjs' },
      { name: 'Whisper', icon: 'simple-icons:openai' },
    ],
  },
  {
    category: { en: 'Languages', es: 'Lenguajes' },
    skills: [
      { name: 'Java',       icon: 'simple-icons:openjdk' },
      { name: 'C',          icon: 'simple-icons:c' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Vue.js',     icon: 'simple-icons:vuedotjs' },
    ],
  },
  {
    category: { en: 'Databases', es: 'Bases de Datos' },
    skills: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL',      icon: 'simple-icons:mysql' },
      { name: 'SQLite',     icon: 'simple-icons:sqlite' },
      { name: 'ChromaDB',   icon: 'mdi:database' },
    ],
  },
  {
    category: { en: 'Tools', es: 'Herramientas' },
    skills: [
      { name: 'Git',    icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'VS Code',icon: 'simple-icons:visualstudiocode' },
      { name: 'LaTeX',  icon: 'simple-icons:latex' },
      { name: 'FFmpeg', icon: 'simple-icons:ffmpeg' },
    ],
  },
  {
    category: { en: 'Design & Other', es: 'Diseño y Otros' },
    skills: [
      { name: 'Canva',     icon: 'simple-icons:canva' },
      { name: 'Adobe',     icon: 'simple-icons:adobe' },
      { name: 'WordPress', icon: 'simple-icons:wordpress' },
    ],
  },
]

const sectionRef    = ref(null)
const headerVisible = ref(false)
const visibleGroups = ref([])
const quoteVisible  = ref(false)

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      headerVisible.value = true
      skillGroups.forEach((_, i) => {
        setTimeout(() => { visibleGroups.value.push(i) }, i * 150)
      })
      setTimeout(() => { quoteVisible.value = true }, skillGroups.length * 150 + 300)
      observer.disconnect()
    }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>
