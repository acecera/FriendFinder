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
        var userScore = 
    })
};

