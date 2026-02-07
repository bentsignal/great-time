import type { TimeUnit, TargetTimeUnit } from "./types";
import { toMs, fromMs, parseTargetUnit } from "./utils";

export function convert(
  value: number,
  from: TimeUnit,
  to: TargetTimeUnit
): number {
  return fromMs(toMs(value, from), parseTargetUnit(to));
}
