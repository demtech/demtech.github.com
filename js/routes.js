var mainApp = angular.module('mainApp', [
    'ngRoute',
    'mainModule'
]);

mainApp.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
            /* MAIN PAGES */
            when('/', {
                templateUrl:'partials/frontpage.html',
                resolve: {
                    func: function() {
                        !function(d,s,id){
                            var js, fjs=d.getElementsByTagName(s)[0], p=/^http:/.test(d.location)?'http':'https';
                            if(!d.getElementById(id)) { 
                                js = d.createElement(s);
                                js.id = id;
                                js.src = p+"://platform.twitter.com/widgets.js";
                                fjs.parentNode.insertBefore(js,fjs);
                            }
                        }(document,"script","twitter-wjs");
                    }
                }
            }).
            when('/about', {
                templateUrl:'partials/about.html'
            }).
            when('/people', {
                templateUrl:'partials/people.html'
            }).
            when('/contact', {
                templateUrl:'partials/contact.html'
            }).


            /* STAKEHOLDERS */
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