import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Profile } from '../../core/models/portfolio';
import { SectionHeading } from '../../shared/ui/section-heading';

/** Contacto sin formulario: un `mailto:` real en lugar de un formulario que no envía nada. */
@Component({
  selector: 'app-contact-section',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="contacto" aria-labelledby="contacto-titulo">
      <div class="container contact">
        <app-section-heading
          eyebrow="contacto"
          title="Conversemos"
          headingId="contacto-titulo"
          intro="Si tienes una vacante de prácticas o un puesto junior, escríbeme por correo o por LinkedIn."
        />
        <div class="actions">
          <a class="button button--primary" [href]="'mailto:' + profile().email">{{ profile().email }}</a>
          <a class="button" [href]="profile().cv.url" [attr.download]="profile().cv.fileName">Descargar CV (PDF)</a>
          @for (link of profile().links; track link.url) {
            <a class="button button--ghost" [href]="link.url" target="_blank" rel="noopener noreferrer">
              {{ link.label }}<span class="visually-hidden"> (abre en otra pestaña)</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact { text-align: center; display: grid; justify-items: center; }
    .contact app-section-heading { display: grid; justify-items: center; }
    .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-3); }
    .button--primary { overflow-wrap: anywhere; }
  `,
})
export class ContactSection {
  readonly profile = input.required<Profile>();
}
