// Throttle function

window.onload = function(){

  document.getElementById("myid").addEventListener('click', throttle(() => {
      console.log('Clicked');
    }, 2000 ) );
    


  function throttle(fn, delay=2000){

  const now = new Date().getTime();
  let last = 0;
  if (now - last < delay) {
    return;
  }
   last = now;
    return fn();
  }

}
