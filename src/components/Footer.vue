<template>
  <footer ref="footerRef" class="bg-[#060e20] border-t border-[#3d4a3d]/20 py-12 px-6">
    <div :class="[
      'max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out transform',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
    ]">
      <div class="flex items-center gap-3">
        <img src="/Logo.png" alt="Logo" class="h-10 w-auto object-contain" />
      </div>

      <p class="font-mono text-xs text-[#3d4a3d] text-center">{{ t.footer.copy }}</p>

      <div class="flex gap-6">
        <a v-for="s in socials" :key="s.href" :href="s.href" target="_blank" rel="noopener noreferrer"
           :aria-label="s.label" class="text-[#3d4a3d] hover:text-[#4be277] transition-colors">
          <Icon :icon="s.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const footerRef = ref(null)
const isVisible = ref(false)

const socials = [
  { href: 'https://github.com/AndyCG03',           icon: 'fa6-brands:github',    label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/andy-clemente-gago-7590362a4?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'fa6-brands:linkedin',  label: 'LinkedIn' },
  { href: 'https://x.com/AndyClemente6',           icon: 'fa6-brands:twitter',   label: 'X / Twitter' },
  { href: 'https://instagram.com/ing.andyclemente',     icon: 'fa6-brands:instagram', label: 'Instagram' },
]

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { isVisible.value = true; observer.disconnect() }
  }, { threshold: 0.1 })
  if (footerRef.value) observer.observe(footerRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>
