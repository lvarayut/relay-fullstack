# Make relay-fullstack work with the graphene-django graphql server

- relay-fullstack: https://github.com/lvarayut/relay-fullstack

React, Relay, webpack. Includes express-graphql server which you will need to turn off in favor of the django one.

- graphene-django: https://github.com/graphql-python/graphene-django

Django has a solid ORM with migrations. Graphene-django offers easy configuration of a full graphql server using your django models. It is easy to add filtering support for searches and to customize the output of each field.

## file layout

Here is one good standard way to do it:

```
.
├── frontend           # clone or export relay-fullstack to here
│   ├── LICENSE
│   ├── Procfile
│   ├── README.md
│   ├── client
│   │   ├── assets
│   │   ├── components
│   │   ├── index.html
│   │   ├── index.js
│   │   ├── mutations
│   │   ├── routes
│   │   └── utils
│   ├── node_modules/
│   ├── package.json
│   ├── schema.json     # dump schema to here
│   ├── server
│   │   ├── config
│   │   ├── data
│   │   ├── index.js
│   │   ├── relay-server.js
│   │   └── utils
│   └── webpack.config.js
├── manage.py
├── project             # your django app for "project"
│   ├── __init__.py
│   ├── schema.py       # your root schema.py that imports someapp/schema.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── someapp
    ├── __init__.py
    ├── models.py
    └── schema.py       # nodes and fields for this app
```

## django

Set a path where the schema should be exported to:

```python
# settings.py
GRAPHENE = {
    'SCHEMA': 'mattermind.schema.schema',
    'SCHEMA_OUTPUT': 'frontend/schema.json'
}
```

Dump the schema from django anytime you make changes:

```sh
./manage.py graphql_schema
```

This is used by the [babel-relay-plugin](https://www.npmjs.com/package/babel-relay-plugin) that transpiles your graphql queries into a JSON representation.

It also validates your queries against your schema and throws helpful errors.

Add the graphql view to `project/urls.py` and make it CSRF exempt:

```python
# urls.py
from django.conf.urls import url
from django.contrib import admin
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^graphql', csrf_exempt(GraphQLView.as_view(graphiql=True)))
]
```

## relay-fullstack

Edit `server/index.js` and comment out or delete the express graphql server.

```js
  // Launch GraphQL
  // const graphql = express();
  // graphql.use('/', graphQLHTTP({
  //   graphiql: true,
  //   pretty: true,
  //   schema
  // }));
  // graphql.listen(config.graphql.port, () => console.log(chalk.green(`GraphQL is listening on port ${config.graphql.port}`)));

  // But keep the proxy through to 8000 (which will now be served by django)
  // Launch Relay by using webpack.config.js
  const relayServer = new WebpackDevServer(webpack(webpackConfig), {
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
```

Change `server/utils/babelRelayPlugin.js` so that it loads the `schema.json` from Django rather than `server/data/schema.json`:

```js
var jsonFile = path.join(__dirname, '../../schema.json');
```

Change the start command in `package.json` as you don't need or want to dump the schema from the example server's data.

```js
    "start": "./node_modules/.bin/babel-node server/index.js",
```

Now you can run django and then express:

```sh
./manage.py runserver
```

```sh
npm run start
```

This will run the frontend in a separate web page at localhost:3000 which let's you develop quickly with hot reloading.

You will probably also want to serve the webpack bundle in a normal Django view on localhost:8000 (especially if you need to login) and eventually in production.

[django-webpack-loader](https://github.com/owais/django-webpack-loader) is a good solution for this.

You can insert the bundle into your `base_site.html` template for development or production with something like:

```
{% render_bundle 'public' %}
```

That will be the hotloader in development or the path to the built static assets in production.

See `webpack.config.js` and set up the entry point(s) so that you define 'public' or 'bundle' or whatever name you want the compiled frontend to be called.

If you are starting with the example app from relay-fullstack you will see lots of schema validation errors until you rip all that out and build your own app against your django schema.

You can remove `server/` entirely but remember to move the `server/utils/babelRelayPlugin.js` as you'll need that for transpiling your graphql queries.
