//prototypal inheritance
const Car = function(color){  //We used capital letter to denote class.
	//if (!new.target) throw 'Car() must be called with new';
	this._color = color;
};

Car.prototype.getColor = function(){
	return this._color;
}

const ToyCar = function(color,model){
	Car.call(this,color);
	this._model = model;
}

ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.getModel = function(){
	return this._model;
}

ToyCar.prototype.super = function(){
	//Car.call(this,color); did not worked

	return this.getColor();
}

const greyCar = new Car('Grey');
console.log(greyCar.getColor());

const suvToyCar = new ToyCar('Yellow','SUV');
console.dir(suvToyCar.getColor());

console.dir(suvToyCar.super());

/*
Note:: Here Car is the parent class and ToyCar is the child class. We are extending the child class from the parent 
class by Toycar.prototype = Object.create(Car.prototype); 

Here we are replacing the prototype of child class (ToyCar) with the prototype of parent class.

Now to call the constructor of parent class from the child class constructor we use Car.call(this,color).

*/
