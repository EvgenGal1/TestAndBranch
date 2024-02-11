import React, { useState, useEffect } from "react";

import AppRouter from "./router/AppRouter";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  // асинхр.лог. > screen.find + style (ч/з usEf/setTim обнов.usSt > показ.эл.)
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => { setData({}) }, 500)
  }, [])

  // перекл/клик. лог.событий(fireEvent)/testId/toggle(переключ.)
  const [toggle, setToggle] = useState(false);
  const onClick = () => { setToggle(prev => !prev) }

  // сост.ввода
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>React Testing Library</h1>
      <div className="start-rtl">
        <h3>Стартовые fn(state, usSt, usEf, daта-testid, fireEvent, userEvent)</h3>
        <div>
          {/* асинхр.лог. + style > screen.find */}
          {data && <div style={{ color: "red" }}>data</div>}
          <p>тип асинхр.лог. + style &gt; screen.find</p>
        </div>
        <div>
          {/* btn + testId(получ.эл.) + слуш.событ. > toggle(переключ.) */}
          <button data-testid="toggle-btn" onClick={onClick}>нажми на меня</button>
          {/* лог.событий(fireEvent)/testId/toggle(переключ.) */}
          {toggle === true && <div data-testid="toggle-elem">toggle</div>}
          <p>btn + testId + onClick &gt; toggle</p>
        </div>
        <div>
          {/* ввода и связь со state */}
          <input onChange={e => setValue(e.target.value)} type="text" placeholder="введите значение..." />
          {/* вывод ввода ч/з state */}
          <span data-testid="value-elem">{value}</span>
          <p>ввод + вывод + связь ч/з state</p>
        </div>
      </div>
      {/* // ^ router */}
      <div className="router">
        <h3>ROUTER</h3>
        <NavBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
