import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {

    return (
      <div>
        <Link to={`/edit/${id}`}>
        <h3>Description: {description}</h3>
        </Link>
        <h4>Amount: {amount}</h4>
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