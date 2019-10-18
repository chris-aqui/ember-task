define('embertask/tests/routes/tasks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/tasks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tasks.js should pass jshint.');
  });
});