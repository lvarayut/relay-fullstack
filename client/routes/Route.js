import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import ViewerQuery from './ViewerQuery';
import AppContainer from '../components/App/AppContainer';
import CourseContainer from '../components/Course/CourseContainer';

export default (
  <Route path='/' component={AppContainer} queries={ViewerQuery}>
    <IndexRoute component={CourseContainer} queries={ViewerQuery} />
    <Redirect from='*' to='/' />
  </Route>
);
