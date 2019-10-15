//Converting Numbers to Strings
let x = 10;
console.log(typeof(x.toString()));

//Converting Booleans to Strings
let y = true;
console.log(typeof(y.toString()));

//Converting Dates to Strings
let dt = Date();
console.log(typeof(dt.toString()));

//Converting Strings to Numbers
let str = 'This is a string';
str = +str;
console.log(str); // NaN

let str1 = '100';
str1 = +str1;
console.log(str1);

//Converting Booleans to Numbers
let bool = true;
console.log(Number(bool));

//Converting Dates to Numbers
let d = new Date();
console.log(Number(d));




