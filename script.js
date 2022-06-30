// Assignment code here
const LOWERCASECHARACTERS = 'qwertyuioplkjhgfdsazxcvbnm'
const UPPERCASECHARACTERS = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
const NUMBERCHARACTERS = '0123456789'
const SPECIALCHARACTERS = '!"#$%&"()*+,-./:;<=>?@[^_]`{}\|~'


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
  debugger;
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
debugger;
function createPassword(passwordLengthValidated, charTypeLowercase, charTypeUppercase, charTypeNumber, charTypeSpecial) {
  var charTypeUsed = []
  
  var passwordUnshuffled = []
  

  if (charTypeLowercase === true) {
    charTypeUsed.push('lower')
  }
  if (charTypeUppercase === true) {
    charTypeUsed.push('UPPER')
  }
  if (charTypeNumber === true) {
    charTypeUsed.push('number')
  }
  if (charTypeSpecial === true) {
    charTypeUsed.push('special')
  }
  
  shuffleArray(charTypeUsed);
  
  for (i = 0; i < passwordLengthValidated; i++) {
    var limit = charTypeUsed.length - 1
    var passwordChar = ''
    if(i < limit) {
      passwordChar = determinePassChar(charTypeUsed[i])

      }
    }
    passwordUnshuffled.push(passwordChar)

}

function determinePassChar (charType) {
  var char = ''
  switch(charType) {
    case 'lower':
      char = LOWERCASECHARACTERS.charAt(Math.floor(Math.random() * LOWERCASECHARACTERS.length));
      return char;
    case 'upper':
      char = UPPERCASECHARACTERS.charAt(Math.floor(Math.random() * UPPERCASECHARACTERS.length));
      return char;
    case 'number'
  }
}

function shuffleArray(charTypeUsed) {
  let currentIndex = charTypeUsed.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);;
    currentIndex--;

    [charTypeUsed[currentIndex], charTypeUsed[randomIndex]] = [charTypeUsed[randomIndex], charTypeUsed[currentIndex]];
  }
  return charTypeUsed
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
