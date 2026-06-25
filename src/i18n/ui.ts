export const ui = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
    },
    hero: {
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
      available: 'Disponible para oportunidades',
    },
    sections: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      certifications: 'Certificaciones',
      languages: 'Idiomas',
    },
    stats: {
      projects: 'Proyectos',
      skillsCount: 'Habilidades',
      certifications: 'Certificaciones',
    },
    terminal: {
      whoami: 'Ingeniero de Software',
      status: 'Disponible para oportunidades',
    },
    skills: {
      languages: 'Lenguajes',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      devops: 'DevOps',
      mobile: 'Mobile',
      tools: 'Herramientas',
    },
    certifications: {
    },
    project: {
      source: 'Código',
      details: 'Detalles',
      featured: 'Destacado',
      backToProjects: 'Volver a proyectos',
      description: 'Descripción',
      architecture: 'Arquitectura',
      techStack: 'Stack tecnológico',
      achievements: 'Logros destacados',
      sourceCode: 'Código fuente',
      role: 'Rol',
      technology: 'Tecnología',
    },
    experience: {
      present: 'Actual',
    },
    education: {
      present: 'Presente',
    },
    a11y: {
      mainContent: 'Saltar al contenido principal',
      themeToggle: 'Cambiar tema',
      lightMode: 'Cambiar a modo claro',
      darkMode: 'Cambiar a modo oscuro',
      langToggle: 'Cambiar idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      scrollToTop: 'Volver arriba',
      email: 'Enviar email',
      github: 'GitHub',

    },
    footer: {
      rights: 'Todos los derechos reservados',
    },
    404: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe o fue movida.',
      goHome: 'Volver al inicio',
    },
    print: 'Imprimir',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
    },
    hero: {
      contact: 'Contact',
      downloadCV: 'Download CV',
      available: 'Available for opportunities',
    },
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
    },
    stats: {
      projects: 'Projects',
      skillsCount: 'Skills',
      certifications: 'Certifications',
    },
    terminal: {
      whoami: 'Software Engineer',
      status: 'Available for opportunities',
    },
    skills: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      devops: 'DevOps',
      mobile: 'Mobile',
      tools: 'Tools',
    },
    certifications: {
    },
    project: {
      source: 'Source',
      details: 'Details',
      featured: 'Featured',
      backToProjects: 'Back to projects',
      description: 'Description',
      architecture: 'Architecture',
      techStack: 'Tech Stack',
      achievements: 'Key Achievements',
      sourceCode: 'Source Code',
      role: 'Role',
      technology: 'Technology',
    },
    experience: {
      present: 'Present',
    },
    education: {
      present: 'Present',
    },
    a11y: {
      mainContent: 'Skip to content',
      themeToggle: 'Toggle dark mode',
      lightMode: 'Switch to light mode',
      darkMode: 'Switch to dark mode',
      langToggle: 'Switch language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      scrollToTop: 'Scroll to top',
      email: 'Send email',
      github: 'GitHub',

    },
    footer: {
      rights: 'All rights reserved',
    },
    404: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist or has been moved.',
      goHome: 'Back to home',
    },
    print: 'Print',
  },
} as const

export type Locale = keyof typeof ui
export type TranslationKeys = typeof ui.es
