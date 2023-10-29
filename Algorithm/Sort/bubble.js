function bubbleSort(array) {
    let isSwapped = true;
    while (isSwapped) {
        isSwapped = false;
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                isSwapped = true;
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));