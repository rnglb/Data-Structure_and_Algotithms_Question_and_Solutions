/*
Given an array where all its elements are sorted in increasing order except two swapped elements, sort it in linear time.
Assueme there are no duplicates in the array.

For exemple,
Input:  A[] = [3, 8, 6, 7, 5, 9] or [3, 5, 6, 9, 8, 7] or [3, 5, 7, 6, 8, 9]
 
Output: A[] = [3, 5, 6, 7, 8, 9]
*/
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const sortArray = (arr) => {
    // base case
    if (arr.length <= 1) {
        return;
    }
    let x = -1, y = -1 , prev = arr[0];

    for (i = 1; i < arr.length; i++)
    {
        if (prev > arr[i])
        {
            // first occurrence of conflict
            if (x == -1)
            {
                x = i - 1;
                y = i;
            }
            else {
                // second occurrence of conflict
                y = i;
            }
        }
        prev = arr[i];
    }
    swap(arr, x, y);
    return arr;
}

var result = sortArray([3, 5, 7, 6, 8, 9]);
console.log(result);
