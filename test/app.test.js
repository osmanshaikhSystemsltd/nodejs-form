process.env.NODE_ENV = 'test';
const sum= require('./../app');
var assert = require('assert');
 
describe('Sum', function() {

 
  it ('should return 6',(done)=>{
      assert.equal(sum(2,4),6);
      done();
  });
  it ('should return 6',(done)=>{
    assert.equal(sum(1,5),6);
    done();
});



  



});