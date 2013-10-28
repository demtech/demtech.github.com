var mainApp = angular.module('mainApp', [
    'ngRoute',
    'pageController'
]);

mainApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
            /* MAIN PAGES */
            when('/', {
                templateUrl:'partials/frontpage.html'
            }).
            when('/about', {
                templateUrl:'partials/about.html'
            }).
            when('/contact', {
                templateUrl:'partials/contact.html'
            }).
            when('/contact', {
                templateUrl:'partials/contact.html'
            }).
            when('/research', {
                templateUrl:'partials/research.html'
            }).


            /* PARTNERS */
            when('/academia', {
                templateUrl:'partials/academia.html'
            }).
            when('/government', {
                templateUrl:'partials/government.html'
            }).
            when('/industry', {
                templateUrl:'partials/industry.html'
            }).
            when('/ngo', {
                templateUrl:'partials/ngo.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);