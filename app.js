// Function Declaration

function add(num1,num2){
	return num1 + num2;
}

console.log(add(2,1));

//Function expression
let addE = function(num1,num2){
	return num1 + num2;
}

console.log(addE(2,1));


let addS = function(){

	let sum = 0;
	for(let val in Object.keys(arguments)){
		sum += arguments[val];
	}

	return sum;
} 

let x = addS(1,2,3,4,5);
console.log(x);