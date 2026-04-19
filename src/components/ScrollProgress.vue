<template>
  <div class="fixed top-0 left-0 w-full h-1 z-[60]">
    <div
      class="h-full bg-gradient-to-r from-[#4be277] to-[#22c55e] transition-all duration-200"
      :style="{ width: scrollProgress + '%' }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

function handleScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / total) * 100
}

onMounted(()   => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
