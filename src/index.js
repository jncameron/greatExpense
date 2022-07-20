import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routes/AppRouter";
import App from "./App";
import { addExpense } from './actions/expenses';
import configureStore from "./store/configureStore";
import getVisibleExpenses from './selectors/expenses';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import AboutPage from "./components/AboutPage";
import { startSetExpenses } from "./actions/expenses";
import LoadingPage from "./components/LoadingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const store = configureStore();

store.dispatch(addExpense({ id:1, description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ id:2, description: 'Gas bill', amount: 1000 }));
store.dispatch(addExpense({ id:3, description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" component={App} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  </Provider>

);
