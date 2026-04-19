<template>
  <section class="relative min-h-screen flex items-center pt-12 md:pt-18 overflow-hidden hero-gradient">
    <!-- Watermarks -->
    <div class="absolute right-0 top-1/4 text-[20rem] font-black text-[#4be277] pointer-events-none select-none leading-none" style="opacity:0.025" aria-hidden="true">{ }</div>
    <div class="absolute left-0 bottom-0 text-[16rem] font-black font-mono text-[#4be277] pointer-events-none select-none leading-none" style="opacity:0.02" aria-hidden="true">&gt;_</div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 w-full py-6 md:py-12">
      <div class="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">

        <!-- Photo -->
        <div :class="['order-1 md:order-2 flex justify-center w-full transition-all duration-700 delay-300 ease-out transform', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
          <div class="relative">
            <div class="absolute inset-0 bg-[#4be277]/15 blur-[80px] rounded-full scale-75" />
            <div class="relative z-10 w-56 sm:w-64 md:w-72 lg:w-80">
              <div class="bg-[#171f33] ghost-border rounded-t-lg px-3 py-2 flex items-center gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span class="ml-2 font-mono text-[10px] sm:text-xs text-[#64748b] truncate">andy_clemente.jpg</span>
              </div>
              <div class="relative overflow-hidden ghost-border border-t-0 rounded-b-lg">
                <img src="/andy.jpg" alt="Andy Clemente" class="w-full object-cover object-top" style="aspect-ratio:4/5" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent" />
                <!-- Tags -->
                <div class="absolute bottom-3 left-3 right-3">
                  <div class="flex flex-wrap gap-1.5 justify-center">
                    <span v-for="tag in photoTags" :key="tag.label" class="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-[#0b1326]/80 backdrop-blur-sm font-mono text-[9px] sm:text-[10px] text-[#4be277]">
                      <span v-if="tag.pulse" class="w-1 h-1 rounded-full bg-[#4be277] inline-block animate-pulse" />
                      <span v-else class="material-symbols-outlined" style="font-size:10px">{{ tag.icon }}</span>
                      {{ tag.label }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div :class="['order-2 md:order-1 relative z-10 w-full transition-all duration-700 ease-out transform', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 md:mb-8 rounded-sm bg-[#171f33] ghost-border font-mono text-xs text-[#4be277] tracking-widest uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-[#4be277] inline-block animate-pulse" />
            {{ t.hero.badge }}
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#dae2fd] mb-3 leading-[1.1]">
            Andy <span class="gradient-text">Clemente</span>
          </h1>

          <div class="font-mono text-base md:text-lg text-[#bcc7de] mb-2 tracking-widest flex items-center gap-2">
            <span class="text-[#4be277]">//</span> {{ t.hero.role }}
          </div>

          <div class="font-mono text-xs text-[#64748b] mb-6 md:mb-8 flex items-center gap-1 flex-wrap">
            <span class="text-[#22c55e]">&gt;_</span>
            <span>la_habana</span>
            <span class="text-[#3d4a3d]">/</span>
            <span>cuba</span>
            <span class="cursor-blink ml-1 text-[#4be277]">|</span>
          </div>

          <p class="text-sm sm:text-base lg:text-lg text-[#bcc7de] max-w-lg mb-8 leading-relaxed">
            {{ t.hero.bio }}
          </p>

          <!-- Botones: en mobile centrados y en una línea si es posible -->
          <div class="flex flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <a
              href="#projects"
              class="group inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md font-bold text-[#002109] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(75,226,119,0.3)] text-xs sm:text-sm md:text-base"
              style="background: linear-gradient(135deg, #4be277, #22c55e)"
            >
              {{ t.hero.cta_work }}
              <Icon icon="mdi:arrow-right" class="text-sm" />
            </a>
            <a
              href="/Andy_Clemente_CV.pdf"
              download="Andy_Clemente_CV.pdf"
              class="group inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md font-bold text-[#4be277] ghost-border hover:bg-[#4be277]/10 transition-all relative overflow-hidden text-xs sm:text-sm md:text-base"
            >
              <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#4be277] to-[#22c55e] group-hover:w-full transition-all duration-300" />
              <Icon icon="mdi:download" class="text-sm" />
              {{ t.hero.cta_cv }}
            </a>
          </div>

          <!-- Redes sociales centradas en mobile -->
          <div class="flex items-center justify-center md:justify-start gap-4 md:gap-5 mt-8 md:mt-10">
            <a v-for="s in socials" :key="s.href" :href="s.href" target="_blank" rel="noopener noreferrer" :aria-label="s.label"
               class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-sm bg-[#171f33] ghost-border text-[#64748b] hover:text-[#4be277] hover:bg-[#4be277]/10 transition-all">
              <Icon :icon="s.icon" class="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const isVisible = ref(false)

const photoTags = [
  { label: 'Software Engineer', pulse: true },
  { label: 'AI',       icon: 'psychology' },
  { label: 'Mobile',   icon: 'smartphone' },
  { label: 'Fullstack',icon: 'code' },
  { label: 'Marketing',icon: 'campaign' },
]

const socials = [
  { href: 'https://github.com/AndyCG03',           icon: 'fa6-brands:github',    label: 'GitHub' },
  { href: 'https://linkedin.com/in/andy-clemente', icon: 'fa6-brands:linkedin',  label: 'LinkedIn' },
  { href: 'https://x.com/AndyClemente6',           icon: 'fa6-brands:twitter',   label: 'X / Twitter' },
  { href: 'https://instagram.com/ing.andyclemente',icon: 'fa6-brands:instagram', label: 'Instagram' },
]

onMounted(() => { isVisible.value = true })
</script>