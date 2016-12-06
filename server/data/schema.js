/* eslint-disable no-unused-vars, no-use-before-define */
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  cursorForObjectInConnection
} from 'graphql-relay';

import {
  User,
  Feature,
  getUser,
  getFeature,
  getFeatures,
  addFeature
} from './database';


/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'User') {
      return getUser(id);
    } else if (type === 'Feature') {
      return getFeature(id);
    }
    return null;
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof Feature) {
      return featureType;
    }
    return null;
  }
);

/**
 * Define your own types here
 */

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),
    features: {
      type: featureConnection,
      description: 'Features that I have',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getFeatures(), args)
    },
    username: {
      type: GraphQLString,
      description: 'Users\'s username'
    },
    website: {
      type: GraphQLString,
      description: 'User\'s website'
    }
  }),
  interfaces: [nodeInterface]
});

const featureType = new GraphQLObjectType({
  name: 'Feature',
  description: 'Feature integrated in our starter kit',
  fields: () => ({
    id: globalIdField('Feature'),
    name: {
      type: GraphQLString,
      description: 'Name of the feature'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the feature'
    },
    url: {
      type: GraphQLString,
      description: 'Url of the feature'
    }
  }),
  interfaces: [nodeInterface]
});

/**
 * Define your own connection types here
 */
const { connectionType: featureConnection, edgeType: featureEdge } = connectionDefinitions({ name: 'Feature', nodeType: featureType });

/**
 * Create feature example
 */

const addFeatureMutation = mutationWithClientMutationId({
  name: 'AddFeature',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
  },

  outputFields: {
    featureEdge: {
      type: featureEdge,
      resolve: (obj) => {
        const cursorId = cursorForObjectInConnection(getFeatures(), obj);
        return { node: obj, cursor: cursorId };
      }
    },
    viewer: {
      type: userType,
      resolve: () => getUser(1)
    }
  },

  mutateAndGetPayload: ({ name, description, url }) => addFeature(name, description, url)
});


/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    viewer: {
      type: userType,
      resolve: () => getUser(1)
    }
  })
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addFeature: addFeatureMutation
    // Add your own mutations here
  })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
