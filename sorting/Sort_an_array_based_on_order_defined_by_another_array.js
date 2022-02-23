/*
Sort an array based on order defined by another array
Given two integer arrays, reorder elements of the first array by the order 
of elements defined by the second array.

The elements that are not present in the second array but present in the first
array should be appended at the end sorted. The second array can contain some 
extra elements which are not part of the first array.

For example,
Input:
first = [5, 8, 9, 3, 5, 7, 1, 3, 4, 9, 3, 5, 1, 8, 4]
second = [3, 5, 7, 2]
 
Output: [3, 3, 3, 5, 5, 5, 7, 1, 1, 4, 4, 8, 8, 9, 9]
*/
let first = [5, 8, 9, 3, 5, 7, 1, 3, 4, 9, 3, 5, 1, 8, 4];
let second = [3, 5, 7, 2];

//code to create map for array elements with their frequency
const map = new Map();
for (let i = 0; i < first.length; i++) {
  if (map.has(first[i])) {
    frequency = map.get(first[i]);
    map.set(first[i], frequency + 1);
  } else {
    map.set(first[i], 1);
  }
}

let sortedResult = [];

//for each element of the second array, checking if the element is present on the map or not.
//If it is present on the map, adding that in result array for n times(frequency).
second.forEach(function myFunction(value) {
  if (map.has(value)) {
    let frequency1 = map.get(value);
    for (let j = 0; j < frequency1; j++) {
      sortedResult.push(value);
    }
    map.delete(value);
  }
});

//Sorting rest of the map aand adding them in resut array
const sortedMap = [...map].sort((key1, key2) => key1[0] - key2[0]);
sortedMap.forEach(function (value) {
  for (let j = 0; j < value[1]; j++) {
    sortedResult.push(value[0]);
  }
});

console.log(sortedResult);
