;
(function() {
  'use strict';
  
  angular
  .module('gpApp')
  .service('messagesService', ['$http', '$q', function($http, $q) {
    var baseURL = 'messages/messages.json';

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
      messagesData = response.data.messages;
      return messagesData;
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }

  }]);
})();