import { TestBed } from '@angular/core/testing';
import { Project } from '../../core/models/portfolio';
import { ProjectCard } from './project-card';

const base: Project = {
  id: 'demo',
  title: 'Demo',
  context: 'Pruebas',
  category: 'academico',
  status: 'prototipo',
  period: { start: '2025-01', end: '2025-04' },
  problem: 'Problema',
  contribution: ['Hice X'],
  features: ['Función Y'],
  tech: ['Angular'],
  links: [],
};

function render(project: Project): HTMLElement {
  const fixture = TestBed.createComponent(ProjectCard);
  fixture.componentRef.setInput('project', project);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe('ProjectCard', () => {
  it('distingue un prototipo y su categoría', () => {
    const el = render(base);
    expect(el.textContent).toContain('Prototipo');
    expect(el.textContent).toContain('Proyecto académico');
    expect(el.textContent).toContain('ene 2025 – abr 2025');
  });

  it('no dibuja enlaces cuando el proyecto no tiene ninguno', () => {
    expect(render(base).querySelectorAll('a').length).toBe(0);
  });

  it('abre los enlaces externos de forma segura', () => {
    const el = render({ ...base, links: [{ kind: 'repo', label: 'Código', url: 'https://example.com' }] });
    const a = el.querySelector('a')!;
    expect(a.getAttribute('rel')).toContain('noopener');
    expect(a.getAttribute('target')).toBe('_blank');
  });
});
