/* 
Given an integer array, find the maximum length subarray having a given sum.

For example, consider the following array:
A[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
target = 8
 
Subarrays with sum 8 are
{ -5, 5, 3, 5 }
{ 3, 5 }
{ 5, 3 }
 
The longest subarray is { -5, 5, 3, 5 } having length 4
*/
let l=0,resultArray = [];
const hasSumSubarray = (arr,target) => {
    let sum =0,maxLength=-1, start=0, end=0;
    for(i=0;i<arr.length;i++){
        sum = arr[i];
        for(j=i+1;j<arr.length;j++){
           sum=sum+arr[j];
           if(sum == target && maxLength < end-start+1) { 
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

var result = hasSumSubarray([  5, 6, -5, 5, 3, 5, 3, -2, 0],8 );

console.log("The longest subarray is {"+ result + "} having length "+ result.length);

