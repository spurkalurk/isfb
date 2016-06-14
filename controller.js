var app = angular.module('isfbApp', []);

app.controller('MainController', [function() {
	var self= this;

	self.names = ['wanker1', 'wanker2', 'wanker3'];

	self.ideas = [{idea:"do something1", product:"thing1", productLink: "http://google.com"}, {idea:"do something2", product:"thing2", productLink: "http://google.com"}, {idea:"do something3", product:"thing3", productLink: "http://google.com"}];


	self.clickRecord = function() {
		self.clicked = !self.clicked;
	};

	self.randomizer = function() {
		self.name = self.names[Math.floor(Math.random()*self.names.length)];
		self.ideasNumber = Math.floor(Math.random()*self.ideas.length);
		self.idea = self.ideas[self.ideasNumber].idea;
		self.product = self.ideas[self.ideasNumber].product;
		self.productLink = self.ideas[self.ideasNumber].productLink;
	};


}]);