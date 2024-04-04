var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
    $routeProvider
        .when('/clientes', {
            templateUrl: 'src/views/client/client.ejs',
            controller: 'ClientesController'
        })
        .when('/vehiculos', {
            templateUrl: 'src/views/vehicle/vehicle.ejs',
            controller: 'VehiculosController'
        })
        .when('/contratos', {
            templateUrl: 'src/views/contract/contra.ejs',
            controller: 'VehiculosController'
        })
        .otherwise({ redirectTo: '/' });
});

angularApp.controller('mainController', ['$scope', function ($scope) {
    
}]);