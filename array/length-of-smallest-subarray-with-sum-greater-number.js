/*
Given an array of possitive integers, ffind the smallest ssubarray's length whose sum of element is greater than
a given number K.

For example,
Input:  {1, 2, 3, 4, 5, 6, 7, 8}, k = 20
Output: The smallest subarray length is 3
Explanation: The smallest subarray with sum > 20 is {6, 7, 8}
 
Input:  {1, 2, 3, 4, 5, 6, 7, 8}, k = 7
Output: The smallest subarray length is 1
Explanation: The smallest subarray with sum > 7 is {8}
 
Input:  {1, 2, 3, 4, 5, 6, 7, 8}, k = 21
Output: The smallest subarray length is 4
Explanation: The smallest subarray with sum > 21 is {5, 6, 7, 8}
 
Input:  {1, 2, 3, 4, 5, 6, 7, 8}, k = 40
Output: No subarray exists
*/

let l=0;
const hasSumSubarray = (arr,target) => {
    let sum =0,minLength=999, start=0, end=0;
    for(i=0;i<arr.length;i++){
        sum = arr[i];
        if(sum > target) { 
            start = i;
            end = i;
            minLength = end-start+1;
            return arr[i];
          }
        for(j=i+1;j<arr.length;j++){
           sum=sum+arr[j];
           if(sum > target && j-i+1<minLength) { 
             start = i;
             end = j;
             minLength = end-start+1;
           }
        }
    }
    return(end !=0 ? arr.slice(start+1,end+2):"No subarray exists");
}

var result = hasSumSubarray([1, 2, 3, 4, 5, 6, 7, 8], 20 );
console.log( result );