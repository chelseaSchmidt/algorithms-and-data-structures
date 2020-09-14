/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
Uppercase char !== lowercase char
*/

const lengthOfLongestSubstring = (s) => {
  let currLength = 0;
  let start = 0;
  let currChars = new Set();
  const results = new Set();

  results.add(0);

  while (start <= s.length - 1) {
    for (let i = start; i < s.length; i += 1) {
      if (currChars.has(s[i])) {
        results.add(currLength);
        currChars = new Set();
        currLength = 0;
        start += 1;
        break;
      } else {
        currLength += 1;
        currChars.add(s[i]);
      }
    }
  }

  return Math.max(...results);
};
