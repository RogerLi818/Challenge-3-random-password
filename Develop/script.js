// Assignment code here

//generate password function
var generatePassword = function(){


  //function for 4 different characters be in passwordCharacters container
  var fourCha = function(){
    //add uppercase to the string database if confirm.
    var upperaseConfirm = window.confirm("Do you want uppercase characters in your password?");
    if (upperaseConfirm){
      passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    //add lowercase to the string database if confirm.
    var lowercaseConfirm = window.confirm("Do you want lowercase characters in your password?");
    if (lowercaseConfirm){
      passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    };
    //add number to the string database if confirm.
    var numericConfirm = window.confirm("Do you want numeric characters in your password?");
    if (numericConfirm){
      passwordCharacters += "0123456789";
    };
    //add special characters to the string database if confirm.
    var specialConfirm = window.confirm("Do you want special characters in your password?");
    if (specialConfirm) {
      passwordCharacters += " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    };
  }// fourCha ends


  //create string container of password chartors database.
  var passwordCharacters= ""
  //welcome word
  window.alert("Welcome to Password Generater!")

  //ask how many characters does customer need.
  var chaLength = window.prompt('How many characters do you need in your password? please choose from 8 to 128', "");
  //transfer string to integer
  var passwordLength = parseInt(chaLength);
  //prompt only accept numbers
  var isNumber = Number.isInteger(passwordLength); 
  if (isNumber === false && chaLength !==null){
    window.alert("Pleae enter valid number from 8 to 128");
    return generatePassword();
  }

   //characters length is only available from 8 to 128  
  if (passwordLength <8 || passwordLength >128 ||  chaLength === ""){
      window.alert("Pleae enter valid number from 8 to 128")
      //if choose not in 8 to 128, return and ask again.
      return generatePassword();       
  }
  else if (chaLength === null){
      window.alert("See you next time!")
  }
  else {      
    //put characters in passwordCharaters container.
      fourCha();
      //ask again if no characters is selected.
      while (passwordCharacters === "" || passwordCharacters === null){
        window.alert("Password created invalid, please choose at least one type of characters in your password");
        return generatePassword();
      };
    }//else end 
      //randomly pick password from passwordcharacters
      var result = " ";
      for (i=0; i < passwordLength; i++){
        result += passwordCharacters.charAt(Math.floor(Math.random()* passwordCharacters.length)); 
      }
      return result;

}//generatePassword function ends

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

