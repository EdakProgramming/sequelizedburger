// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var app = express();
var PORT = process.env.PORT || 3000

// Requiring our models for syncing
var db = require("./models");

// Use Method Override to allow for different commands
app.use(methodOverride('_method'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content from "Public" folder
app.use(express.static("./public"));

// Instructions for handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burgers_route.js")(app);

db.sequelize.sync({ force: false}).then(function() {
	app.listen(PORT, function() {
	    console.log("Rocking on port:%s", PORT);
	});
});

