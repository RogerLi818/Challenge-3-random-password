// Assignment code here
//create string container of password chartors database.
var passwordCharacters= ""

//generate password function
var generatePassword = function(passwordLengh){
  window.alert("Welcome to Password Generater!")
  //ask how many charactors does customer need.
  var chaLengh = window.prompt('How many charactors do you need in your password? please choose from 8 to 128');
  //transfer string to integer
  var passwordLengh = parseInt(chaLengh)
  //charactors are only available from 8 to 128
  if (passwordLengh <8 || passwordLengh >128 ){
    window.alert("Please choose from 8 to 128")
    //if choose not in 8 to 128, return and ask again.
    return generatePassword()
  }
  //select password length between 8 to 128
  else {
    //add uppercase to the string database if confirm.
    var upperaseConfirm = window.confirm("Do you want uppercase charators in your password?");
    if (upperaseConfirm){
      passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    //add lowercase to the string database if confirm.
    var lowercaseConfirm = window.confirm("Do you want lowercase charators in your password?");
    if (lowercaseConfirm){
      passwordCharacters = passwordCharacters + "abcdefghijklmnopqrstuvwxyz"
    };
    //add number to the stgring database if confirm.
    var numericConfirm = window.confirm("Do you want numeric charators in your password?");
    if (numericConfirm){
      passwordCharacters = passwordCharacters + "0123456789"
    };
    //add special charactors to the stgring database if confirm.
    var specialConfirm = window.confirm("Do you want special charators in your password?");
    if (specialConfirm) {
      passwordCharacters = passwordCharacters + " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
    };
    //ask again if all choose NO.
    while (passwordCharacters === "" || passwordCharacters === null){
      window.alert("Password created invalid, please choose characters in your password")

    }
 
    //randomly pick password from passwordCharactors
    var result = " ";
    for (i=0; i < passwordLengh; i++){
      result += passwordCharacters.charAt(Math.floor(Math.random()* passwordCharacters.length)); 
    }
    return result;
  } 


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

/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/