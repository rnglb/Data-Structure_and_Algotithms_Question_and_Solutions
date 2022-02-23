// JavaScript program for Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

console.log("Sorted Array -",selectionSort([29, 72, 8, 6, 52, 51]));