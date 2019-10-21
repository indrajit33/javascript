
// Part 1

const calc = function(n,func){
	return func(n);
}

let add = function(n){
	let sum = 0;
	for(let i=0; i<=n; i++){
		sum += i;
	}

	return sum;
}

let mul = function(n){
	let into = 1;
	for(let i=1; i<=n; i++){
		into *= i;
	}
	return into;
}

let minus = function(n){
	let into = 1;
	for(let i=2; i<=n; i++){
		into = into - i;
	}
	return into;
} 

let res = calc(4,minus);
console.log(res);

//Part 2
let rd = function(acc,e){
	return acc *= e;
}

let num = [1,2,3,4];
let res2 = num.reduce(rd,1);

console.log(res2);