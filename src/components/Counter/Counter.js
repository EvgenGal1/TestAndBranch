// счётчик
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue.js";
import { decrement, increment } from "../../store/reducers/counterReducer";

const Counter = () => {
  // отправ.действ.
  const dispatch = useDispatch();
  // получат.данн.(аргум.селектор getCounterValue)
  const value = useSelector(getCounterValue);

  // fn > действ.
  const onIncrement = () => {
    // `отправлять` действие в fn
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div data-testid="counter">
      <div>Counter</div>
      {/* знач.счётчика */}
      <div>
        {value}
        <p>знач.счётчика</p>
      </div>
      {/* кнп. +/- */}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
