var app = angular.module('isfbApp', []);

app.controller('MainController', [function() {
	var self= this;
	self.name = "wanker";
	self.idea = "do something";
	console.log(self.name);

	self.clickRecord = function() {
		self.clicked = !self.clicked;
		console.log(self.clicked);
	}
}]);