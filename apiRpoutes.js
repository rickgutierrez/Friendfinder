var friendData = require("../friends");

module.exports = function (app){

	
	app.get("/api/friends", function (req, res){
		res.json(friendData);
	});

	
	app.post("/api/friend", function(req, res){
		var newFriend = req.body;
		var match;
		var matchF = 0;
		var val = 0;
		var index;

		for (var i = 0; i < friendData.length; i++) {
			for (var x = 0; i < friendData[i]scores.length; x++) {
			 matched += Math.abs(parseInt(newFriend.scores[i] - parseInt(friendData[i].score)));
			}
		}

		friendData.push(req.body);
		res.json(friendData[i])

	});

}