/*
Sort elements by their frequency and index
Given an integer array, sort its element by their frequency and index. i.e., if two elements
have different frequencies, then the one which has more frequency should come first; otherwise,
the one which has less index should come first.

For example,
Input : [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8]
Output: [3, 3, 3, 1, 1, 1, 8, 8, 8, 6, 7]
*/

let arr = [3, 3, 1, 1, 1, 8, 8, 3, 6, 8, 7, 8];

//code to create map for array elements with their first Occurance and frequency
const map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    firstOccurance = map.get(arr[i]).firstOccurance;
    currentFrequency = map.get(arr[i]).frequency;
    map.set(arr[i], { first: firstOccurance, frequency: currentFrequency + 1 });
  } else {
    map.set(arr[i], { firstOccurance: i, frequency: 1 });
  }
}

//code to sort the map according to occurance
const sort1 = [...map].sort(
  (key1, key2) => key2[1].frequency - key1[1].frequency
);

// code to display the result
let sortedResult = [];
sort1.forEach(function myFunction(value) {
  for (let j = 0; j < value[1].frequency; j++) {
    sortedResult.push(value[0]);
  }
});
console.log(sortedResult);
