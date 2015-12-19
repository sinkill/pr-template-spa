'use strict';

angular.module('Application.home', [
        'ngRoute'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            title: 'Главная страница',
            tmplClass: 'home',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', function () {

    });