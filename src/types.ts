type TimeUnitSingular =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year";
type TimeUnitPlural = `${TimeUnitSingular}s`;
type TimeUnitShort = "ms";

type TargetTimeUnit = `to ${TimeUnitPlural | TimeUnitShort}`;

type TimeUnit = (TimeUnitSingular | TimeUnitPlural | TimeUnitShort) & {};
export type { TimeUnit, TargetTimeUnit };
