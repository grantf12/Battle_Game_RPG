const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/home", isAuthenticated, (req, res) => {
    res.render("home");
  });

  app.get("/battle", isAuthenticated, (req, res) => {
    res.render("battle");
  });
  // app.get("/members", isAuthenticated, (req, res) => {
  //   console.log(req.user);
  //   res.render("members-info", req.user);
  // });

  // app.get("/battle", isAuthenticated, (req, res) => {
  //   console.log(req.user);
  //   res.render("battle-info", req.user);
  // });
};
