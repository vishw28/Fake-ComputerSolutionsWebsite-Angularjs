(function () {
    'use strict';
    
    angular.module('app')
        .controller('ServiceController',ServiceController);

    ServiceController.$inject = ['$http']
    
        function ServiceController($http) {
            var sc = this;
            $http.get('service.json').then(function (response) {
               console.log(response.data);

                sc.services = response.data;

                console.log(sc.services);
            });
        }
})();