<template>
  <section ref="sectionRef" class="relative py-12 overflow-hidden">
    <div class="absolute inset-0 bg-[#131b2e]" />
    <div class="absolute inset-0 bg-gradient-to-r from-[#4be277]/3 via-transparent to-[#4be277]/3" />

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-3 gap-4 md:gap-8 divide-x divide-[#3d4a3d]/20">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          :class="[
            'stat-card px-4 md:px-8 py-4 text-center transition-all duration-500 ease-out transform',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
          ]"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="text-3xl md:text-5xl font-black gradient-text mb-2 leading-none">{{ stat.value }}</div>
          <div class="font-mono text-xs md:text-sm text-[#64748b] uppercase tracking-widest">{{ stat.label }}</div>
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
  { value: t.value.stats.experience,  label: t.value.stats.experienceLabel },
  { value: t.value.stats.projects,    label: t.value.stats.projectsLabel },
  { value: t.value.stats.graduation,  label: t.value.stats.graduationLabel },
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
