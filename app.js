// Object Litaral

const profile = {
  name: "john",
  children: [
    {
      name: "peter",
      getName() {
        return this.name;
      }
    },
    { name: "jill" }
  ],
  getName() { // here in this function it has the access of all the variable in the same level.
    return this.name;
  }
};


//console.log(profile.getName());
//console.log(profile.children[0].getName());
const getNameLoose = profile.getName;
console.log(getNameLoose());


