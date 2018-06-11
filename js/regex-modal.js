// JavaScript Document


var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// close modal
span.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// form regular expression
var form = document.querySelector('form');

			form.addEventListener('submit', function(e) {
			e.preventDefault();
			checkFirstName(this.firstName.value);
			checkEmail(this.email.value);
			checkText(this.textField.value);
			});
// Checks for two letters
function checkFirstName(firstName) {
	var regName = /^\w{2,}$/;
	
	if (firstName.match(regName)) {
		
		btn.onclick = function() {
    		modal.style.display = "block";
		};
		return true;
		
	} else {

		alert("Please enter your name. For example: Manny Quin Starman");
		return false;
  }
}
// Checks for a valid email address. x@x.xx
function checkEmail(email) {
	var regEmail = /^([\w\-\.]){1,}\@([\w\-\.]){1,}\.([A-Za-z]){2,4}$/;
	
	if (email.match(regEmail)) {
		
		btn.onclick = function() {
    		modal.style.display = "block";
		};
		return true;
		
	} else {
		
		alert("Please enter a valid E-Mail address. Example: someone@somewhere.com");
		return false;
  }
}
// Checks for any input in textfield. 
function checkText(textField) {
	var regText = /^[a-zA-Z0-9_.-]{1,}$/;
	
	if (textField.match(regText)) {
		
		btn.onclick = function() {
    		modal.style.display = "block";
		};
		return true;
		
	} else {
		
		alert("Please fill in the text field, ask us a question or tell us something interesting.");
		return false;
  } 
}