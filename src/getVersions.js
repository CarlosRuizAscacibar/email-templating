var getVersions = function (obj) {
  var versions = [];
  var id = Object.keys(obj)[0];


  // console.log(obj[id]);

  var versionIds = Object.keys(obj[id]);
  versionIds.forEach(function(vId){


    var stringProps = {};
    var innerVersions = [];
    var props = Object.keys(obj[id][vId]);

    props.forEach(function(p){


      if( typeof  obj[id][vId][p] === 'string'){

        stringProps[p] = obj[id][vId][p];
      }
      if( typeof  obj[id][vId][p] === 'object'){

        var objToPass = {};
        objToPass[p] = obj[id][vId][p];
        getVersions(objToPass).forEach(function(v){
          v.id = vId + '_' +v.id;
          innerVersions.push(v);
        });
      }



    });

    innerVersions.forEach(function(iv){
      var mostImportantValues = iv.vars;
      var lessImportantValues = stringProps;
      var result={};
      Object.keys(lessImportantValues).forEach( function(key){ result[key] = lessImportantValues[key];});
      Object.keys(mostImportantValues).forEach( function(key){ result[key] = mostImportantValues[key];});

      iv.vars = result;
    });
    if(innerVersions.length === 0){
      versions.push({id:vId,vars:stringProps});
    }else{
      innerVersions.forEach(function(iv){ versions.push(iv);});

    }
  });
  return versions;
};
module.exports = getVersions;
// langs.forEach(function(l){
//   versions.push({
//     id : l,
//     vars : obj.langs[l]
//   });
//
// });
