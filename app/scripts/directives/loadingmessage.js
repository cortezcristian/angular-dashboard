'use strict';

// Animate.css - http://daneden.github.io/animate.css/
// MetisMenu -
// Perfect Scrollbar - http://noraesae.github.io/perfect-scrollbar/
// Notify, Toaster - http://notifyjs.com/

/**
 * @ngdoc directive
 * @name angularDashboardApp.directive:loadingmessage
 * @description
 * # loadingmessage
 */
angular.module('angularDashboardApp')
  .directive('loadingmessage', function ($timeout) {
    return {
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        $(window).load(function() {
          $timeout(function(){
            element.addClass('animated flipOutX');
          }, 2000)
        });
      }
    };
  });
