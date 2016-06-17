var app = angular.module('isfbApp', []);

app.controller('MainController', [function() {
	var self= this;

	self.names = ['lazy wanker', 'unmotivated lotus eater', 'more or less, a lifeless waste of space'];

	self.ideas = [
		{idea:"paint fucking Parisian rain scenes by number", product:"It's on a fucking canvas", productLink: "http://amzn.to/21prrRL"}, 
		{idea:"send your friend a fucking postcard. (If you even have friends, you boring-ass loser)", product:"Look, you can even do it from your computer.", productLink: "http://www.cardsinthepost.com/postcard#welcome"}, 
		{idea:"do a puzzle, maybe even a fucking puzzle within a puzzle", product:"Meta-puzzling, bruh", productLink: "http://amzn.to/23f7RsO"},
		{idea:"do a crossword puzzle.", product:"At least fucking try", productLink: "http://www.nytimes.com/crosswords/index.html?page=home&_r=0"},
		{idea:"meditate and stop fucking thinking about how fucking bored you are", product:"Be fucking enlightened", productLink: "http://marc.ucla.edu/body.cfm?id=22"},
		{idea:"learn to dance", product:"Here's fucking 50 moves to learn", productLink: "https://www.youtube.com/watch?v=dodGzOjBOHA"},
		{idea:"play Mario Kart", product:"It fucking never gets old", productLink: "http://amzn.to/24UR2Tj"},
		{idea:"pretend to be a cat", product:"It's on fucking wiki-how", productLink: "http://www.wikihow.com/Pretend-to-Be-a-Cat"},
		{idea:"adopt a pet because you obviously need some fucking friends", product:"Save a fucking animal", productLink: "http://adoptapet.com"},
		{idea:"make something sweet with a fucking Rasberry Pi", product:"Possibilities are fucking endless", productLink: "http://amzn.to/1YvP7oe"},
		{idea:"play Mario Kart", product:"It fucking never gets old", productLink: "http://amzn.to/24UR2Tj"},
		{idea:"play Mario Kart", product:"It fucking never gets old", productLink: "http://amzn.to/24UR2Tj"},
		{idea:"read Ready Player One", product:"Most un-boring book. Fucking ever.", productLink: "http://amzn.to/21pt3L7"}];


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