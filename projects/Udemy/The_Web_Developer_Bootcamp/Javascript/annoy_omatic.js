// JavaScript Document
//version2
var thereYet = false;
var reply = "";
while (thereYet === false)
	{
		reply =prompt("Are we there yet?").toLocaleLowerCase();
	if(reply ==="yes"||reply ==="yeah"){thereYet= true;}
}
if(thereYet=== true){
	alert("Yay, we finally made it");
}
