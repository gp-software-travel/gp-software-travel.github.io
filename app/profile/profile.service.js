;
(function() {
  angular
    .module('gpApp')
    .service('profileService', ['$http', '$q', function($http, $q) {

      var baseURL = 'http://fathomless-everglades-3680.herokuapp.com/api/user/2';
      var promise;

      this.getUser = function() {
        if(!promise) {
          console.log('new p');
          promise = $http({
            url: baseURL,
            skipAuthorization: true,
            method: 'GET'
          })
              .then(successCallbackGet, errorCallback);
        } else {
          console.log('cached p', promise);
        }
        return promise;
      };

      function successCallbackGet(response) {
        return response.data;
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

      this.setUser = function(data) {
        return $http.post(baseURL, data);
      };
    }]);
})();