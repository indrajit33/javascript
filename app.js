//Sub classes

class Car{

	constructor(color){
		this._color = color;
	}

	getColor(){
		return this._color;
	}

	setColor(color){
		this._color = color;
	}
}

class ToyCar extends Car{
/*
Here the construtor in the clild class is mandatary, since it's parent class has a constructor and it takes color 
as parameter. So using super() function we have to set the color in it's parent class.

Here in the back the prototypal inheritance is running
*/
	constructor(color,model){
		super(color);
		this._model = model;
	}

	getModel(){
		return this._model;
	}
}

let toyC = new ToyCar('Blue','SUV');

console.dir(toyC);

console.log(` Color:: ${toyC.getColor()}  Model:: ${toyC.getModel()}`);

