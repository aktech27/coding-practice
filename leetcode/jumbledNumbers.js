// Leetcode 2191

/*
You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9.

You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

Notes:
Elements with the same mapped values should appear in the same relative order as in the input.
The elements of nums should only be sorted based on their mapped values and not be replaced by them.
*/

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  const mappedValue = (n) => {
    let newN = 0;
    let i = 0;
    if (n == 0) {
      return mapping[0];
    }
    while (n != 0) {
      let r = n % 10;
      newN = newN + (mapping[r] * (10 ** i));
      n = Math.floor(n / 10);
      i = i + 1;
    }
    return newN;
  };

  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = mappedValue(nums[i]);
    }
  }

  nums.sort((a, b) => hashMap[a] - hashMap[b]);
  return nums;
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]));
console.log(sortJumbled([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sortJumbled([9, 0, 1, 8, 2, 7, 6, 3, 4, 5], [987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987, 654, 321, 978, 543, 210, 876, 543, 210, 987]));
