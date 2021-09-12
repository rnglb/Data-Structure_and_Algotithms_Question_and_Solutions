/*
Given a limited range array of size n containing elements between 1 and n-1 with one element repeating, 
find the duplicate number in it without using any extra space.

Input:  { 1, 2, 3, 4, 4 }
Output: The duplicate element is 4
 
Input:  { 1, 2, 3, 4, 2 }
Output: The duplicate element is 2
*/

function findDuplicate(arr){
	arr.sort(function(a, b){return a-b});
	for (i=0;i<arr.length;i++){
		if(arr[i]==arr[i-1]){
			return arr[i];
		}
    }
}

let result = findDuplicate([1, 2, 3, 4, 0, 5, 2 ]);
console.log(result);
