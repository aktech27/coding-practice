//Given an array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found
function linearSearch(array, number) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return i;
        }
    }
    return -1;

}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));