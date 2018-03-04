const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        console.log("Reading API");
        res.json(friends)
    })
    
    app.post("/api/friends", function(req, res) {
        var friends = req.body;
        var Score = friends.score;
        var userScore = [j];
        var bestMatch = 100;

        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < score.length; j++) {
                totalDifference += Math.abs( userScore[j] - friends[i].score[j]);
            }
            if (totalDifference < bestMatch) {
                
            }
        }
        console.log(totalDifference);
        console.log("Best Match: " + friends[i]);
        res.json(friends[i]);
    });
};

