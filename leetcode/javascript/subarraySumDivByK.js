// Leetcode 974

/*
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
A subarray is a contiguous part of an array.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByKBrute = function (nums, k) {
  let count = 0;
  const hashMap = {
    '0': 1
  };
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let mod = prefixSum % k;
    if (mod < 0) {
      mod += k;
    }
    if (hashMap[mod] !== undefined) {
      count += hashMap[mod];
      hashMap[mod]++;
    } else {
      hashMap[mod] = 1;
    }
  }
  return count;
};

// Optimal with constant space:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  const map = new Map();
  for (let n of nums) {
    let mod = n % k;
    if (n % k == 0) {
      count++;
    }
    if (map.has(mod)) {
      count += map.get(mod);
    }
    map.set(mod, (map.get(mod) ?? 0) + 1);
  }
  return count;
};

// console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
// console.log(subarraysDivByK([5], 9));
// console.log(subarraysDivByK([23, 2, 4, 6, 7], 6));
// console.log(subarraysDivByK([23, 2, 6, 4, 7], 6));
// console.log(subarraysDivByK([23, 2, 6, 4, 7], 13));
// console.log(subarraysDivByK([2, 4, 3], 6));
// console.log(subarraysDivByK([1, 0, 1, 0, 1], 4));
// console.log(subarraysDivByK([1, 2, 3], 5));
// console.log(subarraysDivByK([5, 0, 0, 4], 3));
// console.log(subarraysDivByK([0, -5], 10));
// console.log(subarraysDivByK([10, 10], 10));
console.log(subarraysDivByK([-1, 2, 9], 2));