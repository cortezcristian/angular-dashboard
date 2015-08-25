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
                $scope.nuevoprov.nombre.$modelValue = '';
                $scope.nuevoprov.$setPristine();
                $scope.nuevoprov.$setUntouched();
            });

        }

        $scope.proveedorSelectBorrar = '';
        
        $scope.confirmarBorrarProveedor = function(idProv) {
            $scope.proveedorSelectBorrar = idProv;
        }

        $scope.borrarProveedor = function(idProv) {
            $http.delete($rootScope.config.service_url+'/proveedores/'+idProv)
            .success(function(res){
                console.log("borrado");
                $scope.proveedorSelectBorrar = '';
                $scope.listarProveedores();
                $('#modalBorrar').modal('hide');
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
