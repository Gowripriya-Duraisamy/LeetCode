/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    const map = new Map();
    map.set(s[0], 1);
    map.set(s[1], 1)
    for(let i=2; i< s.length; i++) {
        map.set(s[i], 1);
        if(map.size === 3) count++;
        if(s[i-1] !== s[i-2] && s[i] !== s[i-2]) map.delete(s[i - 2]);
    }
    return count;
};