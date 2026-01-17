/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.ps = [0];
  for (let i = 0; i < nums.length; i++) {
    this.ps.push(nums[i] + this.ps[i]);
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.ps[right + 1] - this.ps[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */