# Portafolio — Mauro Contreras

Portafolio profesional de **Mauro Alberto Contreras San Miguel**, estudiante de Ingeniería de Sistemas
Computacionales (UPN) y desarrollador frontend junior.

- **Sitio:** _pendiente de publicación_
- **Objetivo:** que un reclutador entienda en pocos minutos qué sé hacer y qué evidencia lo respalda, y que un
  evaluador técnico pueda revisar cómo organizo una aplicación Angular.

## Tecnologías

| Herramienta | Versión | Por qué |
|---|---|---|
| Angular | 22.2 | Componentes standalone, signals, control flow (`@if`, `@for`), sin `zone.js` |
| TypeScript | 6.0, modo estricto | Contenido tipado: un dato mal escrito no compila |
| Vitest + jsdom | 5 | Ejecutor de pruebas por defecto en Angular 22 |
| CSS puro | — | Variables CSS (tokens), sin frameworks: el sitio pesa ~70 kB transferidos |

No hay backend: el contenido es estático y no lo necesita. Tampoco hay formulario de contacto; el contacto es un
enlace `mailto:` real.

## Requisitos e instalación

- **Node.js** `^22.22.3`, `^24.15.0` o `>=26` (requisito de Angular 22; se desarrolló con Node 24 LTS).
- **npm** 10 o superior.

```bash
npm install
npm start          # http://localhost:4200
npm test -- --watch=false
npm run build      # salida en dist/mauro-portafolio/browser
```

## Estructura

```
src/app/
├── core/
│   ├── models/portfolio.ts                    # Tipos del contenido (Project, Skill, Certification…)
│   └── content/
│       ├── portfolio-content-source.ts        # Contrato (clase abstracta) del que dependen las páginas
│       ├── static-portfolio-content-source.ts # Implementación actual: lee portfolio.data.ts
│       ├── portfolio.data.ts                  # ← Aquí se edita el contenido
│       └── portfolio.data.spec.ts             # Reglas del contenido (privacidad, referencias, https)
├── features/                                  # Una carpeta por sección del sitio
│   ├── home/home-page.ts                      # Pide el contenido y lo reparte a las secciones
│   ├── hero/ about/ projects/ skills/ experience/ certifications/ contact/
│   └── not-found/                             # Página 404 (carga diferida)
├── layout/                                    # Cabecera y pie
└── shared/
    ├── formatting/partial-date.pipe.ts        # Fechas "ene 2025" o solo "2023" según la fuente
    └── ui/section-heading.ts
public/cv/                                     # CV descargable
```

## Arquitectura: SRP, OCP y DIP aplicados

| Principio | Problema que resuelve | Archivos | Cómo lo explicaría en una entrevista |
|---|---|---|---|
| **SRP** — Responsabilidad única | Mezclar datos, formato y presentación hace que cualquier cambio toque muchos archivos | `project-card.ts`, `home-page.ts`, `partial-date.pipe.ts` | "La tarjeta de proyecto solo presenta el `Project` que recibe por `input()`. No sabe de dónde viene el catálogo. `HomePage` es la única pieza que pide el contenido, y el formato de fechas vive en un pipe aparte que se prueba solo." |
| **OCP** — Abierto a extensión, cerrado a modificación | Agregar un proyecto o un estado nuevo no debería obligar a editar componentes | `portfolio.data.ts`, `project-labels.ts`, `skills-section.ts` | "Para añadir un proyecto, agrego un objeto al arreglo `projects`; ningún componente cambia. Los estados están en un `Record<ProjectStatus, …>`: si agrego un estado al tipo, TypeScript me obliga a darle una etiqueta y la tarjeta no necesita ningún `if` nuevo." |
| **DIP** — Inversión de dependencias | Si las páginas importan el archivo de datos directamente, no se pueden probar con datos falsos ni cambiar el origen | `portfolio-content-source.ts`, `static-portfolio-content-source.ts`, `app.config.ts`, `home-page.spec.ts` | "`HomePage` depende de la abstracción `PortfolioContentSource`, no del archivo de datos. Uso una clase abstracta porque las interfaces de TypeScript desaparecen al compilar y Angular necesita un token que exista en tiempo de ejecución. En `app.config.ts` registro `{ provide: PortfolioContentSource, useClass: StaticPortfolioContentSource }`. En la prueba registro una implementación falsa con el mismo token, y la página la muestra sin cambiar una línea." |

**Inyección de dependencias ≠ DIP.** Inyectar un servicio concreto con `inject(MiServicio)` es DI, pero el
componente sigue dependiendo de una implementación. Aquí el DIP aparece porque el componente depende de un
contrato y la implementación concreta se decide en un único lugar (`app.config.ts`).

**Limitación honesta:** el contrato es síncrono (`getContent(): PortfolioContent`) porque hoy los datos son
locales. Si el contenido viniera de una API, el contrato pasaría a devolver un `Observable` o un `Promise`, y eso sí
implicaría ajustar `HomePage`. No lo hice asíncrono antes de tiempo para no añadir estados de carga innecesarios.

## Decisiones de diseño

- **Habilidades sin porcentajes.** Cada habilidad indica su origen (prácticas, proyecto propio, formación
  académica, en formación) y enlaza al proyecto que la respalda.
- **Proyectos con estado explícito** (terminado, en desarrollo, prototipo) y categoría (laboral, académico,
  personal). No se muestran botones a repositorios o demos que no existen.
- **Fechas con la precisión de la fuente:** `PartialDate` acepta `AAAA-MM` o solo `AAAA`; no se inventan meses.
- **Privacidad:** no se publican DNI, teléfono ni dirección. Una prueba (`portfolio.data.spec.ts`) falla si
  aparece un número de 8 dígitos o un teléfono peruano en el contenido.

## Accesibilidad y rendimiento

- HTML semántico: un `h1`, un `h2` por sección, `section` con `aria-labelledby`, `nav` y `main`.
- Enlace "Saltar al contenido", foco visible (`:focus-visible`), navegación completa con teclado.
- Contraste AA en modo claro y oscuro (`prefers-color-scheme`); se respeta `prefers-reduced-motion`.
- En móvil, la navegación se desplaza horizontalmente en lugar de usar un menú con JavaScript.
- Página 404 con carga diferida (`loadComponent`).

## Validaciones

| Comprobación | Cómo | Resultado |
|---|---|---|
| Pruebas unitarias | `npm test -- --watch=false` (12 pruebas) | ✅ |
| Build de producción | `npm run build` | ✅ ~70 kB transferidos |
| Escritorio, móvil (375 px), modo oscuro, foco con teclado | Revisión manual en el navegador | ✅ sin desbordamiento horizontal |
| Consola | Sin errores en desarrollo | ✅ |
| Sitio publicado | — | ⏳ pendiente |

## Despliegue (GitHub Pages)

`.github/workflows/deploy.yml` se ejecuta en cada push a `main`. Instala dependencias, corre las pruebas, compila
con el `--base-href` correcto (`/` para un repo `usuario.github.io`, `/nombre-repo/` para los demás), copia
`index.html` como `404.html` para que las rutas desconocidas muestren la 404 de Angular y publica en Pages.

Activación única: **Settings → Pages → Source: GitHub Actions**.

## Cómo actualizar

- **Proyecto nuevo:** añade un objeto a `projects` en `src/app/core/content/portfolio.data.ts`. Si tiene repo o
  demo, agrégalos en `links`. Si una habilidad lo respalda, usa su `id` en `projectId`.
- **CV:** reemplaza `public/cv/CV_Mauro_Contreras_San_Miguel.pdf`, conservando el nombre.
- **Certificación verificable:** agrega `verifyUrl` (Credly/NetAcad) y aparecerá el botón "Verificar".
- Ejecuta `npm test -- --watch=false` antes de hacer push: las pruebas detectan referencias rotas y datos sensibles.
