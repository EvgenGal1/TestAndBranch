// imp.fn
const validateValue = require("./validateValue");
// ^ преобраз.CommonJS>ES
// import validateValue from "./validateValue";

// опис.теста(назв., cb проверка)
test("Валидация значения", () => {
  expect(validateValue(50)).toBe(true);
});
