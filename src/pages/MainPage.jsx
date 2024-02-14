import React from "react";

import Counter from "../components/Counter/Counter";

const MainPage = () => {
  return (
    <div data-testid="main-page">
      <h3>MainPage</h3>
      {/* добав.счётчик */}
      <Counter />
    </div>
  );
};

export default MainPage;
