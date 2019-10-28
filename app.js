// flat and flatMap

const arr = [1,2,[3],[[[[[4]]]]]];

let newArr = arr.flat(Infinity);
console.log(newArr);

const arr1 = ['I love you','You love me'];

let res = arr1.map( ( val, indx )=> val.split(' ') );
console.log(res);
/*
[Array(3), Array(3)]
0: (3) ["I", "love", "you"]
1: (3) ["You", "love", "me"]
length: 2
__proto__: Array(0)
*/

res = res.flat();
console.log(res);


// This can be achived in 1 line with flatMap
let res1 = arr1.flatMap( ( val, indx )=> val.split(' ') );
console.log(res1);





