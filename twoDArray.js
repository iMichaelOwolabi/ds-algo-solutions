/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let hourglasses = [];
    for (let i = 0; i < 4; i ++) {
        for (let j = 0; j < 4; j++) {
            let k = j + 1;
            let l = j + 3;
            hourglasses.push([])
            hourglasses[hourglasses.length - 1].push(...arr[i].slice(j, l));
            hourglasses[hourglasses.length - 1].push(...arr[i + 1].slice(k, k + 1));
            hourglasses[hourglasses.length - 1].push(...arr[i + 2].slice(j, l));
        }
    }
        
    let maxSum = -100;
    let initialValue = 0;
    for (let i = 0; i < hourglasses.length; i ++) {
        let sum = hourglasses[i].reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
        
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}
