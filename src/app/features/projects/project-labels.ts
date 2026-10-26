import { ProjectCategory, ProjectStatus } from '../../core/models/portfolio';

/**
 * Textos y tonos de cada estado y categoría.
 * Al ser `Record<Unión, …>`, si se agrega un estado nuevo al modelo el compilador
 * exige definir aquí su etiqueta, y la tarjeta no necesita ningún `if` adicional.
 */
export const PROJECT_STATUS: Record<ProjectStatus, { label: string; tone: 'ok' | 'progress' | 'draft' }> = {
  terminado: { label: 'Terminado', tone: 'ok' },
  'en-desarrollo': { label: 'En desarrollo', tone: 'progress' },
  prototipo: { label: 'Prototipo', tone: 'draft' },
};

export const PROJECT_CATEGORY: Record<ProjectCategory, string> = {
  laboral: 'Experiencia laboral',
  academico: 'Proyecto académico',
  personal: 'Proyecto personal',
};
