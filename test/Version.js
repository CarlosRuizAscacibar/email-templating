var getVersions = require('../src/getVersions.js');
var expect = require('chai').expect;

describe('getVersions',function(){
  it('creates version with id',function(){
    expect( getVersions({langs:{es:{a:'a'}}})).to.deep.equal([{id:'es',vars:{a:'a'}}]);
  });

  // it('goes down the object tree',function(){
  //   expect( getVersions({es:{b:{a:'a'}}})).to.deep.equal({id:'es',vars:{a:'a'}});
  //
  // });
  it('creates two versions with id',function(){
    expect( getVersions({langs:{es:{a:'a'},en:{a:'aen'}}})).to.deep.equal([{id:'es',vars:{a:'a'}},{id:'en',vars:{a:'aen'}}]);
  });

  it('creates two versions with id',function(){
    var res = getVersions({
      langs:{
        es:{
          a:'a',
          pies:{
            p1:{textoPie:'pie1es'},
            p2:{textoPie:'pie2es'}
          }
        }
      }
    });
    console.log(res);
    expect(res ).to.deep.equal([{id:'es_p1',vars:{a:'a',textoPie:'pie1es'}},{id:'es_p2',vars:{a:'a',textoPie:'pie2es'}}]);
  });
  // it('creates two versions with id',function(){
  //   expect( getVersions({langs:{es:{a:'a',pies:{p1:{textoPie:'pie1es'},p1:{textoPie:'pie2es'}}},en:{a:'aen',pies:{p1:{textoPie:'pie1es'},p1:{textoPie:'pie2es'}}}}})).to.deep.equal([{id:'es_',vars:{a:'a'}},{id:'en',vars:{a:'aen'}}]);
  // });

});
