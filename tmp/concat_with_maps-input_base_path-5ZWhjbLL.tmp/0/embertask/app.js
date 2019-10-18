define('embertask/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'embertask/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _embertaskConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _embertaskConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _embertaskConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _embertaskConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});