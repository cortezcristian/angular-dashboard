'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('ProveedoresCtrl', function($scope, $http){
        console.log("cargo proveedores controller");
        $scope.proveedores = [];

        $scope.cargarProveedores = function(prov) {
            $http.post('http://localhost:9001/proveedores', {
                nombre: prov.nombre.$modelValue
            })
            .success(function(res){
                console.log("creado");
                $scope.listarProveedores();
            });

        }

        $scope.borrarProveedor = function(idProv) {
            $http.delete('http://localhost:9001/proveedores/'+idProv)
            .success(function(res){
                console.log("creado");
                $scope.listarProveedores();
            });

        }

        $scope.listarProveedores = function(){
            $http.get('http://localhost:9001/proveedores').then(function(res){
                console.log("success!", res);
                $scope.proveedores = res.data;
            }, function(){
                console.log("error!");
            });
        }

        $scope.listarProveedores();
  });
