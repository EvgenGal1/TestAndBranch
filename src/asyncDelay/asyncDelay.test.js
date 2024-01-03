const asyncDelay = require("./asyncDelay");

describe("asyncDelay", () => {
  // опис.теста(назв., async cb проверки)
  test("toEqual асинхронная задержка в 0.5 сек. для суммы = 20", async () => {
    // резулт.выполн.fn
    const sum = await asyncDelay(() => 5 * 4, 500);
    // `ожидать`(знач.).мтд.проверки.
    expect(sum).toEqual(20);
  });
  test("toBe асинхронная задержка в 1 сек. для суммы = 10", async () => {
    const sum = await asyncDelay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
