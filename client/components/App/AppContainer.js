import Relay from 'react-relay';
import App from './AppComponent';
import Footer from '../Footer/FooterContainer';

export default Relay.createContainer(App, {
  fragments: {
    // FIXME Use ${Footer.getFragment('viewer')} instead of manually specifying fields, it currently doesn't work for some reason
    viewer: () => Relay.QL`
      fragment on User {
        username
        website
      }`
  }
});
