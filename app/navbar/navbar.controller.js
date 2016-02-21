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

    profileService.getUser(successCallbackGet);

    function successCallbackGet(response) {
      vm.user = response;
      console.log('NavBar: successCallbackGet:', vm.user);
    }

  }

})();