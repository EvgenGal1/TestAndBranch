// imp.fn
const mapArrToStrings = require("./mapArrToStrings");

// опис.неск.сцен.: назв.списка, cb неск.тестов
describe("mapArrToStrings", () => {
  test("Масс.преобраз.в стр.", () => {
    // `ожидать`.fn(знач.).мтд.проверки.
    // ^ toEqual`равный` проверка равенства по значению
    // ! не показ.доп.fn > ctrl+пробел
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
});
