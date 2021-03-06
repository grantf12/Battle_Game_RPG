module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    magAtk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    magDef: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atkOne: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Physical"
    },
    atkOneDmg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    atkTwo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Magical"
    },
    atkTwoDmg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    }
  });

  Character.prototype.attack = function(enemy, atkType) {
    let remainingHp;
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
      case "physAtk":
        modifierRoll();
        const dmgOutput1 = ((100 * this.atk) / enemy.def / 5 + 2) * modifier;
        remainingHp = enemy.hp - dmgOutput1;
        enemy.hp = remainingHp;
        if (enemy.hp <= 0) {
          enemy.hp = 0;
        }
        //   $("#battle-message").append(`
        // ${this.name} attacked ${enemy} with a Physical Attack for ${dmgOutput1} /n
        // `);
        if (dmgOutput1 === 0) {
          console.log(" Missed!");
        }
        return { hp: remainingHp, dmg: dmgOutput1, alive: enemy.hp > 0 };
      case "magAtk":
        modifierRoll();
        const dmgOutput2 =
          ((100 * this.magAtk) / enemy.magDef / 5 + 2) * modifier;
        remainingHp = enemy.hp - dmgOutput2;
        enemy.hp = remainingHp;
        if (enemy.hp <= 0) {
          enemy.hp = 0;
          //   $("#battle-message").append(`
          // ${this.name} attacked ${enemy} with a Magical Attack for ${dmgOutput2} /n
          // `);
          if (dmgOutput2 === 0) {
            // console.log(`${this.name} Missed!`);
          }
          if (enemy.hp < 0) {
            enemy.hp = 0;
          }
        }
        return { hp: remainingHp, dmg: dmgOutput2, alive: enemy.hp > 0 };
    }
  };
  return Character;
};
