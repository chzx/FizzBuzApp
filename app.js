$(document).ready(function(){

function fizzBuzzNumEvaluate() {

		// After form is submitted appended text here says "Fizz", "Buzz", "Fizz Buzz" or "Sorry, please try again"
		var messageoutput = $("#messageoutput");

		// Capture and evaluate number when pressing [Enter] key
		$("#enter-number-field").on("keypress", function(event) {

			if (event.which == "13") {
				event.preventDefault();
				// Remove number listed in fizzBuzzOutputMsg area if needed
				messageoutput.html("");
				// Get [input] text variable
				var num = +$(this).val();
				// Conditionals that display error msgs
			 	if(isNaN(num) || num != Math.floor(num) || num > 1000 || num < 1) {
					messageoutput.append("Sorry, you need to enter a whole number from 1 - 100 inclusive. Please try again.");
				} else {
					// For loop runs only after errors not met above
					for(var i = 1; i <= num; i++) {
						if(i % 3 == 0 && i % 5 == 0) {
							messageoutput.append("Fizz Buzz!<br/>");
						} else if(i % 3 == 0) {
							messageoutput.append("Fizz!<br/>");
						} else if(i % 5 == 0) {
							messageoutput.append("Buzz!<br/>");
						} else {
							messageoutput.append(i + "<br/>");
						}
					}
				}
				// Submitting button replaces prior input[value] attribute with an empty string
				$(this).val("");
			}
		});
		// [Reset Number] button to remove outputted number from field
		$("#reset-number").on("click", function(event) {
			event.preventDefault();
			messageoutput.html("");
		});
	}
	fizzBuzzNumEvaluate();
});
// End jQuery Ready Function

