// хран-ще. созд./возврат ReduxStore(RS)
import counterReducer from "./reducers/counterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// корн.редуктор
const rootReducer = combineReducers({
  // обычн.счетчик
  counter: counterReducer,
});

export const createReduxStore = () => {
  // возращ.результ.из `настр.хран.`
  return configureStore({
    // указ.корн.редуктора
    reducer: { rootReducer },
  });
};
