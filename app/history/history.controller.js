;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('historyController', historyController);

  function historyController($scope, $state, historyService) {
    var vm = this;

     historyService.getHistory().then(function(response){
      vm.historyItems = response.data;
       console.log('historyItems', vm.historyItems);
    });

  }

})();