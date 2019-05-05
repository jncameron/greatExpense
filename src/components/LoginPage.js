import React from "react";
import { connect } from "react-redux";
import { startLoginGoogle, startLoginFacebook } from "../actions/auth";

const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
  <div className="box-layout">
    <div class="box-layout__box">
      <h1 class="box-layout__title">Great Expense</h1>
      <p>Track your spending</p>
      <button className="button" onClick={startLoginGoogle}>
        Login with Google
      </button>
      <hr />
      <button className="button" onClick={startLoginFacebook}>
        Login with Facebook
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
