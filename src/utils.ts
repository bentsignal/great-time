import type { TimeUnit, TargetTimeUnit } from "./types";

const MS_PER_UNIT: Record<TimeUnit, number> = {
  ms: 1,
  second: 1_000,
  seconds: 1_000,
  minute: 60_000,
  minutes: 60_000,
  hour: 3_600_000,
  hours: 3_600_000,
  day: 86_400_000,
  days: 86_400_000,
  week: 604_800_000,
  weeks: 604_800_000,
  month: 2_592_000_000,
  months: 2_592_000_000,
  year: 31_536_000_000,
  years: 31_536_000_000,
};

export function toMs(value: number, unit: TimeUnit): number {
  return value * MS_PER_UNIT[unit];
}

export function parseTargetUnit(target: TargetTimeUnit): TimeUnit {
  return target.slice(3) as TimeUnit;
}

export function fromMs(ms: number, unit: TimeUnit): number {
  return ms / MS_PER_UNIT[unit];
}
