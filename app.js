//setTimeout  and setInterval

let intervalID;;

intervalID = window.setInterval(() => {
  console.log(1);
}, 2000);

console.log(intervalID)
window.setTimeout(() => {
  clearInterval(intervalID);
},2001);




