/* eslint-disable no-unused-vars */
// @flow
import {
  createFragmentContainer,
  graphql,
} from 'react-relay/compat';
import App from './AppComponent';
import Footer from '../Footer/FooterContainer';

export default createFragmentContainer(App, {
  viewer: graphql`
    fragment AppContainer_viewer on User {
      ...Footer_viewer
    }`
});
