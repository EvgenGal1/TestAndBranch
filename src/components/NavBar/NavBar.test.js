import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NavBar from "./NavBar";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";

describe("NavBar test", () => {
  // тест ссылки about
  test("NavBar. test about link", async () => {
    // отрисов.Комп.ч/з helper renderWithRouter
    // ^ перенос render в renderWithRouter
    // render(renderWithRouter(<NavBar />));
    renderWithRouter(<NavBar />);
    // получ.эл.по testId
    const aboutLink = screen.getByTestId("about-link");
    // отраб.click и появл.эл.на стр.
    // обёртка ACT от ошб.обнов.сост. и заглуш.ошб.eslint
    /* eslint-disable testing-library/no-unnecessary-act */
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  // тест ссылки main
  test("NavBar. test main link", async () => {
    renderWithRouter(<NavBar />);
    const mainLink = screen.getByTestId("main-link");
    act(() => {
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  // тест ссылки main
  test("NavBar. test users link", async () => {
    renderWithRouter(<NavBar />);
    const usersLink = screen.getByTestId("users-link");
    act(() => {
      userEvent.click(usersLink);
    });
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
