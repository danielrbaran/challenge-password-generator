// setup vars with a few characters and I'll figure out the full set later (probably separate arrays for upper, lower, nums and special chars)

var tempChars = ["A", 9, "%"];
console.log(tempChars);

// launch the modal and ask for input while describing constraints
var userNumChars = prompt("Please input the number of characters you'd like in your password (must be between 8 and 128)");

// ask user if they'd like to include each character type successively
var charUpper = confirm("Would you like to include upper case characters?");