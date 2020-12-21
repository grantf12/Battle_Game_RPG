const db = require("../models");
const { Op } = require("sequelize");
const passport = require("../config/passport");

module.exports = function (app, selectedCharacter) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // app.get("/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        if: req.user.id
      });
    }
  });
<<<<<<< HEAD
  app.post("/api/select/character/:name", (req, res) => {
    db.Character.findOne({ where: { name: req.params.name } }).then(playable => {
        db.Character.findAll({
          where: { [Op.not]: [{ name: req.params.name }] }
        }).then(restOfCharacters => {
          selectedCharacter[0] = playable;
          selectedCharacter[1] = restOfCharacters;
          console.log(selectedCharacter);
      })
=======

  app.get("/api/characters/:name?", (req, res) => {
    if (req.params.name) {
      db.Character.findOne({
        where: {
          name: req.params.name
        }
      }).then(function(dbName) {
        res.json(dbName);
      });
    } else {
      db.Character.findAll().then(function(data) {
        return res.json(data);
      });
    }
  });

  app.post("/api/select/character/:id", (req, res) => {
    db.Character.findOne({ where: { id: req.params.id } }).then(result => {
      selectedCharacter[0] = result;
      console.log(selectedCharacter);
>>>>>>> d1a6e8ca124746b10ae3f444500fa53b998181d6
    });
  });
};
