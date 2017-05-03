
function objectValues(object){
    var newArray =[];
    for (var key in object) {
            newArray.push(object[key]);
    }
   // console.log(newArray);
    return newArray;
}

function keysToString(object){
    var arr=[];
    for(var keys in object){
        arr.push(keys);
    }
    //console.log(arr);
    return arr.join(" ");
}

function valuesToString(object){
    var arr=[];
    for(var keys in object){
        if(typeof( object[keys]) ==='string')
            arr.push(object[keys]);
    }
    //console.log(arr);
    return arr.join(" ");
}

function arrayOrObject(object){
    if(Array.isArray(object)=== true)
        return 'array';
    else if(typeof object === 'object')
        return 'object';
}

function capitalizeWord(word){
    word = word.charAt(0).toUpperCase() + word.substring(1);
    return word;
}

function  capitalizeAllWords(string){
    var arr =[]
    arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
            arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
  //  console.log(arr);
    return arr.join(" ");
}

function welcomeMessage(object){
    var objectName =object.name;
    return "Welcome "+ objectName.charAt(0).toUpperCase() + objectName.substring(1)+"!";
}

function profileInfo(object){
    return  object.name.charAt(0).toUpperCase() + object.name.substring(1)+" is a "  +
    object.species.charAt(0).toUpperCase() + object.species.substring(1);
}

function maybeNoises(object){
    var arr =[];
    for(var key in object){
        if(key ==="noises")
        {
        arr = object[key];
        }
    }
    if(arr.length >0)
    {
        return arr.join(" ");
    }
    else if(arr.length ===0)
    {
        return "there are no noises";
    }
}

function hasWord(string, word){
    //console.log(string);
    //console.log(word);
    var arr = string.split(" ");
    var bool = false;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() === word.toLowerCase() ){
           // console.log(true);
            bool = true;
        }
    }
    return bool;
}

function addFriend(person, object){
    //console.log(person);
    object.friends.push(person);
    return object;
}

function isFriend(person, object){
    console.log(object);
    console.log(person);
    var bool = false;
    for (var i = 0; i < object.friends.length; i++) {
        if(object.friends.toLowerCase() === person.toLowerCase())
            bool = true
    }
    return bool;
}