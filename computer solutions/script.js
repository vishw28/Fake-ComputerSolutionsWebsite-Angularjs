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
                .otherwise({redirectTo:'/main'});
    }
})();