import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

// групп.неск.тестов.: назв.списка, cb неск.тестов
describe("RTLibr TEST APP", () => {
  // опис.теста(назв., cb проверки)
  test("ROUTER", () => {
    // передача в render Комп.>теста
    render(<App />);
    // ^ ч/з спец.объ.`экран`.мтд. ПОЛУЧАЕМ.ЭЛ. (по dataId, тексту, роли, тегу, стилю, props, т.д. и т.п.)
    // получ.эл.по testId
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    // ! обёртка от ошб. Warning: An update to App inside a test was not wrapped in act(...). | When testing, code that causes React state updates should be wrapped into act(...):
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // ^ ч/з спец.объ.userEvent(`пользовательское событие`).мтд. СОБЫТИЕ ВЗАИМОДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ С ЭЛ. (по hover, tab, keyboard, click, т.д. и т.п.)
      // обраб.click по эл.aboutLink
      userEvent.click(aboutLink);
    });
    // `ожидается` появление.эл.с testId "about-page" в документе
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
