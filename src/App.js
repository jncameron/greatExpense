import React, { Component } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseListFilters from './components/ExpenseListFilters';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

export default App;
