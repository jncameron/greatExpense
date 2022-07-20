import React, {Fragment} from "react";
import { Route, Router } from "react-router-dom";
import {createBrowserHistory} from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import AboutPage from "../components/AboutPage";
import App from "../App";

import LoginPage from "../components/LoginPage";


export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <Route path="/" element={<App />} exact={true}/>
    <Route path="/dashboard" element={<ExpenseDashboardPage/>} />
    <Route path="/create" element={<AddExpensePage/>} />
    <Route path="/edit/:id" element={<EditExpensePage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="*" element={<NotFoundPage/>} />
  </Router>
);

export default AppRouter;
