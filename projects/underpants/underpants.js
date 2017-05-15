// This is the proper way to start a javascript library
(function() {

    // This makes the arguments variable behave the way we want it to and a few
    // other things. For more info:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    'use strict';

    // This allows us to use our "_" anywhere. In a web browser, properties of window
    // are available everywhere without having to type "window."
    /* global _ */
    window._ = {};

    /**
     * START OF OUR LIBRARY!
     * Implement each function below it's instructions
     */

    /** _.identity()
     * Arguments:
     *   1) Anything
     * Objectives:
     *   1) Returns <anything> unchanged
     * Examples:
     *   _.identity(5) === 5
     *   _.identity({a: "b"}) === {a: "b"}
     */
    _.identity = function(value) {
        return value;
    }

    /** _.typeOf()
     * Arguments:
     *   1) Anything
     * Objectives:
     *   1) Return the type of <anything> as a string
     *       Types are one of:
     *          - "string"
     *          - "array"
     *          - "object"
     *          - "undefined"
     *          - "number"
     *          - "boolean"
     *          - "null"
     *          - "function"
     * Examples:
     * _.typeOf(134) -> "number"
     * _.typeOf("javascript") -> "string"
     * _.typeOf([1,2,3]) -> "array"
     */
    _.typeOf = function(value) {
        if (value === null)
            return 'null';
        else if (Array.isArray(value) === true)
            return 'array';
        else if (value instanceof Date)
            return 'date';
        else if (typeof value === 'object')
            return 'object';
        else if (typeof value === 'undefined')
            return 'undefined';
        else if (typeof value === 'boolean')
            return 'boolean';
        else if (typeof value === 'function')
            return 'function';
        else if (typeof(value) === 'string')
            return 'string';
        else if (typeof(value) === 'number')
            return 'number';
    }

    /** _.first()
     * Arguments:
     *   1) An array
     *   2) A number
     * Objectives:
     *   1) If <array> is not an array, return []
     *   2) If <number> is not given or not a number, return just the first element in <array>.
     *   3) Otherwise, return the first <number> items of <array>
     * Gotchas:
     *   1) What if <number> is negative?
     *   2) What if <number> is greater than <array>.length?
     * Examples:
     *   _.first(["a","b","c"], 1) -> "a"
     *   _.first(["a","b","c"], 2) -> ["a", "b"]
     *   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
     */
    _.first = function(array, number) {
      //  console.log(number);
        var output = [];
        if (_.typeOf(array)==='array') {
            if (_.typeOf(number) === 'number') {
                if (number > 0) {
                    if (number < array.length) {
                        for (var i = 0; i < number; i++) 
                            output.push(array[i]);
                        return output;
                    }
                    else 
                        return array;
                }
                else if (number < 0)
                    return [];
            }
            else
                return array[0];
        }
        else 
            return [];
    }

    /** _.last()
     * Arguments:
     *   1) An array
     *   2) A number
     * Objectives:
     *   1) If <array> is not an array, return []
     *   2) If <number> is not given or not a number, return just the last element in <array>.
     *   3) Otherwise, return the last <number> items of <array>
     * Gotchas:
     *   1) What if <nubmer> is negative?
     *   2) What if <number> is greater than <array>.length?
     * Examples:
     *   _.last(["a","b","c"], 2) -> ["b","c"]
     *   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
     */
    _.last = function(array, number) {
        var output = [];
        if(_.typeOf(array)==='array'){
        if(_.typeOf(number) ==='number'){
            if(number >0){
                if(number < array.length){
                    for (var i = number-1; i < array.length; i++) {
                        output.push(array[i]);
                    }
                        return output;
                }
                else
                {
                    return array;
                }
            }
            else if(number <0){
                return [];
            }
        }
        else
            return array[array.length-1];
        }
        else
            return [];
    }

    /** _.each()
     * Arguments:
     *   1) A collection
     *   2) A function
     * Objectives:
     *   1) if <collection> is an array, call <function> once for each element
     *      with the arguments:
     *         the element, it's index, <collection>
     *   2) if <collection> is an object, call <function> once for each property
     *      with the arguments:
     *         the property's value, it's key, <collection>
     * Examples:
     *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
     *      -> should log "a" "b" "c" to the console
     */
    _.each = function(collection, action) {
        if (Array.isArray(collection) === true) {
            for (var i = 0; i < collection.length; i++) {
                action(collection[i], i, collection);
            }
        }
        else {
            for (var key in collection) {
                action(collection[key], key, collection);
            }
        }
    }

    /** _.indexOf()
     * Arguments:
     *   1) An array
     *   2) A value
     * Objectives:
     *   1) Return the index of <array> that is the first occurrance of <value>
     *   2) Return -1 if <value> is not in <array>
     *   3) Do not use [].indexOf()!
     * Gotchas:
     *   1) What if <array> has multiple occurances of val?
     *   2) What if <val> isn't in <array>?
     * Examples:
     *   _.indexOf(["a","b","c"], "c") -> 2
     *   _.indexOf(["a","b","c"], "d") -> -1
     */
    _.indexOf = function(array, value) {
        var output='';
        var check='';
        if(_.typeOf(array)=== 'array'){
            _.each(array, function(fvalue, pos, collection){
                if(value === fvalue&&check !== fvalue){
                    output= pos;
                    check= fvalue;
                }
            })
            if(output !=="")
                return output;
            else
                return -1;
        }
        else
            return array;
    }
    /** _.filter()
     * Arguments:
     *   1) An array
     *   2) A function
     * Objectives:
     *   1) call <function> for each element in <array> passing the arguments:
     *      the element, it's index, <array>
     *   2) return a new array of elements for which calling <function> returned true
     * Gotchas:
     *   1) What if <function> returns something other than true or false?
     * Examples:
     *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
     * Extra Credit:
     *   use _.each in your implementation
     */
    _.filter = function(array, action) {
        var output = [];
        _.each(array,function(value, pos, array){
          if( action(value, pos, array) === true)
          output.push(value);
        })
        return output;
    }

    /** _.reject()
     * Arguments:
     *   1) An array
     *   2) A function
     * Objectives:
     *   1) call <function> for each element in <array> passing the arguments:
     *      the element, it's index, <array>
     *   2) return a new array of elements for which calling <function> returned false
     *   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
     * Examples:
     *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
     */
    _.reject = function(array, action) {
        var output = [];
        _.each(array, function(value,pos, collection){
            if(action(value,pos,collection)=== false)
            {
             output.push(value);   
            }
        })
        return output;
    }

    /** _.partition()
    * Arguments:
    *   1) An array
    *   2) A function
    * Objectives:
    *   1) Call <function> for each element in <array> passing it the arguments:
    *       element, key, <array>
    *   2) Return an array that is made up of 2 sub arrays:
    *       0) An array that contains all the values for which <function> returned something truthy
    *       1) An array that contains all the values for which <function> returned something falsy
    * Gotchas:
    *   1) This is going to return an array of arrays.
    * Examples:
    *   _.partition([1,2,3,4,5], function(element,index,arr){
    *     return element % 2 === 0;
    *   }); -> [[2,4],[1,3,5]]
    }
    */
    _.partition = function(array, action) {
        var output1 =[];
        var output2 =[];
        var output3 =[];
        _.each(array,function(value,pos, collection){
            if(action(value,pos,collection)=== true)
                output1.push(value);
            else
                output2.push(value);
        })
        output3.push(output1);
        output3.push(output2);
        return output3;
    }

    /** _.unique()
     * Arguments:
     *   1) An array
     * Objectives:
     *   1) Return a new array of all elements from <array> with duplicates removed
     *   2) Use _.indexOf() from above
     * Examples:
     *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
     */
    _.unique = function(array) {
        var output =[]; // output array to be return
        var check =''; // element that will be checked against
        // loops throught the given array
        _.each(array,function(value,pos, array){
            var found = false; // a boolean to say weather or not somehting has been foundlo1
            if(check!= value) // if the check does not equal value assign the value
                check = value;
                // if output is not empty run another each loop
            if(output.length !==0){
                // run each loop on output to check if unique value is already added
                _.each(output,function(value1,pos1, array1){
                    if(check === value1)
                        found = true;                    
                })
                if(found === false)
                    output.push(value);
            }
            // if output is empty push value
            else{
                output.push(value);
            }
        })
        return output;
    }

    /** _.map()
     * Arguments:
     *   1) A collection
     *   2) a function
     * Objectives:
     *   1) call <function> for each element in <collection> passing the arguments:
     *        if <collection> is an array:
     *            the element, it's index, <collection>
     *        if <collection> is an object:
     *            the value, it's key, <collection>
     *   2) save the return value of each <function> call in a new array
     *   3) return the new array
     * Examples:
     *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
     */
    _.map = function(collection, action) {
        var output=[];
        _.each(collection, function(value, pos, collection){
       //console.log(action(value,pos,collection));
            output.push(action(value,pos,collection));
        });
        
        return output;
    }

    /** _.pluck()
     * Arguments:
     *   1) An array of objects
     *   2) A property
     * Objectives:
     *   1) Return an array containing the value of <property> for every element in <array>
     *   2) You must use _.map() in your implementation.
     * Examples:
     *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
     */
    _.pluck = function(collection, prop) {
        var output = [];
        _.map(collection,function(value,pos,collection){
            _.each(value,function(value1,pos1,collection1){
                if(pos1=== prop)
                    output.push(value1);
            });
        });
        return output;
    }

    /** _.contains()
     * Arguments:
     *   1) An array
     *   2) A value
     * Objectives:
     *   1) Return true if <array> contains <value>
     *   2) Return false otherwise
     *   3) You must use the ternary operator in your implementation.
     * Gotchas:
     *   1) did you use === ?
     *   2) what if no <value> is given?
     * Examples:
     *   _.contains([1,"two", 3.14], "two") -> true
     */
    _.contains = function(array, value) {
        var output = false;
        _.each(array,function(value1, pos, collection){
           if(value1 === value) 
                output = true;
        });
        return output;
    }

    /** _.every()
     * Arguments:
     *   1) A collection
     *   2) A function
     * Objectives:
     *   1) Call <function> for every element of <collection> with the paramaters:
     *      if <collection> is an array:
     *          current element, it's index, <collection>
     *      if <collection> is an object:
     *          current value, current key, <collection>
     *   2) If the return value of calling <function> for every element is true, return true
     *   3) If even one of them returns false, return false
     *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
     * Gotchas:
     *   1) what if <function> doesn't return a boolean
     *   2) What if <function> is not given?
     * Examples:
     *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
     *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
     */
    _.every = function(collection, action) {
        var output = true;
        if(action!== undefined){
           // console.log(action);
            _.each(collection, function(value, pos, collection){
                  if(action(value,pos, collection) === false ||
                  action(value,pos, collection)===-1 )
                      output = false;
            });
        }
        else if(action=== undefined) {
           // console.log(collection);
            _.each(collection, function(value, pos, collection){
                if( value ===""|| value === 0||value === false  || value === null ){
                   // return false;
                   output = false;
                }
            })
        }
        //console.log(output);
        return output;
    }

    /** _.some()
     * Arguments:
     *   1) A collection
     *   2) A function
     * Objectives:
     *   1) Call <function> for every element of <collection> with the paramaters:
     *       if <collection> is an array:
     *        current element, it's index, <collection>
     *       if <collection> is an object:
     *        current value, current key, <collection>
     *   2) If the return value of calling <function> is true for at least one element, return true
     *   3) If it is false for all elements, return false
     *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
     * Gotchas:
     *   1) what if <function> doesn't return a boolean
     *   2) What if <function> is not given?
     * Examples:
     *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
     *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
     */
    _.some = function(collection, action) {
        var output = false;
        if(action!== undefined){
            //console.log(action);
            _.each(collection,function(value, pos , collection){
                if(action(value, pos, collection) === true ||
                action(value,pos, collection)===1)
                    output = true;
            });
        }
        else if(action=== undefined){
            _.each(collection, function(value,pos, collection){
                if(value===""|| value===0|| value === false|| value === null){
                   // console.log(collection);
                    output = false;
                }
                else
                {
                    output = true;
                }
            });
        }
        return output;
    }

    /** _.reduce()
     * Arguments:
     *   1) An array
     *   2) A function
     *   3) A seed
     * Objectives:
     *   1) Call <function> for every element in <collection> passing the arguments:
     *         previous result, element, index
     *   2) Use the return value of <function> as the "previous result"
     *      for the next iteration
     *   3) On the very first iteration, use <seed> as the "previous result"
     *   4) If no <seed> was given, use the first element/value of <collection> as <seed>
     *   5) After the last iteration, return the return value of the final <function> call
     * Gotchas:
     *   1) What if <seed> is not given?
     * Examples:
     *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
     */
    _.reduce = function(array, action, seed) {
        //console.log("seed: "+seed);
        //console.log(action);
        var output =0;
        var noSeed = true;
        if(seed !== undefined){
            output =seed;
            noSeed = false
            _.each(array, function(value, pos, collection){
                if(noSeed === true&& pos ===0){
                    output =value;
                }
                //console.log('action result: '+action(output,value,pos));
                output =action(output,value,pos);
            });
        }
        else{
            output = array[0];
            for (var i = 1; i < array.length; i++) {
                output = action(output,array[i],i);
            }
        }
            return output;
    }

    /** _.extend()
     * Arguments:
     *   1) An Object
     *   2) An Object
     *   ...Possibly more objects
     * Objectives:
     *   1) Copy properties from <object 2> to <object 1>
     *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
     *   3) Return the update <object 1>
     * Examples:
     *   var data = {a:"one"};
     *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
     *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
     */
    _.extend = function(/**/) {
        var output ={};
        for (var i = 0; i < arguments.length; i++) {
       // console.log(arguments[i]);
            if(i===0)
                output =arguments[i];
            else
                _.each(arguments[i],function(value,pos, collection){
                output[pos] = value; 
            });
        }
        return output;
    }

    // This is the proper way to end a javascript library
}());
