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
    <div className="counter">
      <div>Counter</div>
      {/* знач.счётчика */}
      <div>
        <div className="value-title">
          <div data-testid="value-title">{value}</div>
        </div>
        <p>знач.счётчика</p>
      </div>
      {/* кнп. +/- */}
      <button data-testid="increment-btn" onClick={onIncrement}>
        Increment
      </button>
      <button data-testid="decrement-btn" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
