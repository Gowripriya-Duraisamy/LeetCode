/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const value = map.get(s[i]) || 0;
        map.set(s[i], value + 1);
    }
    const resultString = []
    const sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    for (const [key, value] of sortedArr) {
        for (let i = 0; i < value; i++) {
            resultString.push(key);
        }
    }
    return resultString.join('');
};