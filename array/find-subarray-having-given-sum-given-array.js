let l=0;
const hasSumSubarray = (arr,target) => {
    let sum =0,maxLength=-1, start=0, end=0;
    for(i=0;i<arr.length;i++){
        sum = arr[i];
        for(j=i+1;j<arr.length;j++){
           sum=sum+arr[j];
           if(sum == target) { 
             start = i;
             end = j;
             maxLength = end-start+1;
             return(arr.slice(start,end+1));
           }
        }
    }
return;
}

var result = hasSumSubarray([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10],15 );
console.log( result );