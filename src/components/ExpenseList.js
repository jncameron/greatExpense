import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import { setExpenses } from "../actions/expenses";

const ExpenseList = () => {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7013/api/expenserecords').then(response => setExpenses(response.data))
  }, [])

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>

      <div className="list-body">
        {expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Expenses</span>
          </div>
        ) : (
          expenses.map(expense => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
