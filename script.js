const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
var operators = ['+', '-', 'x', '÷', '^'];

buttons.forEach((item) => {
    item.onclick = () => {
    if (item.id == "clear") {
        display.innerText = "";
    } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText =  string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id =="equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
    } else {
        display.innerText += item.id;
    }
}
})

$( "#target" ).keypress(function( event ) {
    if ( event.which == 48 ) {
    // Return #0
}
if ( event.which == 49 ) {
    // Return #1
}
// and so on...
});

//adding keyboard input functionality
document.onkeydown = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var input = document.querySelector('.display');
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
	// Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

 // Target each keypress and update the input display
  
    if(key_press==1) {
      input.innerHTML += key_press;
  }
    if(key_press==2) {
      input.innerHTML += key_press; 
  }
    if(key_press==3 || key_code == 32) {
      input.innerHTML += key_press; 
  }
    if(key_press==4) {
      input.innerHTML += key_press; 
  }
    if(key_press==5) {
      input.innerHTML += key_press; 
  }
    if(key_press==6 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==7) {
      input.innerHTML += key_press; 
  }
    if(key_press==8 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==9) {
      input.innerHTML += key_press; 
  }
    if(key_press==0) {
      input.innerHTML += key_press;
  }
  
  // Cature operators and prevent from addint two consecutuve operators
  
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector('.display').innerHTML += '+';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      document.querySelector('.display').innerHTML += '-';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      document.querySelector('.display').innerHTML += 'x';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      document.querySelector('.display').innerHTML += '÷';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
      document.querySelector('.display').innerHTML += '^';
  }
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
      input.innerHTML = eval(equation);
      //reset decimal added flag
      decimalAdded =false;
  }
    if(key_code==8 || key_code==46) {
			input.innerHTML = '';
			decimalAdded = false;
  }
}