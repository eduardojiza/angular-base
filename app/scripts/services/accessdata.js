'use strict';

/**
 * @ngdoc service
 * @name angularBaseApp.AccessData
 * @description
 * # AccessData
 * Factory in the angularBaseApp.
 */
angular.module('angularBaseApp')
  .factory('AccessData', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
