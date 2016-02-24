;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('profileController', profileController);

  function profileController($scope, $state, profileService, $timeout) {
    //console.log('CONTROLLER', arguments);
    //$state.go('profile', {});
    
    var vm = this;

    vm.updateUser = updateUser;
    vm.processingAnimate = false;

    profileService.getUser().then(successCallbackGet, errorCallback);

    function updateUser() {
      vm.processingAnimate = true;
      vm.editForm.$setPristine();
      vm.user.age = parseInt(vm.user.age);

      $timeout(function() {
        vm.processingAnimate = !vm.processingAnimate;
      }, 2000);

      profileService.setUser(vm.user).then(successCallbackPost, errorCallback);

      $('.collapsible-body').hide();
    }

    function successCallbackGet(response) {
      vm.user = response.data;
      console.log('Profile: successCallbackGet:', vm.user);
    }

    function successCallbackPost(response) {
      console.log('Profile: successCallbackPost:', response.data);
      return response.data;
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }

    $('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  }
})();