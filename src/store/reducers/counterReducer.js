// `счетчик срез`. действия хран-ща. чистая fn
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    // действия (action: +, -, + сумм.)
    increment: (state) => {
      // Redux Toolkit позволяет нам писать «мутирующую» логику в редукторах. На самом деле он не изменяет состояние, поскольку использует библиотеку Immer, которая обнаруживает изменения в «черновом состоянии» и создает совершенно новое неизменяемое состояние на основе этих изменений.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Создатели действий генерируются для каждой функции редуктора случая.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
