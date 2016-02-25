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
    })


  function loginController($scope, $http, $window, $state, $rootScope) {

    var vm = this;
    $scope.user = {username: 'admin', password: '123'};
    vm.loggedUser = { username: '', password: ''};
    vm.isAuthenticated = false;

      var date = new Date();

      //checkTokenExists();
      function checkTokenExists(){
          if($window.sessionStorage.token){
              console.log('Token exists');
              $state.go('profile', {});
          }
      }

    //createUser();
    function createUser() {
      $http.post('http://localhost:3001/sessions/create', $scope.user).then(
          function (response) {
            $scope.token = response.data.id_token;
            console.log('SERVER TOKEN', $scope.token)
            return $scope.token;
          }
      )
    }

    //checkT();
    function checkT() {
      $http.get('http://localhost:3001/api/random-quote').then(
          function (response) {
            console.log('NO TOKEN', response)
          }
      );
      $http.get('http://localhost:3001/api/protected/random-quote').then(
          function (response) {
            console.log('USE TOKEN', response)
          }
      )
    }

    $scope.submit = function () {
      $http

        //.get('http://localhost:3000/login?password=123&login=admin')
          .post('http://localhost:3001/sessions/create', vm.loggedUser)
        .success(function (data) {

            $window.sessionStorage.token = data.id_token;
            console.log('TOKEN', $window.sessionStorage.token);
              $window.sessionStorage.expTime =  date.setSeconds(date.getSeconds() + 60);
              console.log('se time', $window.sessionStorage.expTime);

            vm.isAuthenticated = true;
            $state.go('profile', {});
        })
        .error(function (data) {
          // Erase the token if the user fails to log in
            delete $window.sessionStorage.token;
            vm.isAuthenticated = false;

          // Handle login errors here
            vm.error = 'Error: Invalid user or password';

        });
    }
    }

})();