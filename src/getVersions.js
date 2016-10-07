var getVersions = function (obj) {
  var versions = [];
  var langs = Object.keys(obj.langs);
  langs.forEach(function(l){
    versions.push({
      id : l,
      vars : obj.langs[l]
    });

  });
  if(versions.length === 1){
    versions = versions[0];
  }
  return versions;
}
module.exports = getVersions;
