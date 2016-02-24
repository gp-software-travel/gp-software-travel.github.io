;
(function() {
  angular
    .module('gpApp')
    .service('profileService', ['$http', '$q', function($http, $q) {
      var baseURL = 'http://fathomless-everglades-3680.herokuapp.com/api/user/2';

        var userData;
        var allCallback = [];
        var promise;

      this.getUser = function() {
        if(!promise) {
          console.log('new p');
          promise = $http.get(baseURL);
        } else {

          console.log('cached p', promise);
        }
        return promise;


            //return $http.get(baseURL).then(successCallbackGet, errorCallback);

      };

        function requestUserData(){

        }

      function successCallbackGet(response) {
        userData = response.data;
        return userData;
       /* allCallback.map(function(callback){
          callback(userData);
        });
        allCallback = [];*/
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

      this.setUser = function(data) {
        return $http.post(baseURL, data);
      };
    }]);
})();