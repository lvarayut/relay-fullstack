// @flow
import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation AddFeatureMutation($input: AddFeatureInput!) {
    addFeature(input: $input) {
      featureEdge {
        __typename
        node {
          name
          description
          url
        }
      }
    }
  }
`;

function commit(environment, data, viewerId) {
  commitMutation(environment, {
    mutation,
    variables: { input: data },
    updater: proxyStore => {
      const createPostField = proxyStore.getRootField('addFeature');
      const newFeature = createPostField.getLinkedRecord('featureEdge');

      const viewerProxy = proxyStore.get(viewerId);
      const connection = ConnectionHandler.getConnection(
        viewerProxy,
        'FeatureContainer_features'
      );
      if (connection) {
        ConnectionHandler.insertEdgeAfter(connection, newFeature);
      }
    }
  });
}

export default { commit };
