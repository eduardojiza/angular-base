'use strict';

describe('Service: AccessData', function () {

  // load the service's module
  beforeEach(module('angularBaseApp'));

  // instantiate service
  var AccessData;
  beforeEach(inject(function (_AccessData_) {
    AccessData = _AccessData_;
  }));

  it('should do something', function () {
    expect(!!AccessData).toBe(true);
  });

});
