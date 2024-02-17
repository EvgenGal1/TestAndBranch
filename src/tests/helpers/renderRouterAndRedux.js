// объединённый helper переходов м/у стр. и состояний
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import AppRouter from "../../router/AppRouter";
import { createReduxStore } from "../../store/store";

// экспорт fn.отрисовки Комп. по всем маршрутам и состояниям. Приним.Комп.отрисовки и объ.опций. Оборач.в Provider и MemoryRouter
export const renderRouterAndRedux = (component, option) => {
  const initialState =
    typeof option?.initialState === "string"
      ? JSON.parse(option.initialState)
      : option?.initialState; // Проверка и преобразование строки в объект
  // созд store с передачей initialState
  const store = createReduxStore(initialState);
  //  возвращ.сразу render Комп.обёрнутый и Provider + store(redux) и в MemoryRouter(router)
  return render(
    // ! обёртка Provider + store от ошб. could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    <Provider store={store}>
      {/* // ! обёртка MemoryRouter от ошб. The above error occurred in the <Link>|<Routes> component | Cannot destructure property 'basename' ... null */}
      <MemoryRouter initialEntries={[option?.initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
