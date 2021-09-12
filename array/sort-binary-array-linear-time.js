/*
Given a binary array, sort it in linear time and constant space. The output should print all zeroes, followed by all ones.

For example,
Input:  { 1, 0, 1, 0, 1, 0, 0, 1 } 
Output: { 0, 0, 0, 0, 1, 1, 1, 1 }
 */
const sort = (arr) => {
    let resultArray = [],l=0, countZeros=0;
    for (i=0;i<arr.length;i++){
        if(arr[i]==0){
            resultArray[l++]=arr[i];
            countZeros++ ;
        }
    }
    for(n=countZeros;n<arr.length;n++){
        resultArray[l++]=1;
    }
    return resultArray;
}

let result = sort([0, 0, 1, 0, 1, 1, 0, 1, 0, 0,0,1]);
console.log(result);



