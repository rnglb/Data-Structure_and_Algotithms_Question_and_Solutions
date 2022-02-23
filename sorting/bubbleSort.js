// JavaScript program for Bubble Sort
function bubbleSort(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
           if(arr[i] > arr[j]){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
       }
        newArr.push(arr[i])
    }
return newArr;
}

console.log("Sorted Array -",bubbleSort([7, 9, 1, 0, 3]));