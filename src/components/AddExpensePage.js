import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense, addExpense } from '../actions/expenses';


class AddExpensePage extends Component {
  render(props) {
    return(
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={(expense) => {
            this.props.dispatch(startAddExpense(expense));
            this.props.history.push('/');
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(mapDispatchToProps)(AddExpensePage);