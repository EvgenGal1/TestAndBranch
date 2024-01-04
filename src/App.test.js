import { render, screen } from "@testing-library/react";

import App from "./App";

describe("React Testing Library UTV", () => {
  test("рендеры h1, btn, inp(+снимок)", () => {
    // передача в render Комп.>теста
    render(<App />);
    // ч/з спец.объ.`экран`.мтд. получ.эл. (по тексту(здесь ч/з регул.выраж.без регистра (//i)), роли, тегу, т.д. и т.п.)
    const h1RTLibr = screen.getByText(/Привет react testing library/i);
    // получ.эл.button по роли (у кнп.роль button)
    const btn = screen.getByRole("button");
    // получ.эл.input по`заполнителю`
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
});
