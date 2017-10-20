
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
    //console.log(person);
   // var bool = false;
    if(object.hasOwnProperty('friends') === true)
    {
     //   console.log(object);
     for (var i = 0; i < object.friends.length; i++) {
        if(object.friends[i].toLowerCase() === person.toLowerCase())
            return true;
        }
    }
     return false;
}
//TODO: needs to be finished
var functionRun =0;
function nonFriends(name,data ){
    functionRun++;
    // // array to hold people who are not firends
     console.log("this function has run "+functionRun);
    // console.log(name);
     console.log(data);
    var arr = [];
    // for loop to go throught data
    for (var i = 0; i < data.length; i++) {
        // a catch all bool, should one thing be true it switches it to true with no way of switching back 
        // outside of a new iteration of the loop
        var found = false;
        // if statement to ensure that we are not looking at the given name, making sure the person friends
        // in their friends list
            if(name !== data[i].name &&
            data[i].hasOwnProperty('friends') === true ){
                if(data[i].friends.length > 0){
                 //console.log("people in friends:"+data[i].friends.length );
                 //for loop to loop throught the friends list on the object selected in the frist loop
                 for (var x = 0; x < data[i].friends.length; x++) {
                     //compare the name to a select name in the for loop while forcing it to be lower case to 
                     // prevent false negatives
                     // console.log("loop iteration:"+x);
                   //   console.log(data[i].name+" firends:"+data[i].friends[x].toLocaleLowerCase());
                    if(name.toLocaleLowerCase()=== data[i].friends[x].toLocaleLowerCase()){
                        // if it is a match the bool found becomes true
                        found = true;
                        }
                    }
                }
                 // if found is still false push the name of the data to arr
                if(found === false)
                    arr.push(data[i].name);
                   
            }
    }
    // after all loops return the array
     console.log(arr);
    return arr;
}

function updateObject(object, key, value){
    // console.log(object);
    // console.log(key);
    // console.log(value);
    object[key] = value;
    return object;
}

function removeProperties(object, arr){
  //  console.log(object);
    //console.log(arr);
    var newObject = object;
    for(var key in newObject){
        for (var i = 0; i < arr.length; i++) {
            if(key.toLowerCase()=== arr[i].toLowerCase()){
                delete newObject[key];
            }
        }
    }
    return newObject;
}

function dedup(arr){
    var value ="";
    var newArr =[];
    for (var i = 0; i < arr.length; i++) {
        if(value !== arr[i]){
        value = arr[i];
        newArr.push(arr[i]);
            
        }
    }
    return newArr;
}