'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ui.router',
    'LocalStorageModule',
    'ngSanitize',
    // ^ vendors
    'home'
])

    .config(($urlRouterProvider, $locationProvider) => {
        $urlRouterProvider.otherwise('/404');

        $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .run(($rootScope, $state, $stateParams) => {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
            $rootScope.title = toState.data.title;
            $rootScope.tmplClass = toState.data.tmplClass;
        });
    })

    .controller('GlobalController', ($scope) => {

    });
