import React, { useState, useEffect } from "react";

const App = () => {
  // асинхр.лог. > screen.find + style (ч/з usEf/setTim обнов.usSt > показ.эл.)
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => { setData({}) }, 500)
  }, [])

  // лог.событий(fireEvent)/testId/toggle(переключ.)
  const [toggle, setToggle] = useState(false);
  const onClick = () => { setToggle(prev => !prev) }

  return (
    <div className="App">
      {/* асинхр.лог. > screen.find + style */}
      {data && <div style={{ color: "red" }}>data</div>}
      {/* лог.событий(fireEvent)/testId/toggle(переключ.) */}
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      <h1>Привет React Testing Library</h1>
      {/* btn + testId(получ.эл.) + слуш.событ. > toggle(переключ.) */}
      <button data-testid="toggle-btn" onClick={onClick}>нажми на меня</button>
      <input type="text" placeholder="введите значение..." />
    </div>
  );
};

export default App;
