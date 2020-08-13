/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

const reverse = (x) => {
  const stringInt = JSON.stringify(x);
  let intChars = stringInt.split('');
  let isNegative = false;
  if (intChars[0] === '-') {
    isNegative = true;
    intChars.shift();
  }
  let reversedString = intChars.reverse().join('');
  if (isNegative) {
    reversedString = '-' + reversedString;
  }
  if (Number(reversedString) <= -(2 ** 31 - 1) || Number(reversedString) >= 2 ** 31 - 1) {
    return 0;
  }
  return Number(reversedString);
};
