;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('historyController', historyController);

  function historyController($scope, $state, historyService) {
<<<<<<< HEAD
    
    var toggleSorting = 1;
    var vm = this;

    vm.sortByPrice = sortByPrice;

    historyService.getHistory().then(function(response) {
      vm.historyItems = response.data;
      console.log('historyItems', vm.historyItems);
    });

    function sortByPrice() {
      toggleSorting *= -1;

      vm.historyItems = _.sortBy(vm.historyItems, function(obj) {
        return obj.price * toggleSorting;
      });
      
      return vm.historyItems;
    }

=======
    var vm = this;

     historyService.getHistory().then(function(response){
      vm.historyItems = response.data;
       console.log('historyItems', vm.historyItems);
    });

>>>>>>> 943fabadd19669606c70f76140dd9c20ec38817f
  }

})();