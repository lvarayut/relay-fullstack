const path = module.require('path');
const fetch = module.require('node-fetch');
const fs = module.require('fs');

const {
  buildClientSchema,
  introspectionQuery,
  printSchema
} = require('graphql/utilities');

const jsonFile = path.join(__dirname, '../assets/graphql/schema.json');
const graphQLFile = path.join(__dirname, '../assets/graphql/schema.graphql');

fetch('http://localhost:3001/god', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query: introspectionQuery })
})
  .then(res => res.json())
  .then(res => {
    const schemaString = printSchema(buildClientSchema(res.data));
    fs.writeFileSync(jsonFile, JSON.stringify(res, null, 2));
    fs.writeFileSync(graphQLFile, schemaString);
  });
