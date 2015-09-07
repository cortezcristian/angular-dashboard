'use strict';

/**
 * @ngdoc directive
 * @name angularDashboardApp.directive:metismenu
 * @description
 * # metismenu
 */
angular.module('angularDashboardApp')
  .directive('metismenu', function () {
    return {
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        $(element).metisMenu();
      }
    };
  });
