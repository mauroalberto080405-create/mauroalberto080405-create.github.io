import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Certification } from '../../core/models/portfolio';
import { PartialDatePipe } from '../../shared/formatting/partial-date.pipe';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-certifications-section',
  imports: [SectionHeading, PartialDatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="certificaciones" aria-labelledby="certificaciones-titulo">
      <div class="container">
        <app-section-heading
          eyebrow="certificaciones"
          title="Certificaciones y cursos"
          headingId="certificaciones-titulo"
          intro="Cuando una credencial tiene enlace público de verificación, aparece junto a ella."
        />
        <ul class="list">
          @for (cert of sorted(); track cert.name) {
            <li class="item" [class.item--secondary]="cert.relevance === 'complementaria'">
              <div>
                <p class="item__name">{{ cert.name }}</p>
                <p class="item__issuer">
                  {{ cert.issuer }}@if (cert.hours) {<span> · {{ cert.hours }} h</span>}
                </p>
              </div>
              <div class="item__side">
                <time>{{ cert.date | partialDate }}</time>
                @if (cert.verifyUrl) {
                  <a [href]="cert.verifyUrl" target="_blank" rel="noopener noreferrer">
                    Verificar<span class="visually-hidden"> {{ cert.name }} (abre en otra pestaña)</span>
                  </a>
                }
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-3); }
    @media (min-width: 52rem) { .list { grid-template-columns: 1fr 1fr; } }
    .item {
      display: flex;
      justify-content: space-between;
      gap: var(--space-4);
      padding: var(--space-4) var(--space-5);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
    }
    .item--secondary { background: transparent; }
    .item p { margin: 0; }
    .item__name { font-weight: 600; }
    .item__issuer { color: var(--muted); font-size: var(--text-sm); }
    .item__side {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: var(--space-1);
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      white-space: nowrap;
    }
  `,
})
export class CertificationsSection {
  readonly certifications = input.required<readonly Certification[]>();

  /** Primero las principales; dentro de cada grupo, de la más reciente a la más antigua. */
  protected readonly sorted = computed(() =>
    [...this.certifications()].sort(
      (a, b) =>
        Number(a.relevance === 'complementaria') - Number(b.relevance === 'complementaria') ||
        b.date.localeCompare(a.date),
    ),
  );
}
