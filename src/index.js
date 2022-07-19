import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routes/AppRouter";
import App from "./App";

import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <App />
);

// ReactDOM.render(<LoadingPage />, document.getElementById("root"));

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(login(user));
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === "/") {
//         history.push("/dashboard");
//       }
//     });
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push("/");
//   }
// });
