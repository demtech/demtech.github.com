var pageController = angular.module('pageController', []);

pageController.controller('PageController', ['$scope', '$http',
    function PageController($scope, $http) {

    }
]);

pageController.controller('NavController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
