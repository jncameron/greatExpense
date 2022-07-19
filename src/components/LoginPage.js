import React from "react";
import { connect } from "react-redux";

const LoginPage = ({
  startLoginGoogle,
  startLoginFacebook,
  startLoginGithub
}) => (
  <div className="box-layout">
    <div class="box-layout__box">
      <h1 class="box-layout__title">Great Expense</h1>
      <p>Track your spending</p>
      <button
        className="ui google plus button loginbutton"
        onClick={startLoginGoogle}
      >
        <i className="large middle aligned icon google" />
        Login with Google
      </button>
      <hr />
      <button
        className="ui facebook button loginbutton"
        onClick={startLoginFacebook}
      >
        <i className="large middle aligned icon facebook" />
        Login with Facebook
      </button>
      <hr />
      <button className="ui grey button loginbutton" onClick={startLoginGithub}>
        <i className="large middle aligned icon github" />
        Login with Github
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  // startLoginGoogle: () => dispatch(startLoginGoogle()),
  // startLoginFacebook: () => dispatch(startLoginFacebook()),
  // startLoginGithub: () => dispatch(startLoginGithub())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
