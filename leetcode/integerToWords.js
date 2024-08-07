// Leetcode 273

/*
Convert a non-negative integer num to its English words representation.
*/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const toWords = (x) => {
    const hashMap = {
      '1': 'One',
      '2': 'Two',
      '3': 'Three',
      '4': 'Four',
      '5': 'Five',
      '6': 'Six',
      '7': 'Seven',
      '8': 'Eight',
      '9': 'Nine',
      '10': 'Ten',
      '11': 'Eleven',
      '12': 'Twelve',
      '13': 'Thirteen',
      '14': 'Fourteen',
      '15': 'Fifteen',
      '16': 'Sixteen',
      '17': 'Seventeen',
      '18': 'Eighteen',
      '19': 'Nineteen',
      '20': 'Twenty',
      '30': 'Thirty',
      '40': 'Forty',
      '50': 'Fifty',
      '60': 'Sixty',
      '70': 'Seventy',
      '80': 'Eighty',
      '90': 'Ninety',
    };
    if (x == 0) {
      return '';
    }
    if (hashMap[x]) {
      return hashMap[x];
    }
    if (x > 99) {
      return toWords(Math.floor(x / 100)) + " Hundred " + toWords(x % 100);
    }
    return toWords(Math.floor(x / 10) * 10) + " " + toWords(x % 10);
  };

  if (num === 0) {
    return "Zero";
  }
  const nums = [];
  let words = '';
  const placesMap = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
  while (num > 0) {
    nums.push(num % 1000);
    num = Math.floor(num / 1000);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] != 0) {
      words += (toWords(nums[i])) + ' ' + placesMap[i] + ' ';
    }
  }
  return words.replaceAll('  ', ' ').trimEnd();
};

console.log(numberToWords(123));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));
console.log(numberToWords(0));
console.log(numberToWords(1000010));
console.log(numberToWords(12300123));
console.log(numberToWords(1000001));
console.log(numberToWords(1001001));
