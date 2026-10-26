import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Language, Profile } from '../../core/models/portfolio';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="sobre-mi" aria-labelledby="sobre-mi-titulo">
      <div class="container layout">
        <div>
          <app-section-heading eyebrow="sobre mí" title="Quién soy" headingId="sobre-mi-titulo" />
          @for (paragraph of profile().summary; track $index) {
            <p class="prose">{{ paragraph }}</p>
          }
        </div>
        <aside class="panel" aria-label="Qué busco e idiomas">
          <h3>Qué busco</h3>
          <p>{{ profile().lookingFor }}</p>
          <h3>Idiomas</h3>
          <ul>
            @for (language of languages(); track language.name) {
              <li><strong>{{ language.name }}:</strong> {{ language.level }}</li>
            }
          </ul>
        </aside>
      </div>
    </section>
  `,
  styles: `
    .layout { display: grid; gap: var(--space-8); align-items: start; }
    @media (min-width: 60rem) { .layout { grid-template-columns: 3fr 2fr; } }
    .prose { max-width: 65ch; font-size: var(--text-lg); line-height: 1.7; }
    .panel {
      padding: var(--space-6);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
    }
    .panel h3 { margin: 0 0 var(--space-2); font-size: var(--text-base); }
    .panel h3:not(:first-child) { margin-block-start: var(--space-5); }
    .panel p { margin: 0; }
    .panel ul { margin: 0; padding-inline-start: 1.1rem; }
  `,
})
export class AboutSection {
  readonly profile = input.required<Profile>();
  readonly languages = input.required<readonly Language[]>();
}
