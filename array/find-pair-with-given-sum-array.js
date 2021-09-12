/*
Given an unsorted integer array, find a pair with the given sum in it.

For example,
Input:
arr = [8, 7, 2, 5, 3, 1]
target = 10
Output:
Pair found (8, 2)
or
Pair found (7, 3)
 
Input:
arr = [5, 2, 6, 8, 1, 9]
target = 12
Output: Pair not found
 */

const findPair = (arr, target) =>{
    var resultCount =0;
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] == target){
                console.log(" (" +arr[i]+","+arr[j]+") ");
                resultCount++ ;
            }

        }
    }
    
 return resultCount;

}

var result = findPair([8,7,2,5,3,1], 10);
if(result==0){
    console.log("No pair found");
}

