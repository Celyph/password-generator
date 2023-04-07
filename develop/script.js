// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword() {
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()";

  var pwLength = window.prompt('How many characters would you like your password to contain?');
 if (pwLength < 8) {
  pwLength = 8;
}

  if (pwLength > 128) {
    pwLength = 128;
  }

  var pwNumbers = window.confirm('Click OK to confirm numeric characters.');
  var pwLowercase = window.confirm('Click OK to confirm lowercase characters.');
  var pwUppercase = window.confirm('Click OK to confirm uppercase characters.');
  var pwSpecial = window.confirm('Click OK to confirm special characters.');

  var allowed = "";
  if (pwNumbers) {
    allowed.concat(numbers)
  }
  if (pwLowercase) {
    allowed.concat(lowercase)
  }
  if (pwUppercase) {
    allowed.concat(uppercase)
  }
  if (pwSpecial) {
    allowed.concat(special)
  }

  var password = "";

for (var i = 0; i < pwLength; i++) {
  var c = getRandom(allowed);
  password += c;
}
return password
}

function getRandom (list) {
  return list[Math.floor(Math.random()*list.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
