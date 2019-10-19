
//Sets

let set = new Set();
 set.add('red');

 set.has('red');
//true
set.delete('red');
//true
set.has('red');
//false


let arr = [1,2,3,4,4,3,3];

//console.log(arr);

let x = new Set(arr);

console.log(x); // 1,2,3,4

// It will remove the duplicate value

