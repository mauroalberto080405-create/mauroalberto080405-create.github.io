import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Achievement, Education, Experience } from '../../core/models/portfolio';
import { PartialDatePipe, PeriodPipe } from '../../shared/formatting/partial-date.pipe';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-experience-section',
  imports: [SectionHeading, PeriodPipe, PartialDatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="experiencia" aria-labelledby="experiencia-titulo">
      <div class="container">
        <app-section-heading eyebrow="trayectoria" title="Experiencia y formación" headingId="experiencia-titulo" />
        <div class="columns">
          <div>
            <h3 class="column-title">Experiencia</h3>
            <ol class="timeline">
              @for (item of experience(); track item.role + item.organization) {
                <li>
                  <p class="when"><time>{{ item.period | period }}</time></p>
                  <h4>{{ item.role }}</h4>
                  <p class="where">{{ item.organization }}</p>
                  <p>{{ item.detail }}</p>
                  @if (item.projectId) {
                    <a [href]="'#proyecto-' + item.projectId">Ver qué construí</a>
                  }
                </li>
              }
            </ol>

            <h3 class="column-title">Logros</h3>
            <ol class="timeline">
              @for (item of achievements(); track item.title) {
                <li>
                  <p class="when"><time>{{ item.date | partialDate }}</time></p>
                  <h4>{{ item.title }}</h4>
                  <p class="where">{{ item.issuer }}</p>
                  <p>{{ item.detail }}</p>
                </li>
              }
            </ol>
          </div>
          <div>
            <h3 class="column-title">Formación</h3>
            <ol class="timeline">
              @for (item of education(); track item.program) {
                <li>
                  <p class="when"><time>{{ item.period | period }}</time></p>
                  <h4>{{ item.program }}</h4>
                  <p class="where">{{ item.institution }}</p>
                  <ul>
                    @for (detail of item.details; track detail) {
                      <li>{{ detail }}</li>
                    }
                  </ul>
                </li>
              }
            </ol>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience-section.css',
})
export class ExperienceSection {
  readonly experience = input.required<readonly Experience[]>();
  readonly education = input.required<readonly Education[]>();
  readonly achievements = input.required<readonly Achievement[]>();
}
