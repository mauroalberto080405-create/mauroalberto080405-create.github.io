import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Encabezado común de sección: etiqueta corta + título `h2` con id para `aria-labelledby`. */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="eyebrow" aria-hidden="true">{{ eyebrow() }}</p>
    <h2 [id]="headingId()">{{ title() }}</h2>
    @if (intro()) {
      <p class="intro">{{ intro() }}</p>
    }
  `,
  styles: `
    :host { display: block; margin-block-end: var(--space-6); }
    .eyebrow {
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      color: var(--accent-strong);
      margin: 0 0 var(--space-2);
    }
    .eyebrow::before { content: '// '; color: var(--muted); }
    h2 { margin: 0; font-size: var(--text-2xl); line-height: 1.15; letter-spacing: -0.01em; }
    .intro { margin: var(--space-3) 0 0; color: var(--muted); max-width: 62ch; }
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly intro = input<string>();
}
