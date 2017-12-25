var patronAge= prompt("how old are you?");

if(patronAge < 18){
	console.log("Sorry, you are not old enough to enter the venue");
}
else if(patronAge< 21){
	console.log("You can enter, but cannot drink.");
}
else{
	console.log("welcome to The bar.");
}