/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
  let ans = -1;
  const map = new Map();
  for (const n of nums) {
    if (n % 2 == 0) {
      map.set(n, (map.get(n) ?? 0) + 1);
    }
  }

  for (const k of map.keys()) {
    if (map.get(k) == 1) {
      return k;
    }
  }

  return ans;
};