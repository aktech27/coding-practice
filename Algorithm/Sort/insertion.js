function insertionSort(array) {
    for (i = 1; i < array.length; i++) {
        let toInsert = array[i];
        for (j = i - 1; j >= 0; j--) {
            if (toInsert < array[j]) {
                array[j + 1] = array[j];
            } else {
                break;
            }
        }
        array[j + 1] = toInsert;
    }
    return array;
}

console.log(insertionSort([8, 20, -6, -2, 4]));
console.log(insertionSort([43, 53, -6, 20, 8, -2, 4]));
