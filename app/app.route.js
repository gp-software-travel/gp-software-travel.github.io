;
(function() {
  'use strict';

  angular
    .module('gpApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

      .state('login', {
        url: '/',
        views: {
          'navbar': {},
          'content': {
            templateUrl: 'login/login.html',
            controller: 'loginController'
          }
        }
      })

      .state('profile', {
        url: '/profile',
        views: {
          'navbar@': {
            templateUrl: 'navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'nav'
          },
          'content@': {
            templateUrl: 'profile/profile.html',
            controller: 'profileController',
            controllerAs: 'profile'
          }
        }
      })

      .state('history', {
        url: '/history',
        views: {
          'navbar@': {
            templateUrl: 'navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'nav'
          },
          'content@': {
            templateUrl: 'history/history.html',
            controller: 'historyController',
            controllerAs: 'history'
          }
        }
      })

      .state('messages', {
        url: '/messages',
        views: {
          'navbar@': {
            templateUrl: 'navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'nav'
          },
          'content@': {
            templateUrl: 'messages/messages.html',
            controller: 'messagesController',
            controllerAs: 'messages'
          }
        }
      });

      $urlRouterProvider.otherwise("/");
    });

})();