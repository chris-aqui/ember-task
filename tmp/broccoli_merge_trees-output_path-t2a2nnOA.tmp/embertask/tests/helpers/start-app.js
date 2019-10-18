define('embertask/tests/helpers/start-app', ['exports', 'ember', 'embertask/app', 'embertask/config/environment'], function (exports, _ember, _embertaskApp, _embertaskConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _embertaskConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _embertaskApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});