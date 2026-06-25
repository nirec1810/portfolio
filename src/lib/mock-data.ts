import type { Locale } from '../i18n/index'

const mockSkills = [
  { name: 'Python',       category: 'languages', proficiency: 'advanced', order: 1 },
  { name: 'C#',           category: 'languages', proficiency: 'advanced', order: 2 },
  { name: 'JavaScript',   category: 'languages', proficiency: 'advanced', order: 3 },
  { name: 'TypeScript',   category: 'languages', proficiency: 'advanced', order: 4 },
  { name: 'SQL',          category: 'languages', proficiency: 'advanced', order: 5 },
  { name: 'React.js',     category: 'frontend',  proficiency: 'advanced', order: 6 },
  { name: 'Next.js',      category: 'frontend',  proficiency: 'advanced', order: 7 },
  { name: 'HTML5',        category: 'frontend',  proficiency: 'advanced', order: 8 },
  { name: 'CSS3',         category: 'frontend',  proficiency: 'advanced', order: 9 },
  { name: 'ASP.NET Core', category: 'backend',   proficiency: 'advanced', order: 10 },
  { name: 'Node.js',      category: 'backend',   proficiency: 'intermediate', order: 11 },
  { name: 'Flask',        category: 'backend',   proficiency: 'intermediate', order: 12 },
  { name: 'Entity Framework Core', category: 'backend', proficiency: 'intermediate', order: 13 },
  { name: 'SQL Server',   category: 'databases', proficiency: 'intermediate', order: 14 },
  { name: 'PostgreSQL',   category: 'databases', proficiency: 'intermediate', order: 15 },
  { name: 'MySQL',        category: 'databases', proficiency: 'intermediate', order: 16 },
  { name: 'MongoDB',      category: 'databases', proficiency: 'intermediate', order: 17 },
  { name: 'Supabase',     category: 'databases', proficiency: 'intermediate', order: 18 },
  { name: 'Microsoft Azure', category: 'devops', proficiency: 'intermediate', order: 19 },
  { name: 'Docker',       category: 'devops',    proficiency: 'intermediate', order: 20 },
  { name: 'Jenkins',      category: 'devops',    proficiency: 'basic', order: 21 },
  { name: 'CI/CD Pipelines', category: 'devops', proficiency: 'basic', order: 22 },
  { name: '.NET MAUI',    category: 'mobile',    proficiency: 'intermediate', order: 23 },
  { name: 'Flutter',      category: 'mobile',    proficiency: 'basic', order: 24 },
  { name: 'Git',          category: 'tools',     proficiency: 'advanced', order: 25 },
  { name: 'GitHub',       category: 'tools',     proficiency: 'advanced', order: 26 },
]

const mockCertifications = [
  { name: 'DevOps de cero a experto',                        category: 'cloud-devops',  date: 'Oct 2025',  platform: 'Udemy',     order: 1 },
  { name: 'Terraform - Infraestructura como código',          category: 'cloud-devops',  date: 'Dic 2025',  platform: 'Udemy',     order: 2 },
  { name: 'DevOps de cero a avanzado',                        category: 'cloud-devops',  date: 'Dic 2025',  platform: 'Udemy',     order: 3 },
  { name: 'Master ASP.NET MVC - Entity Framework (.NET 9)',   category: 'backend-mobile', date: 'May 2025', platform: 'Udemy',     order: 4 },
  { name: '.NET MAUI con Visual Studio 2022',                 category: 'backend-mobile', date: 'Jun 2025', platform: 'Udemy',     order: 5 },
  { name: 'Flutter & Dart iOS, Android y móvil',              category: 'backend-mobile', date: 'Jun 2025', platform: 'Coursera',  order: 6 },
  { name: 'React 18 Course 2025',                             category: 'frontend',      date: 'May 2025', platform: 'Udemy',     order: 7 },
  { name: 'Python - Data Structures & Algorithms + LeetCode', category: 'fundamentals',  date: 'Nov 2024', platform: 'Udemy',     order: 8 },
  { name: 'Software Processes and Agile Practices',           category: 'soft-skills',   date: 'Jun 2023', platform: 'Coursera',  order: 9 },
  { name: 'Understand & Elicit Requirements with Business Analysis', category: 'soft-skills', date: 'Nov 2024', platform: 'Udemy', order: 10 },
  { name: 'Communication Skills: Improve Communication',      category: 'soft-skills',   date: 'Abr 2023', platform: 'Udemy',     order: 11 },
]

const mockEducation = [
  {
    institution: 'Universidad de las Américas (UDLA)',
    degree: { es: 'Ingeniería en Software — 7° semestre', en: 'Software Engineering — 7th semester' },
    description: {
      es: 'Carrera en curso desde 2023. Enfocada en desarrollo Full-Stack, arquitectura de sistemas y gestión de bases de datos.',
      en: 'Ongoing degree since 2023. Focused on Full-Stack development, system architecture, and database management.',
    },
    startDate: '2023-09-01',
    current: true,
    order: 1,
  },
  {
    institution: 'Liceo José Ortega y Gasset',
    degree: { es: 'Bachillerato General Unificado', en: 'General Unified Baccalaureate' },
    description: {
      es: 'Educación secundaria en Quito, Ecuador.',
      en: 'Secondary education in Quito, Ecuador.',
    },
    startDate: '2013-09-01',
    endDate: '2022-06-30',
    current: false,
    order: 2,
  },
]

const mockProjectsEn = [
  {
    title: 'EcoShelf Analytics',
    slug: 'ecoshelf-analytics',
    description: 'Comprehensive platform for managing food surplus in bakeries. Suggestion engine and real-time inventory analytics.',
    longDescription: [
      { children: [{ text: 'The most complex project in the portfolio — clean architecture, design patterns, modern full-stack with real business domain and concrete rules. Built with Next.js 15, TypeScript and Supabase.' }] },
      { children: [{ text: 'Includes Supabase Auth with route protection via src/proxy.ts. Dashboard with KPIs, expiration alerts, and profitability analysis.' }] },
    ],
    year: 2026, featured: true, tier: 5,
    primaryLanguage: 'TypeScript', architecture: 'MVC + Facade Pattern',
    techStack: [
      { tech: 'Next.js', role: 'Full-stack framework' }, { tech: 'TypeScript', role: 'Logic and types' },
      { tech: 'Supabase', role: 'Auth + PostgreSQL' }, { tech: 'Tailwind CSS', role: 'Styling' },
      { tech: 'SOLID + Facade Pattern', role: 'Engine architecture' },
    ],
    highlights: [
      { item: 'Modular suggestion engine under src/controllers/motor/ (SOLID, 6 files, Facade entry point)' },
      { item: 'MVC pattern with Spanish naming conventions' },
      { item: 'Dashboard with KPIs, expiration alerts, and profitability analysis' },
      { item: 'Authentication with Supabase Auth and route protection' },
    ],
    links: { github: 'https://github.com/nirec1810/ecoshelf-analytics' },
  },
  {
    title: 'Mejores Prácticas',
    slug: 'mejores-practicas',
    description: 'ASP.NET Core MVC web app implementing GoF design patterns: Singleton, Repository, Builder, and Factory Method.',
    longDescription: [
      { children: [{ text: 'Practical implementation of GoF design patterns in the .NET ecosystem. Each pattern is applied in a real context and documented with correct usage.' }] },
      { children: [{ text: 'Includes Singleton for database access, Repository for data abstraction, Builder for complex object construction, and Factory Method for instance creation.' }] },
    ],
    year: 2026, featured: true, tier: 5,
    primaryLanguage: 'C#', architecture: 'GoF Patterns in ASP.NET Core',
    techStack: [
      { tech: 'ASP.NET Core MVC', role: 'Web framework' },
      { tech: 'C#', role: 'Logic and patterns' },
      { tech: 'Design Patterns (GoF)', role: 'Architecture' },
    ],
    highlights: [
      { item: 'Singleton, Repository, Builder and Factory Method implementation' },
      { item: 'Patterns applied in real context, not isolated examples' },
      { item: 'Most recent project (June 2026)' },
    ],
    links: { github: 'https://github.com/nirec1810/Mejores_practicas' },
  },
  {
    title: 'MinicoreMVC',
    slug: 'minicoremvc',
    description: 'Delivery cost calculation system per driver with Next.js 15 and Supabase, implementing MVC pattern end-to-end.',
    longDescription: [
      { children: [{ text: 'Complete MVC pattern implementation with Next.js 15 and Supabase. Drivers, shipments, and zones tables in Supabase PostgreSQL database.' }] },
      { children: [{ text: 'Automatic Vercel deployment. Includes full CRUD with state management and validation.' }] },
    ],
    year: 2026, featured: true, tier: 5,
    primaryLanguage: 'TypeScript', architecture: 'MVC end-to-end',
    techStack: [
      { tech: 'Next.js', role: 'Full-stack framework' }, { tech: 'TypeScript', role: 'Logic and types' },
      { tech: 'Supabase', role: 'Database + API' }, { tech: 'Vercel', role: 'Deployment' },
    ],
    highlights: [
      { item: 'End-to-end MVC pattern implementation' },
      { item: 'Drivers, shipments, and zones tables' },
      { item: 'Vercel deployment' },
    ],
    links: { github: 'https://github.com/nirec1810/MinicoreMVC' },
  },
  {
    title: 'Hotel Room Booking',
    slug: 'hotel-room-booking',
    description: 'Full MVC web application for hotel room reservations with Entity Framework Core Code First.',
    longDescription: [
      { children: [{ text: 'Functional CRUD system for hotel room reservations with complete MVC pattern on ASP.NET Core. Database schema is generated from C# classes using Code First with Entity Framework Core.' }] },
      { children: [{ text: 'Includes model validations, state management, and Razor views with integrated HTML/CSS/JS. 11 commits reflecting real iterative development.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'C#', architecture: 'ASP.NET Core MVC + Code First',
    techStack: [
      { tech: 'ASP.NET Core MVC', role: 'Web framework' }, { tech: 'Entity Framework Core', role: 'ORM + migrations' },
      { tech: 'C#', role: 'Logic' }, { tech: 'Razor', role: 'Templates' },
      { tech: 'HTML', role: 'Structure' }, { tech: 'CSS', role: 'Styling' }, { tech: 'JavaScript', role: 'Interactions' },
    ],
    highlights: [
      { item: 'Full CRUD with model validations' },
      { item: 'Code First with Entity Framework Core' },
      { item: 'Razor views with responsive design' },
    ],
    links: { github: 'https://github.com/nirec1810/NicolasRecaldeEvaluacionProgreso1' },
  },
  {
    title: 'Ecommerce',
    slug: 'ecommerce',
    description: 'Microservice architecture for an e-commerce system. Each module is independent and deployable separately.',
    longDescription: [
      { children: [{ text: 'E-commerce system with microservice architecture using Spring Boot and Java 17. Each module is independent and separately deployable.' }] },
      { children: [{ text: 'A refactored version also exists in Ecommerce-. Service-oriented architecture with inter-module communication.' }] },
    ],
    year: 2026, featured: true, tier: 4,
    primaryLanguage: 'Java', architecture: 'Microservices with Spring Boot',
    techStack: [
      { tech: 'Spring Boot', role: 'Framework per microservice' },
      { tech: 'Java', role: 'Main language' },
      { tech: 'Microservices', role: 'System design' },
    ],
    highlights: [
      { item: 'Independent microservice architecture' },
      { item: 'Each module deployable separately' },
      { item: 'Refactored version available' },
    ],
    links: { github: 'https://github.com/nirec1810/Ecommerce' },
  },
  {
    title: 'ArquitecturaC4',
    slug: 'arquitecturac4',
    description: 'Query taxpayer, vehicle, and license data from Ecuador public services (SRI and ANT) using C4 Architecture.',
    longDescription: [
      { children: [{ text: 'Spring Boot and Java backend consuming SRI and ANT APIs from Ecuador. React frontend for taxpayer, vehicle, and license data visualization.' }] },
      { children: [{ text: 'Complete architectural documentation using the C4 model (Context, Container, Components, Code). Well-documented data model and information flow.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'Java', architecture: 'C4 Model + Spring Boot + React',
    techStack: [
      { tech: 'Spring Boot', role: 'REST Backend' }, { tech: 'Java', role: 'Main language' },
      { tech: 'React', role: 'Frontend' }, { tech: 'C4 Model', role: 'Architectural documentation' },
      { tech: 'SRI / ANT APIs', role: 'External data sources' },
    ],
    highlights: [
      { item: 'Integration with Ecuador public APIs (SRI and ANT)' },
      { item: 'Complete C4 documentation (Context, Container, Components)' },
      { item: 'Spring Boot backend + React frontend' },
    ],
    links: { github: 'https://github.com/nirec1810/ArquitecturaC4' },
  },
  {
    title: 'Voxline',
    slug: 'voxline',
    description: 'Real-time chat application using WebSockets — persistent bidirectional communication between client and server.',
    longDescription: [
      { children: [{ text: 'Real-time chat system with WebSockets. Persistent bidirectional communication between client and server without polling. Complete WebSocket protocol implementation.' }] },
    ],
    year: 2026, featured: false, tier: 4,
    primaryLanguage: 'HTML/JS', architecture: 'WebSocket real-time',
    techStack: [
      { tech: 'HTML', role: 'Structure' }, { tech: 'JavaScript', role: 'WebSocket logic' },
      { tech: 'WebSockets', role: 'Real-time communication' },
    ],
    highlights: [
      { item: 'Persistent bidirectional communication' },
      { item: 'No polling — native WebSockets' },
    ],
    links: { github: 'https://github.com/nirec1810/Voxline' },
  },
  {
    title: 'RecaldeNicolasPeople',
    slug: 'recaldenicolaspeople',
    description: 'Cross-platform .NET MAUI app with async SQLite for local persistence. Full CRUD with sqlite-net.',
    longDescription: [
      { children: [{ text: 'Microsoft official module implementation for local storage in .NET MAUI. Persistence with SQLite using sqlite-net and async operations.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'C#', architecture: '.NET MAUI + Async SQLite',
    techStack: [
      { tech: '.NET MAUI', role: 'Cross-platform framework' }, { tech: 'C#', role: 'Logic' },
      { tech: 'SQLite', role: 'Local persistence' }, { tech: 'XAML', role: 'UI' },
    ],
    highlights: [
      { item: 'Microsoft official module implementation' },
      { item: 'Async SQLite with sqlite-net' },
      { item: 'Full CRUD cross-platform' },
    ],
    links: { github: 'https://github.com/nirec1810/RecaldeNicolasPeople' },
  },
  {
    title: 'maquinasInterpretacion',
    slug: 'maquinas-interpretacion',
    description: 'System that instantiates any geometric figure using Java reflection — without knowing the type at compile time.',
    longDescription: [
      { children: [{ text: 'System that instantiates any geometric figure from a class name and runtime parameters using Java reflection.' }] },
      { children: [{ text: 'Example: ("Circle", radius=5) creates the object and calculates area/perimeter dynamically — without knowing the type at compile time.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'Java', architecture: 'Java Reflection',
    techStack: [{ tech: 'Java', role: 'Reflection and logic' }],
    highlights: [
      { item: 'Java reflection to instantiate classes at runtime' },
      { item: 'Advanced concept beyond typical university coursework' },
    ],
    links: { github: 'https://github.com/nirec1810/maquinasInterpretacion' },
  },
  {
    title: 'Principios de Diseño',
    slug: 'principios-de-diseno',
    description: 'Proxy pattern implementation to control access to a real object and defer its creation.',
    longDescription: [
      { children: [{ text: 'Proxy pattern implementation to control access to a real object and defer its creation (lazy initialization). Demonstrates design by contract principles.' }] },
    ],
    year: 2025, featured: false, tier: 3,
    primaryLanguage: 'HTML/JS', architecture: 'Proxy Pattern',
    techStack: [{ tech: 'HTML', role: 'Structure' }, { tech: 'JavaScript', role: 'Proxy implementation' }],
    highlights: [
      { item: 'Proxy pattern with lazy initialization' },
      { item: 'Object access control' },
    ],
    links: { github: 'https://github.com/nirec1810/Principios-de-Diseno' },
  },
]

const mockProjectsEs = [
  {
    title: 'EcoShelf Analytics',
    slug: 'ecoshelf-analytics',
    description: 'Plataforma integral para la gestión de excedentes alimentarios en panaderías. Motor de sugerencias y analítica de inventario en tiempo real.',
    longDescription: [
      { children: [{ text: 'Proyecto más complejo del portfolio — arquitectura limpia, patrones de diseño, full-stack moderno y dominio de negocio real con reglas concretas. Construida con Next.js 15, TypeScript y Supabase.' }] },
      { children: [{ text: 'Incluye autenticación con Supabase Auth y protección de rutas via src/proxy.ts. Dashboard con KPIs, alertas de vencimiento y análisis de rentabilidad.' }] },
    ],
    year: 2026, featured: true, tier: 5,
    primaryLanguage: 'TypeScript', architecture: 'MVC + Facade Pattern',
    techStack: [
      { tech: 'Next.js', role: 'Framework full-stack' }, { tech: 'TypeScript', role: 'Lógica y tipos' },
      { tech: 'Supabase', role: 'Auth + PostgreSQL' }, { tech: 'Tailwind CSS', role: 'Estilos' },
      { tech: 'SOLID + Facade Pattern', role: 'Arquitectura del motor' },
    ],
    highlights: [
      { item: 'Motor de sugerencias modular bajo src/controllers/motor/ (SOLID, 6 archivos, Facade como entry point)' },
      { item: 'Patrón MVC con naming conventions en español' },
      { item: 'Dashboard con KPIs, alertas de vencimiento y análisis de rentabilidad' },
      { item: 'Autenticación con Supabase Auth y protección de rutas' },
    ],
    links: { github: 'https://github.com/nirec1810/ecoshelf-analytics' },
  },
  {
    title: 'Mejores Prácticas',
    slug: 'mejores-practicas',
    description: 'Aplicación web ASP.NET Core MVC con implementación de patrones de diseño GoF: Singleton, Repository, Builder y Factory Method.',
    longDescription: [
      { children: [{ text: 'Implementación práctica de patrones de diseño GoF en el ecosistema .NET. Cada patrón está aplicado en un contexto real y documentado con su uso correcto.' }] },
      { children: [{ text: 'Incluye Singleton para acceso a base de datos, Repository para abstracción de datos, Builder para construcción de objetos complejos y Factory Method para creación de instancias.' }] },
    ],
    year: 2026, featured: true, tier: 5,
    primaryLanguage: 'C#', architecture: 'Patrones GoF en ASP.NET Core',
    techStack: [
      { tech: 'ASP.NET Core MVC', role: 'Framework web' },
      { tech: 'C#', role: 'Lógica y patrones' },
      { tech: 'Design Patterns (GoF)', role: 'Arquitectura' },
    ],
    highlights: [
      { item: 'Implementación de Singleton, Repository, Builder y Factory Method' },
      { item: 'Patrones aplicados en contexto real, no ejemplos aislados' },
      { item: 'Proyecto más reciente del portfolio (Junio 2026)' },
    ],
    links: { github: 'https://github.com/nirec1810/Mejores_practicas' },
  },
  {
    title: 'MinicoreMVC',
    slug: 'minicoremvc',
    description: 'Sistema de cálculo de costos de envío por repartidor con Next.js 15 y Supabase, implementando el patrón MVC end-to-end.',
    longDescription: [
      { children: [{ text: 'Implementación completa del patrón MVC con Next.js 15 y Supabase. Tablas repartidores, envios y zonas en la base de datos PostgreSQL de Supabase.' }] },
      { children: [{ text: 'Deploy automático en Vercel. Incluye CRUD completo con manejo de estados y validaciones.' }] },
    ],
    year: 2026, featured: true, tier: 5,
    primaryLanguage: 'TypeScript', architecture: 'MVC end-to-end',
    techStack: [
      { tech: 'Next.js', role: 'Framework full-stack' }, { tech: 'TypeScript', role: 'Lógica y tipos' },
      { tech: 'Supabase', role: 'Base de datos + API' }, { tech: 'Vercel', role: 'Deploy' },
    ],
    highlights: [
      { item: 'Patrón MVC implementado end-to-end' },
      { item: 'Tablas repartidores, envios y zonas' },
      { item: 'Deploy en Vercel' },
    ],
    links: { github: 'https://github.com/nirec1810/MinicoreMVC' },
  },
  {
    title: 'Hotel Room Booking',
    slug: 'hotel-room-booking',
    description: 'Aplicación web MVC completa para reserva de habitaciones de hotel con Entity Framework Core Code First.',
    longDescription: [
      { children: [{ text: 'Sistema CRUD funcional de reserva de habitaciones de hotel con patrón MVC completo sobre ASP.NET Core. El esquema de base de datos se genera desde las clases C# mediante Code First con Entity Framework Core.' }] },
      { children: [{ text: 'Incluye validaciones de modelo, manejo de estados y vistas Razor con HTML/CSS/JS integrado. 11 commits que reflejan un desarrollo iterativo real.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'C#', architecture: 'ASP.NET Core MVC + Code First',
    techStack: [
      { tech: 'ASP.NET Core MVC', role: 'Framework web' }, { tech: 'Entity Framework Core', role: 'ORM + migraciones' },
      { tech: 'C#', role: 'Lógica' }, { tech: 'Razor', role: 'Plantillas' },
      { tech: 'HTML', role: 'Estructura' }, { tech: 'CSS', role: 'Estilos' }, { tech: 'JavaScript', role: 'Interacciones' },
    ],
    highlights: [
      { item: 'CRUD completo con validaciones de modelo' },
      { item: 'Code First con Entity Framework Core' },
      { item: 'Vistas Razor con diseño responsivo' },
    ],
    links: { github: 'https://github.com/nirec1810/NicolasRecaldeEvaluacionProgreso1' },
  },
  {
    title: 'Ecommerce',
    slug: 'ecommerce',
    description: 'Arquitectura de microservicios para un sistema de e-commerce. Cada módulo es independiente y desplegable por separado.',
    longDescription: [
      { children: [{ text: 'Sistema de e-commerce con arquitectura de microservicios usando Spring Boot y Java 17. Cada módulo es independiente y desplegable por separado.' }] },
      { children: [{ text: 'También existe una versión refactorizada en Ecommerce-. Arquitectura orientada a servicios con comunicación entre módulos.' }] },
    ],
    year: 2026, featured: true, tier: 4,
    primaryLanguage: 'Java', architecture: 'Microservicios con Spring Boot',
    techStack: [
      { tech: 'Spring Boot', role: 'Framework de cada microservicio' },
      { tech: 'Java', role: 'Lenguaje principal' },
      { tech: 'Microservicios', role: 'Diseño del sistema' },
    ],
    highlights: [
      { item: 'Arquitectura de microservicios independientes' },
      { item: 'Cada módulo desplegable por separado' },
      { item: 'Versión refactorizada disponible' },
    ],
    links: { github: 'https://github.com/nirec1810/Ecommerce' },
  },
  {
    title: 'ArquitecturaC4',
    slug: 'arquitecturac4',
    description: 'Consulta de datos de contribuyentes, vehículos y licencias desde los servicios públicos de Ecuador (SRI y ANT) con Arquitectura C4.',
    longDescription: [
      { children: [{ text: 'Backend en Spring Boot y Java para consumir APIs del SRI y ANT de Ecuador. Frontend en React para la visualización de datos de contribuyentes, vehículos y licencias.' }] },
      { children: [{ text: 'Documentación arquitectural completa usando el modelo C4 (Contexto, Contenedor, Componentes, Código). Modelo de datos y flujos de información bien documentados.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'Java', architecture: 'C4 Model + Spring Boot + React',
    techStack: [
      { tech: 'Spring Boot', role: 'Backend REST' }, { tech: 'Java', role: 'Lenguaje principal' },
      { tech: 'React', role: 'Frontend' }, { tech: 'C4 Model', role: 'Documentación arquitectural' },
      { tech: 'SRI / ANT APIs', role: 'Fuentes de datos externas' },
    ],
    highlights: [
      { item: 'Consumo de APIs públicas del SRI y ANT de Ecuador' },
      { item: 'Documentación C4 completa (Contexto, Contenedor, Componentes)' },
      { item: 'Backend Spring Boot + Frontend React' },
    ],
    links: { github: 'https://github.com/nirec1810/ArquitecturaC4' },
  },
  {
    title: 'Voxline',
    slug: 'voxline',
    description: 'Aplicación de chat en tiempo real usando WebSockets — comunicación bidireccional persistente entre cliente y servidor.',
    longDescription: [
      { children: [{ text: 'Sistema de chat en tiempo real con WebSockets. Comunicación bidireccional persistente entre cliente y servidor sin polling. Implementación completa del protocolo WebSocket.' }] },
    ],
    year: 2026, featured: false, tier: 4,
    primaryLanguage: 'HTML/JS', architecture: 'WebSocket real-time',
    techStack: [
      { tech: 'HTML', role: 'Estructura' }, { tech: 'JavaScript', role: 'Lógica WebSocket' },
      { tech: 'WebSockets', role: 'Comunicación en tiempo real' },
    ],
    highlights: [
      { item: 'Comunicación bidireccional persistente' },
      { item: 'Sin polling — WebSockets nativos' },
    ],
    links: { github: 'https://github.com/nirec1810/Voxline' },
  },
  {
    title: 'RecaldeNicolasPeople',
    slug: 'recaldenicolaspeople',
    description: 'App multiplataforma .NET MAUI con SQLite asíncrono para persistencia local. CRUD completo con sqlite-net.',
    longDescription: [
      { children: [{ text: 'Implementación del módulo oficial de Microsoft sobre almacenamiento local en .NET MAUI. Persistencia con SQLite usando sqlite-net y operaciones asíncronas.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'C#', architecture: '.NET MAUI + SQLite Asíncrono',
    techStack: [
      { tech: '.NET MAUI', role: 'Framework multiplataforma' }, { tech: 'C#', role: 'Lógica' },
      { tech: 'SQLite', role: 'Persistencia local' }, { tech: 'XAML', role: 'UI' },
    ],
    highlights: [
      { item: 'Implementación del módulo oficial de Microsoft' },
      { item: 'SQLite asíncrono con sqlite-net' },
      { item: 'CRUD completo multiplataforma' },
    ],
    links: { github: 'https://github.com/nirec1810/RecaldeNicolasPeople' },
  },
  {
    title: 'maquinasInterpretacion',
    slug: 'maquinas-interpretacion',
    description: 'Sistema que instancia cualquier figura geométrica usando reflexión de Java — sin conocer el tipo en compilación.',
    longDescription: [
      { children: [{ text: 'Sistema que instancia cualquier figura geométrica a partir del nombre de clase y parámetros en tiempo de ejecución usando reflexión de Java.' }] },
      { children: [{ text: 'Ejemplo: ("Circulo", radio=5) crea el objeto y calcula área/perímetro dinámicamente — sin conocer el tipo en compilación.' }] },
    ],
    year: 2025, featured: false, tier: 4,
    primaryLanguage: 'Java', architecture: 'Reflexión de Java',
    techStack: [{ tech: 'Java', role: 'Reflexión y lógica' }],
    highlights: [
      { item: 'Reflexión de Java para instanciar clases en tiempo de ejecución' },
      { item: 'Concepto avanzado que va más allá del desarrollo universitario típico' },
    ],
    links: { github: 'https://github.com/nirec1810/maquinasInterpretacion' },
  },
  {
    title: 'Principios de Diseño',
    slug: 'principios-de-diseno',
    description: 'Implementación del patrón Proxy para controlar el acceso a un objeto real y diferir su creación.',
    longDescription: [
      { children: [{ text: 'Implementación del patrón Proxy para controlar el acceso a un objeto real y diferir su creación (lazy initialization). Demuestra el principio de design by contract.' }] },
    ],
    year: 2025, featured: false, tier: 3,
    primaryLanguage: 'HTML/JS', architecture: 'Patrón Proxy',
    techStack: [{ tech: 'HTML', role: 'Estructura' }, { tech: 'JavaScript', role: 'Implementación del Proxy' }],
    highlights: [
      { item: 'Patrón Proxy con lazy initialization' },
      { item: 'Control de acceso a objetos' },
    ],
    links: { github: 'https://github.com/nirec1810/Principios-de-Diseno' },
  },
]

const mockExperienceEn = [
  {
    company: 'EcoShelf Analytics',
    role: 'Full-Stack Developer',
    description: 'Optimized food surplus management for bakeries, consolidating data flow into business intelligence dashboards.',
    highlights: [
      { item: 'Developed scalable architecture using Next.js (React) and Supabase' },
      { item: 'Implemented microservices and REST API integration' },
      { item: 'Unity integration for 2D/3D development and cybersecurity (OSINT, Wazuh)' },
    ],
    startDate: '2024-01-01', endDate: '2024-06-30', current: false, order: 1,
  },
  {
    company: 'Management System',
    role: 'Back-End Software Engineer',
    description: 'Centralized attendance control and family registration, eliminating manual data loss through a CRUD management system.',
    highlights: [
      { item: 'Programmed server logic in Python (Flask)' },
      { item: 'Integrated with relational database in SQL Server' },
      { item: 'Eliminated manual data tracking through automated CRUD system' },
    ],
    startDate: '2024-01-01', endDate: '2024-06-30', current: false, order: 2,
  },
  {
    company: 'World Hackathon',
    role: 'Frontend Developer',
    description: 'Accelerated prototype technical delivery during competition by implementing reusable components.',
    highlights: [
      { item: 'Implemented reusable components and hooks' },
      { item: 'REST API consumption with React' },
      { item: 'Version control with Git/GitHub' },
    ],
    startDate: '2024-01-01', endDate: '2024-02-28', current: false, order: 3,
  },
]

const mockExperienceEs = [
  {
    company: 'EcoShelf Analytics',
    role: 'Desarrollador Full-Stack',
    description: 'Optimicé la gestión de excedentes de alimentos para panaderías, consolidando el flujo de datos en paneles de inteligencia de negocios.',
    highlights: [
      { item: 'Desarrollé una arquitectura escalable utilizando Next.js (React) y Supabase' },
      { item: 'Implementación de microservicios e integración de APIs REST' },
      { item: 'Integración de Unity para desarrollo 2D/3L y ciberseguridad (OSINT, Wazuh)' },
    ],
    startDate: '2024-01-01', endDate: '2024-06-30', current: false, order: 1,
  },
  {
    company: 'Sistema de Gestión',
    role: 'Ingeniero de Software Back-End',
    description: 'Centralicé el control de asistencia y registro de familias, eliminando la pérdida de datos manuales a través de un sistema de gestión CRUD.',
    highlights: [
      { item: 'Programé la lógica de servidor en Python (Flask)' },
      { item: 'Integración con base de datos relacional en SQL Server' },
      { item: 'Eliminación de datos manuales mediante sistema CRUD automatizado' },
    ],
    startDate: '2024-01-01', endDate: '2024-06-30', current: false, order: 2,
  },
  {
    company: 'World Hackathon',
    role: 'Desarrollador Frontend',
    description: 'Aceleré la entrega técnica del prototipo durante la competencia, mediante la implementación de componentes reutilizables.',
    highlights: [
      { item: 'Implementación de componentes reutilizables y hooks' },
      { item: 'Consumo de APIs REST con React' },
      { item: 'Control de versiones con Git/GitHub' },
    ],
    startDate: '2024-01-01', endDate: '2024-02-28', current: false, order: 3,
  },
]

interface LocalizedString {
  es: string
  en: string
}

interface MockData {
  aboutMe: {
    name: string
    headline: string
    bio: { children: { text: string }[] }[]
    location: string
    cvUrl: string
    socialLinks: { github?: string }
  }
  skills: typeof mockSkills
  projects: any[]
  experience: any[]
  education: (typeof mockEducation)[number] & { degree: string; description: string }
  certifications: typeof mockCertifications
  languages: { name: string; proficiency: string; order: number }[]
}

function getLocalizedEducation(locale: Locale) {
  return mockEducation.map(edu => ({
    ...edu,
    degree: edu.degree[locale],
    description: edu.description[locale],
  }))
}

export function getData(locale: Locale): MockData {
  const aboutMeLocalized: MockData['aboutMe'] = {
    name: 'Nicolás Recalde Ledesma',
    headline: locale === 'es' ? 'Ingeniero de Software' : 'Software Engineer',
    bio: [{
      children: [{
        text: locale === 'es'
          ? 'Estudiante de Ingeniería de Software con experiencia práctica en desarrollo Full-Stack, arquitectura de sistemas y gestión de bases de datos. Especializado en la creación de soluciones tecnológicas eficientes, con dominio en el desarrollo de aplicaciones web (React, Next.js), diseño de APIs (Flask, Node.js) y modelado de datos relacionales y NoSQL.'
          : 'Software Engineering student with hands-on experience in Full-Stack development, system architecture, and database management. Specialized in building efficient technology solutions, with expertise in web application development (React, Next.js), API design (Flask, Node.js), and relational and NoSQL data modeling.',
      }],
    }],
    location: 'Quito, Ecuador',
    cvUrl: '#',
    socialLinks: { github: 'https://github.com/nirec1810' },
  }

  const languagesLocalized = locale === 'es'
    ? [
        { name: 'Español', proficiency: 'Nativo', order: 1 },
        { name: 'Inglés', proficiency: 'Intermedio-Avanzado (B2)', order: 2 },
      ]
    : [
        { name: 'Spanish', proficiency: 'Native', order: 1 },
        { name: 'English', proficiency: 'Intermediate-Advanced (B2)', order: 2 },
      ]

  return {
    aboutMe: aboutMeLocalized,
    skills: mockSkills,
    projects: locale === 'es' ? mockProjectsEs : mockProjectsEn,
    experience: locale === 'es' ? mockExperienceEs : mockExperienceEn,
    education: getLocalizedEducation(locale),
    certifications: mockCertifications,
    languages: languagesLocalized,
  }
}
