# Andy Clemente — Portfolio (Vue 3 + Vite)

## Stack
- **Vue 3** (Composition API + `<script setup>`)
- **Vite 5** — dev server ultrarrápido y build optimizado
- **Tailwind CSS 3** — mismo sistema de estilos que el original
- **@iconify/vue** — todos los íconos en un solo paquete

---

## Inicio rápido

```bash
npm install   # instalar dependencias
npm run dev   # servidor de desarrollo → http://localhost:5173
npm run build # build de producción → carpeta dist/
npm run preview # previsualizar build
```

---

## Archivos públicos — copiar a /public/

| Archivo               | Descripción           |
|-----------------------|-----------------------|
| `andy.jpg`            | Foto de perfil        |
| `Icono.png`           | Ícono del navbar      |
| `Logo.png`            | Logo del footer       |
| `favicon.ico`         | Favicon               |
| `Andy_Clemente_CV.pdf`| CV descargable        |

---

## Deploy

**Vercel / Netlify:** build command `npm run build`, output dir `dist`

**Nginx:** servir `dist/index.html` para todas las rutas (SPA)

**GitHub Pages:** añadir `base: '/<repo>/'` en vite.config.js y usar `gh-pages -d dist`
