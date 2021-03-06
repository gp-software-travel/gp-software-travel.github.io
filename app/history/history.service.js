;
(function() {
  'use strict';

  angular
    .module('gpApp')
    .service('historyService', ['$http', '$q', function($http, $q) {
      var baseURL = 'history/history.json';

      var historyData;

      this.getHistory = function() {
        if (historyData) {
          console.log('Get cached history data');
          return $q.when(historyData);
        } else {
          console.log('Send new request for history data');
          return $http.get(baseURL).then(successCallbackGet, errorCallback);
        }
      };

      function successCallbackGet(response) {
        historyData = response.data.history;
        return historyData;
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

    }]);
})();