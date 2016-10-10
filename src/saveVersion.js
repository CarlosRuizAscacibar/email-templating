var fs = require('fs');
var handlebars = require('handlebars');
var saveVersion = function(version,template,destFolder) {

  fs.writeFileSync(destFolder + '/' + version.id + '.html', template(version.vars));
};

module.exports = saveVersion;
