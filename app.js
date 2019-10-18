
//Array mutated

const glist = ['one','two','three'];

glist.push('four');

console.log(glist);

let x = glist.pop();

console.log(x);

console.log(glist);


// Now to add something in the front of an array

glist.unshift('zero');

console.log(glist);

// to remove

glist.shift();

//To add or remove items in the middle

console.log(glist);
glist.splice(1,0,"2");
console.log(glist);







