import DataLoader from 'dataloader';

class User {
  id: number;
  name: string;
  username: string;
  website: string;
  features: Array<Feature>;
  constructor(id: number, name: string, username: string, website: string, features: Array<Feature>) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
    this.features = features;
  }
}

class Feature {
  id: number;
  name: string;
  description: string;
  url: string;
  constructor(id: number, name: string, description: string, url: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
  }
}

const features = [
  new Feature(1, 'React', 'A JavaScript library for building user interfaces.', 'https://facebook.github.io/react'),
  new Feature(2, 'Relay', 'A JavaScript framework for building data-driven react applications.', 'https://facebook.github.io/relay'),
  new Feature(3, 'GraphQL', 'A reference implementation of GraphQL for JavaScript.', 'http://graphql.org'),
  new Feature(4, 'Express', 'Fast, unopinionated, minimalist web framework for Node.js.', 'http://expressjs.com'),
  new Feature(5, 'Webpack', 'Webpack is a module bundler that packs modules for the browser.', 'https://webpack.github.io'),
  new Feature(6, 'Babel', 'Babel is a JavaScript compiler. Use next generation JavaScript, today.', 'https://babeljs.io'),
  new Feature(7, 'PostCSS', 'PostCSS. A tool for transforming CSS with JavaScript.', 'http://postcss.org'),
  new Feature(8, 'MDL', 'Material Design Lite lets you add a Material Design to your websites.', 'http://www.getmdl.io')
];
const lvarayut = new User(1, 'Varayut Lerdkanlayanawat', 'lvarayut', 'https://github.com/lvarayut/relay-fullstack', features.map(feature => feature.id));

/*
* Add feature in memory
*/

function getUser(id: number) {
  return id === lvarayut.id ? lvarayut : null;
}

function getFeature(id: number) {
  return features.find(w => w.id === id);
}

function getFeatures() {
  return features;
}

function fetchUser(id) {
  return new Promise((resolve) => {
    resolve(getUser(id));
  });
}

function fetchFeature(id) {
  return new Promise((resolve) => {
    resolve(getFeature(id));
  });
}

const userLoader = new DataLoader(
  ids => Promise.all(ids.map(fetchUser))
);

const featureLoader = new DataLoader(
  ids => Promise.all(ids.map(fetchFeature))
);

let curFeatures = 9;
function addFeature(name: string, description: string, url: string) {
  const newFeature = new Feature(curFeatures, name, description, url);
  features.push(newFeature);
  newFeature.id = curFeatures;
  lvarayut.features.push(newFeature.id);
  featureLoader.clear(newFeature.id);
  userLoader.clear(lvarayut.id);
  curFeatures += 1;
  return newFeature;
}

export {
  userLoader,
  featureLoader,
  User,
  Feature,
  getFeatures,
  addFeature
};
