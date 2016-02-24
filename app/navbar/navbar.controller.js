/**
 * Created by k_zenchyk on 2/17/16.
 */
;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('NavbarController', NavbarController);

  function NavbarController($scope, $state, profileService) {
    var vm = this;

    $('.button-collapse').sideNav({
      closeOnClick: true
    });

    profileService.getUser().then(successCallbackGet, errorCallback);

    function successCallbackGet(response) {
      vm.user = response.data;
      console.log('NavBar: successCallbackGet:', vm.user);
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }


  }

})();