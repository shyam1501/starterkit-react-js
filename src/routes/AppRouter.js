import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HomePage from '../containers/Home';
import LoginPage from '../containers/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <>
      <Switch>
        <PrivateRoute path="/" component={HomePage} exact />
        <PublicRoute path="/login" component={LoginPage} />
      </Switch>
    </>
  </ConnectedRouter>
);

export default AppRouter;
