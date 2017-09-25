// @flow
import { createFragmentContainer, graphql } from 'react-relay';
import Feature from './FeatureComponent';

export default createFragmentContainer(
  Feature,
  graphql`
    fragment FeatureContainer_viewer on User {
      id
      features(first: 20)
        @connection(key: "FeatureContainer_features", filters: []) {
        edges {
          node {
            id
            name
            description
            url
          }
        }
      }
    }
  `
);
