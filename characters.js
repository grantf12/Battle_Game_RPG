const Character = require("./models/character");

const Character = require("Character");

const Warrior = Character.create({
  name: "Warrior",
  hp: 130,
  atk: 130,
  def: 100,
  magAtk: 60,
  magDef: 80,
  atkOne: "Physical",
  atkOneDmg: 100,
  atkTwo: "Magical",
  atkTwoDmg: 100,
});

const Mage = Character.create({
  name: "Mage",
  hp: 100,
  atk: 50,
  def: 80,
  magAtk: 150,
  magDef: 120,
  atkOne: "Physical",
  atkOneDmg: 100,
  atkTwo: "Magical",
  atkTwoDmg: 100,
});

const Tank = Character.create({
  name: "Tank",
  hp: 150,
  atk: 50,
  def: 130,
  magAtk: 40,
  magDef: 130,
  atkOne: "Physical",
  atkOneDmg: 100,
  atkTwo: "Magical",
  atkTwoDmg: 100,
});

const Cannon = Character.create({
  name: "Cannon",
  hp: 60,
  atk: 150,
  def: 70,
  magAtk: 150,
  magDef: 70,
  atkOne: "Physical",
  atkOneDmg: 100,
  atkTwo: "Magical",
  atkTwoDmg: 100,
});

const Wall = Character.create({
  name: "Wall",
  hp: 200,
  atk: 90,
  def: 70,
  magAtk: 70,
  magDef: 70,
  atkOne: "Physical",
  atkOneDmg: 100,
  atkTwo: "Magical",
  atkTwoDmg: 100,
});

const Jack = Character.create({
  name: "Jack",
  hp: 100,
  atk: 100,
  def: 100,
  magAtk: 100,
  magDef: 100,
  atkOne: "Physical",
  atkOneDmg: 100,
  atkTwo: "Magical",
  atkTwoDmg: 100,
});

module.exports = { Warrior, Mage, Tank, Cannon, Wall, Jack };
