//Closure


//Case 1
/*
here the counter will be incremented every time the add() function is called, But the problem is since the counter
variable is in global scope that is why any code can change the counter.

var counter = 0;

function add() {
  counter += 1;
}

add();
add();
add();
*/

//Case 2

/*
Here the problem is, whenever the function is called the counter is set as 0.

var counter = 0;

function add() {
  var counter = 0;
  counter += 1;
}

add();
add();
add();

*/

//In order to solve the problem we have to return the function that increments the counter without reseting it.

const func = (init) =>{

  let counter = init;

  let add = ()=> {
    return counter += 1;
  };

  return add;
}

const varX = func(1);
console.dir(varX); //Here closure is 1

console.dir(varX());
console.dir(varX); //Here closure is 2


console.dir(varX());
console.dir(varX); //Here closure is 3

/*

We can see here whenever we call the function the counter is not reset to 1, But it holds the value of the
previous call. 

This previous value is closure.


add()
arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:2:14)]
caller: (...)
length: 0
name: "add"
__proto__: ƒ ()
[[FunctionLocation]]: app.js:44
[[Scopes]]: Scopes[3]
0: Closure (func)
counter: 2
1: Script
func: (init) => {…}
varX: ()=> { return counter += 1; }
2: Global {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}


Closure is created when a child function [ add() ]
keeps the environment of the parent scope, even after the parent function has already executed.

more details ... https://www.geeksforgeeks.org/closure-in-javascript/

*/

