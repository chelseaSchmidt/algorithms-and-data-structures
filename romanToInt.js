const romanToInt = (s) => {
  let result = 0;
  const mapRomanToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  for (let i = 0; i < s.length; i += 1) {
    const currentNumeral = mapRomanToInt[s[i]];
    const nextNumeral = mapRomanToInt[s[i + 1]];
    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i += 1;
    } else {
      result += currentNumeral;
    }
  }
  return result;
};
