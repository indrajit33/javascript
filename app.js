
//Array mutated

const arlist = [  [1,2,3],
				  [4,5,6],
				  [7,8,9]
			  ];


			  //for loop
			  let len = arlist.length;
			  for(let i =0; i<(len); i++){

			  	for(let j=0; j<arlist[i].length; j++){

			  		console.log(arlist[i][j]);
			  	}
			  }

			  //foreach loop
			  arlist.forEach( (value,index) => {

			  		value.forEach((v,i)=>{
			  			console.log(`${i} ==> ${v}`);
			  		})
			  });

			  //for with entries

			  for(let [index,value] of arlist.entries()){
			  	for(let [ind,val] of value.entries()){

			  		console.log(`${ind} => ${val}`);
			  	}
			  }






