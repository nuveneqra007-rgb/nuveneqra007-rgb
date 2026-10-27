export interface Project {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  repoUrl: string;
  category: '3d' | 'ai' | 'landing' | 'game' | 'web' | 'security' | 'backend';
  color: string;
  features: string[];
  stars?: number;
}

export interface TechItem {
  name: string;
  category: 'frontend' | '3d' | 'backend' | 'tools';
  badgeUrl: string;
  color: string;
  description: string;
}

export interface Mission {
  title: string;
  progress: number;
  tag: string;
  details: string;
}

export const PROFILE_DATA = {
  name: "ALEXANDER",
  username: "nuveneqra007-rgb",
  role: "Full-Stack Developer",
  location: "República Dominicana 🇩🇴",
  email: "nuveneqra007@gmail.com",
  portfolioUrl: "https://portafolio-3d-alexander.vercel.app/",
  githubUrl: "https://github.com/nuveneqra007-rgb",
  quote: "Construyendo experiencias digitales con código, creatividad y propósito.",
  mindset: "Learn → Build → Improve → Repeat 🔁",
  goal: "Convert ideas into premium digital experiences.",
  availability: "Freelance · Collaborations · Remote Work",
  focus: ["Web Development", "3D Web Experiences", "Full-Stack Architecture", "UI/UX"],
  aboutText: "Desarrollador full-stack apasionado por crear interfaces modernas, animadas e impactantes y arquitecturas escalables. Me especializo en experiencias web con React, animaciones GSAP, gráficos 3D con Three.js y desarrollo backend moderno con Node.js y Python/FastAPI. Siempre aprendiendo, siempre construyendo."
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio-3d",
    name: "Portfolio 3D",
    badge: "⚡ 3D & GSAP",
    tagline: "Experiencia 3D personal inmersiva",
    description: "Portafolio personal con partículas interactivas, animaciones con GSAP y scroll suavizado para navegación fluida.",
    stack: ["React", "TypeScript", "GSAP", "Three.js"],
    demoUrl: "https://portafolio-3d-alexander.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/portafolio-3d-Alexander",
    category: "3d",
    color: "#00D9FF",
    stars: 1,
    features: [
      "Partículas reactivas al cursor",
      "Transiciones de scroll sincronizadas",
      "Efectos visuales inspirados en Cyberpunk y Sci-Fi",
      "Optimización de rendimiento a 60 FPS"
    ]
  },
  {
    id: "supern-0-1",
    name: "SuperN-0.1",
    badge: "⚔️ JUEGO PLATAFORMA",
    tagline: "2D platform fighter inspirado en Superfighters Deluxe",
    description: "Juego de acción y plataformas en 2D desarrollado con Godot 4, lógica en C# y controles de física y combate fluidos.",
    stack: ["Godot 4", "C#", "TypeScript", "Vercel"],
    demoUrl: "https://supern01.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/superN-0.1",
    category: "game",
    color: "#EC4899",
    stars: 2,
    features: [
      "Mecánicas de combate dinámicas en plataforma 2D",
      "Físicas de colisión y saltos calibradas",
      "Inspirado en la jugabilidad de Superfighters Deluxe",
      "Despliegue y distribución web interactiva"
    ]
  },
  {
    id: "nova-ai",
    name: "Nova AI",
    badge: "🤖 INTELIGENCIA ARTIFICIAL",
    tagline: "Asistente de investigación con IA y backend FastAPI",
    description: "Asistente de investigación inteligente con persistencia en la nube mediante Supabase y backend rápido con FastAPI.",
    stack: ["React", "FastAPI", "Python", "Supabase", "TypeScript"],
    demoUrl: "https://nova-ai-three-zeta.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb",
    category: "ai",
    color: "#8B5CF6",
    stars: 1,
    features: [
      "Persistencia de historial en Supabase",
      "Backend de alta velocidad con FastAPI",
      "Streaming de respuestas en tiempo real",
      "Gestión de sesiones y contexto de investigación"
    ]
  },
  {
    id: "secscanner",
    name: "SecScanner",
    badge: "🛡️ CYBERSECURITY",
    tagline: "Escáner de seguridad y análisis web",
    description: "Herramienta web para inspección y auditoría de seguridad en sitios web, detección de cabeceras seguras y verificación de vulnerabilidades comunes.",
    stack: ["TypeScript", "React", "Node.js", "Security"],
    demoUrl: "https://secscanner-theta.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/secscanner",
    category: "security",
    color: "#F43F5E",
    stars: 1,
    features: [
      "Análisis de cabeceras HTTP de seguridad (CSP, HSTS, X-Frame)",
      "Verificación de SSL/TLS y certificados",
      "Puntuación de seguridad y recomendaciones de mitigación",
      "Interfaz oscura estilo terminal de ciberseguridad"
    ]
  },
  {
    id: "sistema-solar-3d",
    name: "Sistema Solar 3D",
    badge: "🌌 SIMULACIÓN 3D",
    tagline: "Simulación interactiva del cosmos en 3D",
    description: "Simulación interactiva del sistema solar en 3D con Three.js, trayectorias orbitales precisas y controles de cámara inmersivos.",
    stack: ["Three.js", "React", "TypeScript", "Vite"],
    demoUrl: "https://sistema-solar-3d-three.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/sistema-solar",
    category: "3d",
    color: "#F59E0B",
    stars: 1,
    features: [
      "Cálculo de órbitas y escalas planetarias",
      "Iluminación dinámica y texturas celestes",
      "Controles orbitales de cámara en 360 grados",
      "Fichas de información astronómica por planeta"
    ]
  },
  {
    id: "sistema-farmacia",
    name: "Sistema de Farmacia",
    badge: "💊 FULL-STACK APP",
    tagline: "Gestión farmacéutica, stock y dispensación",
    description: "Aplicación completa de gestión comercial y médica para farmacias, control de inventario de medicamentos, facturación y clientes.",
    stack: ["React", "JavaScript", "Node.js", "Tailwind CSS"],
    demoUrl: "https://sistema-de-farmacia.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/frontend",
    category: "web",
    color: "#10B981",
    stars: 1,
    features: [
      "Control de stock de medicamentos y fechas de vencimiento",
      "Registro de compras, ventas y emisión de facturas",
      "Búsqueda instantánea con filtros por categoría farmacéutica",
      "Panel de administración y roles de operador"
    ]
  },
  {
    id: "cokelab",
    name: "CoKeLaB",
    badge: "🥤 BRANDING & UI",
    tagline: "Landing page premium de alta estética",
    description: "Landing page comercial con animaciones fluidas, microinteracciones atractivas y diseño responsivo de alto impacto.",
    stack: ["React", "CSS3", "TypeScript", "Vite"],
    demoUrl: "https://cokelab.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/cocalet",
    category: "landing",
    color: "#EF4444",
    stars: 1,
    features: [
      "Animaciones de entrada y hover pulidas",
      "Paleta de color y tipografía de alta fidelidad",
      "Completamente responsivo en móviles y monitores ultrawide",
      "Tiempos de carga ultra rápidos"
    ]
  },
  {
    id: "aim-trainer",
    name: "Aim Trainer",
    badge: "🎯 GAMING & REFLEJOS",
    tagline: "Entrenador web competitivo",
    description: "Juego web dinámico enfocado en el entrenamiento de reflejos, precisión de puntería y métricas de desempeño.",
    stack: ["React", "JavaScript", "CSS3"],
    demoUrl: "https://aim-trainerrr.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/juego-de-punueris",
    category: "game",
    color: "#22C55E",
    stars: 1,
    features: [
      "Contador de precisión y tiempo de respuesta en ms",
      "Múltiples dificultades y modos de práctica",
      "Tablero de récords locales de puntuación",
      "Efectos de sonido y feedback visual inmediato"
    ]
  },
  {
    id: "apex-motors",
    name: "Apex Motors",
    badge: "🚗 CONCESIONARIO LUXURY",
    tagline: "Showroom automotriz minimalista",
    description: "Concesionario premium de vehículos con diseño moderno, catálogo interactivo y estética deportiva minimalista.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://apex-motors-lyart.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/apex-motors",
    category: "web",
    color: "#64748B",
    stars: 1,
    features: [
      "Galería interactiva con filtros de modelo",
      "Fichas técnicas con especificaciones de motor y potencia",
      "Diseño editorial oscuro con acentos deportivos",
      "Formulario de cotización e interés directo"
    ]
  },
  {
    id: "der-fel",
    name: "Der-Fel Clínica",
    badge: "🏥 HEALTHCARE TECH",
    tagline: "Plataforma para clínica médica",
    description: "Plataforma web para clínica médica con agendamiento conceptual, directorio de especialistas y UI accesible.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://clinica-medicare-der-fel.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/der-fel-clinica",
    category: "web",
    color: "#06B6D4",
    stars: 1,
    features: [
      "Navegación clara y optimizada para pacientes",
      "Directorio por especialidades y médicos",
      "Accesibilidad y diseño de alta legibilidad",
      "Sección de horarios y contacto directo"
    ]
  },
  {
    id: "alexander-web",
    name: "Alexander Web",
    badge: "🌐 GITHUB PAGES",
    tagline: "Sitio web de perfil y presencia digital",
    description: "Portal personal alojado en GitHub Pages con presentación de habilidades, enlaces y recursos.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://nuveneqra007-rgb-github-io.vercel.app/",
    repoUrl: "https://github.com/nuveneqra007-rgb/nuveneqra007-rgb.github.io",
    category: "web",
    color: "#38BDF8",
    stars: 1,
    features: [
      "Estructura semántica ultraligera",
      "Alojado en GitHub Pages / Vercel",
      "Diseño limpio y compatible con todos los navegadores",
      "Punto de contacto rápido"
    ]
  },
  {
    id: "backend-core",
    name: "Backend Core API",
    badge: "⚙️ SERVICIOS BACKEND",
    tagline: "API REST y capa de persistencia",
    description: "Arquitectura backend para soporte de aplicaciones web, autenticación, controladores y conexión a base de datos.",
    stack: ["Node.js", "Express", "JavaScript", "REST API"],
    repoUrl: "https://github.com/nuveneqra007-rgb/backend",
    category: "backend",
    color: "#A855F7",
    stars: 1,
    features: [
      "Rutas modulares y controladores estructurados",
      "Manejo de errores y respuestas JSON estandarizadas",
      "Capa de modelos y validación de peticiones",
      "Preparado para despliegue en entornos cloud"
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: "TypeScript", category: "frontend", badgeUrl: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white", color: "#3178C6", description: "Tipado estático seguro y arquitecturas escalables." },
  { name: "React", category: "frontend", badgeUrl: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", color: "#61DAFB", description: "Construcción de interfaces modulares y reactivas." },
  { name: "Vite", category: "frontend", badgeUrl: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white", color: "#646CFF", description: "Entorno de desarrollo ultrarrápido y empaquetado optimizado." },
  { name: "JavaScript", category: "frontend", badgeUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", color: "#F7DF1E", description: "Dominio de ESNext, manipulación del DOM y asincronía." },
  { name: "HTML5", category: "frontend", badgeUrl: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", color: "#E34F26", description: "Estructuras semánticas y accesibilidad moderna." },
  { name: "CSS3", category: "frontend", badgeUrl: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", color: "#1572B6", description: "Diseños responsivos con Flexbox, Grid y animaciones CSS." },

  // 3D & Animation
  { name: "Three.js", category: "3d", badgeUrl: "https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white", color: "#FFFFFF", description: "Renderizado WebGL, geometrías, partículas y shaders." },
  { name: "GSAP", category: "3d", badgeUrl: "https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black", color: "#88CE02", description: "Líneas de tiempo complejas y scrollTrigger avanzado." },

  // Backend & DB
  { name: "Python", category: "backend", badgeUrl: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", color: "#3776AB", description: "Scripting, automatizaciones y lógica de servidor." },
  { name: "FastAPI", category: "backend", badgeUrl: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white", color: "#009688", description: "Creación de APIs REST asíncronas de alto rendimiento." },
  { name: "Supabase", category: "backend", badgeUrl: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white", color: "#3ECF8E", description: "Base de datos PostgreSQL, auth y almacenamiento en la nube." },
  { name: "Node.js", category: "backend", badgeUrl: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white", color: "#43853D", description: "Entorno de ejecución backend para APIs escalables." },

  // Tools
  { name: "Git", category: "tools", badgeUrl: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white", color: "#F05032", description: "Control de versiones con ramas y flujo colaborativo." },
  { name: "GitHub", category: "tools", badgeUrl: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white", color: "#FFFFFF", description: "Repositorios, perfil social y flujos CI/CD." },
  { name: "Vercel", category: "tools", badgeUrl: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white", color: "#FFFFFF", description: "Despliegues automatizados globales para aplicaciones web." },
  { name: "VS Code", category: "tools", badgeUrl: "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white", color: "#007ACC", description: "Entorno de desarrollo altamente personalizado con linters y extensiones." }
];

export const MISSIONS: Mission[] = [
  {
    title: "Dominar TypeScript avanzado",
    progress: 60,
    tag: "Lenguaje",
    details: "Genéricos avanzados, tipos condicionales, inferencias complejas y type guards en proyectos a gran escala."
  },
  {
    title: "Proyectos React complejos",
    progress: 75,
    tag: "Frontend",
    details: "Gestión de estado global, patrones de composición, custom hooks y renderizado de alta performance."
  },
  {
    title: "Three.js & experiencias 3D",
    progress: 65,
    tag: "Gráficos 3D",
    details: "Shaders GLSL personalizados, sistemas de partículas masivos y optimización de renderizado en GPU."
  },
  {
    title: "Backend con FastAPI + Python",
    progress: 40,
    tag: "Servicios REST",
    details: "Modelado Pydantic, middlewares de seguridad, pruebas unitarias y conexión con bases de datos relacionales."
  },
  {
    title: "Sistemas de autenticación",
    progress: 30,
    tag: "Seguridad",
    details: "Manejo seguro de tokens JWT, OAuth2, RBAC y flujos de sesión persistentes."
  }
];
