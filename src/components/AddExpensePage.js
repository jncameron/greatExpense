import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import axios from 'axios';


class AddExpensePage extends Component {

  //const [expenses, setExpenses] = useState([]);

  onSubmit = (expense) => {
    this.props.addExpense(expense);
    //this.props.history.push('/');
    axios.post('https://localhost:7013/api/expenserecords', expense)
  };

  render() {
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);