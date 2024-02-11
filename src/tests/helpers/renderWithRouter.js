// helper переходов м/у стр.
import { MemoryRouter } from "react-router-dom";

import AppRouter from "../../router/AppRouter";

// экспорт fn.отрисовки всех маршрутов и Комп. Приним.Комп.отрисовки и начальн.маршрут
export const renderWithRouter = (component, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
