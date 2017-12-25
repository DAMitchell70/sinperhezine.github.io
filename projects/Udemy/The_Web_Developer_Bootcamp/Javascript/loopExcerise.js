var count =-10;
console.log("Print all numbers between -10 and 19");
while(count <=19){
	console.log("excerise 1: "+count);
	count++;
}

count =10;
console.log("Print all numbers between 10 and 40");
while(count <=40){
	console.log("excerise 2: "+count);
	count++;
}

count =300;
console.log("Print all numbers between 300 and 333");
while(count <=333){
	console.log("excerise 3: "+count);
	count++;
}

count =5;
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50");
while(count <=333){
	if((count%5)===0 ){
	console.log("excerise 4: by 5-"+count);
	}
	else if((count%3)===0 ){
	console.log("excerise 4: by 3-"+count);
	}
	count++;
}