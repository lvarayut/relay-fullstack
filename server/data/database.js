class User {
  constructor(id, name, username, website) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
  }
}

class Feature {
  constructor(id, name, description, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
  }
}

const lvarayut = new User(1, 'Varayut Lerdkanlayanawat', 'lvarayut', 'https://github.com/lvarayut/relay-fullstack');
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

/*
* Add feature in memory
*/

let curFeatures = 9;
function addFeature(name, description, url) {
  const newFeature = new Feature(curFeatures, name, description, url);
  features.push(newFeature);
  newFeature.id = curFeatures;
  curFeatures += 1;
  return newFeature;
}


function getUser(id) {
  return id === lvarayut.id ? lvarayut : null;
}

function getFeature(id) {
  return features.find(w => w.id === id);
}

function getFeatures() {
  return features;
}

export {
  User,
  Feature,
  getUser,
  getFeature,
  getFeatures,
  addFeature
};
