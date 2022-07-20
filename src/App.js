import React from "react";
import Position from "./components/Position";
import Header from "./components/Header";

import ExpensesSummary from "./components/ExpensesSummary";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <ExpensesSummary />
      <Position />
    </div>
  );
}

export default App;
