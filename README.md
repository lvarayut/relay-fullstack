<h1 align="center">
  <br>
	<img width="800" src="https://cloud.githubusercontent.com/assets/4281887/14516854/792107ac-0231-11e6-95dd-86bb2b5197e3.png">
	<br>
  <br>
  <br>
</h1>

[![Dependency Status](https://img.shields.io/david/lvarayut/relay-fullstack.svg)](https://github.com/lvarayut/relay-fullstack)
[![devDependency Status](https://img.shields.io/david/dev/lvarayut/relay-fullstack.svg)](https://github.com/lvarayut/relay-fullstack)
> Relay Fullstack is a Relay scaffolding application that aims to help you get up and running a project without worrying about integrating tools. It comes with many modern technologies; Relay, GraphQL, Express, ES6/ES7, JSX, Webpack, Babel, Material Design Lite, and PostCSS. Relay Fullstack is also using [Hot-reload](https://github.com/gaearon/react-transform-hmr) to real time update the screen whenever any code changes.

## Example 
![Demo](https://cloud.githubusercontent.com/assets/4281887/13377800/9c4705a2-de1d-11e5-82cb-745e16d5b1c4.gif)
> Check out the [Live demo](http://relay-fullstack.herokuapp.com) on Heroku.

## Usage

### Basic

The basic installation contains only general technologies needed by most of the projects, Relay Fullstack is totally unopinionated. If you wanted to include a database, flow, or any specific technologies, please see the [Advance](#advance) section.

Clone the repository to your local directory
```bash
$ git clone https://github.com/lvarayut/relay-fullstack.git
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

#### Heroku
Before getting started, make sure you already installed the [Heroku Toolbelt](https://toolbelt.heroku.com), which is a command-line tooling for managing Heroku applications that makes it easy to deploy an application in a few steps:

```bash
$ heroku create                     # Create a new Heroku application
$ git push heroku master            # Push your code into the created Heroku repository
$ heroku ps:scale web=1             # Run the deployed application
````

That is it! Now, open the application on your default browser using `heroku open`.

## Schema

Whenever you start a server, it will automatically execute `updateSchema.js` script in order to compile the schema definitions, defined in `schema.js`, to `schema.json` and `schema.graphql`. This is required by Relay framework. However, you could also run the script manually:

```bash
$ npm run update
```

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
- Relay Fullstack is inspired by [relay-starter-kit](https://github.com/relayjs/relay-starter-kit). Please take a look at the original code to learn more.
- Handcrafted with ♥ by Varayut Lerdkanlayanawat.

## Contributors

[<img alt="lvarayut" src="https://avatars.githubusercontent.com/u/4281887?v=3&s=117" width="117">](https://github.com/lvarayut) |[<img alt="ianaya89" src="https://avatars.githubusercontent.com/u/3258966?v=3&s=117" width="117">](https://github.com/ianaya89) |[<img alt="kkostov" src="https://avatars.githubusercontent.com/u/4718042?v=3&s=117" width="117">](https://github.com/kkostov) |[<img alt="jtfell" src="https://avatars.githubusercontent.com/u/6702746?v=3&s=117" width="117">](https://github.com/jtfell) |[<img alt="kennydee" src="https://avatars.githubusercontent.com/u/1484406?v=3&s=117" width="117">](https://github.com/kennydee) |[<img alt="arnif" src="https://avatars.githubusercontent.com/u/1312916?v=3&s=117" width="117">](https://github.com/arnif) |
:---: |:---: |:---: |:---: |:---: |:---: |
[lvarayut](https://github.com/lvarayut) |[ianaya89](https://github.com/ianaya89) |[kkostov](https://github.com/kkostov) |[jtfell](https://github.com/jtfell) |[kennydee](https://github.com/kennydee) |[arnif](https://github.com/arnif) |

[<img alt="lexun" src="https://avatars.githubusercontent.com/u/1910143?v=3&s=117" width="117">](https://github.com/lexun) |[<img alt="narongdejsrn" src="https://avatars.githubusercontent.com/u/1563323?v=3&s=117" width="117">](https://github.com/narongdejsrn) |[<img alt="ncrmro" src="https://avatars.githubusercontent.com/u/8276365?v=3&s=117" width="117">](https://github.com/ncrmro) |[<img alt="sankalpk" src="https://avatars.githubusercontent.com/u/1317291?v=3&s=117" width="117">](https://github.com/sankalpk) |[<img alt="jg123" src="https://avatars.githubusercontent.com/u/693277?v=3&s=117" width="117">](https://github.com/jg123) |
:---: |:---: |:---: |:---: |:---: |
[lexun](https://github.com/lexun) |[narongdejsrn](https://github.com/narongdejsrn) |[ncrmro](https://github.com/ncrmro) |[sankalpk](https://github.com/sankalpk) |[jg123](https://github.com/jg123) |

## License

MIT © [Varayut Lerdkanlayanawat](https://github.com/lvarayut)
