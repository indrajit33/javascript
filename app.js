//Callback Function



const calc = function(cb,num1=0,num2=0){
	return cb(num1,num2);
}

let add = function(a=0,b=0){
	return a+b;
}

let sub = function(a=0,b=0){
	return a - b;
}

let result = calc(sub,2,3);
console.log(result);

//callback function is a function where function is passed as parameter.

let result2 = calc(function(a=0,b=0){ 
	return a**b;
},2,3);

console.log(result2);

// In callback function we can pass anonymous function like above.




