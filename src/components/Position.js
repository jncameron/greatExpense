import React, { Component } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

export default class Position extends Component {
  render() {
    return (
      <div>
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}
