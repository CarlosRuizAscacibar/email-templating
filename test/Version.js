var getVersions = require('../src/getVersions.js');
var expect = require('chai').expect;

describe('getVersions',function(){
  it('creates version with id',function(){
    expect( getVersions({langs:{es:{a:'a'}}})).to.deep.equal({id:'es',vars:{a:'a'}});
  });
  it('creates two versions with id',function(){
    expect( getVersions({langs:{es:{a:'a'},en:{a:'aen'}}})).to.deep.equal([{id:'es',vars:{a:'a'}},{id:'en',vars:{a:'aen'}}]);
  });

});
