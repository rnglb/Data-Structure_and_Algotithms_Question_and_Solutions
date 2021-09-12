/* 
Given two sorted arrays X[] and Y[] of size m and n each where m >= n and X[] has exactly n vacant cells, 
merge elements of Y[] in their correct position in array X[], i.e., merge (X, Y) by keeping the sorted order.

For example,
Input:
X[] = { 0, 2, 0, 3, 0, 5, 6, 0, 0 }
Y[] = { 1, 8, 9, 10, 15 }
 
The vacant cells in X[] is represented by 0

Output:
X[] = { 1, 2, 3, 5, 6, 8, 9, 10, 15 }
*/
const merge = (arrX, arrY) => {
    let resultArray = [],j=0,k=0;
    for(i=0;i<arrX.length;i++){
        while(arrX[i] != 0){
            if(arrX[i]<=arrY[j]){
                resultArray[k++]=arrX[i];
                arrX[i]=0;
            }
            else{
                resultArray[k++]=arrY[j++];
            }
        }
    }
    for (i=j;i<arrY.length;i++){
        resultArray[k++]=arrY[i];
    }
return resultArray;
}

var result = merge([0, 2, 0, 3, 0, 5, 6, 0, 0],[1, 8, 9, 10, 15]);
console.log(result);
