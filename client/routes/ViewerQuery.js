import Relay from 'react-relay/classic';

export default {
  viewer: Component => Relay.QL`
    query {
      viewer {
        ${Component.getFragment('viewer')}
      }
    }
  `
};
