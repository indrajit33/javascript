
//Maps

//const obj = {};

const obj = new Map();

const key1 = {};
const key2 = {name:'Jone'};
const key3 = {num:1};


/*
obj[key1]='Val1';
obj[key2]='Val2';
obj[key3]='Val3';

In am object, object as keys is not possible. For that we needs map.
*/

obj.set(key1,'Val1');
obj.set(key2,'Val2');
obj.set(key3,'Val3');

//console.log(obj.get(key1));

//iterate an map with for of
for(let o of obj){
	console.log(o[1]);
}




