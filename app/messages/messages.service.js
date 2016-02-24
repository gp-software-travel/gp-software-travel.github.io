;
(function() {
  'use strict';
  
  angular
  .module('gpApp')
  .service('messagesService', ['$http', '$q', function($http, $q) {
<<<<<<< HEAD
    var baseURL = 'messages/messages.json';
=======
    var baseURL = 'http://localhost:3000/messages';
>>>>>>> b1564425568eefeef29c2b96074517b576770502

    var messagesData;

    this.getMessages = function() {
      if (messagesData) {
        console.log('Get cached messages data');
        return $q.when(messagesData);
      } else {
        console.log('Send new request for messages data');
        return $http.get(baseURL).then(successCallbackGet, errorCallback);
      }
    };

    function successCallbackGet(response) {
<<<<<<< HEAD
      messagesData = response.data.messages;
=======
      messagesData = response.data;
>>>>>>> b1564425568eefeef29c2b96074517b576770502
      return messagesData;
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }

  }]);
})();