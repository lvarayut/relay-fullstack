/**
 * Created by sachg on 5/31/2016.
 */
import {assert} from 'chai';
import schema from '../data/schema';
import {graphql} from 'graphql';


describe('schema', ()=>{
  //id ->"VXNlcjox"
  it("grapql schema resolves viewer type", async ()=>{
    let query = '{viewer{username}}';
    let queryResult = await graphql(schema, query);
    assert.deepEqual(queryResult.data, {viewer:{username:"lvarayut"}});
  });

  it("invalid/unregistered query is bound to fail as is not defined in graphql schema", async ()=>{//not relevant message vs results
    let query = '{Feature(id:"RmVhdHVyZTox"){name}}';
    let featureResult = await graphql(schema, query);
    assert.equal(featureResult.errors[0].message, {feature:{id:"RmVhdHVyZTox"}});
  });

});
