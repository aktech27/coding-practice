// Leetcode 3606

/*
You are given three arrays of length n that describe the properties of n coupons: code, businessLine, and isActive. The ith coupon has:

code[i]: a string representing the coupon identifier.
businessLine[i]: a string denoting the business category of the coupon.
isActive[i]: a boolean indicating whether the coupon is currently active.
A coupon is considered valid if all of the following conditions hold:

code[i] is non-empty and consists only of alphanumeric characters (a-z, A-Z, 0-9) and underscores (_).
businessLine[i] is one of the following four categories: "electronics", "grocery", "pharmacy", "restaurant".
isActive[i] is true.
Return an array of the codes of all valid coupons, sorted first by their businessLine in the order: "electronics", "grocery", "pharmacy", "restaurant", and then by code in lexicographical (ascending) order within each category.

Example 1:
Input: code = ["SAVE20","","PHARMA5","SAVE@20"], businessLine = ["restaurant","grocery","pharmacy","restaurant"], isActive = [true,true,true,true]
Output: ["PHARMA5","SAVE20"]
Explanation:
 First coupon is valid.
 Second coupon has empty code (invalid).
 Third coupon is valid.
 Fourth coupon has special character @ (invalid).

Example 2:
Input: code = ["GROCERY15","ELECTRONICS_50","DISCOUNT10"], businessLine = ["grocery","electronics","invalid"], isActive = [false,true,true]
Output: ["ELECTRONICS_50"]
Explanation:
 First coupon is inactive (invalid).
 Second coupon is valid.
 Third coupon has invalid business line (invalid).
 
*/

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  const businessMap = new Set(["electronics", "grocery", "pharmacy", "restaurant"]);
  const validRegex = new RegExp('^[A-z0-9_]+$');
  const checkValidity = (coupon, business, active) => {
    if (!active) return false;
    if (!businessMap.has(business)) return false;
    if (!validRegex.test(coupon)) return false;
    return true;
  };

  let validCodes = [];
  for (let i = 0; i < code.length; i++) {
    if (checkValidity(code[i], businessLine[i], isActive[i])) {
      validCodes.push([code[i], businessLine[i]]);
    }
  }
  return validCodes.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] == b[1]) {
      if (a[0] > b[0]) return 1;
      return -1;
    } else {
      return -1;
    }
  }).map(a => a[0]);
};

// console.log(validateCoupons(
//   ["SAVE20", "", "PHARMA5", "SAVE@20", "ELEC1", "_GROC30"],
//   ["restaurant", "grocery", "pharmacy", "restaurant", "electronics", "grocery"],
//   [true, true, true, true, true, true]
// ));

// console.log(validateCoupons(
//   ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"],
//   ["grocery", "electronics", "invalid"],
//   [false, true, true]
// ));

// console.log(validateCoupons(
//   ["", "VALIDCODE", "GOOD_CODE"],
//   ["pharmacy", "invalid", "restaurant"],
//   [true, true, true]
// ));

console.log(validateCoupons(
  ["m", "A", "B", "P", "J", "P", "u", "W", "4", "J", "C", "9"],
  ["electronics", "invalid", "invalid", "pharmacy", "invalid", "electronics", "restaurant", "grocery", "restaurant", "pharmacy", "pharmacy", "pharmacy"],
  [true, true, false, true, false, true, true, false, false, false, true, false]
));