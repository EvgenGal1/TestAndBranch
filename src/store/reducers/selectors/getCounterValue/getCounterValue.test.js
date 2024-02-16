import { getCounterValue } from "./getCounterValue";

// тесты селектора
describe("getCounterValue", () => {
  // тест на работу с пустым состоянием
  test("селектор. work with empty state", () => {
    // вызов селектор с пустым объ., ожид.возврат 0
    expect(getCounterValue({})).toBe(0);
  });

  // тест на работу с заполненным состоянием
  test("селектор. work with filled state", () => {
    // вызов селектор с полем counter в знач.100, ожид.возврат 100
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});
