<div align="center">

# ✦ Portafolio · Miguel Ferrer ✦

### Diseño visual · Identidad creativa · Proyectos personales

[![Vercel](https://img.shields.io/badge/Desplegado%20en-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📌 Sobre el proyecto

Este portafolio es la **primera presentación profesional online** de Miguel Ferrer, diseñador visual y creador de contenido. Nació con la intención de reunir en un solo lugar su identidad, su trabajo y su forma de comunicar — con una experiencia de usuario cuidada, rápida y visualmente coherente.

El objetivo no era solo tener presencia online, sino construir algo que **realmente representara** quién es Miguel y cómo trabaja.

---

## 🗂️ Secciones del portafolio

| Sección | Descripción |
|---|---|
| 👤 **Sobre mí** | Presentación personal, trayectoria y enfoque creativo |
| 🎨 **Galería** | Muestra de trabajos visuales y proyectos destacados |
| 🛠️ **Habilidades** | Stack de herramientas, software y competencias |
| 📁 **Proyectos** | Casos de estudio con contexto, proceso y resultado |

---

## ⚙️ Stack tecnológico

El proyecto fue construido desde cero con un stack moderno, enfocado en **rendimiento, mantenibilidad y experiencia visual**:

- **[Vite](https://vitejs.dev)** — Bundler ultrarrápido para desarrollo y producción
- **[TypeScript](https://www.typescriptlang.org)** — Tipado estático para un código más robusto y predecible
- **[Tailwind CSS](https://tailwindcss.com)** — Utilidades CSS para un diseño ágil y consistente
- **[EmailJS](https://www.emailjs.com)** — Envío de formulario de contacto directamente desde el frontend, sin backend

---

## 🚀 Proceso de creación

### 1. Diseño y planificación
Antes de escribir una línea de código, se definió la estructura visual, las secciones necesarias y el tono general del portafolio. La prioridad: que se sintiera **personal, limpio y profesional**.

### 2. Configuración del entorno
```bash
npm create vite@latest portafolio-mferrer -- --template react-ts
cd portafolio-mferrer
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Desarrollo por secciones
Cada sección se construyó como un **componente React independiente**, facilitando el mantenimiento y la escalabilidad. Los tipos de TypeScript se definieron de forma centralizada para asegurar coherencia.

### 4. Integración de EmailJS
El formulario de contacto usa EmailJS para enviar mensajes directamente al correo del propietario, sin necesidad de servidor propio:

```ts
import emailjs from '@emailjs/browser';

emailjs.send(
  'SERVICE_ID',
  'TEMPLATE_ID',
  { name, email, message },
  'PUBLIC_KEY'
);
```

### 5. Despliegue en Vercel
El proyecto se conectó directamente al repositorio de GitHub. Cada push a `main` desencadena un despliegue automático en Vercel con cero configuración adicional.

---

## 🗃️ Estructura del proyecto

```
portafolio-mferrer/
├── public/
│   └── assets/          # Imágenes y recursos estáticos
├── src/
│   ├── components/      # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── sections/        # Secciones principales del portafolio
│   ├── types/           # Tipos TypeScript compartidos
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🖥️ Uso en local

```bash
# Clona el repositorio
git clone https://github.com/evaristodataengineer/Portafolio-Mferrer.git

# Entra en el directorio
cd Portafolio-Mferrer

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

> El proyecto estará disponible en `http://localhost:5173`

---

## 🌐 Demo en producción

> 🔗 **[Ver portafolio en Vercel →]([https://portafolio-mferrer.vercel.app](https://mglferrer-filmmaker.vercel.app/))**  
---

## 📄 Licencia

Este proyecto es de uso personal. Todos los diseños, imágenes y contenidos son propiedad de Miguel Ferrer.  
Si quieres usar algo como referencia, ¡no dudes en ponerte en contacto!

---

<div align="center">

Hecho con 🖤 por **Miguel Ferrer** · Desarrollado y mantenido por [evaristodataengineer](https://github.com/evaristodataengineer)

</div>
