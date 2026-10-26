import { PortfolioContent } from '../models/portfolio';

/**
 * Contenido del portafolio. Fuentes: CV (IGNITE, oct 2026), constancia de prácticas,
 * documentación de BUSKA y certificados en PDF. La trazabilidad de cada dato está en un documento de trabajo local, fuera del repositorio.
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
      'Tengo experiencia práctica en desarrollo frontend con HTML, CSS y JavaScript gracias a 320 horas de prácticas, y construí este portafolio con Angular y TypeScript para demostrar cómo organizo una aplicación.',
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
        url: 'https://www.linkedin.com/in/mauro-contreras-san-miguel',
      },
    ],
    cv: {
      url: 'cv/CV_Mauro_Contreras_San_Miguel.pdf',
      fileName: 'CV_Mauro_Contreras_San_Miguel.pdf',
    },
  },

  projects: [
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
      // El enlace al repositorio se agrega cuando esté publicado.
      links: [],
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
        { name: 'Angular', evidence: 'proyecto-propio', projectId: 'portafolio' },
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
        { name: 'SQL (MySQL, SQL Server)', evidence: 'academica', detail: 'Curso de Base de Datos' },
        { name: 'MongoDB', evidence: 'academica' },
        { name: 'Java y Spring Boot', evidence: 'academica', detail: 'Programación Orientada a Objetos' },
        { name: 'APIs REST', evidence: 'en-formacion' },
      ],
    },
    {
      name: 'Diseño y herramientas',
      skills: [
        { name: 'Figma', evidence: 'practicas', projectId: 'buska' },
        { name: 'Git / GitHub', evidence: 'practicas', projectId: 'buska', detail: 'Ramas por funcionalidad' },
        { name: 'Visual Studio Code', evidence: 'practicas' },
      ],
    },
    {
      name: 'Otros',
      skills: [
        { name: 'OWL y SPARQL', evidence: 'academica', projectId: 'ontologia-uerj' },
        { name: 'Python', evidence: 'academica', detail: 'Nivel básico' },
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
        'Cursos: Programación Orientada a Objetos, Base de Datos, Diseño y Arquitectura de Software, Sistemas Operativos, Redes.',
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
