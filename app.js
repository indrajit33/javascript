//Array function
//some function

//The some() method checks if any of the elements in an array pass a test (provided as a function).

let arr = [1,15,30,18];

const check = function(e){
	return e >= 18 ? true : false;
}

let res = arr.some(check);

console.log(res);

// It can be applied in objects as well
let arr1 = [ {name:'Indrajit',age:33}, {name:'udaya',age:45} ];


const checkobj = function(e){
	return e.age >= 18 ? true : false;
}

let res1 = arr1.some(checkobj);
console.log(res1);

//Every function

//The every() method checks if all of the elements in an array pass a test (provided as a function).
//If all passes then it will give true else false.

let arr2 = [ {name:'Indrajit',age:17}, {name:'udaya',age:45} ];
const checkobjE = function(e){
	return e.age >= 18 ? true : false;
}

let res2 = arr2.every(checkobjE);
console.log(res2);

