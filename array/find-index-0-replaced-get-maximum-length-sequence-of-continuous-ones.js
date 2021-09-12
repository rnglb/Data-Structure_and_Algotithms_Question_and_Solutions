/*
Given a binary array, find the index of 0 to be replaced with 1 to get the maximum length sequence of continuous ones.

For example, 
consider the array { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }. 
We need to replace index 7 to get the continuous sequence of length 6 containing all 1’s.
*/
const findIndexOfZeroToBeReplace = (arr) => {
    let currentCountOfOnes=0, preZeroIndex=-1,replaceZeroInddex=-1,maxOne=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]==0){
            currentCountOfOnes = i - preZeroIndex;
            preZeroIndex=i;
        }
        else{
            currentCountOfOnes++;
        }
        if(maxOne < currentCountOfOnes){
            maxOne = currentCountOfOnes;
            replaceZeroInddex=preZeroIndex;
           
        }
    }
    return replaceZeroInddex;
}
var result = findIndexOfZeroToBeReplace([0, 0, 1,0, 1, 1, 1, 0, 1, 1]);
console.log(result);