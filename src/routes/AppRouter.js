import React, {Fragment} from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {createBrowserHistory} from 'history';

import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>

    </div>
  </Router>
);

export default AppRouter;
