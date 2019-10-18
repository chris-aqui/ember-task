define('embertask/tests/test-helper', ['exports', 'embertask/tests/helpers/resolver', 'ember-qunit'], function (exports, _embertaskTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_embertaskTestsHelpersResolver['default']);
});