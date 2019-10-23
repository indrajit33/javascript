// Call, Apply & Bind 

const profile = {
  name: "john",
  age:20,
};

const setProfile = function(name,age){
	this.name = name;
	this.age = age;
}

//Call
setProfile.call(profile,'Indrajit',34);
console.log(profile);

//Apply 
const params = ['Indrajit',34]
setProfile.apply(profile,params);
console.log(profile);

//Bind

const newProfile = setProfile.bind(profile);
newProfile("Indrajit", 34);
console.log(profile);


