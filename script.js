// Assignment code here
const LOWERCASECHARACTERS = 'qwertyuioplkjhgfdsazxcvbnm'
const UPPERCASECHARACTERS = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
const NUMBERCHARACTERS = '0123456789'
const SPECIALCHARACTERS = '!#$%&()*+,-./:;<=>?@[^_]`{}\|~'


function generatePassword(passwordLength) {
  
  var passwordLengthValidated = passwordLength 
  if (passwordLengthValidated === undefined) {
    passwordLengthValidated = validatePasswordLen();
  }
  //change to object?
  var charTypeLowercase = window.confirm("Include lower case characters? Ok for Yes Cancel for No.");
  var charTypeUppercase = window.confirm("Include upper case characters? Ok for Yes Cancel for No.");
  var charTypeNumber = window.confirm("Include numbers? Ok for Yes Cancel for No.");
  var charTypeSpecial = window.confirm("Include special characters? Ok for Yes Cancel for No.");
  
  if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumber === false && charTypeSpecial === false) {
    window.alert("Please include at least one of the character types");
    generatePassword(passwordLengthValidated);
  }
  
  var passwordUnshuffled = createPassword(passwordLengthValidated, charTypeLowercase, charTypeUppercase, charTypeNumber, charTypeSpecial);
  
  var finalPassword = shuffleArray(passwordUnshuffled)


  return finalPassword.join('')
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
