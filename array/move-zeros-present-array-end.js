/*
Given an integer array, move all zeros present in it to the end. The solution should maintain the relative 
order of items in the array and should not use constant space.

For example,
Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }
*/
const reorder = (arr) => {
let k=0;
for(i=0;i<arr.length;i++){
  if(arr[i] != 0){
     arr[k++] = arr[i];
  }
}
for(i=k;i<arr.length;i++){
   arr[i]=0;
}
return arr;
}

var result = reorder([6, 0, 8, 2, 3, 0, 4, 0, 1]);
console.log(result);