import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { PortfolioContentSource } from './core/content/portfolio-content-source';
import { StaticPortfolioContentSource } from './core/content/static-portfolio-content-source';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(routes),
        { provide: PortfolioContentSource, useClass: StaticPortfolioContentSource },
      ],
    }).compileComponents();
  });

  it('incluye enlace para saltar al contenido y un único landmark main', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('a.skip-link')?.getAttribute('href')).toBe('#contenido');
    expect(root.querySelectorAll('main#contenido').length).toBe(1);
  });

  it('cada enlace de navegación apunta a una sección existente', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    const targets = [...root.querySelectorAll('nav a')].map((a) => a.getAttribute('href')!.slice(1));
    expect(targets.length).toBeGreaterThan(0);
    for (const id of targets) {
      expect(root.querySelector(`section#${id}`), `falta la sección #${id}`).not.toBeNull();
    }
  });
});
