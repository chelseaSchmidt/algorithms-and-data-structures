/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  let magnitude = 0;
  let reducedInput1 = x;
  while (reducedInput1 > 10) {
    magnitude += 1;
    reducedInput1 /= 10;
  }
  let reversed = 0;
  let reducedInput2 = x;
  while (reducedInput2 >= 1) {
    const remainder = reducedInput2 % 10;
    reversed += remainder * 10 ** magnitude;
    reducedInput2 = Math.floor(reducedInput2 / 10);
    magnitude -= 1;
  }
  return reversed === x;
};
