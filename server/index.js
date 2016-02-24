import path from 'path';
import webpack from 'webpack';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import WebpackDevServer from 'webpack-dev-server';
import gaze from 'gaze';
import webpackConfig from '../webpack.config';
import config from './config/environment';
import schema from './data/schema';
import updateSchema from './utils/updateSchema';

if (config.env === 'development') {
  // Launch GraphQL
  const graphql = express();
  graphql.use('/', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema: schema
  }));
  graphql.listen(config.graphql.port, () => console.log(`GraphQL is listening on port ${config.graphql.port}`));

  // Launch Relay by using webpack.config.js
  const app = new WebpackDevServer(webpack(webpackConfig), {
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
  app.use('/', express.static(path.join(__dirname, '../build')));
  app.listen(config.port, () => console.log(`Relay is listening on port ${config.port}`));

  // Update schema.json and schema.graphql
  updateSchema();

  // Watch JavaScript files in the data folder for changes, and update schema.json and schema.graphql
  gaze(path.join(__dirname, 'data/*.js'), (err, watcher) => {
    if (err) console.error('Error: Watching files in data folder');
    watcher.on('all', () => {
      updateSchema();
    });
  });
} else if (config.env === 'production') {
  // Launch Relay by creating a normal express server
  const app = express();
  app.use('/', express.static(path.join(__dirname, '../build')));
  app.use('/graphql', graphQLHTTP({ schema: schema }));
  app.listen(config.port, () => console.log(`App is listening on port ${config.port}`));
}

