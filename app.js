//Exercise 2

//with for loop

/*
function primeCheck(num){

	if(num === 1)
		return false;
	for(i = 2; i <= Math.floor(num/2); i++){
		if(num % i == 0){
			return false;
			exit();
		}
	}

	return true;
}

console.log(primeCheck(36));


*/

//with while loop

function primeCheck(num){

	if(num === 1)
		return false;

	i = 2; 
	while(i <= Math.floor(num/2)){

		if(num % i == 0){
			return false;
			exit();
		}
		i++;
	}

	return true;
}

if(primeCheck(4))
{
	console.log('Is Prime');
}
else
{
	console.log('Not Prime');
}
