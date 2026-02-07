import type { TimeUnit, TargetTimeUnit } from "./types";
import { toMs, fromMs, parseTargetUnit } from "./utils";

/**
 * Convert time from one unit to another.
 *
 * @param value The numeric time value to convert.
 * @param from The source time unit (e.g. "hours", "ms", "day").
 * @param to The target time unit (e.g. "to ms", "to hours").
 * @returns The converted numeric value in the target unit.
 *
 * @example
 * import { convert } from "great-time";
 *
 * convert(5, "hours", "to ms");
 *
 * @link see https://github.com/bentsignal/great-time for more info.
 */
export function convert(
  value: number,
  from: TimeUnit,
  to: TargetTimeUnit
): number {
  return fromMs(toMs(value, from), parseTargetUnit(to));
}

export type { TimeUnit, TargetTimeUnit };
