import Relay from 'react-relay';
import App from './AppComponent';

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        courses(first: 10) {
          edges {
            node {
              id,
              coursenum
            }
          }
        }
      }`
  }
});
