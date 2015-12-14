'use strict';

angular.module('Application.index', [
        'ngRoute'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/index', {
            title: 'Главная страница',
            tmplClass: 'index',
            templateUrl: 'views/index.html',
            controller: 'indexCtrl'
        });
    }])

    .controller('reportsCtrl', function () {

    });