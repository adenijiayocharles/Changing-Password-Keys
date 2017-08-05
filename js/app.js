(function(){

	var numbers = [];

	function getRandomNumber(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var i = 0;
	while(i <= 10){
		var number = getRandomNumber(0, 9);
		if(numbers.indexOf(number) == -1){
			numbers.push(number);
		}
		if(numbers.length === 10){
			i++
		}
	}
	document.write(numbers);
	console.log(numbers);
})();