<template>
  <LoadingScreen v-if="!mounted" />
  <ScrollProgress />
  <Navbar />
  <main>
    <Hero />
    <StatsBar />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingScreen  from './components/LoadingScreen.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import Navbar     from './components/Navbar.vue'
import Hero       from './components/Hero.vue'
import StatsBar   from './components/StatsBar.vue'
import Projects   from './components/Projects.vue'
import Skills     from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact    from './components/Contact.vue'
import Footer     from './components/Footer.vue'

const mounted = ref(false)
onMounted(() => { mounted.value = true })
</script>
