// Given sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the element is not found.

function binarySearch(array, number) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex <= rightIndex) {
        let midpoint = parseInt((leftIndex + rightIndex) / 2);
        if (array[midpoint] == number) return midpoint;
        if (number < array[midpoint]) {
            rightIndex = midpoint - 1;
        } else {
            leftIndex = midpoint + 1;
        }
    }
    return -1;
}

//Using Recursion
function recursiveBinarySearch(array, number, leftIndex = 0, rightIndex) {
    rightIndex = rightIndex || array.length - 1;
    let midpoint = parseInt((leftIndex + rightIndex) / 2);
    if (array[midpoint] == number) return midpoint;
    else if (leftIndex > rightIndex) return -1;
    else if (number < array[midpoint]) return recursiveBinarySearch(array, number, leftIndex, midpoint - 1);
    else return recursiveBinarySearch(array, number, midpoint + 1, rightIndex);
}

console.log(binarySearch([-5, 2, 4, 6, 10, 21], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 2));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10, 21], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 2));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));