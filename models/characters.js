function Character(name, hp, atk, def, magAtk, magDef) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.magAtk = magAtk;
  this.magDef = magDef;
}

const physAtk = "Physical";
const physAtkDmg = 100;
const magAtk = "Magical";
const magAtkDmg = 100;

//have a button that gives params for a new character to replace the name property so that two of the same types of characters can be differentiated by the program
//i.e. if both players pick mage, both players will take damage everytime they attack eachother.
const warrior = new Character("Warrior", 130, 130, 100, 60, 80);
const mage = new Character("Mage", 100, 50, 80, 150, 120);
const tank = new Character("Tank", 150, 50, 130, 40, 130);
const cannon = new Character("Cannon", 60, 150, 70, 150, 70);
const wall = new Character("Wall", 200, 90, 70, 70, 70);
const jack = new Character("Jack", 100, 100, 100, 100, 100);

let modifier;

Character.prototype.attack = function(enemy) {
  const atkType = document.getElementById("#atkType");
  function modifierRoll() {
    const randNum = Math.floor(Math.random() * 11);
    if (randNum === 0 || randNum === 1) {
      modifier = 0;
    } else if (randNum > 1 && randNum < 10) {
      modifier = 1;
    } else {
      modifier = 1.5;
    }
  }
  switch (atkType) {
    case physAtk:
      modifierRoll();
      const dmgOutput1 = ((physAtkDmg * this.atk) / enemy.def / 5 + 2) * modifier;
      enemy.hp -= dmgOutput1;
      if (enemy.hp < 0) {
        enemy.hp = 0;
      }
      enemy.isAlive();
      break;
    case magAtk:
      modifierRoll();
      const dmgOutput2 = ((magAtkDmg * this.magAtk) / enemy.magDef / 5 + 2) * modifier;
      enemy.hp -= dmgOutput2;
      if (enemy.hp < 0) {
        enemy.hp = 0;
      }
      enemy.isAlive();
  }
};

function compPick() = 

warrior.attack(mage);
mage.attack(warrior);

//  RUN THE FUNCTION charact(CHARACTER NAME) in the button on html
// function chooseCharact(charact) {
//   const Char1 = new Character(
//     charact.hp,
//     charact.atk,
//     charact.def,
//     charact.magAtk,
//     charact.magDef
//   );
// }

// async function turn() {
//   const coinFlip = Math.floor(Math.random() * 1);
//   if (coinFlip === 0) {
//     char1.attack(char2);
//     console.log(dmg);
//     console.log(char2.hp);
//     return char2.hp;
//   }
//   char2.attack(char1);
//   console.log(dmg);
//   console.log(char1.hp);
//   return char1.hp;
// }
Character.prototype.isAlive = function() {
  if (this.hp > 0) {
    return true;
  }
};
module.exports = { warrior, mage, tank, cannon, wall, jack };
