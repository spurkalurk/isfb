var app = angular.module('isfbApp', []);

app.controller('MainController', [function() {
	var self= this;

	self.names = ['lazy wanker', 'unmotivated lotus eater', 'lifeless waste of space', 'lump of loser', 'couch-melded limp noodle of a man'];

	self.ideas = [
		{idea:"paint fucking Parisian rain scenes by number", product:"It's on a fucking canvas", productLink: "http://amzn.to/21prrRL"}, 
		{idea:"send your friend a fucking postcard. (If you even have friends)", product:"Look, you can even do it from your computer", productLink: "http://www.cardsinthepost.com/postcard#welcome"}, 
		{idea:"do a puzzle, maybe even a fucking puzzle within a puzzle", product:"Meta-puzzling, bruh", productLink: "http://amzn.to/23f7RsO"},
		{idea:"do a crossword puzzle.", product:"At least fucking try", productLink: "http://www.nytimes.com/crosswords/index.html?page=home&_r=0"},
		{idea:"meditate and stop fucking thinking about how fucking bored you are", product:"Be fucking enlightened", productLink: "http://marc.ucla.edu/body.cfm?id=22"},
		{idea:"learn to dance", product:"Here's fucking 50 moves to learn", productLink: "https://www.youtube.com/watch?v=dodGzOjBOHA"},
		{idea:"play Mario Kart", product:"It fucking never gets old", productLink: "http://amzn.to/24UR2Tj"},
		{idea:"pretend to be a cat", product:"It's on fucking wiki-how", productLink: "http://www.wikihow.com/Pretend-to-Be-a-Cat"},
		{idea:"adopt a pet because you obviously need some fucking friends", product:"Save a fucking animal", productLink: "http://adoptapet.com"},
		{idea:"make something sweet with a fucking Rasberry Pi", product:"Possibilities are fucking endless", productLink: "http://amzn.to/1YvP7oe"},
		{idea:"make really good pie", product:"Like really fucking good", productLink: "http://amzn.to/1rsSn6D"},
		{idea:"learn JavaScript. Then you can make useful sites like this one", product:"Write some fucking functions", productLink: "https://www.codecademy.com/learn/javascript"},
		{idea:"volunteer somewhere & fucking help with some shit", product:"It even benefits you", productLink: "http://www.forbes.com/sites/nextavenue/2015/03/19/5-surprising-benefits-of-volunteering/#696351bd7c76"},
		{idea:"fix your muscles with a tennis ball", product:"Feels pretty fucking awesome", productLink: "http://amzn.to/24UUwFv"},
		{idea:"cook some weird shit", product:"Like chocolate spaghetti", productLink: "http://amzn.to/1rsT2VE"},
		{idea:"go for a run", product:"Fucking endorphins", productLink: "https://runkeeper.com/"},
		{idea:"play Zork", product:"Adventure without moving. And without pictures", productLink: "http://www.web-adventures.org/cgi-bin/webfrotz?s=ZorkDungeon"},
		{idea:"read pretentious online articles", product:"Impress your fucking mom", productLink: "http://www.aldaily.com/"},
		{idea:"doodle while gaining mindfulness. Or something", product:"It's fucking multitasking", productLink: "http://amzn.to/1YvToYH"},
		{idea:"touch your feet to analyze your health", product:"It's always good to know if your fucking spleen is failing", productLink: "http://amzn.to/1YvUF21"},
        {idea:"get yourself an Adult Coloring Book", product:"A fucking stress-relieving trend", productLink:"http://amzn.to/1XsCURV"},
        {idea:"learn to reddit", product:"It's fucking fun", productLink:"https://www.youtube.com/watch?v=g4oljFEvsiI"},
        {idea:"learn Photoshop", product:"You can tell by the fucking pixels", productLink:"https://www.youtube.com/watch?v=OjRqZiAgoHo"},
        {idea:"watch Miyazaki films", product:"He's fucking epic", productLink:"http://amzn.to/1XsCLxS"},
        {idea:"learn HTML and CSS", product:"You can even make it your fucking job", productLink:"https://www.codecademy.com/learn/web"},
        {idea:"learn programming with Python", product:"It's fucking hard on your brain", productLink:"http://learnpythonthehardway.org/book/"},
        {idea:"learn to Invest", product:"Take a fucking random walk down Wall Street", productLink:"http://amzn.to/23fbXRT"},
        {idea:"learn to give you car an Oil Change", product:"Save some fucking money", productLink:"https://www.youtube.com/watch?v=O1hF25Cowv8"},
        {idea:"learn to play Guitar", product:"Step 1: Buy Guitar", productLink:"http://amzn.to/23fbXkP"},
        {idea:"cook something new", product:"Your fucking stomach will thank you", productLink:"http://www.supercook.com/#/recipes"},
        {idea:"watch or broadcast on Twitch", product:"Streaming is kind of fucking fun", productLink:"http://twitch.tv"},
		];


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