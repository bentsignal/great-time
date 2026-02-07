import { test, expect } from "vitest";
import { convert } from "./index";

test("hours to milliseconds", () => {
  expect(convert(5, "hours", "to ms")).toBe(18_000_000);
});

test("milliseconds to hours", () => {
  expect(convert(3_600_000, "ms", "to hours")).toBe(1);
});

test("fractional input", () => {
  expect(convert(0.5, "hours", "to minutes")).toBe(30);
});

test("singular input unit", () => {
  expect(convert(1, "day", "to hours")).toBe(24);
});

test("identity conversion", () => {
  expect(convert(42, "seconds", "to seconds")).toBe(42);
});

test("weeks to days", () => {
  expect(convert(2, "weeks", "to days")).toBe(14);
});

test("year to months", () => {
  expect(convert(1, "year", "to months")).toBeCloseTo(12.1667, 4);
});

test("minutes to seconds", () => {
  expect(convert(1, "minute", "to seconds")).toBe(60);
});

test("weeks to ms", () => {
  expect(convert(2, "weeks", "to ms")).toBe(604_800_000 * 2);
});
