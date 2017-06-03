var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burgers.findAll({ }).then(function(burgerData) {
            res.render("index", {burgers: burgerData});
        });
    });

    app.get("/burgers", function(req, res) {
        db.Burgers.findAll({ }).then(function(burgerData) {
            res.render("index", {burgers: burgerData});
        });
    });

    app.post("/burgers/create", function(req,res) {
        db.Burgers.create({burger_name: req.body.burger_name}).then(function(newBurger) {
            res.redirect("/burgers");
        });
    });

    app.put("/burgers/update", function(req, res) {
        db.Burgers.update({
            devoured: true},
            {where: { id: req.body.burger_id }
        }).then(function() {
            res.redirect("/burgers");
        });
    });

};

                    