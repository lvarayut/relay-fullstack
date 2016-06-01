/**
 * Created by sachg on 5/27/2016.
 */
import {assert} from 'chai';
import {User,Feature,getFeature,getFeatures,getUser} from '../data/database';


describe('database', function(){

  describe("getUser", ()=>{
         it('get User and make sure it\'s lvarayut', ()=>{
          const lvarayut = new User('1', 'Varayut Lerdkanlayanawat', 'lvarayut', 'https://github.com/lvarayut/relay-fullstack');
          assert.deepEqual(getUser('1'), lvarayut);
        });
    });


  describe("getFeature", ()=>{

    it("returns the specified user by id {1}", ()=>{
      const react = new Feature('1', 'React', 'A JavaScript library for building user interfaces.', 'https://facebook.github.io/react')
      assert.deepEqual(getFeature('1'), react);
    });
  });

  describe("getFeatures", ()=>{

    it("returns list of features", ()=>{
      assert.equal(getFeatures().length, 9);
    });
  });


});
