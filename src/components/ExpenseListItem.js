import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({description, amount, createdAt}) => {

    return (
      <div>
        <h3>Description: {description}</h3>
        <h4>Amount: ${amount}</h4>
        <h5>Created: {createdAt}</h5>
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