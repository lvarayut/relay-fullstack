import Relay from 'react-relay';
import Footer from './FooterComponent';

export default Relay.createContainer(Footer, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        username
        website
      }`
  }
});
