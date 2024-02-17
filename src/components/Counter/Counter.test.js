/* eslint-disable testing-library/no-unnecessary-act */ // ! от ошб. - Avoid wrapping Testing Library util calls in `act` - eslint | Warning: An update... | | When testing, code...
/* eslint-disable testing-library/prefer-screen-queries */ // ! от ошб. - Avoid destructuring queries from `render` result, use `screen.getByTestId` instead - eslint
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import Counter from "./Counter";
import { createReduxStore } from "../../store/store";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import { renderRouterAndRedux } from "../../tests/helpers/renderRouterAndRedux";

// тесты счётчика
describe("Counter", () => {
  // тест счётчика без нач.состояния на + (плюс)
  test("счётчик. value = 0 > increment > value = 1", async () => {
    // ^ fn()render(`оказывать`) возвращ.container с аналогичными screen.мтд (текст, роль, тег, т.д. и т.п.) >> поиск в отрисованом containerе Комп. >> диструктуризация сразу по сво-ву
    const { getByTestId } = render(
      // ! обёртка Provider + store от ошб. could not find react-redux context value; please ensure the component is wrapped in a <Provider>
      <Provider store={createReduxStore()}>
        <Counter />
      </Provider>
    );
    // получ.эл.по testId по получ.мтд. диструктур-ой fn render из Комп.Counter
    const incrementBtn = getByTestId("increment-btn");
    // `ожидание`(эл.по testId).с cодержимым(0)
    expect(getByTestId("value-title")).toHaveTextContent("0");
    act(() => {
      // обраб.click по эл.incrementBtn
      userEvent.click(incrementBtn);
    });
    // `ожидание`(эл.по testId).с cодержимым(1)
    expect(getByTestId("value-title")).toHaveTextContent("1");
  });

  // тест счётчика без нач.состояния на - (минус)
  test("счётчик. value = 0 > decrement > value = -1", async () => {
    // ^ использ.helper состояния.(отрис.Комп. Передан.Комп. ?+ передан.нач.сост.)
    const { getByTestId } = renderWithRedux(<Counter />);
    const decrementBtn = getByTestId("decrement-btn");
    expect(getByTestId("value-title")).toHaveTextContent("0");
    act(() => {
      userEvent.click(decrementBtn);
    });
    expect(getByTestId("value-title")).toHaveTextContent("-1");
  });

  // тест счётчика с начальным состоянием(initialState) из counterReducer
  test("счётчик. value = initialState = 101 > increment > value = 102", async () => {
    // ^ использ.helper состояния.(отрис.Комп. Передан.Комп. ?+ передан.нач.сост.)
    const { getByTestId } = renderWithRedux(
      <Counter />,
      // нач.сост.(initialState)
      { counter: { value: 101 } }
    );
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("101");
    act(() => {
      userEvent.click(incrementBtn);
    });
    expect(getByTestId("value-title")).toHaveTextContent("102");
  });

  // тест счётчика с маршрутами и нач.сост.(initialRoute и initialState)
  test("счётчик. value = initialState = 10 и route = initialRoute = '/' > increment > value = 11", async () => {
    // ^ использ.helper маршрт.и сост.(отрис.Комп. Передан.Комп. ?+ передан.нач.сост. ?+ передан.маршрут)
    const { getByTestId } = renderRouterAndRedux(
      // ^ в арг.1 и {парам.1} может быть двойная отрисовка одного Комп. и ошб.Found multiple elements by. Необходимо либо Комп.=null либо rout по другому маршруту
      null /* или <Counter /> */,
      // второй арг.объ.опций с маршр.и сост.
      {
        // нач.маршр.(initialRoute)
        initialRoute: "/" /* или "/users" */,
        // нач.сост.(initialState)
        initialState: { counter: { value: 10 } },
      }
    );
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent(10);
    act(() => {
      userEvent.click(incrementBtn);
    });
    expect(getByTestId("value-title")).toHaveTextContent(11);
  });
});
