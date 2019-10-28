// Object.fromEntries()

//Map
const myMap = new Map();

myMap.set('whiskey','Vat 69');
myMap.set('whiskey','Black Dog');

console.log(myMap);

//Convert Map to Object
const myObj = Object.fromEntries(myMap);
console.log(myObj);

//Array
const arr = [['whiskey','Vat 69'],['whiskey','Black Dog']];
//Convert Array to Object
const myObj1 = Object.fromEntries(arr);
console.log(myObj1);

//Note the array should always be multi-dimention


