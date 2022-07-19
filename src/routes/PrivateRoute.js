import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';


const PrivateRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props}/>
      </div>
    ) : (
      <Route path='*' element={<Navigate to='/' />} />
    )
    )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
