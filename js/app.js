'use strict';
(function(){
	var passwordBox = document.getElementById("passwordKeys");
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
	var randomCounter = 0;
	while(i <= 10){
		var number = getRandomNumber(0, 9);
		if(numbers.indexOf(number) == -1){
			numbers.push(number);
		}
		if(numbers.length === 10){
			i++;
		}
		randomCounter++;
	}
	console.log(randomCounter);
	//create buttons
	var numbersLength = numbers.length;
	for(let i = 0; i < numbersLength; i++){
		passwordBox.innerHTML += "<input type='button' name='choices' value="+ numbers[i] +" class='keys' onclick='showThis(this)'>";
	}
})();

//display text in password field
function showThis(arg){
	var password = document.getElementById("password");
	password.value += arg.getAttribute("value");
}

//clears password field
function clearField(){
	var password = document.getElementById("password");
	password.value = "";	
}

//deletes text
function deleteText(){
	var password = document.getElementById("password");
	var content = password.value;
	var length = content.length;
	var newValue = content.slice(0, length-1);
	password.value = newValue;
}

//function submit
function submit(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var credentials = "Username = " + username + ". Password = " + password;
	if(username === "" || password === ""){
		alert("One or more field is empty");
	}else{
		alert(credentials);
	}
	return false;
}