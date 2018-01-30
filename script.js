
var character = {
    name: " ",
    health: 40,
    healsRemaining: 2,
    wins: 0,
    generateAttackDamage: function () {
      return Math.floor(Math.random() * 5 + 1);
    },
    heal: function () {
      if (this.healsRemaining > 0) {
      this.health += Math.floor(Math.random() * 10 + 1);
      this.healsRemaining --;
      } else {
        console.log("You're out of heals!");
      }
    },
  }
  
  var grant = {
    name: "Grant the big chicken",
    health: 10,
    generateAttackDamage: function () {
      return Math.floor(Math.random() * 5 + 1);
    },
  }

  function combat() {
    while (character.wins < 5 && character.health > 0) {
      var choice = prompt("attack, heal, or quit?")
      if (choice === "attack") {
        character.health -= grant.generateAttackDamage();
        grant.health -= character.generateAttackDamage();
        console.log(grant.name + " has " + grant.health + " health left!");
        console.log(character.name + " has " + character.health + " health left!");
        if (grant.health < 1) {
          console.log("Grant died!");
          character.wins ++;
          grant.health = 10;
        } 
      } else if (choice === "heal") {
        character.heal();
        console.log(character.name + " has " + character.health + " health now! " 
        + character.healsRemaining + " heals remaining!");
      } else {
        console.log("You ran away!");
        return;
      }
    } if (character.health < 1) {
      console.log(character.name + " lost!");
    } else {
      console.log(character.name + " won!");
    }
  }

function startGame() {
  if (prompt("Do you want to play?") === "yes") {
    character.name = prompt("What is your name?");
    combat();
  }
}


startGame();