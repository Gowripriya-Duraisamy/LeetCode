/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  let i = 0;
  let vowelsCount = 0;
  for (; i < k; i++) {
    if (vowels.hasOwnProperty(s[i])) {
      vowelsCount++;
    }
  }
  let maxVowelsCount = vowelsCount;
  while (i < s.length) {
    const removeVal = vowels.hasOwnProperty(s[i - k]) ? 1 : 0;
    const addVal = vowels.hasOwnProperty(s[i]) ? 1 : 0;
    vowelsCount += addVal - removeVal;
    maxVowelsCount =
      vowelsCount > maxVowelsCount ? vowelsCount : maxVowelsCount;
    i++;
  }
  return maxVowelsCount;
};