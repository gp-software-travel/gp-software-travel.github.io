;
(function() {
  'use strict';

  angular
    .module('gpApp')
    .service('loginService', function($http, $q, $rootScope, $state, $window) {
      console.log('RootScope: ', $rootScope);
      this.checkExpired = function() {
        console.log('check expired');
        if (sessionStorage.token && (new Date()) > sessionStorage.expTime) {
          delete sessionStorage.token;
          $state.go('login', {});
        }
      };
    // $state.go('login', {});
    });

    /* .factory('authInterceptor', function ($rootScope, $q, $window) {
       return {
         request: function (config) {
           config.headers = config.headers || {};
           if ($window.sessionStorage.token) {
             config.headers['X-Auth'] = 'Bearer ' + $window.sessionStorage.token;
           }
           return config;
         },
         responseError: function (rejection) {
           if (rejection.status === 401) {
             // handle the case where the user is not authenticated
           }
           return $q.reject(rejection);
         }
       };
     })

     .config(function ($httpProvider) {
       $httpProvider.interceptors.push('authInterceptor');
     });*/

})();