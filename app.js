// Arrow function

    let People = function(person, age) { 

        this.person = person; 
        this.age = age; 
        this.info = function() { 
  
         // logs People 
         document.write(this); 

         console.dir(this);
  
         setTimeout(function() { 
            /*
            In case of normal function this refers to the scope inside the current function, Hence in the result
            it is showing undefined.
            */
           document.write(this.person + " is " + this.age +  " years old "); //undefined is undefined years old
          }, 3000); 

         setTimeout(() => { 
            /*
			In case of Arrow function this refers to the laxical scope of the current function.
            */
           document.write(` ${this.person}  ${this.age}  years old`); //John 21 years old
          }, 3000); 
        } 
    }  
   let person1 = new People('John', 21); 
  
person1.info(); 

