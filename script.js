var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charSpecial = [".", ":", "\\", "\&", "\{", "\}"];

// launch the modal and ask for input while describing constraints
var userNumChars = prompt("Please input the number of characters you'd like in your password (must be between 8 and 128)");

// ask user if they'd like to include each character type successively
// var charUpper = alert("Would you like to include upper case characters?");
// var charLower = confirm("Would you like to include upper case characters?");
// var charNumber = confirm("Would you like to include upper case characters?");
// var charSpecial = confirm("Would you like to include upper case characters?");

if (confirm("upper case?")) {
    txt = "upper will be included";
  } else {
    txt = "upper will not be included";
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);