define('embertask/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'embertask/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _embertaskConfigEnvironment) {

  var name = _embertaskConfigEnvironment['default'].APP.name;
  var version = _embertaskConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});