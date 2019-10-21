//prototypal inheritance
const Car = function(color){  //We used capital letter to denote class.
	if (!new.target) throw 'Car() must be called with new';
	this._color = color;
};

const blueCar = new Car('Blue'); //We used new keyword to create a object.
console.log(blueCar._color); 

//Now if we call a class without new keyword,then the class will act like a function. And color
//will be set to window._color not in this._color, since object is not created so this will not work.

const redCar = Car('red'); 
//console.log(redCar._color); // undefined
console.log(window._color); //red
