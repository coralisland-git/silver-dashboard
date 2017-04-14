(function () {
    'use strict';

    angular
        .module(
            'app',
            [
                'templates',

                'ngRoute',
                'ngAnimate',
                'ngSanitize',
                'ngMaterial',
                'ngAria',

                'angular-loading-bar',
                'restangular',
                'satellizer',
                'toaster',
                'ui.router',
                'frapontillo.bootstrap-switch',
                'mgcrea.ngStrap',
                'ngTable',
                'ngCsv',
                'daterangepicker',

                'app.services',
                'app.filters',
                'app.components',
                'app.directives',
                'app.pages'
            ]
        )
})();