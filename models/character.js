module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "playable"
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
    // let atkType = document.getElementById("#atkType");
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
          ((this.physAtkDmg * this.atk) / enemy.def / 5 + 2) * modifier;
        enemy.hp -= dmgOutput1;
        if (enemy.hp < 0) {
          enemy.hp = 0;
        }
        break;
      case magAtk:
        modifierRoll();
        const dmgOutput2 =
          ((this.magAtkDmg * this.magAtk) / enemy.magDef / 5 + 2) * modifier;
        enemy.hp -= dmgOutput2;
        if (enemy.hp < 0) {
          enemy.hp = 0;
        }
    }
  };
  return Character;
};
