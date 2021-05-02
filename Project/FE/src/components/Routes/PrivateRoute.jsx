import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ path, component, exact, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Route component={component} exact={exact} path={path} />;
  }
  return <Redirect to='/login' />;
};

PrivateRoute.prototype = {
  path: Proptypes.string,
  component: Proptypes.object,
  exact: Proptypes.bool,
  isAuthenticated: Proptypes.bool,
};

export default PrivateRoute;
