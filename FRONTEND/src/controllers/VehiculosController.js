angular.module('angularApp').controller('VehiculosController', ['$scope', '$http', function($scope, $http) {
    $scope.clientes = [];
    $http.get('http://localhost:3000/vehiculos')
      .then(function(response) {
        $scope.clientes = response.data;
      })
      .catch(function(error) {
        console.error('Error al obtener clientes:', error);
      });
  }]);

