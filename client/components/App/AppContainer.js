/* eslint-disable no-unused-vars */
// @flow
import { createFragmentContainer, graphql } from 'react-relay';
import App from './AppComponent';
import Footer from '../Footer/FooterContainer';

export default createFragmentContainer(
  App,
  graphql`
    fragment AppContainer_viewer on User {
      ...FooterContainer_viewer
    }
  `
);
