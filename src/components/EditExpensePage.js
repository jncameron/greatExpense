import React, { Component } from 'react';

class EditExpensePage extends Component {


  render() {
    console.log(this.props);
    return (
      <div>Edit Expense with id {this.props.match.params.id}</div>
    )
  }
}

export default EditExpensePage;