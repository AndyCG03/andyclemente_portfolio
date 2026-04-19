<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[100] bg-[#0b1326] flex flex-col items-center justify-center"
    >
      <div class="relative mb-8">
        <div class="w-20 h-20 border-4 border-[#2d3449] rounded-full animate-spin-slow border-t-[#4be277]" />
        <div class="absolute inset-0 flex items-center justify-center">
          <img src="/Icono.png" alt="Logo" class="w-8 h-8 object-contain" />
        </div>
      </div>
      <p class="font-mono text-sm text-[#4be277] animate-pulse">Loading...</p>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  const timer = setTimeout(() => { isLoading.value = false }, 1500)
  window.addEventListener('load', () => {
    setTimeout(() => { isLoading.value = false }, 300)
  }, { once: true })
  return () => clearTimeout(timer)
})
</script>

<style scoped>
.fade-leave-active { transition: opacity 0.5s ease; }
.fade-leave-to    { opacity: 0; }
</style>
