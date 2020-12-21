//const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.render("login");
  });

  app.get("/home", (req, res) => {
    res.render("home");
  });

  app.get("/battle", (req, res) => {
    res.render("battle");
  });

  app.get("/character-select", (req, res) => {
    db.Character.findAll({}).then(result => {
      const characters = JSON.parse(JSON.stringify(result));
      res.render("character-select", { characters });
    });
  });
};
