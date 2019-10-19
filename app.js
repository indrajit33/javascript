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
	for(let obj of arguments){
		sum += obj;
	}

	return sum;
} 

let x = addS(1,2,3,4);

console.log(x);