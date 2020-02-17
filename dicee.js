var player1 = prompt("What is your name?");

var player2 = prompt("What is your opponants name?");

var player1 = player1.toUpperCase();

var player2 = player2.toUpperCase();

//document.querySelector(".add").addEventListener("click", function() {
//		var player1 = prompt("What is your name?");

//		var player2 = prompt("What is your opponants name?");
	
//	});
	

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);

document.querySelectorAll("p")[0].innerHTML = player1;

document.querySelectorAll("p")[1].innerHTML = player2;

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = player1 + " IS THE ... <br><img src='images/winner.png'>";	
}

else if (randomNumber1 < randomNumber2) {
document.querySelector("h1").innerHTML = player2 + " IS THE ... <br><img src='images/winner.png'>";	
}

else  {
document.querySelector("h1").innerHTML = "Draw!";	
}