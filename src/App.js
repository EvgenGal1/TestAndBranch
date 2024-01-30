import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { ErrorPage } from "./pages/ErrorPage";

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
      <h1>Привет React Testing Library</h1>
      {/* асинхр.лог. > screen.find + style */}
      {data && <div style={{ color: "red" }}>data</div>}
      {/* лог.событий(fireEvent)/testId/toggle(переключ.) */}
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {/* btn + testId(получ.эл.) + слуш.событ. > toggle(переключ.) */}
      <button data-testid="toggle-btn" onClick={onClick}>нажми на меня</button>
      {/* ввода и связь со state */}
      <input onChange={e => setValue(e.target.value)} type="text" placeholder="введите значение..." />
      {/* вывод ввода ч/з state */}
      <h1 data-testid="value-elem">{value}</h1>
      <br />
      <h2>ROUTER</h2>
      {/* // ^ router */}
      <div>
        <Link to="/" data-testid="main-link">Main</Link>
        <Link to="/about" data-testid="about-link">About</Link>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
