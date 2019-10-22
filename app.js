//Classes

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

let blueCar = new Car('Blue'); 

console.log(blueCar.getColor());

blueCar.setColor('Red');

console.log(blueCar.getColor());

