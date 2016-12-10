(function () {
    'use strict';
    
    angular.module('app')
        .controller('ContactController',ContactController);
    
        function ContactController($http) {
            $http.get('location.json').then(function (response) {
                console.log(response.data);


            })
        }
})();