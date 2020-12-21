/* eslint-disable prettier/prettier */

//on button click, run coin flip to determine which character moves first.
//then run a.attack(b) and check isAlive();
//if alive, run b.attack(a) and check isAlive();
//if both are alive, end the fuction to wait for next button click;
//if one is dead, display appropriate end message (i.e. You Win or You Lose);
$(document).ready() {
  function turn(atkType) {
    console.log("Kachow");
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 0) {
      character1.attack(character2, atkType);
      //display the messages set to console.log in the atk function in the message space.
      if (character2.hp === 0) {
        endGame();
      }
      character2.attack(character1, atkType);
      //display the messages set to console.log in the atk function in the message space.
      if (character1.hp === 0) {
        endGame();
      }
    } else {
      character2.attack(character1, atkType);
      //display the messages set to console.log in the atk function in the message space.
      if (character1.hp === 0) {
        endGame();
      }
      character1.attack(character2, atkType);
      //display the messages set to console.log in the atk function in the message space.
      if (character2.hp === 0) {
        endGame();
      }
    }
    return;
  }
  $("#physical-button").on("click", turn(physAtk))
}




function endGame() {
  User.score += 1;
  //if statement that displays whether you won or lost in the modal text area
}