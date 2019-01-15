import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => {

    return (
      <div>
        <Link to={`/edit/${id}`}>
        <h3>Description: {description}</h3>
        </Link>
        <h4>Amount: {amount}</h4>
        <h5>Created: {createdAt}</h5>

      </div>
    );
}


export default ExpenseListItem;