import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("React Testing Library UTV", () => {
  // получ.эл./снимок
  test("рендеры h1, btn, inp(+снимок)", () => {
    // передача в render Комп.>теста
    render(
      // ! обёртка MemoryRouter от ошб. The above error occurred in the <Link>|<Routes> component | Cannot destructure property 'basename' ... null
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // ^ ч/з спец.объ.`экран`.мтд. ПОЛУЧАЕМ.ЭЛ. (по тексту, роли, тегу, стилю, props, т.д. и т.п.)
    // получ.h1 по тексту ч/з регул.выраж.без регистра (//i)
    const h1RTLibr = screen.getByText(/Привет react testing library/i);
    // получ.button по роли кнп.
    const btn = screen.getByRole("button");
    // получ.input по`заполнителю`
    const input = screen.getByPlaceholderText(/введите значение/i);
    // `ожидание`(эл.)`быть в документе`; (появился в DOM/странице)
    expect(h1RTLibr).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // `ожидание`(input)`для соответствия снимку` > при измен.input тест упадёт > можно обновить снимок нажав после теста "u"
    expect(input).toMatchSnapshot();

    // ^ при ошб./не раб./FAIT тест - вызов screen.debug - отрисовка сгенер.разметки в renderе
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
  });

  // GET мтд.screen
  test("screen.QUERY", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // ^ мтд.: GET(поиск.эл.на стр.иначе ошб.), QUERY(нет на стр.), FIND(асинхр.)
    // ожидается отсутств.эл.с текстом
    const h1RTLibr_2 = screen.queryByText(/Привет react testing library_2/i);
    expect(h1RTLibr_2).toBeNull();
  });

  // FIND async мтд.screen
  test("screen.FIND", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // screen.debug(); // ^ render БЕЗ div > data
    // `ожидание`.эл.с текстом
    const h1RTLibr_3 = await screen.findByText(/data/i);
    expect(h1RTLibr_3).toBeInTheDocument();
    // screen.debug(); // ^ render С div > data
  });

  // получ.эл.по style
  test("screen.STYLE", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const h1RTLibr_3 = await screen.findByText(/data/i);
    expect(h1RTLibr_3).toHaveStyle({ color: "red" });
  });

  // события/клик/testId > fireEvent
  test("fire EVENT click", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // получ.эл.по testId
    const btn = screen.getByTestId("toggle-btn");
    // получ.эл. > query т.к. эл.изначально нет // ! ошб. т.к. эл.записан в перем.до появления // ~ перенос лог.в expect
    // const toggleDiv = screen.queryByTestId("toggle-elem");
    // ожидается что эл.id.toggle-elem нет
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    // ^ ч/з спец.объ.`огненное событие`.мтд. ВЫЗЫВАЕМ СОБЫТИЕ эл. (по клику, измен., копир., мышь, т.д. и т.п.)
    // клику на toggle-btn
    fireEvent.click(btn);
    // ожидается появление.эл. // !! использ.get от предупрежд.eslint
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    // повторный клик на toggle-btn > проверка откл.toggle-elem
    fireEvent.click(btn);
    // повторно ожидается отсутств.эл.
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  // input > fireEvent
  test("fire EVENT input", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const inputElm = screen.getByPlaceholderText(/введите значение.../i);
    // ожидается эл.id.value-elem пустой
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    // ! обёртка от ошб. Warning: An update to App inside a test was not wrapped in act(...). | When testing, code that causes React state updates should be wrapped into act(...):
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // мтд.input(эл.value-elem, опц.target ввод
      fireEvent.input(inputElm, { target: { value: "123123" } });
    });
    // ожидается эл.id.value-elem со значением ввода
    expect(screen.getByTestId("value-elem")).toContainHTML("123123");
  });

  // input > userEvent
  test("user EVENT input", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const inputElm = screen.getByPlaceholderText(/введите значение.../i);
    // ожидается эл.id.value-elem пустой
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    // ! обёртка от ошб. Warning: An update to App inside a test was not wrapped in act(...). | When testing, code that causes React state updates should be wrapped into act(...):
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // ^ ч/з спец.объ.userEvent(`пользовательское событие`).мтд. СОБЫТИЕ ВЗАИМОДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ С ЭЛ. (по hover, tab, keyboard, click, т.д. и т.п.)
      userEvent.type(inputElm, "123123");
    });
    // ожидается эл.id.value-elem со значением ввода
    expect(screen.getByTestId("value-elem")).toContainHTML("123123");
  });
});
