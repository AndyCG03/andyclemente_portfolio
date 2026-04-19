<template>
  <section id="projects" ref="sectionRef" class="py-24 relative">
    <div class="absolute right-8 top-12 font-mono text-[10rem] font-black text-[#4be277] select-none pointer-events-none leading-none" style="opacity:0.02" aria-hidden="true">fn()</div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div :class="['flex items-center gap-6 mb-16 transition-all duration-700 ease-out transform', headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
        <span class="font-mono text-xs text-[#4be277] tracking-widest uppercase">02_PROJECTS</span>
        <div class="h-px flex-grow bg-[#3d4a3d]/20" />
        <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-[#dae2fd] whitespace-nowrap">{{ t.projects.title }}</h2>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(project, index) in projects"
          :key="project.num"
          :class="[
            'project-card group block bg-[#131b2e] ghost-border rounded-sm p-6 relative overflow-hidden transition-all duration-500 ease-out transform',
            visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div v-if="project.featured" class="absolute top-4 right-4 font-mono text-xs px-2 py-0.5 rounded-sm bg-[#4be277]/10 text-[#4be277] border border-[#4be277]/20 z-10">★ Featured</div>

          <div class="font-mono text-4xl font-black text-[#2d3449] mb-4 group-hover:text-[#4be277]/20 transition-colors select-none">{{ project.num }}</div>

          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="{ backgroundColor: langColors[project.lang] || '#64748b' }" />
            <span class="font-mono text-xs text-[#64748b]">{{ project.lang }}</span>
          </div>

          <h3 class="text-lg font-bold text-[#dae2fd] mb-3 group-hover:text-[#4be277] transition-colors font-mono">{{ project.name }}</h3>
          <p class="text-sm text-[#bcc7de] leading-relaxed mb-5">{{ project.desc[lang] }}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" class="skill-chip px-2.5 py-1 rounded-sm bg-[#2d3449] font-mono text-xs text-[#94a3b8]">{{ tag }}</span>
          </div>

          <a
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-sm bg-[#0b1326] ghost-border text-[#4be277] hover:bg-[#4be277]/10 transition-all w-full group/btn"
            aria-label="View on GitHub"
          >
            <Icon icon="simple-icons:github" class="text-lg" />
            <Icon icon="mdi:open-in-new" class="text-sm" />
          </a>

          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4be277] to-[#22c55e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </div>
      </div>

      <!-- All repos button -->
      <div :class="['mt-12 text-center transition-all duration-700 delay-500 ease-out transform', allVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
        <a
          href="https://github.com/AndyCG03?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-6 py-3 rounded-md font-mono text-sm text-[#4be277] ghost-border hover:bg-[#4be277]/10 hover:text-[#6bff8f] transition-all group"
        >
          <Icon icon="simple-icons:github" class="text-lg" />
          <span>{{ t.projects.all }}</span>
          <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()

const projects = [
  {
    num: '01', name: 'devisistore', lang: 'JavaScript / Node.js',
    desc: {
      en: 'Multi-user digital catalog platform. Each business has its own public page with products, images, prices, high customization and direct WhatsApp contact.',
      es: 'Plataforma multi-usuario de catálogos digitales. Cada negocio tiene su propia página pública con productos, imágenes, precios, alta personalización y contacto directo por WhatsApp.',
    },
    tags: ['Node.js', 'Express', 'SQLite', 'EJS', 'TailwindCSS'],
    href: 'https://github.com/AndyCG03/devisistore', featured: true,
  },
  {
    num: '02', name: 'ai-api-service', lang: 'Python',
    desc: {
      en: 'REST API with FastAPI for local AI services: text generation, audio transcription, embeddings and OCR. Optimized for limited resources.',
      es: 'API REST con FastAPI para servicios de IA locales: generación de texto, transcripción de audio, embeddings y OCR. Optimizado para recursos limitados.',
    },
    tags: ['FastAPI', 'RAG', 'Whisper', 'OCR'],
    href: 'https://github.com/AndyCG03/ai-api-service', featured: false,
  },
  {
    num: '03', name: 'backend-smart-task', lang: 'Python',
    desc: {
      en: 'Backend for a ticket management solution for developers with integrated AI. Architecture oriented towards development teams.',
      es: 'Backend para una solución de gestión de tickets para programadores con IA integrada. Arquitectura orientada a equipos de desarrollo.',
    },
    tags: ['Python', 'AI', 'Tickets', 'Backend'],
    href: 'https://github.com/AndyCG03/backend-smart-task', featured: false,
  },
  {
    num: '04', name: 'biocu', lang: 'Flutter / Dart',
    desc: {
      en: 'Flutter + NestJS platform to report environmental issues. Mobile app with citizen reporting system and integrated backend.',
      es: 'Plataforma Flutter + NestJS para reportar problemas ambientales. App móvil con sistema de reportes ciudadanos y backend integrado.',
    },
    tags: ['Flutter', 'Dart', 'NestJS', 'Environment'],
    href: 'https://github.com/AndyCG03/biocu', featured: false,
  },
  {
    num: '05', name: 'al_toque_app', lang: 'Flutter / Dart',
    desc: {
      en: 'Flutter app to check real-time exchange rates in Cuba. Converts between informal market currencies quickly and efficiently.',
      es: 'App Flutter para consultar tasas de cambio en Cuba en tiempo real. Convierte entre monedas del mercado informal rápida y eficientemente.',
    },
    tags: ['Flutter', 'Dart', 'Cuba', 'Finance'],
    href: 'https://github.com/AndyCG03/al_toque_app', featured: false,
  },
  {
    num: '06', name: 'VidCrush Pro', lang: 'Shell',
    desc: {
      en: 'Professional video compressor via terminal with FFmpeg. Magic Folder mode: drag a folder and automatically process videos. Creates optimized GIFs.',
      es: 'Compresor de video profesional vía terminal con FFmpeg. Modo Carpeta Mágica: arrastra una carpeta y procesa videos automáticamente. Crea GIFs optimizados.',
    },
    tags: ['Shell', 'FFmpeg', 'CLI', 'Video'],
    href: 'https://github.com/AndyCG03/VidCrush---Video-Compresor', featured: false,
  },
]

const langColors = {
  'JavaScript / Node.js': '#f1e05a',
  'Python': '#3572A5',
  'Flutter / Dart': '#00B4AB',
  'Shell': '#89e051',
}

const sectionRef    = ref(null)
const headerVisible = ref(false)
const visibleItems  = ref([])
const allVisible    = computed(() => visibleItems.value.length === projects.length)

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      headerVisible.value = true
      projects.forEach((_, i) => {
        setTimeout(() => { visibleItems.value.push(i) }, i * 100)
      })
      observer.disconnect()
    }
  }, { threshold: 0.1 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>
