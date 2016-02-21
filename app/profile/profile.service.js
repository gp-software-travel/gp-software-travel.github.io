;
(function() {
  angular
    .module('gpApp')
    .service('profileService', ['$http', function($http) {
      var baseURL = 'http://fathomless-everglades-3680.herokuapp.com/api/user/2';

        var userData;
        var allCallback = [];

      this.getUser = function(callback) {

        if (userData) {
          console.log('Get cached user data');
          callback(userData);
        }
        else {
          allCallback.push(callback);
          if(allCallback.length == 1){
            console.log('Send new request for user data');
            $http.get(baseURL).then(successCallbackGet, errorCallback);
          }
        }
      };

      function successCallbackGet(response) {
        userData = response.data;
        allCallback.map(function(callback){
          callback(userData);
        });
        allCallback = [];
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

      this.setUser = function(data) {
        return $http.post(baseURL, data);
      };
    }]);
})();