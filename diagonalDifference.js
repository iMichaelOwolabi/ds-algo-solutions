/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let n = arr.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
      
  for (let i = 0; i < n; i ++) {
      leftDiagonalSum += arr[i][i];
      rightDiagonalSum += arr[i][n - (i+1)]
  }
      
  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}