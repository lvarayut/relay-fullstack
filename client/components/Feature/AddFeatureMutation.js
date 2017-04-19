// @flow
import { graphql, commitMutation, Environment } from 'react-relay/compat';
import type { AddFeatureInput } from './__generated__/AddFeatureMutation.flow';

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
    featureEdge: {
      node: data,
    },
    viewer: {
      id: viewerId
    }
  };
}

function commit(
  environment: Environment,
  data: AddFeatureInput,
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
