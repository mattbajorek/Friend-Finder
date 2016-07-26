var express = require('express');
var router = express.Router();
var path = require('path');
var jsonfile = require('jsonfile');
var file = './app/data/friends.js';

// Show all friends
router.get('/api/friends', function(req, res) {
	res.json(jsonfile.readFileSync(file));
})

// Get friend post req
router.post('/api/friends', function(req, res){
	var friends = jsonfile.readFileSync(file);
	friends.push(req.body);
	jsonfile.writeFileSync(file, friends, {spaces: 2});
})

module.exports = router;