var mainModule = angular.module('mainModule', []);

mainModule.controller('PageController', ['$scope', '$http',
    function PageController($scope, $http) {
    }
]);

mainModule.controller('NavController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
