// imp.fn пров.value в опред.знач.
const validateValue = require("./validateValue");
// ^ преобраз.CommonJS>ES
// import validateValue from "./validateValue";

// опис.теста(назв., cb проверки)
test("Волидное значение_0", () => {
  // `ожидать`(fn(знач.)).мтд.проверки.(сравн.знач.)
  // ^ to Be `быть` проверка равенства примитав.знач.|| по референц.ссылке
  // ! не показ.доп.fn > ctrl+пробел
  expect(validateValue(50)).toBe(true);
});

// опис.неск.сцен.: назв.списка, cb неск.тестов
describe("validValue", () => {
  test("Корректное значение", () => {
    expect(validateValue(55)).toBe(true);
  });
  test("Меньше корректного", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Больше корректного", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("Пограничное значение снизу", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Пограничное значение сверху", () => {
    expect(validateValue(100)).toBe(true);
  });
});
