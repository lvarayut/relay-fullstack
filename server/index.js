import path from 'path';
import webpack from 'webpack';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import WebpackDevServer from 'webpack-dev-server';
import historyApiFallback from 'connect-history-api-fallback';
import gaze from 'gaze';
import requireUncached from './utils/requireUncached';
import webpackConfig from '../webpack.config';
import config from './config/environment';
import schema from './data/schema';
import updateSchema from './utils/updateSchema';

let graphQLServer;
let relayServer;

function startGraphQLServer(schema) {
  const graphql = express();
  graphql.use('/', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema
  }));
  graphQLServer = graphql.listen(config.graphql.port, () => console.log(`GraphQL is listening on port ${config.graphql.port}`));
}

function startRelayServer() {
  // Launch Relay by using webpack.config.js
  relayServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/build/',
    proxy: {
      '/graphql': `http://localhost:${config.graphql.port}`
    },
    stats: {
      colors: true
    },
    hot: true,
    historyApiFallback: true
  });

  // Serve static resources
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.listen(config.port, () => console.log(`Relay is listening on port ${config.port}`));
}

if (config.env === 'development') {
  // Start GraphQL and Relay servers
  startGraphQLServer(schema);
  startRelayServer();

  // Watch JavaScript files in the data folder for changes, and update schema.json and schema.graphql
  gaze(path.join(__dirname, 'data/*.js'), (err, watcher) => {
    if (err) console.error('Error: Watching files in data folder');
    watcher.on('all', async() => {
      try {
        // Close the GraphQL server, update the schema.json and schema.graphql, and start the server again
        graphQLServer.close();
        await updateSchema();
        const newSchema = requireUncached(path.join(__dirname, './data/schema')).default;
        startGraphQLServer(newSchema);

        // Close the Relay server, and start it again
        relayServer.listeningApp.close();
        startRelayServer();
      } catch (e) {
        console.error(e.stack);
      }
    });
  });
} else if (config.env === 'production') {
  // Launch Relay by creating a normal express server
  relayServer = express();
  relayServer.use(historyApiFallback());
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.use('/graphql', graphQLHTTP({ schema }));
  relayServer.listen(config.port, () => console.log(`App is listening on port ${config.port}`));
}
