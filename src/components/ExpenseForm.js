import React from "react";
import moment from "moment";
import { DatePicker } from "react-datepicker";
import { Dropdown } from "semantic-ui-react";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '6',
      comment: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      // createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      expense: '2',

      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onExpenseTypeChange = (e, { value }) => {
    this.setState({ expenseType: value });
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        id: this.state.id,
        comment: this.state.description,
        expense: this.state.expense,
        amount: parseFloat(this.state.amount, 10) * 100
        // createdAt: this.state.createdAt.valueOf(),
        // note: this.state.note,
        
      });
    }
  };
  render() {
    const options = [
      { key: 1, text: "Groceries", value: "Groceries" },
      { key: 2, text: "Accommodation", value: "Accommodation" },
      { key: 3, text: "Transport", value: "Transport" },
      { key: 4, text: "Personal and Medical", value: "Personal and Medical" },
      { key: 5, text: "Education", value: "Education" },
      {
        key: 6,
        text: "Entertainment and Eating Out",
        value: "Entertainment and Eating Out"
      },
      { key: 7, text: "Transport and auto", value: "Transport and auto" },
      { key: 8, text: "Other", value: "Other" }
    ];

    const { expenseType } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        {/* <DatePicker
          displayFormat="DD/MM/YYYY"
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        /> */}
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <Dropdown
          placeholder="Expense Type"
          clearable
          options={options}
          selection
          value={expenseType}
          onChange={this.onExpenseTypeChange}
        />
        <div>
          <button className="huge ui blue button">Save Expense</button>
        </div>
      </form>
    );
  }
}
