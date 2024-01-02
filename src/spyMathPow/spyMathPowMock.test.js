const spyMathPowMock = require("./spyMathPowMock");

// групп.неск.тестов.: назв.списка, cb неск.тестов
describe("spyMathPowMock", () => {
  // выполн.fn < test для кажд.теста. Сброс.сост., mock(дублёры реального стороннего кода(БД,почт.серв.,))
  beforeEach(() => {});
  // выполн.fn один раз > всеми тестами
  beforeAll(() => {});

  // опис.теста(назв., cb проверки)
  test("Возврат 1, до возвед.в степень", () => {
    // spyOn - созд.`шпион`фиктивн.fn(модуль, мтд., get/set)
    const spyMathPow = jest.spyOn(Math, "pow");
    // вызов.мтд.с передачей парам.
    spyMathPowMock(1);
    // проверка кол-ва вызовов опред.мтд.(здесь Math.pow) // ^ кол-во вызывов 0 т.к. переданная 1 до fn()Math НЕ дойдёт
    expect(spyMathPow).toBeCalledTimes(0); // алтер.toHaveBeenCalledTimes
  });

  test("возведение в степень 2", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    spyMathPowMock(2);
    // ^ кол-во 1 т.к. 2 до fn()Math дойдёт и mock отраб.1 раз
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("возвед.в степень 7", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    spyMathPowMock(7);
    // ^ кол-во 2 т.к. 7 до fn()Math дойдёт и mock отраб.2 раза (при 2 и 7)
    expect(spyMathPow).toBeCalledTimes(2);
  });

  // выполн.fn > test для кажд.теста.
  afterEach(() => {
    // fn очистки счётчика mock
    // ^ при очистке перед кажд.тестом, "7" упадёт, т.к. счётчик будет 1
    // jest.clearAllMocks();
  });
  // выполн.fn один раз > всеми тестами
  afterAll(() => {
    // ^ при очистке после всех тестов, "7" НЕ упадёт, т.к. счётчик будет 1 после "2" + 1 после "7"
    jest.clearAllMocks();
  });
});
