define('embertask/tests/helpers/resolver', ['exports', 'ember/resolver', 'embertask/config/environment'], function (exports, _emberResolver, _embertaskConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _embertaskConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _embertaskConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});