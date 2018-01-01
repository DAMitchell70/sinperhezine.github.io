var colors = generateRandomColors(6);
var sqaures = document.querySelectorAll(".sqaure");
var pickedColor = pickColor(6);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var btnNewColor = document.getElementById("newColor");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var hardMode = true;

//setGame();
colorDisplay.textContent = pickedColor;
for(var i = 0; i < sqaures.length; i++) {
//add initial color to sqaures
sqaures[i].style.backgroundColor = colors[i];
	//add click listeners to sqaures
sqaures[i].addEventListener("click", function () {
//grab color of clicked sqaure
var clickedColor = this.style.backgroundColor;
//compare color to pickedColor
		if (clickedColor === pickedColor) {
	console.log(clickedColor, pickedColor)
	changeColor(clickedColor);
	messageDisplay.textContent = "Correct!";
	if (i < mode) {
		h1.style.backgroundColor = clickedColor;
	}
	btnNewColor.textContent = "Play Again?";
} else {
	this.style.backgroundColor = "#232323";
	messageDisplay.textContent = "Try Again";
}
});
}

easyBtn.addEventListener("click", function () {
if (hardMode === true) {
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		//generateRandomColors(3);
		setGame(3);
		pickColor(3);
		hardMode = false;
	}
});

hardBtn.addEventListener("click", function () {
	if (hardMode === false) {
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		//generateRandomColors(6);
		setGame(6);
		pickColor(6);
		hardMode = true;
	}
});

btnNewColor.addEventListener("click", function () {

	//console.log(colors);
	if (hardMode === false) {
		setGame(3);
		pickColor(3);
	} else {
		setGame(6);
		pickColor(6);
	}
});

//function changeDiffculty(mode) {
//	for (var i = 0; i < sqaures.length; i++) {
//		//add initial color to sqaures
//		if (i < mode) {
//			sqaures[i].style.backgroundColor = colors[i];
//		} else {
//
//			sqaures[i].style.background = "#232323";
//		}
//	}
//}

function setGame(mode) {
	messageDisplay.textContent ="";
	btnNewColor.textContent ="New Colors";
	h1.style.backgroundColor = "steelblue";
	colors = generateRandomColors(mode);
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < sqaures.length; i++) {
		//add initial color to sqaures
		if (i < mode) {
			sqaures[i].style.backgroundColor = colors[i];
		} else {
			sqaures[i].style.backgroundColor ="#232323";
		}
	}


	//add click listeners to sqaures
	if (i < mode) {
		sqaures[i].addEventListener("click", function () {
			//grab color of clicked sqaure
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor

			if (clickedColor === pickedColor) {
				console.log(clickedColor, pickedColor)
				changeColor(clickedColor);
				messageDisplay.textContent = "Correct!";
				if (i < mode) {
					h1.style.backgroundColor = clickedColor;
				}
				btnNewColor.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColor(color) {
	for (var i = 0; i < sqaures.length; i++) {
		sqaures[i].style.backgroundColor = color;
	}
}

function pickColor(mode) {
	var random = Math.floor(Math.random() * mode);
	//console.log(random);
	pickedColor = colors[random];
	return colors[random];
}

function generateRandomColors(mode) {
	var output = [];
	for (var i = 0; i < mode; i++) {
		output[i] = (randomColor());
	}
	console.log(output);
	return output;
}

function randomColor() {
	var color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	//console.log(color);
	return color;
}
