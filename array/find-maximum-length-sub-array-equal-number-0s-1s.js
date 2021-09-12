/*
Given a binary array containing 0’s and 1’s, find the largest subarray with equal numbers of 0’s and 1’s.

For example,
Input:  { 0, 0, 1, 0, 1, 0, 0 }
Output: Largest subarray is { 0, 1, 0, 1 } or { 1, 0, 1, 0 }
 */

let l=0,resultArray = [];
const hasSumSubarray = (arr) => {
    let sum =0,maxLength=-1, start=0, end=0;
    for(i=0;i<arr.length;i++){
        sum = (arr[i]==0) ? -1 : 1;
        for(j=i+1;j<arr.length;j++){
           sum += (arr[j]==0) ? -1 : 1;
           if(sum == 0 && maxLength < j-i+1) { 
             start = i;
             end = j;
             maxLength = end-start+1;
           }
        }
    }
    for(n=start;n<=end;n++){
        resultArray[l++]=arr[n];
        }
    return resultArray;
}
var result = hasSumSubarray([ 0, 0, 1, 0, 1, 0, 0] );

console.log(result );