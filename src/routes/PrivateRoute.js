/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default ({
  component: Component,
  ...rest
}) => {
  const isAuthorized = useSelector(
    state => state.auth.isAuthorized
  );
  return (
    <Route {...rest} component={(props) => (
      isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );
};

