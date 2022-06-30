// Assignment code here
const LOWERCASECHARACTERS = 'qwertyuioplkjhgfdsazxcvbnm'
const UPPERCASECHARACTERS = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
const NUMBERS = '0123456789'
const SPECIALCHARACTERS = '!"#$%&"()*+,-./:;<=>?@[\]^_`{}|~'


function generatePassword(passwordLength) {

  var passwordLengthValidated = passwordLength 
  if (passwordLengthValidated === undefined) {
    passwordLengthValidated = validatePasswordLen();
  }
  //change to object?
  var charTypeLowercase = window.confirm("Include lower case characters?");
  var charTypeUppercase = window.confirm("Include upper case characters?");
  var charTypeNumber = window.confirm("Include numbers?");
  var charTypeSpecial = window.confirm("Include special characters?");
  
  if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumber === false && charTypeSpecial === false) {
    window.alert("Please include at least one of the character types");
    generatePassword(passwordLengthValidated);
  }
  createPassword(passwordLengthValidated, charTypeLowercase, charTypeUppercase, charTypeNumber, charTypeSpecial);


} 

function validatePasswordLen() {
  
  var passwordLength = window.prompt("Enter Password Length (Minimum length: 8 Maximum length: 128");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please select a number length between 8 and 128 characters");
    passwordCharLen();
  }
  return passwordLength
}

function createPassword(passwordLengthValidated, charTypeLowercase, charTypeUppercase, charTypeNumber, charTypeSpecial) {
  var charTypeAll = LOWERCASECHARACTERS + UPPERCASECHARACTERS + NUMBERS + SPECIALCHARACTERS
  for (var i = 0; i < passwordLengthValidated; i++) {
    var result = charTypeAll.charAt(Math.floor(Math.random() * passwordLengthValidated));
  }
  console.log(result)
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
