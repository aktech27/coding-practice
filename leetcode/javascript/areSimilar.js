/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const rotateArray = (arr, n) => arr.map((_, i, a) => a[(i + n) % arr.length]);
  k = k % mat[0].length;
  if (k == 0) return true;

  for (let r = 0; r < mat.length; r++) {
    const rotated = rotateArray(mat[r], r % 2 == 0 ? k : mat[r].length - k);
    for (let c = 0; c < mat[r].length; c++) {
      if (mat[r][c] != rotated[c]) return false;
    }
  }
  return true;

};


console.log(areSimilar([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4));
console.log(areSimilar([[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], 2));
console.log(areSimilar([[2, 2], [2, 2]], 3));