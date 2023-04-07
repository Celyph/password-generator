/*START assignment code*/
var generateBtn = document.querySelector("#generate");
/*END assignment code*/

/*START write password function*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
/*END write password function*/

/*START password variables*/
function generatePassword() {
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()";
/*END password variables*/


/*START window prompts*/
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
/*END window prompts*/

/*START allowed password variables based on window prompts*/
  var allowed = "";
  if (pwNumbers) {
    allowed = allowed.concat(numbers)
  }
  if (pwLowercase) {
    allowed = allowed.concat(lowercase)
  }
  if (pwUppercase) {
    allowed = allowed.concat(uppercase)
  }
  if (pwSpecial) {
    allowed = allowed.concat(special)
  }
/*END allowed password variables based on window prompts*/

/*START password generation*/
  var password = "";

for (var i = 0; i < pwLength; i++) {
  var c = getRandom(allowed);
  password += c;
}
return password
/*END password generation*/
}

/*START helper function for random value from list*/
function getRandom (list) {
  return list[Math.floor(Math.random()*list.length)];
}
/*END helper function for random value from list*/

/*START event listener for button click*/
generateBtn.addEventListener("click", writePassword);
/*END event listener for button click*/
