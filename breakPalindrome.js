/*
 * Complete the 'breakPalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING palindromeStr as parameter.
 */

function breakPalindrome(palindromeStr) {
  // Write your code here
  if (palindromeStr.length === 1) {
      return 'IMPOSSIBLE'
  }

  let result = true;
  let newString;
  
  for ( let i = 0; i < palindromeStr.length; i++ ) {
    if(palindromeStr.charAt(i) !== 'a') {
      result = false;
      newString = palindromeStr.replace(palindromeStr.charAt(i), 'a');
      for (let j = 0; j < newString.length; j++) {
          if (newString.charAt(j) !== 'a') {
              return newString
          }
      }
      return 'IMPOSSIBLE'
     }
  }

  if (result === true) {
      return 'IMPOSSIBLE'
  }

}