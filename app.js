//Spread Operator.

let arr1 = [1,2,3];
let arr2 = [3,4,6];

let arr = [...arr1,...arr2];
console.log(arr);

// It merges 2 array, please remember that duplicate elements are not removed.
let obj1 = {name:"Indrajit",age:33};
let obj2 = {age:34};

let obj = {...obj1, ...obj2};
console.log(obj);

//It merges the objects as well, since object has got keys hence for the same key it will override.
// age in obj2 will override obj1....As obj2 is in left side.

let func = function(...num){
	console.log(num);
}

func(1,2,3,4);

//With spread operator we can catch multiple parameters like in the above example. The values 
//will be in array in num variable.

