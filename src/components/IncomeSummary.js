import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectIncome from "../selectors/income";
import selectIncomeTotal from "../selectors/incomeTotal";

const IncomeSummary = ({ incCount, incomeTotal }) => {
  const incWord = incCount === 1 ? "inc" : "income";
  const formattedIncomeTotal = numeral(incomeTotal / 100).format("0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{incCount} </span>
          {incWord} totalling <span>{formattedIncomeTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="huge ui blue button" to="/createincome">
            Add Income
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleIncome = selectIncome(state.income, state.filters);
  return {
    incCount: visibleIncome.length,
    incomeTotal: selectIncomeTotal(visibleIncome)
  };
};

export default connect(mapStateToProps)(IncomeSummary);
