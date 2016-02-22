;
(function() {
	'use strict';

	angular
	.module('gpApp')
	.controller('messagesController', messagesController);

	function messagesController($scope, $state, messagesService) {

		var vm = this;

		messagesService.getMessages().then(function(response) {
			vm.messagesItems = response;
			console.log('messagesItems', vm.messagesItems);
		});
		$('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

	}

})();