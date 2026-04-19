<template>
  <section ref="sectionRef" class="relative py-8 md:py-12 overflow-hidden">
    <div class="absolute inset-0 bg-[#131b2e]" />
    <div class="absolute inset-0 bg-gradient-to-r from-[#4be277]/3 via-transparent to-[#4be277]/3" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          :class="[
            'stat-card px-2 sm:px-4 md:px-8 py-3 sm:py-4 text-center transition-all duration-500 ease-out transform',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
          ]"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="text-2xl sm:text-3xl md:text-5xl font-black gradient-text mb-1 sm:mb-2 leading-none">
            {{ stat.value }}
          </div>
          <!-- Label responsive: versión corta en mobile, completa en desktop -->
          <div class="font-mono text-[10px] sm:text-xs md:text-sm text-[#64748b] uppercase tracking-wider sm:tracking-widest leading-tight">
            <span class="sm:hidden">{{ stat.shortLabel }}</span>
            <span class="hidden sm:inline">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const sectionRef = ref(null)
const visible = ref(false)

const stats = computed(() => [
  { 
    value: t.value.stats.experience,  
    label: t.value.stats.experienceLabel,
    shortLabel: 'EXP'
  },
  { 
    value: t.value.stats.projects,    
    label: t.value.stats.projectsLabel,
    shortLabel: 'SHIPPED'
  },
  { 
    value: t.value.stats.graduation,  
    label: t.value.stats.graduationLabel,
    shortLabel: 'SWE'
  },
])

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { visible.value = true; observer.disconnect() }
  }, { threshold: 0.3 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
/* Asegurar que el texto no se desborde */
.stat-card {
  min-width: 0;
  overflow: hidden;
}
</style>