ParameterForHbsHelpers = function(parameter1,parameter2){
  var res = {};
  if(parameter2){
    res = parameter2;
    res.parameters = parameter1;
  }else{
    res = parameter1;
  }
  return res;
};

module.exports = ParameterForHbsHelpers;
