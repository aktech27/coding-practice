/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  let n = mat.length;

  const checkMatch = () => {
    for (let r = 0, i = 0; r < n; r++, i++) {
      for (let c = 0, j = 0; c < n; c++, j++) {
        if (mat[r][c] != target[i][j]) return false;
      }
    }
    return true;
  };

  const checkMatch90Deg = () => {
    for (let r = 0, i = 0; r < n; r++, i++) {
      for (let c = n - 1, j = 0; c >= 0; c--, j++) {
        if (mat[c][r] != target[i][j]) return false;
      }
    }
    return true;
  };

  const checkMatch180Deg = () => {
    for (let r = n - 1, i = 0; r >= 0; r--, i++) {
      for (let c = n - 1, j = 0; c >= 0; c--, j++) {
        if (mat[r][c] != target[i][j]) return false;
      }
    }
    return true;
  };

  const checkMatch270Deg = () => {
    for (let r = n - 1, i = 0; r >= 0; r--, i++) {
      for (let c = 0, j = 0; c < n; c++, j++) {
        if (mat[c][r] != target[i][j]) return false;
      }
    }
    return true;
  };

  return checkMatch() || checkMatch90Deg() || checkMatch180Deg() || checkMatch270Deg();
};

console.log(findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]]));
console.log(findRotation([[0, 1], [1, 1]], [[1, 0], [0, 1]]));
console.log(findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]]));
console.log(findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [1, 1, 0], [0, 0, 0]]));


