var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialCharArray = ["!","@","#","$","%","*","(",")"]
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var userChoiceArray =[]
  var passwordArray =[]
  var length = parseInt(prompt("Choose length of password between 8-128")) 
  console.log(length)
  var lowerCase = confirm("Use lowercase letters?")
  console.log(lowerCase)
  var upperCase = confirm("Use uppercase letters?")
  console.log(upperCase)
  var specialChar = confirm("Use special characters?")
  console.log(specialChar)

  // Conditional statements here:
    // If lowerCase == true 
      // Then add lowerCase array to userChoiceArray
  if (lowerCase == true) {
    for (let index = 0; index < lowerCaseArray.length; index++) {
      userChoiceArray.push(lowerCaseArray[index])}
      
    }
    // If upperCase == true
      // Then add upperCase array to userChoiceArray
  if (upperCase == true) {
    for (let index = 0; index < upperCaseArray.length; index++) {
      userChoiceArray.push(upperCaseArray[index])}
      
    }
    // If specialChar == true
      // Then add specialChar array to userChoiceArray
  if (specialChar == true) {
    for (let index = 0; index < specialCharArray.length; index++) {
      userChoiceArray.push(specialCharArray[index])}
      
    }
  // At this point, userChoiceArray is going to be massive! Because it now potentially stores all of the values from all of the other arrays.
  console.log(userChoiceArray)
  // For loop
    // We need to iterate based on the length the user choice.
  for (let index = 0; index < length; index++) {
    passwordArray.push(userChoiceArray[Math.floor(Math.random() * userChoiceArray.length)])
     
  }
  console.log(passwordArray)
    // At every iteration, a few things need to happen.
    // - We need to select a random number
    // - Based on that random number, we need to store some character from our userChoiceArray into our passArray.

  // i.e.,: passArray = ["a", "B", "$", ...]
  
  // Turn passArray into a string 
    // we use Join! passArray.join(",");
    // All join does is combine all elements in an array and turns it into a large string.
      // i.e., passArray = "aB$";
  // Finally, return it!

  return passwordArray.join(" ");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
