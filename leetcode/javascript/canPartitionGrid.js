/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function (grid) {
  const rowSum = Array(grid.length).fill(0);
  const colSum = Array(grid[0].length).fill(0);

  let rowPrefixSum = 0;
  let colPrefixSum = 0;
  let sum = 0;

  const prefixRow = new Set();
  const prefixCol = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      rowSum[r] += grid[r][c];
      colSum[c] += grid[r][c];
      sum += grid[r][c];
      if (r == grid.length - 1) {
        colPrefixSum += colSum[c];
        prefixCol.add(colPrefixSum);
      }
    }
    rowPrefixSum += rowSum[r];
    prefixRow.add(rowPrefixSum);
  }

  return prefixRow.has(sum / 2) || prefixCol.has(sum / 2);
};

// console.log(canPartitionGrid([[1, 4], [2, 3]]));
// console.log(canPartitionGrid([[1, 3], [2, 4]]));
// console.log(canPartitionGrid([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]));
console.log(canPartitionGrid([[10, 20, 30, 40, 10], [9, 19, 29, 39, 14], [10, 10, 10, 10, 10], [100, 50, 20, 0, 0]]));
console.log(canPartitionGrid([[87392, 84357, 59352, 96487, 45188, 2214], [6039, 61341, 10351, 8216, 16236, 30085], [92248, 74634, 70524, 75760, 94347, 29111], [34021, 9302, 14465, 50835, 12637, 24815], [77775, 25592, 31903, 31641, 11166, 70170], [34048, 86633, 67860, 77558, 15445, 49494]]));
console.log(canPartitionGrid([[33, 159, 3549, 692, 73, 60406], [23952, 75031, 58732, 24684, 68, 42210], [57753, 82, 83918, 46517, 84640, 56957], [28380, 45259, 958, 90270, 33345, 73019], [77078, 100000, 100000, 23857, 100000, 100000], [64979, 46301, 100000, 91040, 24377, 63055]]));