// @flow
import Relay, { RelayMutationConfig } from 'react-relay';
import RelayGraphQLMutation from '../../../node_modules/react-relay/lib/RelayGraphQLMutation';

class AddFeatureMutation {
  static serverQuery =
    Relay.QL`mutation {
        addFeature {
            featureEdge {
                __typename
                node {
                    name
                    id
                    description
                    url
                }
            }
        }
    }`;
  static optimisticQuery =
    Relay.QL`mutation {
        addFeature {
            featureEdge {
                node {
                    name
                    description
                    url
                }
            }
        }
    }`;
  config: ?Array<RelayMutationConfig>;
  mutation: RelayGraphQLMutation;
  input: {
    name: string,
    url: string,
    description: string,
  };
  constructor(
    parent: string,
    variables: {
      name: string,
      url: string,
      description: string,
    }
  ) {
    this.mutation = new RelayGraphQLMutation(
      AddFeatureMutation.serverQuery,
      {
        input: variables
      },
      null, // no files
      Relay.Store,
      null, // callback not necessary
      variables.name, // value is collision key
    );
    this.input = variables;
    this.config = [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: parent,
      connectionName: 'features',
      edgeName: 'featureEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }
  optimistic = () => {
    this.mutation.applyOptimistic(
      AddFeatureMutation.optimisticQuery,
      {
        featureEdge: {
          node: this.input
        }
      },
      this.config,
    );
    return this;
  }
  commit = () => {
    this.mutation.commit(
      this.config,
    );
  }
}

export default AddFeatureMutation;
