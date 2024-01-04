const asyncDelay = require("./asyncDelay");

describe("asyncDelay", () => {
  // опис.теста(назв., async cb проверки)
  test("асинхронная задержка в 0.5 сек. для суммы = 20 (toEqual)", async () => {
    // резулт.выполн.fn
    const sum = await asyncDelay(() => 5 * 4, 500);
    // `ожидать`(знач.).мтд.проверки.
    expect(sum).toEqual(20);
  });
  test("асинхронная задержка в 1 сек. для суммы = 10 (toBe)", async () => {
    const sum = await asyncDelay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
});
