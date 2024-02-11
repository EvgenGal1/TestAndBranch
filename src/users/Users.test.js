import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

// import AppRouter from "../router/AppRouter";
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
    // согласовка схемы с мтд.axios.get
    // обращ.к модулю с вызов.к мтд.`макет возвращаемого значения` с передачей response
    // jest навещ.дан.mock как возрващ.значение у axios.get // ^ перенос в beforeEach
    // axios.get.mockReturnValue(response);
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
    // mock возрващ.значение с БД // ^ перенос в beforeEach
    // axios.get.mockReturnValue(response);
    render(
      // <MemoryRouter
      // // ! указ.нач.путь(initialEntries) и ссылки(Route.Route) от ошб. TestingLibraryElementError: Unable to find an element by | Ignored nodes: comments, script, style
      // // initialEntries={["/users"]} // ^ не нужен после общ.AppRouter и отдельн.Комп.Users
      // >
      //   {/* // ! указ.нач.путь(initialEntries) и ссылки(Route.Route) от ошб. TestingLibraryElementError: Unable to find an element by | Ignored nodes: comments, script, style */}
      //   {/* <Routes>
      //     <Route path="/users" element={<Users />} />
      //     <Route path="/users/:id" element={<UserDetalisPage />} />
      //   </Routes> */}
      //   {/* // ^ заводим отд.ф.AppRouter для всех стр. */}
      //   <AppRouter />
      //   <Users />
      // </MemoryRouter>
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
