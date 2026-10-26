import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../core/models/portfolio';
import { SectionHeading } from '../../shared/ui/section-heading';
import { ProjectCard } from './project-card';

@Component({
  selector: 'app-projects-section',
  imports: [SectionHeading, ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="proyectos" aria-labelledby="proyectos-titulo">
      <div class="container">
        <app-section-heading
          eyebrow="proyectos"
          title="Proyectos destacados"
          headingId="proyectos-titulo"
          intro="Cada proyecto indica si fue laboral, académico o personal, y en qué estado está. Solo enlazo código y demos que existen."
        />
        <div class="grid">
          @for (project of projects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: var(--space-5);
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
    }
  `,
})
export class ProjectsSection {
  readonly projects = input.required<readonly Project[]>();
}
