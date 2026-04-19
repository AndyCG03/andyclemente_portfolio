<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-500 ease-out transform',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      scrolled
        ? 'bg-[#0b1326]/80 backdrop-blur-xl shadow-lg shadow-black/30'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <img
          src="/Logo.png"
          alt="Logo"
          class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link text-sm font-medium text-[#bcc7de] hover:text-slate-100 transition-colors pb-1"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right controls -->
      <div class="flex items-center gap-3">
        <!-- Lang toggle -->
        <button
          @click="setLang(lang === 'en' ? 'es' : 'en')"
          class="flex items-center gap-1 px-3 py-1.5 rounded-sm bg-[#171f33] ghost-border font-mono text-xs text-[#bcc7de] hover:text-[#4be277] hover:border-[#4be277]/30 transition-all"
        >
          <span :class="lang === 'en' ? 'text-[#4be277]' : ''">EN</span>
          <span class="text-[#3d4a3d]">/</span>
          <span :class="lang === 'es' ? 'text-[#4be277]' : ''">ES</span>
        </button>

        <a
          href="#contact"
          class="hidden md:inline-flex bg-gradient-to-br from-[#4be277] to-[#22c55e] text-[#002109] px-5 py-2 font-bold rounded-md hover:-translate-y-0.5 transition-transform"
        >
          {{ t.nav.contact }}
        </a>

        <!-- Hamburger -->
        <button @click="menuOpen = !menuOpen" class="md:hidden p-2 text-[#bcc7de]">
          <div :class="['w-5 h-0.5 bg-current mb-1 transition-all', menuOpen ? 'rotate-45 translate-y-1.5' : '']" />
          <div :class="['w-5 h-0.5 bg-current mb-1 transition-all', menuOpen ? 'opacity-0' : '']" />
          <div :class="['w-5 h-0.5 bg-current transition-all', menuOpen ? '-rotate-45 -translate-y-1.5' : '']" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-[#0b1326]/95 backdrop-blur-xl border-t border-[#3d4a3d]/20 px-6 py-4 flex flex-col gap-4 animate-fade-in-down"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="menuOpen = false"
        class="text-sm text-[#bcc7de] hover:text-[#4be277] transition-colors py-1 font-mono"
      >
        <span class="text-[#4be277] mr-2">&gt;_</span>{{ link.label }}
      </a>
      <a
        href="#contact"
        @click="menuOpen = false"
        class="inline-flex items-center justify-center px-5 py-2 rounded-sm font-bold text-sm text-[#002109] mt-2 bg-gradient-to-br from-[#4be277] to-[#22c55e]"
      >
        {{ t.nav.contact }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, setLang, t } = useLang()

const scrolled   = ref(false)
const menuOpen   = ref(false)
const isVisible  = ref(false)

const navLinks = computed(() => [
  { href: '#projects',   label: t.value.nav.projects },
  { href: '#skills',     label: t.value.nav.skills },
  { href: '#experience', label: t.value.nav.experience },
])

function onScroll() { scrolled.value = window.scrollY > 20 }

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  isVisible.value = true
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
