/*
Given an integer array, find and print a contiguous subarray with the maximum sum in it.

For example,
Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
Output: The contiguous subarray with the largest sum is {4, -1, 2, 1}
 
Input:  {8, -7, -3, 5, 6, -2, 3, -4, 2}
Output: The contiguous subarray with the largest sum is {5, 6, -2, 3}
*/
const kadanes = (arr) => {
    var maxSum=0, currentSum=0,start=0,end=0;
    for(i=0;i<arr.length;i++){
      currentSum += arr[i];
      if(currentSum<0){
        currentSum =0;
        start =i;
      }
      if(maxSum < currentSum){
        maxSum = currentSum;
        end = i;
      }
      maxSum = (maxSum > currentSum) ? maxSum : currentSum;
    }
    return arr.slice(start+1,end+1);
}
var result = kadanes ([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);