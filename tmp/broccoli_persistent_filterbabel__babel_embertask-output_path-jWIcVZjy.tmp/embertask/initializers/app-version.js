define('embertask/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'embertask/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _embertaskConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_embertaskConfigEnvironment['default'].APP.name, _embertaskConfigEnvironment['default'].APP.version)
  };
});