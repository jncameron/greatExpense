import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import AddExpensePage from './components/AddExpensePage';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));


