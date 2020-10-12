// Assignment code here
var generatePassword = function() {

//available characters for use
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var output = '';

//get user input for password length(8-128)
var passwordLength = Number(window.prompt("How many characters would you like your password to be? Please choose between 8-128."));
while ((passwordLength < 8) || (passwordLength > 128)){
  alert("Please choose between 8-128.");
  passwordLength = Number(window.prompt("How many characters would you like your password to be? Please choose between 8-128."));
};

//get user input for characters
while (true) {
  var lowerCaseConfirm = confirm("Would you like to add lower case to your password?");
  var upperCaseConfirm = confirm("Would you like to add upper case to your password?");
  var numbersConfirm = confirm("Would you like to add numbers to your password?");
  var specialCharactersConfirm = confirm("Would you like to add special characters (!, @, #, etc.) to your password?");
if (lowerCaseConfirm || upperCaseConfirm || numbersConfirm || specialCharactersConfirm) {
  break;
}
else {
  alert("Please pick at least one of the options.")
}
};

//add characters to password

//if lowercase was confirmed, add lower case to output
var chosenCharacters = "";
if (lowerCaseConfirm) {
  chosenCharacters += lowerCase;
}
//if uppercase was confirmed, add upper case to output
if (upperCaseConfirm) {
  chosenCharacters += upperCase;
}
//if numbers were confirmed, add numbers to output
if (numbersConfirm) {
  chosenCharacters += numbers;
}
//if special characters were confirmed, add special characters to output
if (specialCharactersConfirm) {
  chosenCharacters += specialCharacters;
}

//mix characters based on user choices
for (var i = 0; i < passwordLength; i++) {
  output += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
}
return output;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var output = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = output;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);