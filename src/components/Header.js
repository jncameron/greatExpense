import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ userName }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <NavLink to="/dashboard" className="header__title" >
            <h1>Great Expense</h1>
          </NavLink>
          <NavLink to="/create" className="header__title" >
            <h1>Create Expense</h1>
          </NavLink>
          <NavLink to="/dashboard" className="header__title" >
            <h1>Edit Expense</h1>
          </NavLink>
          <NavLink to="/about" className="header__title" >
            <h1>About</h1>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
