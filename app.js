//Promise

const getData = async() => {

const willCleanTheRoom = new Promise( (resolve,reject) => {

  const roomCleaningStatus = true;

  if(roomCleaningStatus){
    resolve('Room Is clean');
  } else{
    reject('Room Is dirty');
  }

});

const removeGarbage = new Promise( ( resolve, reject )=>{

  const removeGarbageStatus = true;

  setTimeout( ()=>{

    if(removeGarbageStatus){
      resolve('Garbage removed');
    }else{
      resolve('Garbage not removed');
    }

  },5000);


});

const getrewards = new Promise( ( resolve, reject ) => {

  const getRewardStatus = true;

  if(getRewardStatus){
    resolve('Reward Given');
  }else{
    resolve('Reward Not Yet Given');
  }
});

let x = await willCleanTheRoom;
let y = await removeGarbage;
let z = await getrewards;

console.log(x);

console.log(y);

console.log(z);

}

getData();

/*

https://www.geeksforgeeks.org/async-await-function-in-javascript/

It wait's for the result of 1st promise to come and then 2nd promise will get executed.


*/





