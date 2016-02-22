;
(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('historyController', historyController);

  function historyController($scope, $state, historyService) {
    
    var toggleSorting = 1;
    var vm = this;
    vm.orderIcon = 'sentiment_satisfied';

    vm.sortByPrice = sortByPrice;

    historyService.getHistory().then(function(response) {
      vm.historyItems = response;
      console.log('historyItems', vm.historyItems);
    });

    function sortByPrice() {
      toggleSorting *= -1;

      if(toggleSorting == 1){
        vm.orderIcon = 'expand_less';
      } else {
        vm.orderIcon = 'expand_more';
      }

      vm.historyItems = _.sortBy(vm.historyItems, function(obj) {
        return obj.price * toggleSorting;
      });
      
      return vm.historyItems;
    }

  }

})();