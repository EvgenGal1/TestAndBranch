// helper переходов м/у стр.
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import AppRouter from "../../router/AppRouter";
import { createReduxStore } from "../../store/store";

// экспорт fn.отрисовки Комп. по всем маршрутам. Приним.Комп.отрисовки и начальн.маршрут. Оборач.в MemoryRouter
export const renderWithRouter = (component, initialRoute = "/") => {
  //  возвращ.сразу render
  return render(
    // ! обёртка Provider + store от ошб. could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    <Provider store={createReduxStore()}>
      {/* // ! обёртка MemoryRouter от ошб. The above error occurred in the <Link>|<Routes> component | Cannot destructure property 'basename' ... null */}
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
