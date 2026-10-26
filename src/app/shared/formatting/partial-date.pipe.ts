import { Pipe, PipeTransform } from '@angular/core';
import { PartialDate, Period } from '../../core/models/portfolio';

const MONTH_FORMAT = new Intl.DateTimeFormat('es-PE', { month: 'short', year: 'numeric', timeZone: 'UTC' });

/** `2025-01` → `ene 2025`; `2023` → `2023`. Respeta la precisión de la fuente. */
export function formatPartialDate(value: PartialDate): string {
  const [year, month] = value.split('-').map(Number);
  if (!month) return String(year);
  return MONTH_FORMAT.format(new Date(Date.UTC(year, month - 1, 1))).replace('.', '');
}

/** `{ start: '2025-01', end: '2025-04' }` → `ene 2025 – abr 2025`; sin `end` → `… – actualidad`. */
export function formatPeriod(period: Period): string {
  const start = formatPartialDate(period.start);
  if (period.end === period.start) return start;
  return `${start} – ${period.end ? formatPartialDate(period.end) : 'actualidad'}`;
}

@Pipe({ name: 'partialDate' })
export class PartialDatePipe implements PipeTransform {
  transform(value: PartialDate): string {
    return formatPartialDate(value);
  }
}

@Pipe({ name: 'period' })
export class PeriodPipe implements PipeTransform {
  transform(value: Period): string {
    return formatPeriod(value);
  }
}
