import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../core/models/portfolio';
import { PeriodPipe } from '../../shared/formatting/partial-date.pipe';
import { PROJECT_CATEGORY, PROJECT_STATUS } from './project-labels';

/** Solo presenta el proyecto que recibe. No sabe de dónde viene el catálogo. */
@Component({
  selector: 'app-project-card',
  imports: [PeriodPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly status = computed(() => PROJECT_STATUS[this.project().status]);
  protected readonly category = computed(() => PROJECT_CATEGORY[this.project().category]);
  protected readonly titleId = computed(() => `proyecto-${this.project().id}`);
}
