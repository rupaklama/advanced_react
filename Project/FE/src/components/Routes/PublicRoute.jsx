import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ path, component, exact, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return <Route component={component} exact={exact} path={path} />;
};

PublicRoute.prototype = {
  path: Proptypes.string,
  component: Proptypes.object,
  exact: Proptypes.bool,
  isAuthenticated: Proptypes.bool,
};

export default PublicRoute;
