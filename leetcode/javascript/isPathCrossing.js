// Leetcode 1496
/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Example 1:

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.

*/

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const seen = { '0-0': true };
  let point = [0, 0];
  for (let i = 0; i < path.length; i++) {
    if (path[i] == 'N') {
      point[1] += 1;
    } else if (path[i] == 'E') {
      point[0] += 1;
    } else if (path[i] == 'W') {
      point[0] -= 1;
    } else {
      point[1] -= 1;
    }
    if (seen[`${point[0]}-${point[1]}`]) {
      return true;
    } else {
      seen[`${point[0]}-${point[1]}`] = true;
    }
  }
  return false;
};


console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));
console.log(isPathCrossing("NNESENE"));
console.log(isPathCrossing("EEW"));
console.log(isPathCrossing("N"));