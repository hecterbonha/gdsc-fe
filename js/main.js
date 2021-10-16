const pokemon = ["./bulbasaur.webp", "./charmander.png", "./squirtle.png"];
function handleCLick(item) {
  document.getElementById("image-player").className = "letsgo";
  document.getElementById("image-enemy").className = "letsgo";
  if (item === "Charmander") {
    const enemy = pokemon[Math.floor(Math.random() * 3 + 1) - 1];
    document.getElementById("image-player").src = "./charmander.png";
    document.getElementById("image-enemy").src = enemy;
    document.getElementById("result").innerHTML = checkWinner(item, enemy);
  } else if (item === "Bulbasaur") {
    const enemy = pokemon[Math.floor(Math.random() * 3 + 1) - 1];
    document.getElementById("image-player").src = "./bulbasaur.webp";
    document.getElementById("image-enemy").src = enemy;
    document.getElementById("result").innerHTML = checkWinner(item, enemy);
  } else if (item === "Squirtle") {
    const enemy = pokemon[Math.floor(Math.random() * 3 + 1) - 1];
    document.getElementById("image-player").src = "./squirtle.png";
    document.getElementById("image-enemy").src = enemy;
    document.getElementById("result").innerHTML = checkWinner(item, enemy);
  }
}

function checkWinner(player, enemy) {
  if (player === "Charmander") {
    if (enemy === "./squirtle.png") {
      return "Lose";
    }
    if (enemy === "./bulbasaur.webp") {
      return "Win";
    }
    if (enemy === "./charmander.png") {
      return "Draw";
    }
  }
  if (player === "Squirtle") {
    if (enemy === "./squirtle.png") {
      return "Draw";
    }
    if (enemy === "./bulbasaur.webp") {
      return "Lose";
    }
    if (enemy === "./charmander.png") {
      return "Win";
    }
  }
  if (player === "Bulbasaur") {
    if (enemy === "./squirtle.png") {
      return "Win";
    }
    if (enemy === "./bulbasaur.webp") {
      return "Draw";
    }
    if (enemy === "./charmander.png") {
      return "Lose";
    }
  }
}
