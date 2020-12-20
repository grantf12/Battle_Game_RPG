//const isAuthenticated = require("../config/middleware/isAuthenticated");

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
    res.render("character-select");
  });
};
