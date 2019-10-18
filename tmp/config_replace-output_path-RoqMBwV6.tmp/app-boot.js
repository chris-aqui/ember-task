/* jshint ignore:start */

define('embertask/config/environment', ['ember'], function(Ember) {
  var prefix = 'embertask';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("embertask/app")["default"].create({"name":"embertask","version":"0.0.0+26b76402"});
}

/* jshint ignore:end */
