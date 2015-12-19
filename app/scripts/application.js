'use strict';

// Declare app level module which depends on views, and components
angular.module('Application', [
        'ngRoute',
        'Application.home'
    ])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(false);
    }])

    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
                $rootScope.tmplClass = current.$$route.tmplClass;
            }
        });
    }])

    .controller('globalController', function () {

    });
