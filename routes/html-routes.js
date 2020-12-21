const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app, selectedCharacter) {
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

  app.get("/home", isAuthenticated, (req, res) => {
    res.render("home");
  });

  app.get("/battle", (req, res) => {
    console.log(selectedCharacter, "<===");
    res.render("battle", {
      character1: selectedCharacter[0],
      character2: selectedCharacter[1]
    });
  });

  app.get("/character-select", (req, res) => {
    db.Character.findAll({}).then(result => {
      const characters = JSON.parse(JSON.stringify(result));
      res.render("character-select", { characters });
    });
  });
};
