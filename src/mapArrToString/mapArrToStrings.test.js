// imp.fn
const mapArrToStrings = require("./mapArrToStrings");

// опис.неск.сцен.: назв.списка, cb неск.тестов
describe("mapArrToStrings", () => {
  test("Масс.преобраз.в стр.", () => {
    // ! не показ.доп.fn > ctrl+пробел
    // toEqual`равный` опред.знач.
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
});
