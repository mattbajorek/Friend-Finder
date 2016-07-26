// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes');
var apiRoutes = require('./app/routing/api-routes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set up static components
app.use('/', express.static(__dirname + '/app/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Star Wars Characters (DATA)
// =============================================================
var characters = [

	{
		routeName: "yoda",
		name: "Yoda",
		role: "Jedi Master",
		age: 900,
		forcePoints: 2000		
	},

	{
		routeName: "darthmaul",
		name: "Darth Maul",
		role: "Sith Lord",
		age: 200,
		forcePoints: 1200		
	},

	{
		routeName: "obiwankenobi",
		name: "Obi Wan Kenobi",
		role: "Jedi Master",
		age: 55,
		forcePoints: 1350
	}
]

// Routes
// =============================================================

// Router that sends user to html routes
app.use('/', htmlRoutes);

// Router that sends user to api route
app.use('/', apiRoutes);

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})