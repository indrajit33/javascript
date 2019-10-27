// Async Await

const getData = async() => {

const willCleanTheRoom = new Promise( (resolve,reject) => {

  const roomCleaningStatus = true;

  setTimeout( ()=> {
  	if(roomCleaningStatus){
    	resolve('Room Is clean');
  	} else{
    	reject('Room Is dirty');
  	}
  },2000);

});

const removeGarbage = new Promise( ( resolve, reject )=>{

  const removeGarbageStatus = true;

  setTimeout( ()=>{

    if(removeGarbageStatus){
      resolve('Garbage removed');
    }else{
      reject('Garbage not removed');
    }

  },3000);


});

const getrewards = new Promise( ( resolve, reject ) => {

  const getRewardStatus = true;

	setTimeout( ()=>{
		if(getRewardStatus){
    		resolve('Reward Given');
  		}else{
    		reject('Reward Not Yet Given');
  		}
	},5000);

});

try{
	let x = await willCleanTheRoom;
	console.log(x);
} catch(e){
	console.log(e);
	return;
}

try{
	let y = await removeGarbage;
	console.log(y);
} catch(e){
	console.log(e);
	return;
}

try{
	let z = await getrewards;
	console.log(z);
}catch(e){
 	console.log(e);
 	return;
}

}

console.log('Before Calling async funtion.');

getData();

console.log('Async funtion already called, and it\'s woking');

/*

https://www.geeksforgeeks.org/async-await-function-in-javascript/

It wait's for the result of 1st promise to come and then 2nd promise will get executed.

Result ::

Before Calling async funtion.
app.js:80 Async funtion already called, and it's woking
app.js:52 Room Is clean
app.js:60 Garbage removed
app.js:68 Reward Given

We know that javascript is synchronous, (i.e: if there are 5 jobs in the queue and if the 2nd jobs needs sometime
 to complete it's task then it will allow 3rd job to be executed and so on...) and that is why we see the last 
 message ( Async funtion already called, and it's woking ) at the 2nd line.

 We use async await to make promise asynchronous.

 Here in this example there are 3 pomises 
 1> willCleanTheRoom
 2> removeGarbage
 3> getrewards

 and the 1st promise has the waiting time of 5 secs, 2nd has got 3 secs and 3rd has got 2 secs. Then javascript would have executed the 3rd promise 1st and then the 2nd and then the 1st.

 But since we used async await it became asynchronous.... that is why it waited for the 1st promise to complete it's task and then execute the second one and so on.

 And since the other 2 console logs are outside the async function it executed at first. 

*/