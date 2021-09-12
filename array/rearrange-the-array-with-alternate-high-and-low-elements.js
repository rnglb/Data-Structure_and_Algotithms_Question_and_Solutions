/*
Given an integer array, rearrange it such that every second element becomes greater than its left and right elements.
Assume no duplicate elements are present in the array.

For example,
Input:  {1, 2, 3, 4, 5, 6, 7}
Output: {1, 3, 2, 5, 4, 7, 6}
 
Input:  {9, 6, 8, 3, 7}
Output: {6, 9, 3, 8, 7}
 
Input:  {6, 9, 2, 5, 1, 4}
Output: {6, 9, 2, 5, 1, 4}
*/
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const rearrange = (arr) => {
    for(i=1;i<arr.length;i+=2){
        if(arr[i-1]>arr[i]){
            swap(arr,i-1,i);
        }
        if(i+1<arr.length && arr[i+1]>arr[i]){
            swap(arr,i+1,i);
        }
    }
    return arr;
}

var result = rearrange([9, 6, 8, 3, 7]);
console.log(result);
