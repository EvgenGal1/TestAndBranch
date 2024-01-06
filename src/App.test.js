import { render, screen } from "@testing-library/react";

import App from "./App";

describe("React Testing Library UTV", () => {
  test("рендеры h1, btn, inp(+снимок)", () => {
    // передача в render Комп.>теста
    render(<App />);
    // ^ ч/з спец.объ.`экран`.мтд. получ.эл. (по тексту, роли, тегу, т.д. и т.п.)
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

  test("мтд.screen", () => {
    render(<App />);
    // ^ мтд.: GET(поиск.эл.на стр.иначе ошб.), QUERY(нет на стр.), FIND(асинхр.)
    // отсутств.эл.с текстом
    const h1RTLibr_2 = screen.queryByText(/Привет react testing library_2/i);
    expect(h1RTLibr_2).toBeNull();
  });
});
