import makeRouteConfig from 'found/lib/makeRouteConfig';
import { Route, Redirect } from 'found';
import React from 'react';

import SignupComponent from './components/Signup/SignupComponent';
import LoginComponent from './components/Login/LoginComponent';

export default makeRouteConfig(
  <Route path="/" Component={LoginComponent}>
    <Redirect from="*" to="/" />
  </Route>
);
