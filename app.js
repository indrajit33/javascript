//Promise

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

  if(removeGarbageStatus){
    resolve('Garbage removed');
  }else{
    resolve('Garbage not removed');
  }

});

const getrewards = new Promise( ( resolve, reject ) => {

  const getRewardStatus = false;

  if(getRewardStatus){
    resolve('Reward Given');
  }else{
    resolve('Reward Not Yet Given');
  }
});

willCleanTheRoom.then((res) => {
  console.log(res);
  return removeGarbage;

}).then((res) => {
  console.log(res);
  return getrewards;

}).then((res)=>{
  console.log(res);

}).catch(function(res){
  console.log(res);

}).finally(function(){
  console.log('Final');

});

//Promise all

Promise.all([willCleanTheRoom,removeGarbage,getrewards]).then((res) => {
  console.log(res);
}).catch((res)=>{
  console.log(res);
});

/*

Syntax of promise
==================

let x = function(resolve,reject){
  
  if(true)
   resolve(' xx  xx');
  else
   reject(' yy  yy');
}

const nameOfpromise = new Promise(x);


Call a promise
==============

nameOfpromise.then().catch().final();

then() ,catch() ,final() all the methods takes a function(res){} as parameter.  And this res contain the message that the promise send.

*/



