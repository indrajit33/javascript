//Closure

const func = (init) =>{

  let counter = init;

  let add = function(){
    counter += 1;
    return this;
  };

  let subst = function(){
    counter -= 1;
    return this;
  };

  let print = function(){
    return counter;
  };

  return {add,subst,print};
}

const x = func(2);

let y = x.add().add().subst().print();

console.log(y);

/*
 here when the add() function is called then the object(this) is returned.
 Then it becomes this.add().subst().print() and so on.
*/




