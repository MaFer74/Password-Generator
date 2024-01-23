// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  var multiSelect =[];


// Function for getting a random element from an array
function generateArray(secondArray) {
	for (var i = 0; i < secondArray.length; i++) {
		multiSelect.push(secondArray[i]);
	}
}
// Function to generate password with user input
function generatePassword() {
    alert("Please confirm at least one of the following options for the password to be generated")
	var uppercase = confirm("Would you like your password to have upperCases? Click Ok to confirm or Cancel to skip this option");
	var lowercase = confirm("Would you like your password to have lowerCase? Click Ok to confirm or Cancel to skip this option");
	var symbols = confirm("Would you like your password to have Special Characters? Click Ok to confirm or Cancel to skip this option");
	var numbers = confirm("Would you like your password to have Numbers? Click Ok to confirm or Cancel to skip this option");
	if (uppercase === false && lowercase === false && symbols === false && numbers === false){
        do{
            alert("At least one of the options need to be confirmed to continue")
            uppercase = confirm("Would you like your password to have upperCases? Click Ok to confirm or Cancel to skip this option");
            lowercase = confirm("Would you like your password to have lowerCase? Click Ok to confirm or Cancel to skip this option");
            symbols = confirm("Would you like your password to have Special Characters? Click Ok to confirm or Cancel to skip this option");
            numbers = confirm("Would you like your password to have Numbers? Click Ok to confirm or Cancel to skip this option");	
        }while (uppercase === false && lowercase === false && symbols === false && numbers === false )
	}
    var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");
	if(!(Number(keyLength)%1===0) || (keyLength < 8 || keyLength > 128)){
		do {
			alert("Please input a Number between 8 and 128");
			keyLength = prompt("How many characters would you like in your password (between 8 and 128)?");
		} while (!(Number(keyLength)%1===0) || (keyLength < 8 || keyLength > 128));
	}
    var charLimit = parseInt(keyLength);
   
    
// Conditions for password generation
	if (lowercase) {
        generateArray(lowerCasedCharacters);
        }
      if (uppercase) {
          generateArray(upperCasedCharacters);
      }
      if (numbers) {
          generateArray(numericCharacters);
      }
      if (symbols) {
          generateArray(specialCharacters);
      }
      
      var finalPassword = ""
      for (var i = 0; i < charLimit; i++) {
        var rng =[Math.floor(Math.random() * multiSelect.length)];
        // or finalPassword += possibleCharacters[rng];
        finalPassword = finalPassword + multiSelect[rng];
      }
      return finalPassword;
  }

 // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 



//test
