//Implementation of bubble sort


function bubbleSort(arr) {
    for(let i = 0;i < arr.length; i++) {
        for(let j = 0;j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

const arr1 = [5,12,1,6,4,43,9];

console.log(bubbleSort(arr1));//[1, 4, 5, 6, 9, 12, 43]