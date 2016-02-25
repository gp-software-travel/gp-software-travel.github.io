;
(function() {
  'use strict';

  angular
    .module('gpApp')
    .controller('historyController', historyController);

  function historyController($scope, $state, historyService) {

    var vm = this;
    var sortDirection = 1;

    vm.orderIcon = 'sentiment_satisfied';
    vm.sortByPrice = sortByPrice;

    historyService.getHistory().then(function(response) {
      vm.historyItems = response;
      console.log('historyItems', vm.historyItems);
    });

    function sortByPrice() {
      sortDirection *= -1;

      vm.orderIcon = (sortDirection == 1) ? 'expand_less' : 'expand_more';

      vm.historyItems = _.sortBy(vm.historyItems, function(obj) {
        return obj.price * sortDirection;
      });

      return vm.historyItems;
    }

  }

})();