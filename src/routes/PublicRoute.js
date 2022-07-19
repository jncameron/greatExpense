import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Navigate } from 'react-router-dom';


const PublicRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Navigate to="/dashboard" />
    ) : (
      <Component {...props} />
    )
    )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
