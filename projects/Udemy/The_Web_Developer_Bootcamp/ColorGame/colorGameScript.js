var colors = generateRandomColors(6);
var sqaures = document.querySelectorAll(".sqaure");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for(var i = 0; i <sqaures.length; i++){
	//add initial color to sqaures
	sqaures[i].style.backgroundColor = colors[i];
	
	//add click listeners to sqaures
	sqaures[i].addEventListener("click", function(){
		//grab color of clicked sqaure
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		
		if(clickedColor === pickedColor){
			changeColor(clickedColor);
			messageDisplay.textContent="Correct!";
			h1.style.backgroundColor = clickedColor;
			
		} else{
			this.style.background ="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}


function changeColor(color){
	for(var i = 0; i <sqaures.length; i++){
	sqaures[i].style.backgroundColor = color;
}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	console.log(random);
	return colors[random];
}

function generateRandomColors(mode){
	var output = [];
	for(var i = 0; i<mode; i++){
		output[i]=(randomColor());
	}
		return output;
}

function randomColor(){
		var color= "rgb("+Math.floor(Math.random()*256)+", " +Math.floor(Math.random()*256)+", " +Math.floor(Math.random()*256)+")";
	console.log(color);
	return color;
}