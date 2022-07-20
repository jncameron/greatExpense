import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';


const PrivateRoute = ({ 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
      <div>
        <Header />
        <Component {...props}/>
      </div>
    )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: true
});

export default connect(mapStateToProps)(PrivateRoute);
