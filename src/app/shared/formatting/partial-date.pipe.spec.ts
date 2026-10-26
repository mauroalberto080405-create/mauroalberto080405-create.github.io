import { formatPartialDate, formatPeriod } from './partial-date.pipe';

describe('formatPartialDate / formatPeriod', () => {
  it('respeta la precisión de la fuente', () => {
    expect(formatPartialDate('2025-01')).toBe('ene 2025');
    expect(formatPartialDate('2023')).toBe('2023');
  });

  it('formatea periodos abiertos, cerrados y de un solo mes', () => {
    expect(formatPeriod({ start: '2025-01', end: '2025-04' })).toBe('ene 2025 – abr 2025');
    expect(formatPeriod({ start: '2022' })).toBe('2022 – actualidad');
    expect(formatPeriod({ start: '2026-05', end: '2026-05' })).toBe('may 2026');
  });
});
