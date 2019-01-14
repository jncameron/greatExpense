import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {

    return (
      <div>
        <h3>Description: {description}</h3>
        <h4>Amount: ${amount}</h4>
        <h5>Created: {createdAt}</h5>
        <button onClick={() => {
          dispatch(removeExpense({id}));
        }}>Remove </button>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpenseListItem);