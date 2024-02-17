// helper состояний
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { createReduxStore } from "../../store/store";

// экспорт fn.отрисовки Комп. по состояниям. Приним.Комп.отрисовки и нач.сост. Оборач.в Provider
export const renderWithRedux = (component, initialState) => {
  // созд store с передачей initialState
  const store = createReduxStore(initialState);
  //  возвращ.сразу render Комп.обёрнутый в Provider + store
  return render(<Provider store={store}>{component}</Provider>);
};
