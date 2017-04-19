// @flow
import {
  createFragmentContainer,
  graphql,
} from 'react-relay/compat';
import Footer from './FooterComponent';

export default createFragmentContainer(Footer, {
  viewer: graphql`
    fragment FooterContainer_viewer on User {
      username
      website
    }`
});
