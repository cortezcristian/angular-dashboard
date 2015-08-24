'use strict';

/**
 * @ngdoc directive
 * @name angularDashboardApp.directive:calc
 * @description
 * # calc
 */
angular.module('angularDashboardApp')
  .directive('calc', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the calc directive');
      }
    };
  });
