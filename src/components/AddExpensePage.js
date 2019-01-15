import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


class AddExpensePage extends Component {
  render(props) {
    return(
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={(expense) => {
            this.props.dispatch(addExpense(expense));
            this.props.history.push('/');
          }}
        />
      </div>
    )
  }
}

export default connect()(AddExpensePage);