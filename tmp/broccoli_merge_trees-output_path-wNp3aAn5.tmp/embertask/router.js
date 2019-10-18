define('embertask/router', ['exports', 'ember', 'embertask/config/environment'], function (exports, _ember, _embertaskConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _embertaskConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('tasks');
  });

  exports['default'] = Router;
});