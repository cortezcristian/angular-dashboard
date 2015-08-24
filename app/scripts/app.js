'use strict';

/**
 * @ngdoc overview
 * @name angularDashboardApp
 * @description
 * # angularDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('angularDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/proveedores', {
        templateUrl: 'views/proveedores.html',
        controller: 'ProveedoresCtrl'
      })
      .when('/ayuda', {
        templateUrl: 'views/ayuda.html',
        controller: 'AyudaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
