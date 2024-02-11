import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

import Users from "./Users";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

// заmockать данн.axios.get
jest.mock("axios");

describe("USERS test", () => {
  // перем.`ответа`
  let response;
  // заmock данн.перед кажд.тестом
  beforeEach(() => {
    // запись данн.в response // ^ схема возвр.с БД
    response = {
      data: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" },
      ],
    };

    // обращ.к модулю с вызов.к мтд.`макет возвращаемого значения` с передачей response. jest навещ.дан.mock как возрващ.значение у axios.get
    axios.get.mockReturnValue(response);
  });

  afterEach(() => {
    // откл.mock после кажд.теста
    jest.clearAllMocks();
  });

  test("USERS. axios, redirect link", async () => {
    // отрисов Комп. + обёртка MemoryRouter
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    // получ.масс.эл.
    const users = await screen.findAllByTestId("user-item");
    // ожид.3 эл.
    expect(users.length).toBe(3);
    // `ожидать`(fn).кол-во.вызывов.(1)
    expect(axios.get).toHaveBeenCalledTimes(1); // ^ устр. toBeCalledTimes(1);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test("USERS. redirect > UserDetalisPage", async () => {
    render(
      // ^ использ.helper переходов м/у стр.(отрис.AppRouter + передан.Комп. + передан.путь)
      renderWithRouter(<Users /> /* // ^ альтер.вар. - null, "/users" */)
    );
    // получ.масс.эл.
    const users = await screen.findAllByTestId("user-item");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // клик на польз.с id 0
      userEvent.click(users[0]);
    });
    // ожид.эл.с id user-page
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
