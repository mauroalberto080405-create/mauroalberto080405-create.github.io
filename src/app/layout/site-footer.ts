import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container">
        <p>© {{ year }} Mauro Contreras · Hecho con Angular y TypeScript.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer { padding-block: var(--space-6); border-block-start: 1px solid var(--border); }
    p { margin: 0; color: var(--muted); font-size: var(--text-sm); }
  `,
})
export class SiteFooter {
  protected readonly year = new Date().getFullYear();
}
