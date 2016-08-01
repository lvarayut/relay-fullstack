import Relay from 'react-relay';

class AddFeatureMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`
      mutation { addFeature }
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
      fragment on AddFeaturePayload {
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

export default AddFeatureMutation;
