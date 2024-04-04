angular.module('angularApp').controller('ClientesController', ['$scope', '$http', function($scope, $http) {
    $scope.clientes = [];
    $http.get('http://localhost:3000/clientes')
      .then(function(response) {
        $scope.clientes = response.data;
      })
      .catch(function(error) {
        console.error('Error al obtener clientes:', error);
      });
  }]);

