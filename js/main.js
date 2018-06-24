function askQuestions () {

	var firstName = prompt('What is your first name');
	var lastName = prompt('What is your last name');
	alert('Hello, '+ firstName + ' ' + lastName);


	var age = prompt('How old are you');
	age = parseInt(age);


	if (age >= 18) { // age 18 or over
		alert('You are an adult.');
	} else if (age >= 13) { // between the ages of 13-17
		alert('You are a teenager.');
	} else { // otherwise if you are below 13 = child
		alert('You are a child.');
	}



	if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim() !== 'assembly') { //Checks if name is EQUAL to General and last name is NOT Assembly
		alert('Hello General');
	}



	var faveColour = prompt('What is your favvourite colour?');

	faveColour = faveColour.toLowerCase().trim(); 


	var colourList = ['red', 'blue', 'green', 'yellow'];

		for (var i = 0; i < colourList.length; i++) { //creates loop

			if (faveColour === colourList[i]) { // this keyword corresponds to colours in the colourList

			$('h1').css('color', faveColour);
		}

	};

}













// When the page has loaded
$(function () {

	$('img').on('click', askQuestions);

	// when the user clicks an h3
	$('h3').on('click', function (){
	
		// Toggle the next element
		$(this).next().slideToggle(500); /* will hide the 'p' element after the 'h2' element on the webpage when clicked and then reveal again when clicked */


	});

});

