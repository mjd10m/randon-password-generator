// Assignment code here

//const to define characters allowed for each type
const LOWERCASECHARACTERS = 'qwertyuioplkjhgfdsazxcvbnm'
const UPPERCASECHARACTERS = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
const NUMBERCHARACTERS = '0123456789'
const SPECIALCHARACTERS = '!#$%&()*+,-./:;<=>?@[^_]`{}\|~'

// function which generates password when Generate Button is clicked on webpage
function generatePassword(passwordLength) {
  
  var passwordLengthValidated = passwordLength 
  if (passwordLengthValidated === undefined) {
    passwordLengthValidated = validatePasswordLen();
  }
  //Prompts user to select which character types they want to include
  var charTypeLowercase = window.confirm("Include lower case characters? Ok for Yes Cancel for No.");
  var charTypeUppercase = window.confirm("Include upper case characters? Ok for Yes Cancel for No.");
  var charTypeNumber = window.confirm("Include numbers? Ok for Yes Cancel for No.");
  var charTypeSpecial = window.confirm("Include special characters? Ok for Yes Cancel for No.");
  
  //Checks that atleast one character type was selected if not loop back through prompts
  if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumber === false && charTypeSpecial === false) {
    window.alert("Please include at least one of the character types");
    generatePassword(passwordLengthValidated);
  }
  
  var passwordUnshuffled = createPassword(passwordLengthValidated, charTypeLowercase, charTypeUppercase, charTypeNumber, charTypeSpecial);
  
  var finalPassword = shuffleArray(passwordUnshuffled)

//changes final password from array to string
  return finalPassword.join('')
} 

//Prompts user to input character length and validates whether input is valid 
function validatePasswordLen() {
  
  var passwordLength = window.prompt("Enter Password Length (Minimum length: 8 Maximum length: 128");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please select a number length between 8 and 128 characters");
    passwordCharLen();
  }
  return passwordLength
}

//Randomly creates a password array
function createPassword(passwordLengthValidated, charTypeLowercase, charTypeUppercase, charTypeNumber, charTypeSpecial) {
  var charTypeUsed = []

  if (charTypeLowercase === true) {
    charTypeUsed.push('lower')
  }
  if (charTypeUppercase === true) {
    charTypeUsed.push('upper')
  }
  if (charTypeNumber === true) {
    charTypeUsed.push('number')
  }
  if (charTypeSpecial === true) {
    charTypeUsed.push('special')
  }
  
  shuffleArray(charTypeUsed);

  var passwordCharArray = []
  for (i = 0; i < passwordLengthValidated; i++) {
    var limit = charTypeUsed.length
    var passwordChar = ''

    if(i < limit) {
      passwordChar = determinePassChar(charTypeUsed[i])

      } else {
        var randomCharType = charTypeUsed[Math.floor(Math.random() * charTypeUsed.length)]
        passwordChar = determinePassChar(randomCharType)
      }
      passwordCharArray.push(passwordChar)
    } 
  return passwordCharArray
}

//randomly selects a character from the string passed to it
function determinePassChar (charType) {
  var char = ''
  switch(charType) {
    case 'lower':
      char = LOWERCASECHARACTERS.charAt(Math.floor(Math.random() * LOWERCASECHARACTERS.length));
      return char;
    case 'upper':
      char = UPPERCASECHARACTERS.charAt(Math.floor(Math.random() * UPPERCASECHARACTERS.length));
      return char;
    case 'number':
      char = NUMBERCHARACTERS.charAt(Math.floor(Math.random() * NUMBERCHARACTERS.length));
      return char;
    case 'special':
      char = SPECIALCHARACTERS.charAt(Math.floor(Math.random() * SPECIALCHARACTERS.length));
      return char;

  }
}

//shuffles the values within the array given
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);;
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array
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
