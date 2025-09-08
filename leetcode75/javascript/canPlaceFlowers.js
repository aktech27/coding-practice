// Leetcode 605

/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n == 0 || (flowerbed.length == 1 && flowerbed[0] == 0)) {
    return true;
  }

  if (flowerbed[0] == 0 && flowerbed[1] == 0) {
    flowerbed[0] = 1;
    n = n - 1;
    if (n == 0) {
      return true;
    }
  }

  if (flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0) {
    flowerbed[flowerbed.length - 1] = 1;
    n = n - 1;
    if (n == 0) {
      return true;
    }
  }

  let ptr = 1;
  while (ptr < flowerbed.length - 1) {
    if (flowerbed[ptr] == 0 && flowerbed[ptr - 1] == 0 && flowerbed[ptr + 1] == 0) {
      flowerbed[ptr] = 1;
      n = n - 1;
      if (n == 0) {
        return true;
      }
      ptr += 1;
    }
    ptr += 1;
  }

  return false;

};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2));
console.log(canPlaceFlowers([0, 0, 0, 0, 0], 3));
console.log(canPlaceFlowers([1], 1));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([0, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1, 0, 0], 2));
