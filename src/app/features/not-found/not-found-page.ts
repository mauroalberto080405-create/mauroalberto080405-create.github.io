import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container">
        <p class="code" aria-hidden="true">404</p>
        <h1>Esta página no existe</h1>
        <p>Puede que el enlace esté incompleto. Todo el portafolio está en la página principal.</p>
        <a class="button button--primary" routerLink="/">Volver al inicio</a>
      </div>
    </section>
  `,
  styles: `
    .code { margin: 0; font-family: var(--font-mono); font-size: var(--text-2xl); color: var(--accent-strong); }
    h1 { margin: var(--space-2) 0; }
  `,
})
export class NotFoundPage {}
