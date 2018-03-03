app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/api/friends.js"));
});

app.post("/", function(req, res) {
    var friends = req.body.friends;
    console.log(req.body);
    res.json(friends);
})