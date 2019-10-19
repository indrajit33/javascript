
const profile = {
	name: "Indrajit",
	age: 30,
	single: false,
	"got a job":true,
	kids:[{name:"Indrani",age:2},{name:"Anshumit",age:3}]
};


console.log(profile.name);

console.log(profile['name']);

console.log(profile['kids'][1].name);

console.log(profile.kids[1].name);

//To delete a property

delete profile['got a job'];

console.log(profile);

//To check whether a propety exist or not.
console.log(profile.hasOwnProperty('got a job'));

//object of object
const x = {y:{},z:{}};

//array of object
const y = [{},{}];

//Itaration of objects
//for in 
for(let profileKeys in profile){
	console.log(` Key = ${profileKeys} and value = ${profile[profileKeys]}`);
}

//for of
for(let profileK of Object.keys(profile)){
	console.log(` Key = ${profileK} and value = ${profile[profileK]}`);
}





