/* eslint-disable prettier/prettier */

//on button click, run coin flip to determine which character moves first.
//then run a.attack(b) and check isAlive();
//if alive, run b.attack(a) and check isAlive();
//if both are alive, end the fuction to wait for next button click;
//if one is dead, display appropriate end message (i.e. You Win or You Lose);

function turn(atkType) {
  let coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 0) {
    char1.attack(compChar, atkType);
    //display the messages set to console.log in the atk function in the message space.
    if (compChar.hp === 0) {
      endGame();
    }
    compChar.attack(char1, atkType);
    //display the messages set to console.log in the atk function in the message space.
    if (char1.hp === 0) {
      endGame();
    }
  } else {
    compChar.attack(char1, atkType);
    //display the messages set to console.log in the atk function in the message space.
    if (char1.hp === 0) {
      endGame();
    }
    char1.attack(compChar, atkType);
    //display the messages set to console.log in the atk function in the message space.
    if (compChar.hp === 0) {
      endGame();
    }
  }
  return;
}

function endGame() {
  User.score += 1;
  //if statement that displays whether you won or lost in the modal text area
}