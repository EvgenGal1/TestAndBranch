// helper переходов м/у стр.
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import AppRouter from "../../router/AppRouter";

// экспорт fn.отрисовки всех маршрутов и Комп. Приним.Комп.отрисовки и начальн.маршрут
export const renderWithRouter = (component, initialRoute = "/") => {
  //  возвращ.сразу render
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
