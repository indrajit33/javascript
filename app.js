//Map Methods

//Map method creates a new array (with same number of elements) 
//with the results of calling a function for every array element.

//Note:: Map takes a full array and returns a full array.

let arr = [2,3,4];

let pow = function(e){
	return e**2;
}

let res = arr.map(pow);

console.log(res);

//Fliter method
//It takes a fill array and returns a part of it

let evenCheck = function(e){
	if(e%2 == 0){
		return e;
	}
}

res = arr.filter(evenCheck);
console.log(res);

//Reduce method

let arr2 = [{num:1},{num:2},{num:3}];

let rd = function(acc, e){
	return acc + e.num;
} 

res = arr2.reduce(rd, 0);
console.log(res);