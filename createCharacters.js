const db = require("./models");

function Character(name, hp, atk, def, magAtk, magDef) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.magAtk = magAtk;
  this.magDef = magDef;
}

//Player Characters
const warrior = new Character("Warrior", 130, 130, 100, 60, 80);
const mage = new Character("Mage", 100, 50, 80, 150, 120);
const tank = new Character("Tank", 150, 50, 130, 40, 130);
const cannon = new Character("Cannon", 60, 150, 70, 150, 70);
const wall = new Character("Wall", 200, 90, 70, 70, 70);
const jack = new Character("Jack", 100, 100, 100, 100, 100);

const charArray = [warrior, mage, tank, cannon, wall, jack];

db.Character.sync();

db.Character.bulkCreate(charArray).then(results => {
  console.log(results);
  process.exit();
});
