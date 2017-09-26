> This repository is a fork from [Relay Fullstack](https://github.com/lvarayut/relay-fullstack). We forket it to personalize the boilerplate with our needs. It comes with many modern technologies; Relay, GraphQL, Express, ES6/ES7, JSX, Webpack, Babel, Material Design Lite, and PostCSS. Relay Fullstack is also using [Hot-reload](https://github.com/gaearon/react-transform-hmr) to real time update the screen whenever any code changes.
And we added Husk, Prettier and Tests.

## Usage

### Basic

The basic installation contains only general technologies needed by most of the projects, Relay Fullstack is totally unopinionated. If you wanted to include a database, flow, or any specific technologies, please see the [Advance](#advance) section.

First, you need `watchman` installed, please follow its [installation guide](https://facebook.github.io/watchman/docs/install.html). Then, clone the repository to your local directory
```bash
$ git clone git@github.com:SigaLei/relay-fullstack.git
$ cd relay-fullstack
```

Install all dependencies & Start developing
```bash
$ npm install
$ npm start
```

Launch your favorite web browser and go to `http://localhost:3000` for Relay application or `http://localhost:8000` for GraphiQL. 

### Advance

Relay Fullstack is integrated with Yeoman that allows you to choose technologies that suit your needs, the options are including database, flow, and etc.

Install `yo` and [generator-relay-fullstack](https://www.npmjs.com/package/generator-relay-fullstack) globally

```bash
$ npm install -g yo generator-relay-fullstack
```

Create a new directory and start the generator, it will prompt some questions to help you get up and running

```bash
$ mkdir relay-fullstack && cd $_
$ yo relay-fullstack
$ npm start
```

Launch your favorite web browser and go to `http://localhost:3000` for Relay application or `http://localhost:8000` for GraphiQL. 

> NOTE: generator-relay-fullstack is currently working with minimal functionalities. Database, Flow, and Sub-generator are work-in-progress.

## Deployment

#### Local machine
In order to deploy a project, it is a good practice to minify all JavaScript files, stop spawning the GraphiQL server, pull off some duplicate dependencies, and remove all unnecessary scripts, for example, Hot-reload. All of these can be done by executing the following command:

```bash
$ npm run deploy
```

Again, launch your favorite web browser and go to `http://localhost:3000`.

## Project Structure


    ├── client                          - All of the client side code resides in this folder
    │   ├── assets                      - Images and fonts
    │   ├── components                  - Relay containers, React components, and SCSS files used in the components
    │   │   └── variables.scss          - Common SCSS variables
    │   ├── routes                      - React-router-relay 
    │   │   ├── Route.js                - All route definitions
    │   │   └── ViewerQuery.js          - Entry node of a GraphQL query
    │   ├── index.html                  - HTML template file used by html-webpack-plugin 
    │   └── index.js                    - Client entry point
    ├── server                          - All of the server side code resides in this folder
    │   ├── config                      - Configuration 
    │   │   └── environment             - Separate configuration for each environment
    │   │       ├── development.js      - Development configuration
    │   │       ├── index.js            - Common configuration used in any environment
    │   │       ├── production.js       - Production configuration
    │   │       └── test.js             - Test configuration
    │   ├── data                        - Data and APIs 
    │   │   ├── database.js             - Mock up database which should be replaced with your real database logic
    │   │   ├── schema.graphql          - Compiled schema in a readable form
    │   │   ├── schema.js               - Schema definitions
    │   │   └── schema.json             - Compiled schema to be used by Relay 
    │   ├── utils                       - Utilities 
    │   │   ├── babelRelayPlugin.js     - Babel-relay-plugin provided by Relay
    │   │   └── updateSchema.js         - Code for compiling the defined schema to schema.json and schema.graphql
    │   └── index.js                    - Server entry point
    ├── package.json                    - List of dependencies
    ├── webpack.config.js               - Webpack configuration

## Technologies

### Frameworks
[Relay](https://facebook.github.io/relay) - A JavaScript framework for building data-driven react applications. It is required to be used with React and GraphQL.

[React](https://facebook.github.io/react) - A JavaScript library for building user interfaces. It introduces many great concepts, such as, Virtual DOM, Data flow, etc.

[GraphQL](https://github.com/facebook/graphql) - GraphQL is a query language and execution engine tied to any backend service.

[Express](http://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Module bundler & Syntax transformers 
[Webpack](https://webpack.github.io) - Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.

[Babel](https://babeljs.io) - Babel is a JavaScript compiler which allows you to  use next generation, ES6/ES7, JavaScript, today.

### Languages
[ES6/ES7](https://github.com/lukehoban/es6features) - ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language.

[JSX]( https://facebook.github.io/react/docs/jsx-in-depth.html) - JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.

### Designs
[Material Design Lite](http://getmdl.io) - Material Design Lite lets you add a Material Design look and feel to your websites.

[PostCSS](http://postcss.org) - PostCSS is a tool for transforming CSS with JavaScript. It has roughly 200 plugins to help you write CSS easier.

### Additional Tools
[React transform HMR](https://github.com/gaearon/react-transform-hmr) - A React Transform that enables hot reloading React classes.

[React router relay](https://github.com/relay-tools/react-router-relay) - Relay integration for React Router.

[Eslint](http://eslint.org) - The pluggable linting utility for JavaScript and JSX.

[Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules.

[Precss](https://github.com/jonathantneal/precss) - Use Sass-like markup in your CSS.

[Nodemon](http://nodemon.io) - Monitor for any changes in your node.js application and automatically restart the server.

[CSS Modules](https://github.com/css-modules/css-modules) - CSS file in which all class names and animation names are scoped locally by default.

## Credits
- This repository is a fork from [Relay Fullstack](https://github.com/lvarayut/relay-fullstack)
- Relay Fullstack is inspired by [relay-starter-kit](https://github.com/relayjs/relay-starter-kit). Please take a look at the original code to learn more.

## License

MIT © [Varayut Lerdkanlayanawat](https://github.com/lvarayut)
