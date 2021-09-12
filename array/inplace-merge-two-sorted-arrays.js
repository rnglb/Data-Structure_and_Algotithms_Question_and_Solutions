/*
Given two sorted arrays, X[] and Y[] of size m and n each, merge elements of X[] with elements of array Y[] by
maintaining the sorted order, i.e., fill X[] with the first m smallest elements and fill Y[] with remaining elements.
Do the conversion in-place and without using any other data structure.

For example,
Input:
X[] = { 1, 4, 7, 8, 10 }
Y[] = { 2, 3, 9 }
 
Output:
X[] = { 1, 2, 3, 4, 7 }
Y[] = { 8, 9, 10 }
*/
const merge = (arrX,arrY) => {
    let m=arrX.length, n=arrY.length;
    for (i=0;i<m;i++){
        if(arrX[i] > arrY[0]){
            let temp = arrX[i];
            arrX[i] = arrY[0]
            arrY[0] = temp;

            let first = arrY[0];
            for(k=1; k<n && arrY[k]< first; k++){
                arrY[k-1] = arrY[k];
            }
            arrY[k-1]=first;
        }
    }
    return [arrX,arrY];
}

var result = merge ([1, 4, 7, 8, 10],[2, 3, 9]);
console.log("X[] = { "+ result[0]+" }");
console.log("Y[] = { "+ result[1]+" }");