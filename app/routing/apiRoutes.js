const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        console.log("Reading API");
        res.json(friends)
    })
    
    app.post("/api/new", function(req, res) {
        var newFriend = req.body;
        var newScore = newFriend.score;
        var bestMatch = 100;

        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < newScore.length; j++) {
                totalDifference += Math.abs( newScore[j] - friends[i].score[j]);
            }
        }
        console.log(totalDifference);
        console.log("Best Match: " + friends[i]);
        res.json(friends[i]);
    });
};

