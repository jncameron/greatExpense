import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import axios from 'axios';


const EditExpensePage = () => {

  const [expense, setExpense] = useState([]);

  useEffect(() => {
    this.props.startEditExpense(this.props.expense.id, expense);
    axios.put('https://localhost:7013/api/expenserecords/`${props.expense.id}`', expense).then(response => setExpense(response.data))
  }, [])

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button className="huge ui red button" onClick={this.onRemove}>
          Remove Expense
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
