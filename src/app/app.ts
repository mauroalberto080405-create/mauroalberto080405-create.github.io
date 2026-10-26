import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-site-header />
    <main id="contenido" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
})
export class App {}
