'use strict';

/**
 * @ngdoc service
 * @name angularDashboardApp.Proveedores
 * @description
 * # Proveedores
 * Factory in the angularDashboardApp.
 */
angular.module('angularDashboardApp')
  .factory('Proveedores', function ($http, $rootScope) {
    // Service logic
    // ...
    var req = function(method, path, data){
        return $http({
            method: method,
            url: $rootScope.config.service_url+'/proveedores'+path,
            data: data
        });
    }

    // Public API here
    return {
         crear: function(data){
             return req('POST', '', data);
         }
    };
  });
