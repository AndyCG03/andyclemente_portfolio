import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // Public folder assets (/Icono.png, /andy.jpg, etc.) are served as-is
      // and should not be treated as module imports during build
      onwarn(warning, warn) {
        if (
          warning.code === 'UNRESOLVED_IMPORT' &&
          warning.exporter?.startsWith('/')
        ) return
        warn(warning)
      },
    },
  },
})
