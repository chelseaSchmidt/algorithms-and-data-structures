/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const findClosingChar = (s) => {
  const openToClose = {
    '(':')',
    '{':'}',
    '[':']',
  };
  let skipCount = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[0]) {
      skipCount++;
    } else if (s[i] === openToClose[s[0]]) {
      if (skipCount === 0) {
        return i;
      } else {
        skipCount--;
      }
    }
  }
  return -1;
};

const isValid = (s) => {
  let groupIsValid = true;
  while (s.length > 0 && groupIsValid) {
    const closingIdx = findClosingChar(s);
    if (closingIdx === -1) {
      groupIsValid = false;
    } else if (closingIdx > 1) {
      groupIsValid = isValid(s.slice(1, closingIdx));
      s = s.slice(closingIdx + 1);
    } else if (closingIdx === 1) {
      s = s.slice(2);
    }
  }
  return groupIsValid;
};
