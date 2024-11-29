/**
 * 
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
are acceptable.
 */

function plusMinus(arr) {
  // Write your code here
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] < 0) {
          minus += 1;
      } else if (arr[i] > 0) {
          plus += 1;
      } else {
          zero += 1;
      }
  }
  console.log((plus/arr.length).toFixed(6))
  console.log((minus/arr.length).toFixed(6))
  console.log((zero/arr.length).toFixed(6))
}