/*
Given an integer array, find the maximum product of two integers in it.

For example,
consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.
*/
const maxProdductCheck = (arr) => {
    if(arr.length<2){return;}
    let maxProduct=-999999,max_i,max_j;
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(maxProduct<arr[i]*arr[j]){
                maxProduct = arr[i]*arr[j];
                max_i=i;
                max_j=j;
            }
        }   
    }
    console.log("{"+arr[max_i]+", "+arr[max_j]+"}");
    return maxProduct;
}

var result = maxProdductCheck([-10, -3, 5, 6, -2]);
console.log("maximum prodduct is = "+ result);