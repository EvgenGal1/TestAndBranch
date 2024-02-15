import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("селектор. work with empty state (`работать с пустым состоянием`)", () => {
    // вызов селектор с пустым объ., ожид.возврат 0
    expect(getCounterValue({})).toBe(0);
  });

  test("селектор. work with filled state (`работать с заполненным состоянием`)", () => {
    // вызов селектор с полем counter в знач.100, ожид.возврат 100
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});
