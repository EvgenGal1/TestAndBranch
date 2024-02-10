import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

// групп.неск.тестов.: назв.списка, cb неск.тестов
describe("RTLibr TEST APP", () => {
  // опис.теста(назв., cb проверки)
  test("ROUTER test", () => {
    // передача в render Комп.>теста
    render(
      // ! обёртка MemoryRouter от ошб. The above error occurred in the <Link>|<Routes> component | Cannot destructure property 'basename' ... null
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
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
    // screen.debug(); // ^ отрисов весь Комп.App, в конце data-testid="main-page"><h3>MainPage
  });

  // не сущ.стр.
  test("error PAGE test", () => {
    render(
      <MemoryRouter
        // масс.путей рендера (указ не существующий)
        initialEntries={["/qwerty"]}
      >
        <App />
      </MemoryRouter>
    );
    // `ожидается` редирект на стр.с эл. testId "not-found-page" в документе
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();

    // screen.debug(); // ^ перенаправ на стр.data-testid="not-found-page"
  });
});
