(function(){
	//numbers array
	var numbers = [];

	//random number generator gotten from Mozilla Developer's Network
	function getRandomNumber(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// counter
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

	//create buttons
	var numbersLength = numbers.length;
	var buttons = "";
	for(var i = 0; i < numbersLength; i++){
		buttons += "<input type='button' name='choices' value="+ numbers[i] +">";
	}
	document.write(buttons);
})();