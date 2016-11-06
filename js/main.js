/* alert($);
 $ is a short cut name of jQuery
 "alert" on JS -> a pop up box */

 //$(document).on (function) {}
function interrogate() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	// firstName + ' ' (this refer to 'space' between firstname and lastname.  otherwise first and last name will appear in one word on the page
		console.log(fullName);

	function ageQuestion(message) {

		var age = prompt(message);
		age = parseInt(age);

		if (isNaN(age)){
			ageQuestion('How old are you? use numbers, please.');
			return false; //if the user doesn't type number, then the system won't run the following
		} 

		if (age >= 18) {
		console.log('User is an adult');
			} 
		// if (xxx)-> xxx must be true so JS know it's true and goes to action whatever write inside {}.  otherwise, it will skip {} 
		else if (age >= 13) {
			console.log('User is a teenager');
		} else {
			console.log('User is a child');
		}
		// must in order (if --> else if (can be multiple times) --> end with "else")
	}

	ageQuestion('How old are you?'); //must be placed after we teach JS all of the above logic

	/* exercise: if the user's first name is 'General' and their last name is NOT 'Assembly', then greet the general! (Hint: use console.log)
	*/
	if ((firstName == 'General' && lastName !== 'Assembly') || (firstName == 'general' && lastName !== 'assembly')) {
		alert('Hello there!'); // "alert" makes it pop up on browser
	} else if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() === 'assembly') {
		console.log('Sorry! please enter again!'); //"console.log only shows the message in console but not browser
	} else {
		console.log('Sorry! you are not qualified!');
	}

	/*if (firstName === 'General' && lastName !== 'Assembly') {
		console.log ('hello');
	}
	if (firstName === 'General') {
	if (lastName !== 'Assembly') {
			console.log ('Greetings, general!');
			}
	} */

	/*if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly'){
	console.log('hello, general!');
	} */

	var faveColor = prompt('What is our favourite color?');
	faveColor = faveColor.toLowerCase().trim(); //trim() that means trim the actual "space" when user types
	if (faveColor === 'red' ||
		faveColor === 'green' ||
		faveColor === 'blue' ||
		faveColor === 'yellow') {
		$('h1').css('color', faveColor);
	}

}


// when the page loads
$(function() {

	$('img').on('click', interrogate);

	//when the user clicks a h3
	$('h3').on('click', function() {
	//hide the next element
		$(this).next().slideToggle(400);
	});
		//(this) elemenet means h3 now as it defines in jQuery
		//e.g. $(this).next().toggle();
		//e.g. $(this).next().slideToggle(4000); --> Toggle "T" has to be upper case
		//$(this).next().hide();
		//you can leave the bracket empty then jQuery knows what's next after "this"
		//JS is case sensitive language

});