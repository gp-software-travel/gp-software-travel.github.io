;
(function() {
  angular
    .module('gpApp')
    .service('profileService', ['$http', '$q', function($http, $q) {
      var baseURL = 'http://fathomless-everglades-3680.herokuapp.com/api/user/2';

        var userData;

      this.getUser = function() {
        if (userData) {
          console.log('Get cached user data');
          return $q.when(userData);
        } else {
          console.log('Send new request for user data');
          return $http.get(baseURL).then(successCallbackGet, errorCallback);
        }
      };

      function successCallbackGet(response) {
        userData = response.data;
        return userData;
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

      this.setUser = function(data) {
        return $http.post(baseURL, data);
      };
    }]);
})();