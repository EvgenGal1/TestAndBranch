import counterReducer, { decrement, increment } from "./counterReducer";

// тесты редьюсера
describe("getCounterValue", () => {
  // тест на плюс
  test("reducer. increment +", () => {
    // ожидается вызов reducer(state = 0, action прибавление). toEqual(сравн.объ) равно 1
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  // тест на минус
  test("reducer. decrement -", () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });

  // тест на работу с пустым состоянием
  test("reducer. with empty state", () => {
    // вызов reducer(state не известен(асинхр.reducer)= 0, action поочерёдно каждый, равно -1|1
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
});
