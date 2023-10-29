function quickSort(array) {
    if (array.length == 1) {
        return array;
    }
    let pivot = array[0]; //can be any element
    let leftArray = [];
    let rightArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        }
        if (array[i] > pivot) {
            rightArray.push(array[i]);
        }
    }
    return [quickSort(leftArray), pivot, quickSort(rightArray)];
}

console.log(quickSort([8, 20, -6, -2, 4]));
console.log(quickSort([43, 53, -6, 20, 8, -2, 4]));