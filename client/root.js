import React from 'react';

import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { Resolver } from 'found-relay';
import { Network } from 'relay-local-schema';
import { Environment, RecordSource, Store } from 'relay-runtime';

import schema from '../server/data/schema';
import routes from './routes';

const environment = new Environment({
  network: Network.create({ schema }),
  store: new Store(new RecordSource())
});

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,

  render: createRender({})
});

const Root = () => <Router resolver={new Resolver(environment)} />;

export default Root;
