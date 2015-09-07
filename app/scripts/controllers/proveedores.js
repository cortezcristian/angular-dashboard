'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('ProveedoresCtrl', function($scope, 
            $http, $rootScope, Proveedores, toaster){
        console.log("cargo proveedores controller");
        $scope.proveedores = [];

        $scope.cargarProveedores = function(prov) {

            var dataProv = {
                nombre: prov.nombre.$modelValue
            }; 
            Proveedores.crear(dataProv).then(function(res){
                toaster.pop('success', "Alta", "El proveedor fue creado con éxito");
                $scope.listarProveedores();
            });

            /*
            $http.post($rootScope.config.service_url+'/proveedores', {
                nombre: prov.nombre.$modelValue
            })
            .success(function(res){
                console.log("creado");
                $scope.listarProveedores();
            });
            */

        }


        $scope.idProveedorBorrar = '';

        $scope.confirmarBorrarProveedor = function(idProv) {
            $scope.idProveedorBorrar = idProv;
        }

        $scope.borrarProveedor = function(idProv) {
            $http.delete($rootScope.config.service_url+'/proveedores/'+idProv)
            .success(function(res){
                console.log("creado");
                $scope.listarProveedores();
                $('#myModal').modal('hide');
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
