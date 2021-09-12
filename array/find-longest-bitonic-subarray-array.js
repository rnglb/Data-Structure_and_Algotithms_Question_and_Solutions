/*
The Longest Bitonic Subarray (LBS) problem is to find a subarray of a given sequence in which the subarray’s elements 
are first sorted in increasing order, then in decreasing order, and the subarray is as long as possible. 
Strictly ascending or descending subarrays are also accepted.

For example,
Longest bitonic subarray of the sequence { 3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4 } is { 4, 5, 9, 10, 8, 5, 3 }
For sequences sorted in increasing or decreasing order, the output is the same as the input sequence, i.e.,
[1, 2, 3, 4, 5] ——> [1, 2, 3, 4, 5]
[5, 4, 3, 2, 1] ——> [5, 4, 3, 2, 1]
*/
const findBitonicSubarray = (arr) => {
    var n = arr.length,endIndex = 0, maxLength = 1, i = 0;
    if (n == 0) {
        return;
    }
    while (i + 1 < n)
    {     
        let currentLength = 1;
        while (i + 1 < n && arr[i] < arr[i + 1]) {
            i++;
            currentLength++;
        }
        while (i + 1 < n && arr[i] > arr[i + 1]) {
            i++;
            currentLength++;
        }
        while (i + 1 < n && arr[i] == arr[i + 1]) {
            i++;
        }
        if (currentLength > maxLength) {
            maxLength = currentLength;
            endIndex = i;
        }
    }
    return [arr.slice(endIndex-maxLength+1,endIndex+1)]
}

var result = findBitonicSubarray ([3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4]);

console.log("The length of the longest bitonic subarray is "+result[0].length);
console.log("The longest bitonic subarray indices is { "+result +" }");