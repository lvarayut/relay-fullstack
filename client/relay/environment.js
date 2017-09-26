import { Environment, RecordSource, Store } from 'relay-runtime';
import { Network } from 'relay-local-schema';

import schema from '../../server/data/schema';

const environment = new Environment({
  network: Network.create({ schema }),
  store: new Store(new RecordSource())
});

export default environment;
