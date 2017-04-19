// @flow
import {
  createFragmentContainer,
  graphql,
} from 'react-relay/compat';
import Feature from './FeatureComponent';


export default createFragmentContainer(Feature, {
  viewer: graphql`
    fragment FeatureContainer_viewer on User {
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
});
