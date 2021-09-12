/*
Given an integer array, check if it contains a subarray having zero-sum.

For example,
Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
Output: Subarray with zero-sum exists
The subarrays with a sum of 0 are:
{ 3, 4, -7 }
{ 4, -7, 3 }
{ -7, 3, 1, 3 }
{ 3, 1, -4 }
{ 3, 1, 3, 1, -4, -2, -2 }
{ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
*/

const hasZeroSumSubarray = (arr) => {
    let sum =0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==0){return true; }
        sum = arr[i];
        for(j=i+1;j<arr.length;j++){
           sum=sum+arr[j];
           if(sum == 0) { return true; }
        }
    }
    return false;
}

var result = hasZeroSumSubarray([4,-6,3,-1,4,2,7]);

if(result){
console.log("Subarray exists");
}
else console.log("Subarray does not exist");