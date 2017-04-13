import React from 'react';
import Relay from 'react-relay';
import { browserHistory, applyRouterMiddleware, Router } from 'react-router';
import useRelay from 'react-router-relay';
import Routes from './routes/Route';

const Root = () => (
  <Router
    history={browserHistory} routes={Routes} render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
  />
);

export default Root;
