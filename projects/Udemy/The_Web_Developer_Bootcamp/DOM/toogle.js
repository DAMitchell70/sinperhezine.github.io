var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function(){
	//alert("Clicked!");
	if(isPurple === false){
		document.body.style.background = "purple";
		isPurple = true;
	}
	else{
		document.body.style.background = "white";
		isPurple = false;
	}
	
});