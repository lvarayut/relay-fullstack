import makeRouteConfig from 'found/lib/makeRouteConfig';
import { Route, Redirect } from 'found';
import React from 'react';
import { graphql } from 'react-relay';

import AppContainer from './components/App/AppContainer';
import FeatureContainer from './components/Feature/FeatureContainer';
import SignupComponent from './components/Signup/SignupComponent';
import LoginComponent from './components/Login/LoginComponent';

const AppContainerQuery = graphql`
  query routes_AppContainer_Query {
    viewer {
      ...AppContainer_viewer
    }
  }
`;

const FeatureContainerQuery = graphql`
  query routes_FeatureContainer_Query {
    viewer {
      ...FeatureContainer_viewer
    }
  }
`;

export default makeRouteConfig(
  <Route path="/" Component={AppContainer} query={AppContainerQuery}>
    <Route Component={FeatureContainer} query={FeatureContainerQuery} />
    <Route path="/signup" Component={SignupComponent} />
    <Route path="/login" Component={LoginComponent} />
    <Redirect from="*" to="/" />
  </Route>
);
