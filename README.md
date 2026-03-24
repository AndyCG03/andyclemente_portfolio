# Andy Clemente — Portfolio

Dark terminal-aesthetic personal portfolio built with Node.js + Express.

## 🚀 Run Locally

```bash
# 1. Instala dependencias
npm install

# 2. Modo desarrollo (auto-reload)
npm run dev

# 3. Modo producción
npm start
```

Abre: **http://localhost:3000**

---

## 📦 Estructura del proyecto

```
portfolio/
├── server.js           ← Servidor Express
├── package.json
├── public/
│   ├── index.html      ← Página principal
│   ├── css/
│   │   └── style.css   ← Estilos dark + animaciones
│   └── js/
│       └── main.js     ← Cursor, terminal typewriter, scroll reveal
└── README.md
```

---

## 🌐 Deploy en Hostinger

### Opción A — Hostinger VPS / Hosting con Node.js
Si tienes un plan **VPS** o un plan con soporte Node.js:

1. Conecta vía SSH:
   ```bash
   ssh tu_usuario@tu_ip
   ```

2. Sube el proyecto (vía FTP/SFTP o Git):
   ```bash
   git clone <tu-repo> portfolio
   cd portfolio
   npm install --production
   ```

3. Instala PM2 para mantenerlo activo:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "portfolio"
   pm2 save
   pm2 startup
   ```

4. Configura el dominio en hPanel apuntando al puerto 3000.

---

### Opción B — Plan WordPress (STATIC HOSTING)
Si tu plan de WordPress **no soporta Node.js nativamente**, sube solo los archivos estáticos:

1. En el `public/` está toda la web: `index.html`, `css/`, `js/`
2. **Sube la carpeta `public/`** via FTP al directorio `public_html/` de Hostinger.
3. La página funcionará perfectamente como sitio estático puro (HTML/CSS/JS), **sin necesitar Node.js**.

> 💡 El servidor Express solo sirve archivos estáticos — la web es 100% HTML/CSS/JS sin backend dinámico.

---

### Opción C — Deploy con Node.js en hPanel
Hostinger ofrece Node.js en algunos planes Business y Premium:

1. Ve a **hPanel → Sitios web → Node.js**
2. Crea una nueva app Node.js:
   - **Versión**: 18.x o 20.x
   - **Startup file**: `server.js`
   - **Port**: 3000
3. Sube los archivos via File Manager o Git Deployer
4. Clic en **Start**

---

## 🔧 Personalización

Edita `public/index.html` para actualizar:
- Proyectos (sección `#projects`)
- Experiencia (sección `#experience`)
- Links de contacto

Edita `public/css/style.css` para cambiar:
- Colores: variables CSS al inicio del archivo
- Fuentes: línea `@import url(...)`

---

## ✅ Checklist pre-deploy

- [ ] Actualizar email de contacto (busca `andyclmentegago@gmail.com`)
- [ ] Actualizar links de GitHub (`AndyCG03`)
- [ ] Actualizar links de LinkedIn (`andy-clemente`)
- [ ] Verificar número de teléfono (`+53 55847601`)
- [ ] Añadir proyectos reales con links correctos

---

*Creado con ♥ — Dark terminal aesthetic × Andy Clemente Gago*
