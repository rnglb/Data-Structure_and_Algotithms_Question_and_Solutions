/*
Given an integer array, find the maximum difference between two elements in it such that the smaller element appears before the larger element.

For example,
Input:  { 2, 7, 9, 5, 1, 3, 5 }
 
Output: The maximum difference is 7.
The pair is (2, 9)
*/
const getMaxDiff = (arr) => {
    var diff=-9999999, n=arr.length;
    if(n==0){
        return "empty arraay";
    }
    var maxValue = arr[n-1];
    for(i=n-2; i>=0; i--){
        if(arr[i] >= maxValue){
            maxValue = arr[i];
        }
        else{
            diff= diff>maxValue-arr[i]?diff:maxValue-arr[i];
        }
    }
    return diff;
}
var result = getMaxDiff([2, 7, 9, 5, 1, 3, 5]);
console.log(result);