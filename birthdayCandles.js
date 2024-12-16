/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  // Sort, then start comparing from the end
  let count = 1;
  
  candles.sort((a, b) => a-b);
  
  // Return at once after sorting, the first element is the same as the last element in the array.
  if(candles[0] === candles[candles.length - 1]) {
      return candles.length;
  }
  for (let i = candles.length; i > 0; i--) {
      if (candles[i - 1] > candles[i - 2]) {
          return count;
      }
      count += 1;
  }

}
