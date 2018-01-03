
{
    //step 1
    var animal={};
    animal.species="dog";
    animal.name="Doug";
    animal.noises=[];
   // console.log(animal);
    
    //step 2
    var noises = [];
    noises.push("bark");
    noises.unshift("meow");
    noises.push("moo");
 //   console.log(noises.length);
  //  console.log(noises[noises.length-1]);
 //   console.log(noises);
    
    //step 3
    animal.noises.push( noises[1]);
    animal.noises.push("hoot");
 //   console.log(animal);
    
    //step 4
    var animals = [];
    animals.push(animal);
//    console.log(animals);
    //step 6
    var duck= {species:'duck',
        name:'Jerome',
        noises:['quack','honk','sneeze','woosh',]
    };
    animals.push(duck);
//    console.log(animals);
//    console.log(animals.length);
    
    var friends =[];
    
    function makeFirendships(){
        var min = Math.ceil(0);// set the min
        var max = Math.floor(animals.length); // set a dynamic max
//        console.log(Math.random()*(max -min)+min);
        for (var i = 0; i < animals.length; i++) {
        friends =[];
            var pick = Math.trunc(Math.floor(Math.random()*(max -min)+min));
            if(animals[i].name !== animals[pick].name){
                friends.push(  
                    animals[pick].name
                );
            }
            else if(pick ===min){
                friends.push(  
                    animals[pick+1].name
                );
            }
            else{
                friends.push(  
                    animals[pick-1].name
                );
            }
        animals[i].friends = friends;
        }
    }
    makeFirendships();
 //   console.log(friends);
    
    function search(name){
        var animalName = name;
        console.log(animalName);
        var results = 0;
        for (var i = 0; i < animals.length; i++) {
            if(animals[i].name.toLocaleLowerCase() === animalName.toLocaleLowerCase()){
                results++;
                console.log(animals[i]);
                return animals[i];
            }
            
        }
        if(results ===0)
        return null;
    }
    
    function edit(name, object){
        for (var i = 0; i < animals.length; i++) {
            if(animals[i].name.toLocaleLowerCase() === name.toLocaleLowerCase())
            animals[i]= object;
        }
    }
    
    function create(newAnimals){
        if(newAnimals.name.length>0 &&newAnimals.species.length>0)
        {
            console.log("not blank");
            var unique = true;
            for (var i = 0; i < animals.length; i++) {
                if(animals[i].name === newAnimals.name)
                    unique = false;
            }
            if(unique === true){
            console.log("is unique");
                animals.push(newAnimals);
            }
        }
    }
    
    function remove(name){
        var selectedAnimal ={};
            for (var i = 0; i < animals.length; i++) {
                if(animals[i].name === name)
                   delete animals.splice(i,1);
            }
            console.log(animals);
    }
    
}