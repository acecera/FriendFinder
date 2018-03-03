const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/apiRoutes.js')(app);
require('./app/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});