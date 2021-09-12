/*
Given an integer array, find a contiguous subarray within it that has the largest sum.

For example,
Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.
*/
const kadanes = (arr) => {
    var maxSum=0, currentSum=0;
    for(i=0;i<arr.length;i++){
      currentSum += arr[i];
      currentSum = (currentSum<0)?0:currentSum;
      maxSum = (maxSum > currentSum) ? maxSum : currentSum;
    }
    return[maxSum];
}
var result = kadanes ([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("The sum of contiguous subarray with the largest sum is "+result);
