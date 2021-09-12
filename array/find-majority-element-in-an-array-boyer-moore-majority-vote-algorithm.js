/*
Given an integer array containing duplicates, return the majority element if present. 
A majority element appears more than n/2 times, where n is the array size.

For example, the majority element is 2 in array {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}
*/
const findMajorityElement = (arr) => {
    let n=arr.length,count;
    for(i=0;i<=n/2;i++){
        count=1;
    for(j=i+1;j<n;j++){
       if(arr[j]==arr[i]){
          count++;
        }
    }
    if(count > n/2){
      return arr[i];
    } 
}
return -1;
}

var result = findMajorityElement([2, 1, 7, 1, 1, 1, 2, 3, 1, 1, 2]);
console.log(result);