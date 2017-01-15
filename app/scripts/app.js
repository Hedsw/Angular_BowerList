'use strict';

/**
 * @ngdoc overview
 * @name angularRouteApp
 * @description
 * # angularRouteApp
 *
 * Main module of the application.
 */
angular
  .module('angularRouteApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movie', {
        templateUrl: 'views/singlemovie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
