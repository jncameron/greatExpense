import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


const Header = ({ startLogout }) => {
  return(
    <header class="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Great Expense</h1>    
          </Link>
          <button onClick={startLogout}>Logout</button>
        </div>
      </div>

    </header>
    
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(Header);