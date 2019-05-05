import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout, userName }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Great Expense</h1>
          </Link>
          <h3 className="header__title">{userName}</h3>
          <button className="button button__link" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return { userName: state.auth.user };
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
