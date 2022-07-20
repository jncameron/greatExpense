import React from "react";
import Position from "./components/Position";

import ExpensesSummary from "./components/ExpensesSummary";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <ExpensesSummary />
      <Position />
    </div>
  );
}

export default App;
