import path from 'path';
import fs from 'fs';
import schema from '../data/schema';
import {graphql} from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';

const jsonFile = path.join(__dirname, '../data/schema.json');
const graphQLFile = path.join(__dirname, '../data/schema.graphql');

async function updateSchema() {
  try {
    let json = await graphql(schema, introspectionQuery);
    fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2));
    fs.writeFileSync(graphQLFile, printSchema(schema));
    console.log('Schema regenerated');
  } catch (err) {
    console.error(err);
  }
}

export default updateSchema;
