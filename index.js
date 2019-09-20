//Dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png-images/dice6.png

let dice1 = document.querySelector(".img1").setAttribute("src", randomDiceImage1); //select sc to randomly change image

//Dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

let dice2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);

//Who Won?
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}