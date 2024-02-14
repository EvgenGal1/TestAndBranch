// хран-ще. созд./возврат ReduxStore(RS)
import counterReducer from "./reducers/counterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// корн.редуктор
const rootReducer = combineReducers({
  // обычн.счетчик
  counter: counterReducer,
});

// приним.нач.знач.initialState
export const createReduxStore = (initialState = {}) => {
  // возращ.результ.из `настр.хран.`
  return configureStore({
    // указ.корн.редуктора
    reducer: rootReducer,
    // `предварительно загруженное состояние`. Можно указ.нач.знач. - preloadedState:{counter:{value:1234}}
    preloadedState: initialState,
  });
};
