'use strict';

describe('Controller: DataShowCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBaseApp'));

  var DataShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DataShowCtrl = $controller('DataShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DataShowCtrl.awesomeThings.length).toBe(3);
  });
});
