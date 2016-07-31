import Relay from 'react-relay';

class CreateFeatureMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`
      mutation { createFeature }
    `;
  }

  getVariables() {
    return {
      name: this.props.name,
      description: this.props.description,
      url: this.props.url
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on CreateFeaturePayload {
        featureEdge,
        viewer { features }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewerId,
      connectionName: 'features',
      edgeName: 'featureEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }
}

export default CreateFeatureMutation;
