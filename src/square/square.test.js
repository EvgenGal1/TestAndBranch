const square = require("./square");

// опис.неск.сцен.: назв.списка, cb неск.тестов
describe("square", () => {
  // fn < test
  beforeEach(() => {});

  // опис.теста(назв., cb проверки)
  test("Проверка квадр.умнж.", () => {
    // неск.пров.`ожидать`(fn(знач.)).мтд.проверки.(сравн.знач.)
    // `быть` равенства значени
    expect(square(2)).toBe(4);
    // `меньше, чем`
    expect(square(2)).toBeLessThan(5);
    // `больше, чем`
    expect(square(2)).toBeGreaterThan(3);
    // не undf
    expect(square(2)).not.toBeUndefined();
  });
});
