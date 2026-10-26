/**
 * Modelos del contenido del portafolio.
 * Los componentes solo conocen estos tipos, nunca el origen de los datos.
 */

/**
 * Fecha con la precisión que respalda la fuente: `AAAA-MM` (p. ej. `2025-01`)
 * o solo `AAAA` cuando el documento no indica el mes. No se inventan meses.
 */
export type PartialDate = `${number}` | `${number}-${number}`;

export interface Period {
  readonly start: PartialDate;
  /** Si se omite, el periodo sigue en curso. */
  readonly end?: PartialDate;
}

export type LinkKind = 'github' | 'linkedin' | 'email' | 'cv' | 'repo' | 'demo';

export interface ExternalLink {
  readonly kind: LinkKind;
  readonly label: string;
  readonly url: string;
}

export interface Profile {
  readonly fullName: string;
  readonly displayName: string;
  readonly role: string;
  readonly location: string;
  readonly headline: string;
  readonly summary: readonly string[];
  readonly lookingFor: string;
  readonly highlights: readonly string[];
  readonly email: string;
  readonly links: readonly ExternalLink[];
  readonly cv: { readonly url: string; readonly fileName: string };
}

/** Diferencia experiencia laboral, proyectos académicos y personales. */
export type ProjectCategory = 'laboral' | 'academico' | 'personal';

/** Distingue claramente un prototipo de una aplicación terminada. */
export type ProjectStatus = 'en-desarrollo' | 'prototipo' | 'terminado';

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly context: string;
  readonly category: ProjectCategory;
  readonly status: ProjectStatus;
  readonly period: Period;
  readonly problem: string;
  readonly contribution: readonly string[];
  readonly features: readonly string[];
  readonly tech: readonly string[];
  readonly links: readonly ExternalLink[];
  /** Aclaración visible, p. ej. por qué no hay código público. */
  readonly note?: string;
}

/** De dónde proviene una habilidad. Sustituye a los porcentajes arbitrarios. */
export type SkillEvidenceKind = 'practicas' | 'proyecto-propio' | 'academica' | 'en-formacion';

export interface Skill {
  readonly name: string;
  readonly evidence: SkillEvidenceKind;
  /** Proyecto que la respalda, si existe. Debe coincidir con un `Project.id`. */
  readonly projectId?: string;
  readonly detail?: string;
}

export interface SkillGroup {
  readonly name: string;
  readonly skills: readonly Skill[];
}

export interface Experience {
  readonly role: string;
  readonly organization: string;
  readonly period: Period;
  readonly detail: string;
  readonly projectId?: string;
}

export interface Education {
  readonly program: string;
  readonly institution: string;
  readonly period: Period;
  readonly details: readonly string[];
}

export interface Achievement {
  readonly title: string;
  readonly issuer: string;
  readonly date: PartialDate;
  readonly detail: string;
}

export interface Certification {
  readonly name: string;
  readonly issuer: string;
  readonly date: PartialDate;
  readonly hours?: number;
  /** Enlace público de verificación (Credly, NetAcad). Sin él no se muestra botón. */
  readonly verifyUrl?: string;
  readonly relevance: 'principal' | 'complementaria';
}

export interface Language {
  readonly name: string;
  readonly level: string;
}

export interface PortfolioContent {
  readonly profile: Profile;
  readonly projects: readonly Project[];
  readonly skillGroups: readonly SkillGroup[];
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly achievements: readonly Achievement[];
  readonly certifications: readonly Certification[];
  readonly languages: readonly Language[];
}
