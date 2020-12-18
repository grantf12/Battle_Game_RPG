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

// const char2 =

//have a button that gives params for a new character to replace the name property so that two of the same types of characters can be differentiated by the program
//i.e. if both players pick mage, both players will take damage everytime they attack eachother.
const warrior = new Character("Warrior", 130, 130, 100, 60, 80);
const mage = new Character("Mage", 100, 50, 80, 150, 120);
const tank = new Character("Tank", 150, 50, 130, 40, 130);
const cannon = new Character("Cannon", 60, 150, 70, 150, 70);
const wall = new Character("Wall", 200, 90, 70, 70, 70);
const jack = new Character("Jack", 100, 100, 100, 100, 100);

let modifier;

Character.prototype.attack = function(enemy, atkType) {
  // const atkType = document.getElementById("#atkType");
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
      const dmgOutput1 =
        ((physAtkDmg * this.atk) / enemy.def / 5 + 2) * modifier;
      enemy.hp -= dmgOutput1;
      console.log(`
      ${this.name} attacked ${enemy} with a Physical Attack for ${dmgOutput1} /n
      `);
      if (dmgOutput2 === 0) {
        console.log(`${this.name} Missed!`);
      }
      if (enemy.hp < 0) {
        enemy.hp = 0;
      }
      break;
    case magAtk:
      modifierRoll();
      const dmgOutput2 =
        ((magAtkDmg * this.magAtk) / enemy.magDef / 5 + 2) * modifier;
      enemy.hp -= dmgOutput2;
      console.log(`
      ${this.name} attacked ${enemy} with a Magical Attack for ${dmgOutput2} /n
      `);
      if (dmgOutput2 === 0) {
        console.log(`${this.name} Missed!`);
      }
      if (enemy.hp < 0) {
        enemy.hp = 0;
      }
  }
  enemy.isAlive()
};

//  RUN THE FUNCTION charact(warrior) in the button on html
function chooseCharact(charact) {
  const char1 = new Character(
    charact.hp,
    charact.atk,
    charact.def,
    charact.magAtk,
    charact.magDef
  );
}



// const battle = function() {
//   const charType1 = document.getElementById("#charBtn");

//   switch (charType1) {
//     case warrior:
//       char1 = new Character(
//         warrior.hp,
//         warrior.atk,
//         warrior.def,
//         warrior.magAtk,
//         warrior.magDef,
//         warrior.atkOne,
//         warrior.atkOneDmg,
//         warrior.atkTwo,
//         warrior.atkTwoDmg
//       );
//       break;
//     case mage:
//       char1 = new Character(
//         mage.hp,
//         mage.atk,
//         mage.def,
//         mage.magAtk,
//         mage.magDef,
//         mage.atkOne,
//         mage.atkOneDmg,
//         mage.atkTwo,
//         mage.atkTwoDmg
//       );
//       break;
//     case tank:
//       char1 = new Character(
//         tank.hp,
//         tank.atk,
//         tank.def,
//         tank.magAtk,
//         tank.magDef,
//         tank.atkOne,
//         tank.atkOneDmg,
//         tank.atkTwo,
//         tank.atkTwoDmg
//       );
//       break;
//     case cannon:
//       char1 = new Character(
//         cannon.hp,
//         cannon.atk,
//         cannon.def,
//         cannon.magAtk,
//         cannon.magDef,
//         cannon.atkOne,
//         cannon.atkOneDmg,
//         cannon.atkTwo,
//         cannon.atkTwoDmg
//       );
//       break;
//     case wall:
//       char1 = new Character(
//         wall.hp,
//         wall.atk,
//         wall.def,
//         wall.magAtk,
//         wall.magDef,
//         wall.atkOne,
//         wall.atkOneDmg,
//         wall.atkTwo,
//         wall.atkTwoDmg
//       );
//       break;
//     case jack:
//       char1 = new Character(
//         jack.hp,
//         jack.atk,
//         jack.def,
//         jack.magAtk,
//         jack.magDef,
//         jack.atkOne,
//         jack.atkOneDmg,
//         jack.atkTwo,
//         jack.atkTwoDmg
//       );
//       break;
//   }
// };

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

// module.exports = {};
