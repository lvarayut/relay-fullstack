// @flow
import Relay from 'react-relay/classic';
import App from './AppComponent';
import Footer from '../Footer/FooterContainer';

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        ${Footer.getFragment('viewer')}
      }`
  }
});
