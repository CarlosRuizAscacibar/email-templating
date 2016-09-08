var expect = require('chai').expect;
var ParameterForHbsHelpers = require('../src/ParameterForHbsHelpers.js');

describe('ParameterForHbsHelpers',function(){
  it('joins parameters in result object',function(){
    var res = ParameterForHbsHelpers({parameter:true},{fn:function(){return true;}});
    expect(res.parameters.parameter).to.equal(true);
    expect(res.fn()).to.equal(true);

  });
  it('returns only parameter as result object when other objects mising',function(){
    var res = ParameterForHbsHelpers({fn:function(){return true;}});
    expect(res.parameters).to.equal(undefined);
    expect(res.fn()).to.equal(true);

  });
});
