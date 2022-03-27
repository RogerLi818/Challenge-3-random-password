// Assignment code here

//generate password function
var generatePassword = function(){
  //create string container of password chartors database.
  var passwordCharacters= ""

  window.alert("Welcome to Password Generater!")
  //ask how many charactors does customer need.
  var chaLength = window.prompt('How many charactors do you need in your password? please choose from 8 to 128', "");
  //transfer string to integer
  var passwordLength = parseInt(chaLength)
  //charactors are only available from 8 to 128
  if (passwordLength <8 || passwordLength >128 ||  chaLength === ""){
        window.alert("Please choose from 8 to 128")
        //if choose not in 8 to 128, return and ask again.
        return generatePassword();       
  }
  else if(chaLength === null){
    window.alert("Thank you. See you next time")
  }
  //select password length between 8 to 128
  else {
    //add uppercase to the string database if confirm.
    var upperaseConfirm = window.confirm("Do you want uppercase charators in your password?");
    if (upperaseConfirm){
      passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    //add lowercase to the string database if confirm.
    var lowercaseConfirm = window.confirm("Do you want lowercase charators in your password?");
    if (lowercaseConfirm){
      passwordCharacters = passwordCharacters + "abcdefghijklmnopqrstuvwxyz";
    };
    //add number to the string database if confirm.
    var numericConfirm = window.confirm("Do you want numeric charators in your password?");
    if (numericConfirm){
      passwordCharacters = passwordCharacters + "0123456789";
    };
    //add special charactors to the string database if confirm.
    var specialConfirm = window.confirm("Do you want special charators in your password?");
    if (specialConfirm) {
      passwordCharacters = passwordCharacters + " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    };
    //ask again if all choose NO.
    while (passwordCharacters === "" || passwordCharacters === null){
      window.alert("Password created invalid, please choose at least one type of characters in your password");
      return generatePassword();
    };
  }//else end 
  //randomly pick password from passwordCharactors
  var result = " ";
  for (i=0; i < passwordLength; i++){
    result += passwordCharacters.charAt(Math.floor(Math.random()* passwordCharacters.length)); 
  }
  return result;
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

