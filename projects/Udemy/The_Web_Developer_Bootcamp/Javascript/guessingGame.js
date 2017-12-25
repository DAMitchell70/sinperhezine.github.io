// create secretNumber
var secretNumber =4;
// ask user for guess
var infinityLoop = true;


while(infinityLoop === true)
	{var guess = Number(prompt("Guess a number"));

//check guess

if(guess === secretNumber){
	alert("correct");
	infinityLoop = false;
}
else if(guess === "NaN"){
	alert("not a number");
}
else if(guess <secretNumber){
	alert ("to low");
}
else {
	alert ("to high");
}
	}