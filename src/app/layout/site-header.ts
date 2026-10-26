import { ChangeDetectionStrategy, Component } from '@angular/core';

const SECTIONS = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
] as const;

/**
 * Cabecera fija con enlaces ancla. En móvil la lista se desplaza horizontalmente,
 * así no hace falta un menú desplegable con JavaScript.
 */
@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <header class="header">
      <div class="container header__inner">
        <a class="brand" href="#inicio" aria-label="Mauro Contreras, ir al inicio">
          <span aria-hidden="true">&lt;mc /&gt;</span>
        </a>
        <nav aria-label="Secciones">
          <ul>
            @for (section of sections; track section.id) {
              <li><a [href]="'#' + section.id">{{ section.label }}</a></li>
            }
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .skip-link {
      position: absolute;
      left: var(--space-3);
      top: -4rem;
      z-index: 100;
      padding: var(--space-2) var(--space-4);
      background: var(--text);
      color: var(--bg);
      border-radius: var(--radius-sm);
    }
    .skip-link:focus { top: var(--space-3); }

    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(8px);
      border-block-end: 1px solid var(--border);
    }
    .header__inner { display: flex; align-items: center; gap: var(--space-5); min-height: var(--header-height); }
    .brand {
      flex: none;
      font-family: var(--font-mono);
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
    }
    nav { overflow-x: auto; scrollbar-width: none; margin-inline-start: auto; }
    ul { list-style: none; display: flex; gap: var(--space-1); margin: 0; padding: var(--space-1); }
    nav a {
      display: block;
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-sm);
      color: var(--muted);
      font-size: var(--text-sm);
      font-weight: 500;
      text-decoration: none;
      white-space: nowrap;
    }
    nav a:hover { color: var(--text); background: var(--accent-soft); }
  `,
})
export class SiteHeader {
  protected readonly sections = SECTIONS;
}
