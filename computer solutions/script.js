(function(){
    'use strict';

    angular.module('app',['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider

            .when('/main',{
                templateUrl:'main.html',
                controller:'MainController'
            })
            .when('/about',{
                templateUrl:'about.html',
                controller:'MainController'
            })
            .when('/service',{
                templateUrl:'service.html',
                controller:'ServiceController',
                controllerAs:"sc"
            })
            .when('/contact',{
                templateUrl:'contact.html',
                controller:'ContactController'
            })
            .otherwise({redirectTo:'/main'});
    }
})();