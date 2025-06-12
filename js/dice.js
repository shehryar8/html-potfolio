var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "../assets/images/dice_images/dice" + randomNumber1.toString() + ".png";
var randomDice2 = "../assets/images/dice_images/dice" + randomNumber2.toString() + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
