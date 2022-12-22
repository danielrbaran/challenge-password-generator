// setup vars with a few characters and I'll figure out the full set later (probably separate arrays for upper, lower, nums and special chars)

var tempChars = ["A", 9, "%"];
console.log(tempChars);

// launch the modal and ask for input while describing constraints
var userNumChars = prompt("Please input the number of characters you'd like in your password (must be between 8 and 128)");

// ask user if they'd like to include each character type successively
var charUpper = confirm("Would you like to include upper case characters?");











// Starter code below

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);