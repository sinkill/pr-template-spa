'use strict';

angular.module('home', [])

    .config(($stateProvider) => {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            data: {
                title: 'Главная страница',
                tmplClass: 'home'
            }
        });
    })

    .controller('HomeController', () => {

    });