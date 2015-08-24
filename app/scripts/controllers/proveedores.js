'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('ProveedoresCtrl', function($scope, $http, $rootScope){
        console.log("cargo proveedores controller");
        $scope.proveedores = [];

        $scope.cargarProveedores = function(prov) {
            $http.post($rootScope.config.service_url+'/proveedores', {
                nombre: prov.nombre.$modelValue
            })
            .success(function(res){
                console.log("creado");
                $scope.listarProveedores();
            });

        }

        $scope.borrarProveedor = function(idProv) {
            $http.delete($rootScope.config.service_url+'/proveedores/'+idProv)
            .success(function(res){
                console.log("creado");
                $scope.listarProveedores();
            });

        }

        $scope.listarProveedores = function(){
            $http.get($rootScope.config.service_url+'/proveedores').then(function(res){
                console.log("success!", res);
                $scope.proveedores = res.data;
            }, function(){
                console.log("error!");
            });
        }

        $scope.listarProveedores();
  });
