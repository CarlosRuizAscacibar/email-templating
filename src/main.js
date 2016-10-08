const handlebars = require('handlebars');
const getVersions = require('./getVersions.js');
const fs = require('fs');

var src = fs.readFileSync('email/index.hbs','utf8');
var template = handlebars.compile(src);
var variablesObject = JSON.parse(fs.readFileSync('email/variables.json','utf8',{flag:'w'}));
var versions = getVersions(variablesObject);

versions.forEach(function(version){
  fs.writeFileSync('html/'  + version.id + '.html', template(version.vars));
});
