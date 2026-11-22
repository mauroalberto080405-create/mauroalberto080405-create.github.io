import { PortfolioContent } from '../models/portfolio';

/**
 * Contenido del portafolio. Fuentes: CV (nov 2026), constancia de prácticas, documentación
 * de BUSKA, certificados en PDF y los README de los repositorios públicos de GitHub. La trazabilidad de cada dato está en un documento de trabajo local, fuera del repositorio.
 *
 * Para añadir un proyecto: agrega un objeto a `projects`. No hace falta tocar componentes.
 * Reglas: nada de DNI, teléfono ni dirección; ningún enlace que no exista.
 */
export const PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    fullName: 'Mauro Alberto Contreras San Miguel',
    displayName: 'Mauro Contreras',
    role: 'Desarrollador de Software Junior · Frontend',
    location: 'Lima, Perú',
    headline:
      'Convierto diseños de Figma en interfaces web claras y responsive con HTML semántico, CSS, TypeScript y Angular.',
    summary: [
      'Soy estudiante de últimos ciclos de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte (UPN). Durante un intercambio académico en la Universidade do Estado do Rio de Janeiro (UERJ) aprobé Ingeniería de Software con 10/10.',
      'Tengo experiencia práctica en desarrollo frontend con HTML, CSS y JavaScript gracias a 320 horas de prácticas. En mis proyectos personales construí un lector de facturas full stack con Angular y FastAPI, una tienda online con pagos en línea y este portafolio en Angular, siempre con pruebas automatizadas.',
    ],
    lookingFor:
      'Busco prácticas profesionales o un primer empleo como desarrollador junior, donde pueda aportar en el frontend y seguir aprendiendo Java, APIs REST y SQL dentro de un equipo.',
    highlights: [
      '320 h de prácticas en desarrollo web',
      'Intercambio en la UERJ (Brasil)',
      '2.° puesto en la Feria de Proyectos UPN 2025-1',
    ],
    email: 'mauroalberto080405@gmail.com',
    links: [
      { kind: 'github', label: 'GitHub', url: 'https://github.com/mauroalberto080405-create' },
      {
        kind: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mauro-contreras-san-miguel-297164343',
      },
    ],
    cv: {
      url: 'cv/CV_Mauro_Contreras_San_Miguel.pdf',
      fileName: 'CV_Mauro_Contreras_San_Miguel.pdf',
    },
  },

  projects: [
    {
      id: 'lector-facturas',
      title: 'Lector de facturas con IA',
      context: 'Proyecto personal · full stack',
      category: 'personal',
      status: 'prototipo',
      period: { start: '2026-11' },
      problem:
        'Registrar facturas de proveedores a mano es lento y propenso a errores: un IGV mal calculado o un RUC mal escrito pasan desapercibidos.',
      contribution: [
        'Desarrollé la API en FastAPI: recibe facturas electrónicas peruanas en PDF, extrae sus datos con un modelo de IA y los guarda en PostgreSQL.',
        'Separé la extracción (IA) de la validación (código): las reglas contables son funciones puras con pruebas, y una factura con errores queda OBSERVADA para revisión humana.',
        'Construí el frontend en Angular con signals, formularios reactivos y un único servicio HTTP tipado.',
        'Escribí pruebas con pytest y Jasmine que no dependen de la IA ni de la base de datos, y se ejecutan en GitHub Actions.',
      ],
      features: [
        'Validaciones SUNAT: dígito verificador del RUC, IGV del 18 %, totales y suma de ítems',
        'Detección de facturas duplicadas (RUC + serie-número)',
        'Listado con filtros por RUC, estado y fechas, y resumen por mes y proveedor',
        'Proveedor de IA intercambiable (Ollama local u OpenAI)',
      ],
      tech: ['Angular 20', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker Compose', 'pytest'],
      links: [
        { kind: 'repo', label: 'Código en GitHub', url: 'https://github.com/mauroalberto080405-create/lector-facturas-ia' },
      ],
      note: 'Demostración local con facturas ficticias: se ejecuta con Docker y Ollama, sin demo pública. No hace OCR de facturas escaneadas.',
    },
    {
      id: 'johari',
      title: 'Johari Shop Beauty — tienda online',
      context: 'Proyecto personal · e-commerce',
      category: 'personal',
      status: 'en-desarrollo',
      period: { start: '2026-11' },
      problem:
        'Un emprendimiento peruano de maquillaje y skincare necesitaba vender en línea y administrar su catálogo y stock.',
      contribution: [
        'Desarrollé la tienda con HTML semántico, CSS propio (BEM, mobile-first) y JavaScript con módulos ES, sin frameworks.',
        'Integré Firebase (Authentication y Firestore con reglas de seguridad) y pagos con Culqi mediante Cloud Functions que calculan el monto en el servidor.',
        'Construí un panel para la dueña: productos, variantes, stock, imágenes y pedidos pagados.',
      ],
      features: [
        'Catálogo con búsqueda en tiempo real que ignora tildes y mayúsculas, y filtros por categoría',
        'Carrito que nunca supera el stock y avisa si cambia un precio',
        'Pago con tarjeta o Yape (Culqi) o pedido por WhatsApp',
        'Diálogos accesibles: foco atrapado, cierre con Escape y foco visible',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript (ES modules)', 'Firebase', 'Cloud Functions', 'Culqi', 'node:test'],
      links: [
        { kind: 'demo', label: 'Ver demo', url: 'https://johari-shop-beauty.netlify.app' },
        { kind: 'repo', label: 'Código en GitHub', url: 'https://github.com/mauroalberto080405-create/johari-shop-beauty' },
      ],
    },
    {
      id: 'buska',
      title: 'BUSKA — módulo de comprador',
      context: 'Prácticas en Sigue Tu Norte E.I.R.L.',
      category: 'laboral',
      status: 'terminado',
      period: { start: '2025-01', end: '2025-04' },
      problem:
        'Las microempresas exportadoras peruanas necesitaban una plataforma web de comercio exterior donde los compradores pudieran conocer y adquirir sus productos.',
      contribution: [
        'Diseñé wireframes y mockups en Figma y los convertí en vistas funcionales.',
        'Desarrollé el módulo de comprador de principio a fin.',
        'Elaboré la documentación técnica y de usuario del sistema.',
      ],
      features: [
        'Catálogo con paginación y detalle de producto',
        'Carrito de compras y perfil editable',
        'Formularios de pago con validaciones en el cliente (solo letras, solo números, campos obligatorios, límite de caracteres)',
        'Diseño responsive con media queries y CSS organizado con BEM',
      ],
      tech: ['HTML5', 'CSS3', 'BEM', 'JavaScript (ES6+)', 'Figma', 'Git'],
      links: [],
      note: 'Proyecto de empresa: el código y las capturas no son públicos. Mi participación está respaldada por la constancia de prácticas (320 h).',
    },
    {
      id: 'portafolio',
      title: 'Portafolio profesional',
      context: 'Proyecto personal',
      category: 'personal',
      status: 'en-desarrollo',
      period: { start: '2026-10' },
      problem:
        'Necesitaba que un reclutador entienda en pocos minutos qué sé hacer y que un evaluador técnico pueda revisar cómo organizo una aplicación Angular.',
      contribution: [
        'Definí el contenido a partir de evidencia verificable, sin porcentajes de dominio.',
        'Diseñé la interfaz y la implementé con componentes standalone y signals.',
        'Separé el contenido de la presentación mediante un contrato inyectable.',
      ],
      features: [
        'Contenido tipado y editable desde un solo archivo',
        'Diseño responsive, modo oscuro automático y navegación por teclado',
        'Pruebas unitarias con Vitest, incluida una verificación de que no se publiquen datos sensibles',
      ],
      tech: ['Angular 22', 'TypeScript', 'CSS', 'Vitest'],
      links: [
        {
          kind: 'repo',
          label: 'Código en GitHub',
          url: 'https://github.com/mauroalberto080405-create/mauroalberto080405-create.github.io',
        },
      ],
    },
    {
      id: 'evotech',
      title: 'EvoTech — sistema de ventas e inventario',
      context: 'Proyecto académico en equipo · UPN',
      category: 'academico',
      status: 'terminado',
      period: { start: '2026-11', end: '2026-11' },
      problem:
        'Una tienda de equipos tecnológicos necesitaba automatizar la venta en mostrador y el control de inventario.',
      contribution: [
        'Organicé el repositorio: línea base, README, guía de trabajo con Git y plantilla de pull request.',
        'Desarrollé el ingreso de mercadería por proveedor (con N.° de factura o guía) y la edición de proveedores con validación del RUC.',
        'Revisé e integré los pull requests del equipo, trabajados en ramas por funcionalidad.',
      ],
      features: [
        'Aplicación de escritorio con 12 pantallas',
        'Arquitectura en capas (modelos, datos, negocio e interfaz) con inyección de dependencias',
        'Base de datos SQLite de 8 tablas',
        'Versiones etiquetadas por entrega (v1.0-T2, v2.0-T3)',
      ],
      tech: ['C#', '.NET 8', 'Windows Forms', 'SQLite', 'Git'],
      links: [
        { kind: 'repo', label: 'Código en GitHub', url: 'https://github.com/mauroalberto080405-create/EvoTech' },
      ],
    },
    {
      id: 'ontologia-uerj',
      title: 'Ontología formal de Ingeniería de Software',
      context: 'Proyecto académico · UERJ',
      category: 'academico',
      status: 'terminado',
      period: { start: '2026-05', end: '2026-05' },
      problem:
        'Representar de forma estructurada y consultable el conocimiento sobre sistemas de software.',
      contribution: [
        'Modelé la jerarquía de clases y las propiedades en Protégé (OWL).',
        'Escribí consultas en SPARQL sobre la ontología.',
      ],
      features: ['Jerarquía de clases', 'Propiedades de objeto y de datos', 'Consultas SPARQL'],
      tech: ['Protégé', 'OWL', 'SPARQL'],
      links: [],
    },
  ],

  skillGroups: [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', evidence: 'proyecto-propio', projectId: 'portafolio', detail: 'También en el lector de facturas' },
        { name: 'TypeScript', evidence: 'proyecto-propio', projectId: 'portafolio' },
        { name: 'JavaScript (ES6+)', evidence: 'practicas', projectId: 'buska' },
        { name: 'HTML5 semántico', evidence: 'practicas', projectId: 'buska' },
        { name: 'CSS3 · BEM', evidence: 'practicas', projectId: 'buska' },
        { name: 'Diseño responsive', evidence: 'practicas', projectId: 'buska' },
      ],
    },
    {
      name: 'Backend y datos',
      skills: [
        { name: 'APIs REST con FastAPI', evidence: 'proyecto-propio', projectId: 'lector-facturas' },
        { name: 'Python', evidence: 'en-formacion', projectId: 'lector-facturas' },
        { name: 'SQL (MySQL, SQL Server)', evidence: 'academica', detail: 'Curso de Base de Datos' },
        { name: 'MongoDB', evidence: 'academica' },
        { name: 'C# y .NET', evidence: 'academica', projectId: 'evotech' },
        { name: 'Java y Spring Boot', evidence: 'academica', detail: 'Programación Orientada a Objetos' },
      ],
    },
    {
      name: 'Diseño y herramientas',
      skills: [
        { name: 'Figma', evidence: 'practicas', projectId: 'buska' },
        { name: 'Git / GitHub', evidence: 'practicas', projectId: 'buska', detail: 'Ramas por funcionalidad y pull requests' },
        { name: 'Pruebas unitarias', evidence: 'proyecto-propio', projectId: 'lector-facturas', detail: 'pytest, Jasmine y Vitest' },
        { name: 'GitHub Actions (CI/CD)', evidence: 'proyecto-propio', projectId: 'portafolio' },
        { name: 'Visual Studio Code', evidence: 'practicas' },
      ],
    },
    {
      name: 'Otros',
      skills: [
        { name: 'OWL y SPARQL', evidence: 'academica', projectId: 'ontologia-uerj' },
        { name: 'Redes y Linux', evidence: 'academica', detail: 'Cursos Cisco NetAcad' },
      ],
    },
  ],

  experience: [
    {
      role: 'Practicante de Desarrollo de Software',
      organization: 'Sigue Tu Norte E.I.R.L.',
      period: { start: '2025-01', end: '2025-04' },
      detail:
        'Proyecto BUSKA, plataforma web de comercio exterior para microempresas exportadoras peruanas. 320 horas.',
      projectId: 'buska',
    },
  ],

  education: [
    {
      program: 'Ingeniería de Sistemas Computacionales',
      institution: 'Universidad Privada del Norte (UPN)',
      period: { start: '2022' },
      details: [
        'Cursos: Programación Orientada a Objetos, Base de Datos, Diseño y Arquitectura de Software, Sistemas Inteligentes y Machine Learning, Sistemas Operativos, Redes.',
      ],
    },
    {
      program: 'Intercambio académico · Ciência da Computação',
      institution: 'Universidade do Estado do Rio de Janeiro (UERJ), Brasil',
      period: { start: '2026-03', end: '2026-07' },
      details: ['Engenharia de Software: 10/10', 'Inteligência Artificial: 8,1/10'],
    },
  ],

  achievements: [
    {
      title: '2.° puesto en la Feria de Proyectos',
      issuer: 'Facultad de Ingeniería, UPN (sede Breña)',
      date: '2025-07',
      detail: 'Carrera de Ingeniería de Sistemas Computacionales, semestre 2025-1.',
    },
  ],

  certifications: [
    { name: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco Networking Academy', date: '2026-11', relevance: 'principal' },
    { name: 'CCNA: Switching, Routing & Wireless Essentials', issuer: 'Cisco Networking Academy', date: '2025-11', relevance: 'principal' },
    { name: 'Linux Essentials', issuer: 'Cisco Networking Academy · NDG', date: '2025-07', relevance: 'principal' },
    { name: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', date: '2025-06', relevance: 'principal' },
    { name: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy', date: '2025-07', hours: 20, relevance: 'principal' },
    { name: 'CLP: Advanced Programming in C', issuer: 'Cisco Networking Academy', date: '2023', relevance: 'principal' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '2022-06', relevance: 'complementaria' },
    { name: 'Programa de Ofimática Pro (nivel intermedio)', issuer: 'CERTUS', date: '2025', hours: 147, relevance: 'complementaria' },
  ],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Portugués', level: 'Intermedio (estudios y residencia en Brasil)' },
    { name: 'Inglés', level: 'Básico (A2), en formación' },
  ],
};
