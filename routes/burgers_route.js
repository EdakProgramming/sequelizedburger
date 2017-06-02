var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burgers.findAll({ }).then(function(burgerData) {
            res.json(burgerData);
        });
    });

    app.post("/", function(req,res) {
        db.Burgers.create({burger_name: req.body.burger_name}).then(function(newBurger) {
            res.json(newBurger);
        });
    });

    app.get("/:id", function(req, res) {
        db.Burgers.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(devoured) {
            res.json(devoured);
        });
    });

};

                    