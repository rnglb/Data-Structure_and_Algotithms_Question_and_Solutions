/*
Given an integer array, find the largest subarray formed by consecutive integers.
The subarray should contain all distinct values.

For example,
Input:  { 2, 0, 2, 1, 4, 3, 1, 0 }
Output: The largest subarray is { 0, 2, 1, 4, 3 }
 */

const isConsecutive = (arr, i, j, min, max) => {
    if(max - min != j-i) { return false; }


}

const findMaxSubarray = (arr) => {
    let maxLength =1 , start = 0, end =0 ;

    for(i=0;i<arr.length;i++){
    let minValue = arr[i], maxValue = arr[i];
       for(j=i+1;j<arr.length;j++){
        minValue = Math.min(minValue, arr[j]);
        maxValue = Math.max(maxValue, arr[j]);
        if(isConsecutive(arr, i, j, minValue, maxValue)){
            if(maxLength < maxValue-minValue +1 ){
                maxLength = maxValue - minValue +1 ;
                start =i;
                end = j;
            } 
        }
       }
    }
}

let result = findMaxSubarray ([2, 0, 2, 1, 4, 3, 1, 0]);
console.log(result);