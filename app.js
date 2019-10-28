// Debounce function

window.onload = function(){

  document.getElementById("myid").addEventListener('click', debounce(() => {
      console.log('Clicked');
    }, 2000 ) );
    


  function debounce(fn, delay=2000){

    let debounceTimer;
    //This is the callback in the addEventListener.
    return function(){
      //Resets the timmer overtime the function being called.
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout( ()=>{ 
        this.style.color = 'blue';
        fn(); 
      }, delay);
    }
  }

}
