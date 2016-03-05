/**
 * Created by k_zenchyk on 2/17/16.
 */
;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('loginController', loginController)

    .config(function Config($httpProvider, jwtInterceptorProvider) {
      // Please note we're annotating the function so that the $injector works when the file is minified
      jwtInterceptorProvider.tokenGetter = ['loginService', function(loginService) {
        loginService.checkExpired();
        return window.sessionStorage.token;
      }];
      $httpProvider.interceptors.push('jwtInterceptor');
    });


  function loginController($scope, $http, $window, $state, $rootScope) {

    var vm = this;
    $scope.user = {
      username: 'admin',
      password: '123'
    };
    vm.loggedUser = {
      username: '',
      password: ''
    };
    vm.isAuthenticated = false;

    var date = new Date();

    //checkTokenExists();
    function checkTokenExists() {
      if ($window.sessionStorage.token) {
        console.log('Token exists');
        $state.go('profile', {});
      }
    }

    $scope.submit = function() {
      $http

        .get('http://fathomless-everglades-3680.herokuapp.com/api/login?password='
          + vm.loggedUser.password + '&login=' + vm.loggedUser.username)
        //.post('http://localhost:3001/sessions/create', vm.loggedUser)
        .success(function(data) {
          if (data.success == false) {
            vm.isAuthenticated = false;
            vm.error = 'Error: Invalid user or password';
          } else {

            $window.sessionStorage.token = data.id_token;
            console.log('TOKEN', $window.sessionStorage.token);
            $window.sessionStorage.expTime = date.setSeconds(date.getSeconds() + 60);
            console.log('se time', $window.sessionStorage.expTime);

            vm.isAuthenticated = true;
            $state.go('profile', {});
          }
        })
        .error(function(data) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;
          vm.isAuthenticated = false;

          // Handle login errors here
          vm.error = 'Error: Invalid user or password';

        });
    }
  }

})();