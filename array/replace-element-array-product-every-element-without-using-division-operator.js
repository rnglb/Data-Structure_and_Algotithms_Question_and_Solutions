/*
Given an integer array, replace each element with the product of every other element without using the division operator.

For example,
Input:  { 1, 2, 3, 4, 5 }
Output: { 120, 60, 40, 30, 24 }
 
Input:  { 5, 3, 4, 2, 6, 8 }
Output: { 1152, 1920, 1440, 2880, 960, 720 }
*/
const recursiveProduct = (arr,i,leftCall) => {
    if(i<0 || i>=arr.length){
        return 1;
     }
     if(leftCall==1){
     return arr[i]*recursiveProduct(arr,i-1,1);
     }
     else{
         return arr[i]*recursiveProduct(arr,i+1,0);
     }
}
const findProduct = (arr) => {
    var resultArray =[arr.length];
    for(i=0;i<arr.length;i++){
     resultArray[i]= recursiveProduct(arr,i-1,1)*recursiveProduct(arr,i+1,0);
    }
return resultArray;
}
var result = findProduct ([5, 3, 4, 2, 6, 8]);
console.log(result);