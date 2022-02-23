/*
Move all zeros present in an array to the end
Given an integer array, move all zeros present in it to the end. The solution should maintain
the relative order of items in the array and should not use constant space.

For example,
Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }
*/

let arr = [6, 0, 8, 2, 3, 0, 4, 0, 1];
reorder(arr);
console.log(arr);

// Function to move all zeros present in the array to the end
function reorder(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    // if the current element is non-zero, put the element at the next free position in the array
    if (arr[i] != 0) {
      arr[k++] = arr[i];
    }
  }
  for (let i = k; i < arr.length; i++) {
    arr[i] = 0;
  }
}
