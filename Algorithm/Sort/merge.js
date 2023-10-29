function mergeSort(array) {
  const joinArrays = (leftArray, rightArray) => {
    let sorted = [];
    while (leftArray.length && rightArray.length) {
      leftArray[0] < rightArray[0] ? sorted.push(leftArray.shift()) : sorted.push(rightArray.shift());
    }
    return [...sorted, ...leftArray, ...rightArray];
  }

  if (array.length == 1) {
    return array;
  }
  const midPoint = parseInt(array.length / 2);
  const leftArray = array.slice(0, midPoint);
  const rightArray = array.slice(midPoint);
  return joinArrays(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([-6, 20, 8, -2, 4]));
