var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var input= document.querySelector("input");
var h1 = document.querySelector("h1");
var p1Span = document.querySelector("#p1Score");
var p2Span = document.querySelector("#p2Score");
var goal = 5;
var p1ScoreAmmount =0;
var p2ScoreAmmount =0;
var gameWon = false;

p1Button.addEventListener("click", function(){
	if(gameWon === false){
	p1ScoreAmmount ++;
		updateScore();
	}
	checkScore();
	console.log(p1ScoreAmmount);
});

p2Button.addEventListener("click", function(){
	if(gameWon === false){
	p2ScoreAmmount ++;
		updateScore();
	}
	checkScore();
	console.log(p2coreAmmount);
});

resetButton.addEventListener("click", function(){
	p1ScoreAmmount = 0;
	p2ScoreAmmount = 0;
	gameWon = false;
		updateScore();
		p1Span.classList.remove("winner");
		p2Span.classList.remove("winner");
});

function updateScore(){
		p1Span.textContent = p1ScoreAmmount;
		p2Span.textContent = p2ScoreAmmount;
}
function checkScore(){
	if(p1ScoreAmmount >=goal){
		gameWon = true;
		p1Span.classList.add("winner");
	}
	else if(p2ScoreAmmount >=goal){
		gameWon = true;
		p2Span.color = "green";
		p2Span.classList.add("winner");
	}
}