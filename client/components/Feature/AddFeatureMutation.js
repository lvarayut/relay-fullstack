// @flow
import { graphql, commitMutation, Environment } from 'react-relay/compat';

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
      viewer {
        id
      }
    }
  }
`;

function getConfigs(viewerId) {
  return [{
    type: 'RANGE_ADD',
    parentName: 'viewer',
    parentID: viewerId,
    connectionName: 'features',
    edgeName: 'featureEdge',
    rangeBehaviors: {
      '': 'append',
    },
  }];
}

function getOptimisticResponse(data, viewerId) {
  return {
    addFeature: {
      featureEdge: {
        node: data,
      },
      viewer: {
        id: viewerId
      }
    }
  };
}

function commit(
  environment: Environment,
  data: Object,
  viewerId: number
) {
  commitMutation(
    environment,
    {
      mutation,
      variables: { input: data },
      optimisticResponse: () => getOptimisticResponse(data, viewerId),
      configs: getConfigs(viewerId),
    }
  );
}

export default { commit };
