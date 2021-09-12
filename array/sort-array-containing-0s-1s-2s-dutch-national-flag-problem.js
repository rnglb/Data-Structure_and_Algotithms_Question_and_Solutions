/* 
Given an array containing only 0’s, 1’s, and 2’s, sort it in linear time and using constant space.

For example,
Input:  { 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 }
Output: { 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2 }
*/
const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]= temp;
}
const partitionMethod = (arr) => {
    let start=0, mid=0, pivot=1, end=arr.length -1 ;
    while(mid <= end){
        if(arr[mid] < pivot){
            swap(arr,start,mid);
            ++start;
            ++mid;
        }
        else if( arr[mid] > pivot){
            swap(arr, mid, end);
            --end;
        }
        else{
            ++mid;
        }
    }
    return arr;
}

var result = partitionMethod([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 ]);
console.log(result);