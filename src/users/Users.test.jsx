import { render, screen, fireEvent } from "@testing-library/react";

import Users from "./Users";

import axios from "axios";
// const axios = require("axios");

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
  });

  test("USERS axios", async () => {
    // согласовка схемы с мтд.axios.get
    // обращ.к модулю с вызов.к мтд.`макет возвращаемого значения` с передачей response
    // jest навещ.дан.mock как возрващ.значение у axios.get
    axios.get.mockReturnValue(response);
    render(<Users />);
    // получ.масс.эл.
    const users = await screen.findAllByTestId("user-item");
    // ожид.3 эл.
    expect(users.length).toBe(3);
    // `ожидать`(fn).кол-во.вызывов.(1)
    expect(axios.get).toHaveBeenCalledTimes(1); // ^ устр. toBeCalledTimes(1);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
