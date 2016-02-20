;
(function() {
  angular
    .module('gpApp')
    .service('historyService', ['$http', '$q', function($http, $q) {
      var baseURL = 'http://localhost:3000/history';

<<<<<<< HEAD
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
        historyData = response;
        return historyData;
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }


    }]);
})();
=======
          var historyData;

          this.getHistory = function(){
              if (historyData) {
                  console.log('Get cached history data');
                  return $q.when(historyData)
              } else {
                  console.log('Send new request for history data');
                  return $http.get(baseURL).then(successCallbackGet, errorCallback);
              }
          };

          function successCallbackGet(response){
              historyData = response;
              return historyData;
          }

          function errorCallback (response){
              return "Error: " + response.status + " " + response.statusText;
          }


    }]);
})();
>>>>>>> 943fabadd19669606c70f76140dd9c20ec38817f
