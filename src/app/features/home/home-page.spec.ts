import { TestBed } from '@angular/core/testing';
import { PortfolioContentSource } from '../../core/content/portfolio-content-source';
import { PortfolioContent } from '../../core/models/portfolio';
import { PORTFOLIO_CONTENT } from '../../core/content/portfolio.data';
import { HomePage } from './home-page';

/** Implementación falsa del contrato: demuestra que la página no depende del archivo de datos. */
class FakeContentSource extends PortfolioContentSource {
  getContent(): PortfolioContent {
    return {
      ...PORTFOLIO_CONTENT,
      profile: { ...PORTFOLIO_CONTENT.profile, displayName: 'Persona de prueba' },
      projects: [{ ...PORTFOLIO_CONTENT.projects[0], id: 'demo', title: 'Proyecto de prueba' }],
    };
  }
}

describe('HomePage', () => {
  it('muestra lo que entrega cualquier implementación de PortfolioContentSource', () => {
    TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [{ provide: PortfolioContentSource, useClass: FakeContentSource }],
    });
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Persona de prueba');
    expect(text).toContain('Proyecto de prueba');
    expect(text).not.toContain(PORTFOLIO_CONTENT.projects[1].title);
  });
});
