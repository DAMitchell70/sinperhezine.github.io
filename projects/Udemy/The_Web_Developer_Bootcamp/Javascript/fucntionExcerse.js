//isEven
function isEven(num){
	return num %2 ===0;
}
//Factorial
function factorial(num){
	var output = 1;
	for(var i = 2;  i<=num;i++){
		output = output * i;
	}
	return output;
}

function kebabToSnake(str){
	return str.replace("-","_");
	return str;
	}


kebabToSnake("fuck-off");
