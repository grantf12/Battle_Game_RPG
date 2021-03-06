const db = require("../models");
const passport = require("../config/passport");
const Op = require("sequelize");
const character = require("../models/character");

module.exports = function(app, selectedCharacter) {
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

  app.post("/api/character-select/:id", (req, res) => {
    db.Character.findByPk(req.params.id).then(playable => {
      db.Character.findAll({}).then(restOfCharacters => {
        restOfCharacters = JSON.parse(JSON.stringify(restOfCharacters));
        const filteredList = restOfCharacters.filter(
          character => character.id !== parseInt(req.params.id)
        );
        selectedCharacter[0] = JSON.parse(JSON.stringify(playable));
        selectedCharacter[1] =
          filteredList[Math.floor(Math.random() * filteredList.length)];
        return res.sendStatus(200);
      });
    });
  });
  app.post("/api/attack", async (req, res) => {
    const enemy = await db.Character.findByPk(selectedCharacter[1].id);
    const character = await db.Character.findByPk(selectedCharacter[0].id);
    const enemyInfo = await character.attack(enemy, req.body.attack);
    console.log(enemyInfo, `${character.name} attacked ${enemy.name}`);
    await enemy.save();
    const atkArray = ["physAtk", "magAtk"];
    const randomAtk = atkArray[Math.floor(Math.random() * atkArray.length)];
    const characterInfo = await enemy.attack(character, randomAtk);
    console.log(characterInfo, `${enemy.name} attacked ${character.name}`);
    await character.save();
    return res.send({ enemyInfo, characterInfo });
  });
};
