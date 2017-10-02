import makeRouteConfig from 'found/lib/makeRouteConfig';
import { Route, Redirect } from 'found';
import React from 'react';

import SignupComponent from './components/Signup/SignupComponent';

export default makeRouteConfig(
  <Route path="/" Component={SignupComponent}>
    <Redirect from="*" to="/" />
  </Route>
);
