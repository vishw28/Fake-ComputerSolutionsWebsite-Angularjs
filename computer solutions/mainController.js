(function () {
    'use strict';

    angular.module('app')
        .controller('MainController',MainController);

    function MainController() {
        this.person = 'Vishw Vajaria';

        console.log(this.person);
    }
})();