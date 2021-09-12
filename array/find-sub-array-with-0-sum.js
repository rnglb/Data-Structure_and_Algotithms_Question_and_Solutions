/* 
Given an integer array, print all subarrays with zero-sum.

For example,
Input:  { 4, 2, -3, -1, 0, 4 }
Subarrays with zero-sum are
{ -3, -1, 0, 4 }
{ 0 }
 
 
Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
Subarrays with zero-sum are
{ 3, 4, -7 }
{ 4, -7, 3 }
{ -7, 3, 1, 3 }
{ 3, 1, -4 }
{ 3, 1, 3, 1, -4, -2, -2 }
{ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
*/

const printSubArray = (arr,i,j) => {
    let resultArray=[],l=0;
    for (k=i;k<=j;k++){
        resultArray[l++]=arr[k];
    }
    console.log(resultArray);
}

const hasZeroSumSubarray = (arr) => {
    let sum =0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==0){
            console.log(" ("+arr[i]+") ");
            resultCount++ ;
         }
        sum = arr[i];
        for(j=i+1;j<arr.length;j++){
           sum=sum+arr[j];
           if(sum == 0) { 
               printSubArray(arr,i,j);
               resultCount++ ; }
        }
    }
    return false;
}

var resultCount = 0;
var result = hasZeroSumSubarray([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);

if(resultCount==0){
    console.log("Subarray does not exist");
}
