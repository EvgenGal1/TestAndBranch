// imp.fn масс.чисел преобраз.в масс.стр.
const mapArrToStrings = require("./mapArrToStrings");

// групп.неск.тестов: назв.списка, cb неск.тестов
describe("mapArrToStrings", () => {
  test("Корректное значение", () => {
    // `ожидать`.fn(знач.).мтд.проверки.
    // ^ toEqual`равный` проверка равенства по значению (глуб.сравн.)
    // ! не показ.доп.fn > ctrl+пробел
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Мешанина", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, "qwe"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Пустой массив", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test("Отрицание", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
