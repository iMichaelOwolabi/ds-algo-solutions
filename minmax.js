function miniMaxSum(arr) {
  // Write your code here
  const sortedArray = arr.sort((a, b) => a - b);
  
  let minSum = 0, maxSum = 0;
  for (let i = 0; i < sortedArray.length; i++) {
      if (Math.abs(i - sortedArray.length) === 1) {
          minSum += 0;
      } else {
          minSum += sortedArray[i]
      }
      
      if (Math.abs(i - sortedArray.length) === 5) {
          maxSum += 0;
      } else {
          maxSum += sortedArray[i];
      }
  }
  
  console.log(minSum, maxSum);
}
