function cartesianProduct(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            resultArray.push([array1[i], array2[j]]);
        }
    }
    return resultArray;
}


const A = [1, 2];
const B = [3, 4];
const C = [5, 6, 7];
const D = [8, 9, 0];

console.log(cartesianProduct(A, B));
console.log(cartesianProduct(C, D));
console.log(cartesianProduct(A, C));
console.log(cartesianProduct(B, D));
