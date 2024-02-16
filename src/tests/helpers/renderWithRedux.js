// helper состояний
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { createReduxStore } from "../../store/store";

// экспорт fn.отрисовки состояния Комп. Приним.Комп.отрисовки(обёрнут в Provider) и нач.сост.
export const renderWithRedux = (component, initialState = "/") => {
  // созд store с передачей initialState
  const store = createReduxStore(initialState);
  //  возвращ.сразу render Комп.обёрнутый в Provider + store
  return render(<Provider store={store}>{component}</Provider>);
};
