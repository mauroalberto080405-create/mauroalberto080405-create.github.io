import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentSource } from '../../core/content/portfolio-content-source';
import { AboutSection } from '../about/about-section';
import { CertificationsSection } from '../certifications/certifications-section';
import { ContactSection } from '../contact/contact-section';
import { ExperienceSection } from '../experience/experience-section';
import { HeroSection } from '../hero/hero-section';
import { ProjectsSection } from '../projects/projects-section';
import { SkillsSection } from '../skills/skills-section';

/**
 * Única pieza que pide el contenido. Depende del contrato `PortfolioContentSource`,
 * no del archivo de datos, y reparte cada parte a una sección de presentación.
 */
@Component({
  selector: 'app-home-page',
  imports: [
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ExperienceSection,
    CertificationsSection,
    ContactSection,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-section [profile]="content.profile" />
    <app-about-section [profile]="content.profile" [languages]="content.languages" />
    <app-projects-section [projects]="content.projects" />
    <app-skills-section [groups]="content.skillGroups" />
    <app-experience-section
      [experience]="content.experience"
      [education]="content.education"
      [achievements]="content.achievements"
    />
    <app-certifications-section [certifications]="content.certifications" />
    <app-contact-section [profile]="content.profile" />
  `,
})
export class HomePage {
  protected readonly content = inject(PortfolioContentSource).getContent();
}
