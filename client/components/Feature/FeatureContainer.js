import Relay from 'react-relay';
import Feature from './FeatureComponent';

export default Relay.createContainer(Feature, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        id,
        features(first: 20) {
          edges {
            node {
              id
              name
              description
              url
            }
          }
        }
      }`
  }
});
