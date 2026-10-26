import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillEvidenceKind, SkillGroup } from '../../core/models/portfolio';
import { SectionHeading } from '../../shared/ui/section-heading';

/** En lugar de porcentajes, cada habilidad declara de dónde proviene. */
const EVIDENCE_LABEL: Record<SkillEvidenceKind, string> = {
  practicas: 'Aplicada en prácticas',
  'proyecto-propio': 'Aplicada en proyecto propio',
  academica: 'Formación académica',
  'en-formacion': 'En formación',
};

@Component({
  selector: 'app-skills-section',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="habilidades" aria-labelledby="habilidades-titulo">
      <div class="container">
        <app-section-heading
          eyebrow="habilidades"
          title="Habilidades y su evidencia"
          headingId="habilidades-titulo"
          intro="Sin porcentajes: cada habilidad indica dónde la usé y, si existe, enlaza al proyecto que la respalda."
        />
        <div class="groups">
          @for (group of groups(); track group.name) {
            <section class="group" [attr.aria-label]="group.name">
              <h3>{{ group.name }}</h3>
              <ul>
                @for (skill of group.skills; track skill.name) {
                  <li class="skill">
                    <span class="skill__name">{{ skill.name }}</span>
                    <span class="skill__evidence" [attr.data-kind]="skill.evidence">
                      {{ label[skill.evidence] }}@if (skill.detail) {<span> · {{ skill.detail }}</span>}
                    </span>
                    @if (skill.projectId) {
                      <a class="skill__link" [href]="'#proyecto-' + skill.projectId">
                        Ver evidencia<span class="visually-hidden"> de {{ skill.name }}</span>
                      </a>
                    }
                  </li>
                }
              </ul>
            </section>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills-section.css',
})
export class SkillsSection {
  readonly groups = input.required<readonly SkillGroup[]>();
  protected readonly label = EVIDENCE_LABEL;
}
