import { PORTFOLIO_CONTENT } from './portfolio.data';

/** Reglas del contenido que el compilador no puede comprobar por sí solo. */
describe('PORTFOLIO_CONTENT', () => {
  const serialized = JSON.stringify(PORTFOLIO_CONTENT);
  const projectIds = new Set(PORTFOLIO_CONTENT.projects.map((p) => p.id));

  it('no publica datos personales innecesarios (DNI de 8 dígitos ni teléfono)', () => {
    expect(serialized).not.toMatch(/\b\d{8}\b/);
    expect(serialized).not.toMatch(/\+?51\s?9\d{2}\s?\d{3}\s?\d{3}/);
  });

  it('los ids de proyecto son únicos', () => {
    expect(projectIds.size).toBe(PORTFOLIO_CONTENT.projects.length);
  });

  it('toda referencia a un proyecto apunta a uno existente', () => {
    const refs = [
      ...PORTFOLIO_CONTENT.skillGroups.flatMap((g) => g.skills.map((s) => s.projectId)),
      ...PORTFOLIO_CONTENT.experience.map((e) => e.projectId),
    ].filter((id): id is string => !!id);
    for (const id of refs) expect(projectIds, `projectId desconocido: ${id}`).toContain(id);
  });

  it('los enlaces externos usan https', () => {
    const urls = [
      ...PORTFOLIO_CONTENT.profile.links.map((l) => l.url),
      ...PORTFOLIO_CONTENT.projects.flatMap((p) => p.links.map((l) => l.url)),
      ...PORTFOLIO_CONTENT.certifications.flatMap((c) => (c.verifyUrl ? [c.verifyUrl] : [])),
    ];
    for (const url of urls) expect(url).toMatch(/^https:\/\//);
  });
});
