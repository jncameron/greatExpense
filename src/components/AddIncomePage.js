import React, { Component } from "react";
import { connect } from "react-redux";
import IncomeForm from "./IncomeForm";
import { startAddIncome, addIncome } from "../actions/income";

class AddIncomePage extends Component {
  onSubmit = income => {
    this.props.startAddIncome(income);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Income</h1>
          </div>
        </div>
        <div className="content-container">
          <IncomeForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddIncome: income => dispatch(startAddIncome(income))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddIncomePage);
