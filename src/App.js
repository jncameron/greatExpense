import React, { Component } from "react";
import Position from "./components/Position";
import ExpensesSummary from "./components/ExpensesSummary";

import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpensesSummary />
        <Position />
      </div>
    );
  }
}

export default App;
